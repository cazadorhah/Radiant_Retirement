import * as fs from 'fs/promises';
import * as path from 'path';

const sampleCities = [
  { city: 'New York', state: 'NY', population: '8,804,190' },
  { city: 'Los Angeles', state: 'CA', population: '3,898,747' },
  { city: 'Chicago', state: 'IL', population: '2,746,388' },
  { city: 'Houston', state: 'TX', population: '2,304,580' },
  { city: 'Phoenix', state: 'AZ', population: '1,608,139' },
  { city: 'Philadelphia', state: 'PA', population: '1,603,797' },
  { city: 'San Antonio', state: 'TX', population: '1,434,625' },
  { city: 'San Diego', state: 'CA', population: '1,386,932' },
  { city: 'Dallas', state: 'TX', population: '1,304,379' },
  { city: 'San Jose', state: 'CA', population: '1,013,240' },
  { city: 'Austin', state: 'TX', population: '961,855' },
  { city: 'Jacksonville', state: 'FL', population: '949,611' },
  { city: 'Fort Worth', state: 'TX', population: '918,915' },
  { city: 'Columbus', state: 'OH', population: '905,748' },
  { city: 'San Francisco', state: 'CA', population: '873,965' },
  { city: 'Charlotte', state: 'NC', population: '874,579' },
  { city: 'Indianapolis', state: 'IN', population: '887,642' },
  { city: 'Seattle', state: 'WA', population: '737,015' },
  { city: 'Denver', state: 'CO', population: '715,522' },
  { city: 'Washington', state: 'DC', population: '689,545' }
];

// Generate more cities to reach 1000
const generateMoreCities = () => {
  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];
  
  const cityPrefixes = [
    'North', 'South', 'East', 'West', 'New', 'Old', 'Fort', 'Port', 'Lake', 'Mount',
    'Saint', 'Upper', 'Lower', 'Central', 'Royal', 'Grand', 'Fair', 'Pine', 'Oak', 'Cedar',
    'Green', 'Blue', 'Red', 'Silver', 'Golden', 'Pleasant', 'Spring', 'Summer', 'Winter', 'Fall'
  ];
  
  const citySuffixes = [
    'ville', 'ton', 'burg', 'berg', 'field', 'ford', 'port', 'land', 'town', 'wood',
    'ridge', 'view', 'grove', 'haven', 'dale', 'side', 'shire', 'creek', 'springs', 'valley',
    'heights', 'hills', 'city', 'park', 'harbor', 'bay', 'beach', 'falls', 'crossing', 'corner'
  ];
  
  const cityNames = [
    'Adams', 'Allen', 'Anderson', 'Bailey', 'Baker', 'Barnes', 'Bell', 'Bennett', 'Brooks', 'Brown',
    'Butler', 'Campbell', 'Carter', 'Clark', 'Collins', 'Cook', 'Cooper', 'Cox', 'Davis', 'Edwards',
    'Evans', 'Foster', 'Garcia', 'Gray', 'Green', 'Hall', 'Harris', 'Hill', 'Jackson', 'Johnson',
    'Jones', 'King', 'Lee', 'Lewis', 'Long', 'Martin', 'Miller', 'Mitchell', 'Moore', 'Morgan',
    'Morris', 'Murphy', 'Nelson', 'Parker', 'Peterson', 'Phillips', 'Powell', 'Reed', 'Roberts', 'Robinson',
    'Rogers', 'Ross', 'Russell', 'Sanchez', 'Sanders', 'Scott', 'Smith', 'Stewart', 'Taylor', 'Thomas',
    'Thompson', 'Turner', 'Walker', 'Ward', 'Washington', 'Watson', 'White', 'Williams', 'Wilson', 'Wood',
    'Wright', 'Young', 'Clayton', 'Franklin', 'Harrison', 'Hudson', 'Jefferson', 'Lincoln', 'Madison', 'Monroe',
    'Riverside', 'Springfield', 'Georgetown', 'Jamestown', 'Kingston', 'Lexington', 'Manchester', 'Newport', 'Oakland', 'Princeton'
  ];

  const additionalCities = [];
  const existingCityNames = new Set(sampleCities.map(city => `${city.city}-${city.state}`));

  // Generate additional cities to reach 1000
  while (additionalCities.length + sampleCities.length < 1000) {
    let cityName;
    let state = states[Math.floor(Math.random() * states.length)];
    
    // 40% chance of using a prefix + name + suffix combination
    if (Math.random() < 0.4) {
      const prefix = cityPrefixes[Math.floor(Math.random() * cityPrefixes.length)];
      const name = cityNames[Math.floor(Math.random() * cityNames.length)];
      cityName = `${prefix} ${name}`;
    } 
    // 30% chance of using a name + suffix
    else if (Math.random() < 0.7) {
      const name = cityNames[Math.floor(Math.random() * cityNames.length)];
      const suffix = citySuffixes[Math.floor(Math.random() * citySuffixes.length)];
      cityName = `${name}${suffix}`;
    } 
    // 30% chance of using just a name
    else {
      cityName = cityNames[Math.floor(Math.random() * cityNames.length)];
    }
    
    const cityKey = `${cityName}-${state}`;
    
    // Ensure we don't have duplicates
    if (!existingCityNames.has(cityKey)) {
      existingCityNames.add(cityKey);
      
      // Generate a population between 15,000 and 500,000
      const population = Math.floor(15000 + Math.random() * 485000).toLocaleString();
      
      additionalCities.push({
        city: cityName,
        state,
        population
      });
    }
  }

  return [...sampleCities, ...additionalCities];
};

export async function processAndSaveCitiesData() {
  try {
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch (error) {
      await fs.mkdir(dataDir, { recursive: true });
    }
    
    // Generate 1000 cities
    const allCities = generateMoreCities();
    
    // Create CSV content
    let csvContent = 'city,state,population\n';
    allCities.forEach(city => {
      csvContent += `${city.city},${city.state},${city.population}\n`;
    });
    
    // Save to CSV file
    const csvPath = path.join(dataDir, 'cities.csv');
    await fs.writeFile(csvPath, csvContent);
    
    console.log(`Generated ${allCities.length} cities and saved to ${csvPath}`);
    return csvPath;
  } catch (error) {
    console.error('Error generating cities data:', error);
    throw error;
  }
}
