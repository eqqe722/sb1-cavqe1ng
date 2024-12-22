```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Event extends AuditableEntity {
  eventNumber: string;
  title: LocalizedContent;
  type: EventType;
  category: EventCategory;
  status: EventStatus;
  schedule: {
    startDate: Date;
    endDate: Date;
    setupTime: Date;
    teardownTime: Date;
  };
  venue: {
    id: string;
    name: LocalizedContent;
    capacity: number;
    layout: string;
  };
  registration: {
    maxAttendees: number;
    currentRegistrations: number;
    waitlistEnabled: boolean;
    registrationDeadline: Date;
  };
  pricing: {
    currency: string;
    categories: PriceCategory[];
    discounts: Discount[];
  };
  vendors: VendorAssignment[];
  religiousDetails?: ReligiousEventDetails;
}

export interface PriceCategory {
  name: LocalizedContent;
  price: number;
  quantity: number;
  benefits: string[];
}

export interface Discount {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  validFrom: Date;
  validTo: Date;
  maxUses?: number;
  usedCount: number;
}

export interface VendorAssignment {
  vendorId: string;
  service: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  requirements: string[];
}

export interface ReligiousEventDetails {
  type: ReligiousEventType;
  requirements: string[];
  scholarId?: string;
  prayerTimes?: string[];
  specialInstructions?: LocalizedContent;
}

export type EventType = 'conference' | 'exhibition' | 'ceremony' | 'religious' | 'cultural';
export type EventCategory = 'public' | 'private' | 'corporate' | 'governmental';
export type EventStatus = 'draft' | 'published' | 'in_progress' | 'completed' | 'cancelled';
export type ReligiousEventType = 'prayer' | 'lecture' | 'celebration' | 'commemoration';
```