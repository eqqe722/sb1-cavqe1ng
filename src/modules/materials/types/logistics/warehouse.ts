```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface Warehouse extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: WarehouseType;
  location: {
    governorate: string;
    city: string;
    address: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  capacity: {
    total: number;
    used: number;
    available: number;
    unit: string;
  };
  security: SecurityDetails;
  facilities: Facility[];
  zones: StorageZone[];
  status: WarehouseStatus;
}

export interface SecurityDetails {
  level: SecurityLevel;
  features: string[];
  guardSchedule: string;
  emergencyContact: string;
  accessControl: boolean;
  cctv: boolean;
}

export interface StorageZone {
  code: string;
  type: ZoneType;
  capacity: number;
  currentOccupancy: number;
  temperature?: {
    min: number;
    max: number;
    current: number;
  };
  humidity?: {
    min: number;
    max: number;
    current: number;
  };
}

export type WarehouseType = 'regional_dc' | 'local_dc' | 'cross_dock' | 'cold_storage';
export type SecurityLevel = 'basic' | 'medium' | 'high' | 'restricted';
export type ZoneType = 'bulk' | 'picking' | 'refrigerated' | 'hazardous' | 'valuable';
export type WarehouseStatus = 'active' | 'maintenance' | 'inactive' | 'closed';
```