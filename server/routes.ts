import type { Express, NextFunction, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as fs from 'fs/promises';
import * as path from 'path';
import csv from 'csv-parser';
import { createReadStream } from 'fs';
import { generateFacilities } from './facilityGenerator';
import { processAndSaveCitiesData, getStateAbbreviation } from './cityGenerator';
import { City, InsertCity } from "@shared/schema";

// State abbreviation mapping
const stateAbbreviations: Record<string, string> = {
  'Alabama': 'AL',
  'Alaska': 'AK',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY',
  'District of Columbia': 'DC'
};

// Helper function to get state abbreviation from full name
function getStateAbbreviationFromName(stateName: string | undefined): string {
  if (!stateName) return '';
  return stateAbbreviations[stateName] || stateName.substring(0, 2).toUpperCase();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize the city data when the server starts
  await initializeData();

  // Get all cities
  app.get('/api/cities', async (req, res) => {
    try {
      const cities = await storage.getAllCities();
      res.json(cities);
    } catch (error) {
      console.error('Error fetching cities:', error);
      res.status(500).json({ message: 'Failed to fetch cities' });
    }
  });

  // Get all states
  app.get('/api/states', async (req, res) => {
    try {
      const states = await storage.getAllStates();
      res.json(states);
    } catch (error) {
      console.error('Error fetching states:', error);
      res.status(500).json({ message: 'Failed to fetch states' });
    }
  });

  // Get cities by state
  app.get('/api/states/:state/cities', async (req, res) => {
    try {
      const state = req.params.state;
      const cities = await storage.getCitiesByState(state);
      res.json(cities);
    } catch (error) {
      console.error('Error fetching cities by state:', error);
      res.status(500).json({ message: 'Failed to fetch cities by state' });
    }
  });

  // Get specific city by name-state
  app.get('/api/cities/:cityNameState', async (req, res) => {
    try {
      const cityNameState = decodeURIComponent(req.params.cityNameState);
      const [cityName, stateName] = cityNameState.split('-');
      
      if (!cityName || !stateName) {
        return res.status(400).json({ message: 'Invalid city name format. Use CityName-State' });
      }
      
      const city = await storage.getCityByNameAndState(cityName, stateName);
      
      if (!city) {
        return res.status(404).json({ message: 'City not found' });
      }
      
      res.json(city);
    } catch (error) {
      console.error('Error fetching city:', error);
      res.status(500).json({ message: 'Failed to fetch city' });
    }
  });

  // Get facilities for a specific city
  app.get('/api/cities/:cityNameState/facilities', async (req, res) => {
    try {
      const cityNameState = decodeURIComponent(req.params.cityNameState);
      const [cityName, stateName] = cityNameState.split('-');
      
      if (!cityName || !stateName) {
        return res.status(400).json({ message: 'Invalid city name format. Use CityName-State' });
      }
      
      const city = await storage.getCityByNameAndState(cityName, stateName);
      
      if (!city) {
        return res.status(404).json({ message: 'City not found' });
      }
      
      const facilities = await storage.getFacilitiesByCity(cityName, stateName);
      res.json(facilities);
    } catch (error) {
      console.error('Error fetching facilities:', error);
      res.status(500).json({ message: 'Failed to fetch facilities' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function initializeData() {
  try {
    // Check if we've already loaded the cities
    const cities = await storage.getAllCities();
    
    // Forcing regeneration for testing
    if (cities.length < 100) {
      console.log('Initializing cities and facilities data...');
      
      // Process the CSV file and generate city data
      const csvPath = path.join(process.cwd(), 'data', 'cities.csv');
      
      try {
        await fs.access(csvPath);
      } catch (error) {
        console.log('Cities CSV not found, generating sample data...');
        await processAndSaveCitiesData();
      }
      
      // Read and process the CSV file
      return new Promise<void>((resolve, reject) => {
        const citiesArray: InsertCity[] = [];
        
        createReadStream(csvPath)
          .pipe(csv())
          .on('data', (data) => {
            // Check if we have all the expected fields
            if (data.city && data.state) {
              // Handle both file formats (with or without state_name and slug)
              const cityData: InsertCity = {
                name: data.city,
                state: data.state || getStateAbbreviationFromName(data.state_name),
                population: parseInt(data.population?.replace(/,/g, '') || '0', 10),
                stateName: data.state_name || null,
                slug: data.slug || `${data.city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${(data.state || '').toLowerCase()}`
              };
              citiesArray.push(cityData);
            }
          })
          .on('end', async () => {
            console.log(`Loaded ${citiesArray.length} cities from CSV`);
            
            try {
              // Store cities in memory
              let completedCities = 0;
              const totalCities = citiesArray.length;
              const batchSize = 50; // Process cities in batches to improve performance
              
              // Process cities in batches
              for (let i = 0; i < totalCities; i += batchSize) {
                const batch = citiesArray.slice(i, i + batchSize);
                
                // Process each city in the batch
                await Promise.all(batch.map(async (city) => {
                  const createdCity = await storage.createCity(city);
                  
                  // Generate facilities for each city
                  const facilities = generateFacilities(city.name, city.state);
                  await Promise.all(facilities.map(facility => storage.createFacility(facility)));
                  
                  return createdCity;
                }));
                
                completedCities += batch.length;
                console.log(`Processed ${completedCities}/${totalCities} cities`);
              }
              
              console.log('Finished loading cities and generating facilities');
              resolve();
            } catch (error) {
              console.error('Error storing cities and facilities:', error);
              reject(error);
            }
          })
          .on('error', (error) => {
            console.error('Error reading CSV:', error);
            reject(error);
          });
      });
    }
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}
