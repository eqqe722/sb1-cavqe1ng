```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface DeliveryNote extends AuditableEntity {
  deliveryNumber: string;
  orderNumber: string;
  customer: {
    id: string;
    name: LocalizedContent;
    address: DeliveryAddress;
  };
  items: DeliveryItem[];
  scheduledDate: Date;
  actualDate?: Date;
  status: DeliveryStatus;
  carrier: {
    id: string;
    name: string;
    vehicle?: string;
    driver?: string;
  };
  route?: DeliveryRoute;
  documents: DeliveryDocument[];
}

export interface DeliveryAddress {
  street: string;
  district: string;
  city: string;
  governorate: string;
  landmark?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface DeliveryItem {
  productId: string;
  name: LocalizedContent;
  quantity: number;
  unit: string;
  packageType: PackageType;
  packageCount: number;
  weight: number;
  volume: number;
}

export interface DeliveryRoute {
  startPoint: string;
  endPoint: string;
  stops: RouteStop[];
  distance: number;
  estimatedDuration: number;
  restrictions?: string[];
}

export interface RouteStop {
  sequence: number;
  location: string;
  scheduledTime: Date;
  actualTime?: Date;
  status: StopStatus;
}

export interface DeliveryDocument {
  type: DocumentType;
  number: string;
  date: Date;
  url: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type DeliveryStatus = 
  | 'scheduled' 
  | 'in_transit' 
  | 'delivered' 
  | 'failed' 
  | 'cancelled';

export type PackageType = 
  | 'box' 
  | 'pallet' 
  | 'container' 
  | 'bulk';

export type StopStatus = 
  | 'pending' 
  | 'arrived' 
  | 'completed' 
  | 'skipped';

export type DocumentType = 
  | 'delivery_note' 
  | 'waybill' 
  | 'customs_declaration' 
  | 'inspection_report';
```