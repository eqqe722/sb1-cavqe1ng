```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Store extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: StoreType;
  location: {
    address: string;
    district: string;
    city: string;
    governorate: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  contact: {
    phone: string;
    email: string;
    manager: string;
  };
  operatingHours: {
    regular: WorkingHours[];
    ramadan?: WorkingHours[];
  };
  facilities: StoreFacility[];
  terminals: POSTerminal[];
  status: StoreStatus;
}

export interface WorkingHours {
  day: number; // 0-6 (Sunday-Saturday)
  open: string; // HH:mm
  close: string;
  isOpen: boolean;
}

export interface StoreFacility {
  type: FacilityType;
  count: number;
  status: 'active' | 'maintenance' | 'inactive';
}

export interface POSTerminal {
  id: string;
  code: string;
  type: TerminalType;
  features: TerminalFeature[];
  status: TerminalStatus;
  lastMaintenance?: Date;
}

export type StoreType = 'supermarket' | 'hypermarket' | 'convenience' | 'department';
export type StoreStatus = 'active' | 'inactive' | 'maintenance' | 'closed';
export type FacilityType = 'checkout' | 'parking' | 'storage' | 'delivery';
export type TerminalType = 'fixed' | 'mobile' | 'self_service';
export type TerminalFeature = 'cash' | 'card' | 'loyalty' | 'scale' | 'printer';
export type TerminalStatus = 'active' | 'offline' | 'maintenance';
```