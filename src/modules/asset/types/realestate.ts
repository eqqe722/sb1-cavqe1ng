```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface RealEstate extends AuditableEntity {
  propertyNumber: string;
  title: LocalizedContent;
  type: PropertyType;
  status: PropertyStatus;
  location: {
    address: string;
    district: string;
    city: string;
    governorate: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  specifications: {
    landArea: number;
    builtArea: number;
    floors: number;
    yearBuilt: number;
    condition: string;
    utilities: string[];
  };
  legal: {
    deedNumber: string;
    registrationOffice: string;
    ownershipType: OwnershipType;
    restrictions?: string[];
    zoning: string;
  };
  valuation: {
    purchaseValue: number;
    currentValue: number;
    lastValuationDate: Date;
    valuationMethod: string;
  };
  occupancy: {
    status: OccupancyStatus;
    tenant?: string;
    startDate?: Date;
    endDate?: Date;
    monthlyRevenue?: number;
  };
  maintenance: {
    schedule: MaintenanceSchedule[];
    history: MaintenanceRecord[];
    budget: number;
  };
}

export interface MaintenanceSchedule {
  type: MaintenanceType;
  frequency: string;
  lastDate?: Date;
  nextDate: Date;
  estimatedCost: number;
  contractor?: string;
}

export interface MaintenanceRecord {
  date: Date;
  type: MaintenanceType;
  description: string;
  cost: number;
  contractor: string;
  warranty?: {
    period: number;
    expiryDate: Date;
  };
}

export type PropertyType = 
  | 'commercial' 
  | 'industrial' 
  | 'residential' 
  | 'land';

export type PropertyStatus = 
  | 'operational' 
  | 'under_maintenance' 
  | 'vacant' 
  | 'under_construction';

export type OwnershipType = 
  | 'owned' 
  | 'leased' 
  | 'shared' 
  | 'government_grant';

export type OccupancyStatus = 
  | 'occupied' 
  | 'vacant' 
  | 'partially_occupied';

export type MaintenanceType = 
  | 'routine' 
  | 'preventive' 
  | 'corrective' 
  | 'renovation';
```