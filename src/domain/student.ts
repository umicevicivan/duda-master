import { Country } from '../utils/country';

export interface Student {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  country: Country;
}
