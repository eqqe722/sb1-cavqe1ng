```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface FixedAsset extends AuditableEntity {
  assetNumber: string;
  name: LocalizedContent;
  category: AssetCategory;
  location: string;
  acquisition: {
    date: Date;
    cost: number;
    supplier: string;
    documentRef: string;
  };
  depreciation: {
    method: DepreciationMethod;
    life: number; // months
    salvageValue: number;
    startDate: Date;
    accumulated: number;
    currentValue: number;
  };
  insurance: {
    policyNumber?: string;
    provider?: string;
    expiryDate?: Date;
    coverage: number;
  };
  status: AssetStatus;
  disposals?: AssetDisposal;
  revaluations: AssetRevaluation[];
}

export interface AssetDisposal {
  date: Date;
  type: DisposalType;
  amount: number;
  reason: string;
  approvedBy: string;
  documentRef: string;
}

export interface AssetRevaluation {
  date: Date;
  previousValue: number;
  newValue: number;
  reason: string;
  approvedBy: string;
}

export type AssetCategory = 'land' | 'building' | 'equipment' | 'vehicle' | 'furniture';
export type DepreciationMethod = 'straight_line' | 'declining_balance' | 'sum_of_years';
export type AssetStatus = 'active' | 'fully_depreciated' | 'disposed' | 'under_maintenance';
export type DisposalType = 'sale' | 'write_off' | 'donation' | 'transfer';
```