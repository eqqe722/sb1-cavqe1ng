```typescript
import { AuditableEntity } from '../../../../types/database/common';

export interface CreditProfile extends AuditableEntity {
  customerId: string;
  creditLimit: number;
  availableCredit: number;
  paymentTerms: string;
  riskRating: RiskRating;
  status: CreditStatus;
  bankReferences: BankReference[];
  history: CreditHistory[];
}

export interface BankReference {
  bankName: string;
  accountNumber: string;
  relationship: string;
  rating?: string;
  verificationDate?: Date;
}

export interface CreditHistory {
  date: Date;
  type: HistoryType;
  amount: number;
  dueDate: Date;
  paymentDate?: Date;
  daysLate?: number;
}

export interface CreditCheck {
  customerId: string;
  orderAmount: number;
  currentExposure: number;
  checkDate: Date;
  result: CheckResult;
  approver?: string;
}

export type RiskRating = 'low' | 'medium' | 'high' | 'critical';
export type CreditStatus = 'active' | 'suspended' | 'blocked' | 'under_review';
export type HistoryType = 'invoice' | 'payment' | 'adjustment' | 'dispute';
export type CheckResult = 'approved' | 'rejected' | 'manual_review';
```