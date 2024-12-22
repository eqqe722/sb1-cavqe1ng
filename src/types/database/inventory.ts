```typescript
import { AuditableEntity, LocalizedContent } from './common';

// Product Management
export interface Product extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  description: LocalizedContent;
  category: string;
  type: ProductType;
  unit: string;
  barcode?: string;
  specifications: ProductSpecification[];
  pricing: {
    cost: number;
    selling: number;
    currency: string;
  };
  inventory: {
    minLevel: number;
    maxLevel: number;
    reorderPoint: number;
    leadTime: number;
  };
  status: 'active' | 'inactive';
}

// Warehouse Management
export interface Warehouse extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: WarehouseType;
  location: {
    address: string;
    city: string;
    governorate: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  capacity: {
    total: number;
    used: number;
    unit: string;
  };
  zones: StorageZone[];
  status: 'active' | 'inactive';
}

export interface StorageZone {
  code: string;
  name: string;
  type: ZoneType;
  capacity: number;
  occupied: number;
  location: string;
}

// Stock Management
export interface StockTransaction extends AuditableEntity {
  transactionNumber: string;
  type: TransactionType;
  date: Date;
  items: TransactionItem[];
  reference: {
    type: string;
    id: string;
  };
  status: 'pending' | 'completed' | 'cancelled';
}

export interface TransactionItem {
  productId: string;
  quantity: number;
  unit: string;
  batch?: string;
  serialNumber?: string;
  location: string;
  cost: number;
}

// Common Types
export type ProductType = 
  | 'raw_material' 
  | 'finished_good' 
  | 'consumable' 
  | 'asset';

export type WarehouseType = 
  | 'main' 
  | 'distribution' 
  | 'transit' 
  | 'returns';

export type ZoneType = 
  | 'bulk' 
  | 'picking' 
  | 'receiving' 
  | 'shipping';

export type TransactionType = 
  | 'receipt' 
  | 'issue' 
  | 'transfer' 
  | 'adjustment';
```