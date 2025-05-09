import { users, type User, type InsertUser, type City, type Facility, type InsertCity } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // City methods
  getAllCities(): Promise<City[]>;
  getCityByNameAndState(name: string, state: string): Promise<City | undefined>;
  createCity(city: InsertCity): Promise<City>;
  getCitiesByState(state: string): Promise<City[]>;
  getAllStates(): Promise<string[]>;
  
  // Facility methods
  getFacilitiesByCity(cityName: string, stateName: string): Promise<Facility[]>;
  createFacility(facility: Facility): Promise<Facility>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private cities: Map<number, City>;
  private facilities: Map<string, Facility>;
  currentId: number;
  cityId: number;

  constructor() {
    this.users = new Map();
    this.cities = new Map();
    this.facilities = new Map();
    this.currentId = 1;
    this.cityId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // City methods
  async getAllCities(): Promise<City[]> {
    return Array.from(this.cities.values());
  }
  
  async getCityByNameAndState(name: string, state: string): Promise<City | undefined> {
    return Array.from(this.cities.values()).find(
      (city) => city.name === name && city.state === state
    );
  }
  
  async createCity(cityData: InsertCity): Promise<City> {
    const id = this.cityId++;
    const city: City = { ...cityData, id };
    this.cities.set(id, city);
    return city;
  }
  
  async getCitiesByState(state: string): Promise<City[]> {
    return Array.from(this.cities.values()).filter(
      (city) => city.state === state
    );
  }
  
  async getAllStates(): Promise<string[]> {
    const states = new Set<string>();
    Array.from(this.cities.values()).forEach(city => {
      states.add(city.state);
    });
    return Array.from(states).sort();
  }
  
  // Facility methods
  async getFacilitiesByCity(cityName: string, stateName: string): Promise<Facility[]> {
    return Array.from(this.facilities.values()).filter(
      (facility) => facility.city === cityName && facility.state === stateName
    );
  }
  
  async createFacility(facility: Facility): Promise<Facility> {
    this.facilities.set(facility.id, facility);
    return facility;
  }
}

export const storage = new MemStorage();
