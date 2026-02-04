export type BaleType = 'small-square' | 'large-round' | 'large-square';

export type HayCut = '1st' | '2nd';

export interface Product {
  id: BaleType;
  name: string;
  description: string;
  features: string[];
}

export interface HayCutInfo {
  id: HayCut;
  name: string;
  description: string;
  fullDescription: string;
  characteristics: string[];
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  fullAddress: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface GiveawayFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface FormState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  address: Address;
  coordinates: Coordinates;
  facebookUrl: string;
  contactEmail: string;
  deliveryLeadTimeDays: string;
  products: Product[];
  hayCuts: HayCutInfo[];
  disclaimers: {
    pricing: string;
    delivery: string;
  };
  navigation: NavItem[];
}
