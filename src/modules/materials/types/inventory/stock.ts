```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface StockItem extends AuditableEntity {
  materialId: string;
  name: LocalizedContent;
  category: MaterialCategory;
  type: MaterialType;
  unit: string;
  specifications: MaterialSpecification[];
  minimumStock: number;
  maximumStock: number;
  reorderPoint: number;
  leadTime: number;
  status: MaterialStatus;
  locations: StorageLocation[];
  batches: BatchInfo[];
}

export interface StorageLocation {
  warehouseId: string;
  zone: string;
  bin: string;
  quantity: number;
  reservedQuantity: number;
  status: LocationStatus;
}

export interface BatchInfo {
  batchNumber: string;
  quantity: number;
  manufacturingDate?: Date;
  expiryDate?: Date;
  supplier?: string;
  cost: number;
  certificates: string[];
  inspectionStatus: 'pending' | 'passed' | 'failed';
}

export interface MaterialSpecification {
  attribute: string;
  value: string;
  unit?: string;
  isMandatory: boolean;
}

export type MaterialCategory = 'raw' | 'packaging' | 'finished' | 'spare';
export type MaterialType = 'standard' | 'consumable' | 'agricultural' | 'construction';
export type MaterialStatus = 'active' | 'inactive' | 'discontinued';
export type LocationStatus = 'active' | 'full' | 'maintenance' | 'blocked';
```