```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface VendorContract extends AuditableEntity {
  contractNumber: string;
  vendorId: string;
  type: ContractType;
  status: ContractStatus;
  period: {
    startDate: Date;
    endDate: Date;
  };
  terms: {
    paymentTerms: string;
    deliveryTerms: string;
    warrantyPeriod?: string;
    penalties?: string[];
  };
  pricing: {
    currency: string;
    value: number;
    priceAdjustment?: {
      formula: string;
      frequency: string;
    };
  };
  sla: ServiceLevelAgreement[];
  approvals: ContractApproval[];
  documents: ContractDocument[];
}

export interface ServiceLevelAgreement {
  metric: string;
  target: number;
  unit: string;
  penalty?: {
    threshold: number;
    amount: number;
  };
}

export interface ContractApproval {
  level: number;
  approver: string;
  status: ApprovalStatus;
  date?: Date;
  comments?: string;
}

export interface ContractDocument {
  type: string;
  title: LocalizedContent;
  version: string;
  url: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export type ContractType = 
  | 'fixed_price' 
  | 'time_materials' 
  | 'framework' 
  | 'service';

export type ContractStatus = 
  | 'draft' 
  | 'active' 
  | 'expired' 
  | 'terminated';

export type ApprovalStatus = 
  | 'pending' 
  | 'approved' 
  | 'rejected';
```