```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Asset extends AuditableEntity {
  assetNumber: string;
  name: LocalizedContent;
  category: AssetCategory;
  type: AssetType;
  status: AssetStatus;
  location: {
    site: string;
    building: string;
    floor: string;
    room?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  acquisition: {
    date: Date;
    cost: number;
    supplier: string;
    warranty: {
      startDate: Date;
      endDate: Date;
      terms: string;
    };
    documents: AssetDocument[];
  };
  specifications: {
    manufacturer: string;
    model: string;
    serialNumber: string;
    year: number;
    dimensions?: {
      length: number;
      width: number;
      height: number;
      unit: string;
    };
    capacity?: {
      value: number;
      unit: string;
    };
  };
  maintenance: MaintenanceRecord[];
  depreciation: {
    method: DepreciationMethod;
    rate: number;
    salvageValue: number;
    usefulLife: number; // in years
    currentValue: number;
  };
  insurance: {
    provider: string;
    policyNumber: string;
    coverage: number;
    startDate: Date;
    endDate: Date;
  };
  utilization: {
    inUse: boolean;
    assignedTo?: string;
    department?: string;
    usageHours?: number;
    efficiency?: number;
  };
}

export interface MaintenanceRecord {
  id: string;
  type: MaintenanceType;
  date: Date;
  description: LocalizedContent;
  cost: number;
  performedBy: string;
  nextDueDate?: Date;
  parts?: {
    name: string;
    quantity: number;
    cost: number;
  }[];
}

export interface AssetDocument {
  type: DocumentType;
  number: string;
  issueDate: Date;
  expiryDate?: Date;
  issuingAuthority: string;
  fileUrl: string;
}

export type AssetCategory = 
  | 'real_estate' 
  | 'equipment' 
  | 'vehicle' 
  | 'machinery' 
  | 'infrastructure';

export type AssetType = 
  | 'building' 
  | 'land' 
  | 'industrial_equipment' 
  | 'construction_equipment' 
  | 'transportation';

export type AssetStatus = 
  | 'active' 
  | 'maintenance' 
  | 'inactive' 
  | 'disposed';

export type MaintenanceType = 
  | 'preventive' 
  | 'corrective' 
  | 'predictive' 
  | 'condition_based';

export type DepreciationMethod = 
  | 'straight_line' 
  | 'declining_balance' 
  | 'sum_of_years';

export type DocumentType = 
  | 'deed' 
  | 'registration' 
  | 'insurance' 
  | 'warranty' 
  | 'maintenance';
```