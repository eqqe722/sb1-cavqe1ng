```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Bill extends AuditableEntity {
  billNumber: string;
  patientId: string;
  visitId: string;
  date: Date;
  items: BillItem[];
  insurance: {
    provider: string;
    policyNumber: string;
    coverage: number;
    approvalNumber?: string;
  };
  totals: {
    subtotal: number;
    discount: number;
    tax: number;
    insuranceCover: number;
    patientShare: number;
    total: number;
  };
  payments: Payment[];
  status: BillStatus;
}

export interface BillItem {
  type: ServiceType;
  code: string;
  description: LocalizedContent;
  quantity: number;
  unitPrice: number;
  discount: number;
  total: number;
  insuranceCovered: boolean;
  department: string;
}

export interface Payment {
  id: string;
  amount: number;
  method: PaymentMethod;
  reference: string;
  date: Date;
  receivedBy: string;
  status: PaymentStatus;
}

export interface InsuranceClaim extends AuditableEntity {
  claimNumber: string;
  billId: string;
  provider: string;
  submissionDate: Date;
  amount: number;
  status: ClaimStatus;
  approvalNumber?: string;
  rejectionReason?: string;
  settlementDate?: Date;
  settlementAmount?: number;
}

export type ServiceType = 
  | 'consultation' 
  | 'procedure' 
  | 'medication' 
  | 'laboratory' 
  | 'radiology';

export type BillStatus = 
  | 'draft' 
  | 'pending' 
  | 'partial' 
  | 'paid' 
  | 'cancelled';

export type PaymentMethod = 
  | 'cash' 
  | 'card' 
  | 'insurance' 
  | 'bank_transfer';

export type PaymentStatus = 
  | 'pending' 
  | 'completed' 
  | 'failed' 
  | 'refunded';

export type ClaimStatus = 
  | 'pending' 
  | 'submitted' 
  | 'approved' 
  | 'rejected' 
  | 'settled';
```