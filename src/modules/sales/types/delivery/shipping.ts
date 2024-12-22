```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface DeliveryDetails extends AuditableEntity {
  deliveryNumber: string;
  orderNumber: string;
  type: DeliveryType;
  address: {
    street: string;
    district: string;
    city: string;
    governorate: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  schedule: {
    requestedDate: Date;
    confirmedDate?: Date;
    actualDate?: Date;
  };
  carrier: {
    id: string;
    name: string;
    vehicle?: string;
    driver?: string;
    phone?: string;
  };
  route: DeliveryRoute;
  status: DeliveryStatus;
  documents: DeliveryDocument[];
}

export interface DeliveryRoute {
  startPoint: string;
  endPoint: string;
  distance: number;
  estimatedDuration: number;
  checkpoints: RouteCheckpoint[];
  restrictions: string[];
  alternateRoutes?: string[];
}

export interface RouteCheckpoint {
  location: string;
  type: CheckpointType;
  estimatedArrival: Date;
  actualArrival?: Date;
  status: 'pending' | 'cleared' | 'delayed';
  notes?: string;
}

export type DeliveryType = 'local' | 'regional' | 'international';
export type DeliveryStatus = 'scheduled' | 'in_transit' | 'delivered' | 'failed' | 'cancelled';
export type CheckpointType = 'security' | 'customs' | 'inspection' | 'delivery';
```