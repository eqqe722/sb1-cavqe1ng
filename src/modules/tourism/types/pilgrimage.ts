```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface PilgrimagePackage extends AuditableEntity {
  packageNumber: string;
  title: LocalizedContent;
  type: PackageType;
  destination: HolyCity[];
  duration: number; // days
  capacity: {
    minimum: number;
    maximum: number;
    available: number;
  };
  schedule: {
    startDate: Date;
    endDate: Date;
    isLunarCalendar: boolean;
  };
  services: {
    accommodation: AccommodationService;
    transportation: TransportService;
    meals: MealService;
    guidance: GuidanceService;
  };
  pricing: {
    basePrice: number;
    currency: string;
    supplements: PriceSupplement[];
    discounts: PriceDiscount[];
  };
  requirements: TravelRequirement[];
  status: PackageStatus;
}

export interface AccommodationService {
  hotels: HotelBooking[];
  roomTypes: string[];
  checkInTime: string;
  checkOutTime: string;
  amenities: string[];
}

export interface TransportService {
  type: TransportType[];
  routes: TravelRoute[];
  inclusions: string[];
  restrictions?: string[];
}

export interface MealService {
  meals: MealType[];
  dietary: string[];
  restaurants: string[];
}

export interface GuidanceService {
  religiousGuide: boolean;
  languages: string[];
  services: string[];
}

export interface TravelRoute {
  from: string;
  to: string;
  mode: TransportType;
  duration: number;
  distance: number;
}

export interface HotelBooking {
  hotelId: string;
  name: LocalizedContent;
  category: string;
  distanceToShrine: number;
  nights: number;
}

export interface TravelRequirement {
  type: RequirementType;
  description: LocalizedContent;
  mandatory: boolean;
  deadline?: number; // days before departure
}

export type PackageType = 
  | 'ziyarat' // Religious visits
  | 'hajj' 
  | 'umrah' 
  | 'combined';

export type HolyCity = 
  | 'najaf' 
  | 'karbala' 
  | 'kadhimiya' 
  | 'samarra';

export type TransportType = 
  | 'air' 
  | 'bus' 
  | 'train' 
  | 'local';

export type MealType = 
  | 'breakfast' 
  | 'lunch' 
  | 'dinner' 
  | 'special';

export type RequirementType = 
  | 'visa' 
  | 'passport' 
  | 'vaccination' 
  | 'permit';

export type PackageStatus = 
  | 'draft' 
  | 'published' 
  | 'booking' 
  | 'full' 
  | 'completed';
```