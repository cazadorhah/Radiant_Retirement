import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as fs from 'fs/promises';
import * as path from 'path';
import csv from 'csv-parser';
import { createReadStream } from 'fs';
import { generateFacilities } from './facilityGenerator';
import { processAndSaveCitiesData } from './cityGenerator';

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
    
    if (cities.length === 0) {
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
      const cities = [];
      
      createReadStream(csvPath)
        .pipe(csv())
        .on('data', (data) => {
          cities.push({
            name: data.city,
            state: data.state,
            population: parseInt(data.population.replace(/,/g, ''), 10)
          });
        })
        .on('end', async () => {
          console.log(`Loaded ${cities.length} cities from CSV`);
          
          // Store cities in memory
          for (const city of cities) {
            await storage.createCity(city);
            
            // Generate facilities for each city
            const facilities = generateFacilities(city.name, city.state);
            for (const facility of facilities) {
              await storage.createFacility(facility);
            }
          }
          
          console.log('Finished loading cities and generating facilities');
        });
    }
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}
