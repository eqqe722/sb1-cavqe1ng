```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Venue extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: VenueType;
  capacity: {
    standing: number;
    seated: number;
    prayer: number; // For religious venues
  };
  location: {
    address: string;
    city: string;
    governorate: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  facilities: Facility[];
  layouts: Layout[];
  availability: TimeSlot[];
  pricing: VenuePricing;
  religiousDetails?: ReligiousVenueDetails;
}

export interface Facility {
  type: FacilityType;
  quantity: number;
  status: 'available' | 'maintenance' | 'unavailable';
}

export interface Layout {
  name: LocalizedContent;
  capacity: number;
  setupTime: number;
  teardownTime: number;
  image?: string;
}

export interface TimeSlot {
  date: Date;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  eventId?: string;
}

export interface VenuePricing {
  basePrice: number;
  currency: string;
  minimumHours: number;
  additionalHourRate: number;
  deposits: {
    booking: number;
    security: number;
  };
}

export interface ReligiousVenueDetails {
  type: ReligiousVenueType;
  prayerHalls: number;
  ablutionFacilities: number;
  genderSeparation: boolean;
  qiblaDirection?: number;
}

export type VenueType = 'hall' | 'mosque' | 'stadium' | 'conference_center' | 'open_area';
export type FacilityType = 'parking' | 'audio' | 'video' | 'catering' | 'security' | 'cleaning';
export type ReligiousVenueType = 'mosque' | 'hussainiya' | 'shrine' | 'religious_center';
```