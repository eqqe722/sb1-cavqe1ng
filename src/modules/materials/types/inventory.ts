```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Material extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  description: LocalizedContent;
  category: string;
  type: MaterialType;
  unit: string;
  specifications: MaterialSpecification[];
  minimumStock: number;
  maximumStock: number;
  reorderPoint: number;
  leadTime: number;
  status: MaterialStatus;
  certificates: MaterialCertificate[];
}

export interface MaterialSpecification {
  attribute: string;
  value: string;
  unit?: string;
  isMandatory: boolean;
}

export interface MaterialCertificate {
  type: CertificateType;
  number: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  status: 'valid' | 'expired' | 'pending';
}

export interface StockTransaction extends AuditableEntity {
  transactionNumber: string;
  type: TransactionType;
  materialId: string;
  quantity: number;
  unit: string;
  location: StorageLocation;
  reference: {
    type: ReferenceType;
    id: string;
  };
  batch?: BatchInfo;
}

export interface StorageLocation {
  warehouse: string;
  zone: string;
  bin: string;
  status: LocationStatus;
  capacity: {
    used: number;
    available: number;
    unit: string;
  };
}

export interface BatchInfo {
  number: string;
  productionDate?: Date;
  expiryDate?: Date;
  supplier?: string;
  certificates?: string[];
  inspectionStatus: 'pending' | 'passed' | 'failed';
}

export type MaterialType = 'raw' | 'packaging' | 'finished' | 'spare_parts';
export type MaterialStatus = 'active' | 'inactive' | 'discontinued';
export type CertificateType = 'quality' | 'origin' | 'compliance' | 'safety';
export type TransactionType = 'receipt' | 'issue' | 'transfer' | 'adjustment';
export type ReferenceType = 'purchase' | 'production' | 'sales' | 'return';
export type LocationStatus = 'active' | 'full' | 'maintenance' | 'blocked';
```