export interface City {
  id: number;
  name: string;
  state: string;
  population: number;
}

export interface Facility {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  website: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  imageUrl: string;
}
