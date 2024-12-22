```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface CashFlow extends AuditableEntity {
  flowId: string;
  type: CashFlowType;
  date: Date;
  amount: number;
  currency: string;
  category: CashFlowCategory;
  account: {
    bankId: string;
    accountNumber: string;
  };
  reference: string;
  status: TransactionStatus;
}

export interface BankReconciliation extends AuditableEntity {
  bankId: string;
  accountNumber: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  bankStatement: {
    openingBalance: number;
    closingBalance: number;
    transactions: BankTransaction[];
  };
  reconciliationItems: ReconciliationItem[];
  status: ReconciliationStatus;
}

export interface BankTransaction {
  date: Date;
  reference: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

export interface ReconciliationItem {
  type: ReconciliationType;
  amount: number;
  description: string;
  status: 'matched' | 'unmatched';
  systemRef?: string;
}

export type CashFlowType = 'inflow' | 'outflow';
export type CashFlowCategory = 'operating' | 'investing' | 'financing';
export type TransactionStatus = 'pending' | 'cleared' | 'bounced' | 'cancelled';
export type ReconciliationType = 'bank_fees' | 'interest' | 'timing_difference' | 'error';
export type ReconciliationStatus = 'in_progress' | 'completed' | 'approved';
```