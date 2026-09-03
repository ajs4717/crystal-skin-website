export type ServiceCategory = 'all' | 'skin' | 'hair' | 'aesthetic' | 'dermatology';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'skin' | 'hair' | 'aesthetic' | 'dermatology';
  shortDesc: string;
  detailedDesc: string;
  idealFor: string[];
  duration: string;
  iconName: string;
  image: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  treatment?: string;
  verified: boolean;
  avatarText: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  concern: string;
  treatmentName: string;
  sessions: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImage: string;
  afterImage: string;
  note?: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  address: string;
  fullAddress: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
  };
  landmark: string;
  googleRating: number;
  reviewCount: number;
  phone: string;
  whatsappNumber: string;
  openingHours: {
    days: string;
    hours: string;
    statusText: string;
  };
}
