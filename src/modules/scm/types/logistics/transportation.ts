```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface TransportPlan extends AuditableEntity {
  planNumber: string;
  type: TransportType;
  route: {
    origin: Location;
    destination: Location;
    distance: number;
    estimatedDuration: number;
    alternateRoutes: string[];
  };
  schedule: {
    departureDate: Date;
    arrivalDate: Date;
    checkpoints: Checkpoint[];
  };
  security: SecurityRequirement;
  documentation: RequiredDocument[];
  status: TransportStatus;
}

export interface Location {
  name: LocalizedContent;
  type: LocationType;
  governorate: string;
  city: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  accessRestrictions?: string[];
}

export interface Checkpoint {
  location: string;
  type: CheckpointType;
  estimatedArrival: Date;
  actualArrival?: Date;
  status: 'pending' | 'cleared' | 'delayed';
  notes?: string;
}

export interface SecurityRequirement {
  level: SecurityLevel;
  escort: boolean;
  tracking: boolean;
  insurance: {
    type: string;
    coverage: number;
    provider: string;
  };
}

export interface RequiredDocument {
  type: DocumentType;
  number: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  status: 'valid' | 'expired' | 'pending';
}

export type TransportType = 
  | 'local_delivery' 
  | 'regional_distribution' 
  | 'import' 
  | 'export';

export type LocationType = 
  | 'warehouse' 
  | 'distribution_center' 
  | 'customer' 
  | 'port' 
  | 'checkpoint';

export type CheckpointType = 
  | 'security' 
  | 'customs' 
  | 'inspection' 
  | 'rest';

export type SecurityLevel = 
  | 'standard' 
  | 'high_value' 
  | 'sensitive' 
  | 'restricted';

export type DocumentType = 
  | 'waybill' 
  | 'customs_declaration' 
  | 'inspection_certificate' 
  | 'security_clearance';

export type TransportStatus = 
  | 'planned' 
  | 'in_transit' 
  | 'completed' 
  | 'delayed' 
  | 'cancelled';
```