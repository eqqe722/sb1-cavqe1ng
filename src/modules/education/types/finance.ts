```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface FeeStructure extends AuditableEntity {
  academicYear: string;
  level: string;
  category: FeeCategory;
  items: FeeItem[];
  discounts: DiscountPolicy[];
  status: 'active' | 'inactive';
}

export interface FeeItem {
  name: LocalizedContent;
  amount: number;
  frequency: PaymentFrequency;
  dueDate?: Date;
  isRequired: boolean;
  description?: LocalizedContent;
}

export interface DiscountPolicy {
  type: DiscountType;
  criteria: {
    field: string;
    operator: 'equals' | 'greater_than' | 'less_than';
    value: string | number;
  };
  amount: number;
  isPercentage: boolean;
  maxDiscount?: number;
}

export interface StudentFee extends AuditableEntity {
  studentId: string;
  academicYear: string;
  semester: string;
  charges: FeeCharge[];
  payments: Payment[];
  balance: number;
  status: PaymentStatus;
}

export interface FeeCharge {
  feeItemId: string;
  amount: number;
  dueDate: Date;
  appliedDiscounts: AppliedDiscount[];
  status: ChargeStatus;
}

export interface Payment {
  transactionId: string;
  date: Date;
  amount: number;
  method: PaymentMethod;
  reference?: string;
  receivedBy: string;
  status: TransactionStatus;
}

export interface AppliedDiscount {
  policyId: string;
  amount: number;
  approvedBy: string;
  approvedAt: Date;
}

export type FeeCategory = 
  | 'tuition' 
  | 'registration' 
  | 'examination' 
  | 'laboratory' 
  | 'transportation';

export type PaymentFrequency = 
  | 'one_time' 
  | 'semester' 
  | 'monthly' 
  | 'yearly';

export type DiscountType = 
  | 'sibling' 
  | 'merit' 
  | 'staff' 
  | 'early_payment' 
  | 'financial_aid';

export type PaymentStatus = 
  | 'current' 
  | 'partial' 
  | 'overdue' 
  | 'paid' 
  | 'waived';

export type ChargeStatus = 
  | 'pending' 
  | 'due' 
  | 'overdue' 
  | 'paid' 
  | 'cancelled';

export type PaymentMethod = 
  | 'cash' 
  | 'bank_transfer' 
  | 'check' 
  | 'online_payment';

export type TransactionStatus = 
  | 'pending' 
  | 'completed' 
  | 'failed' 
  | 'refunded';
```