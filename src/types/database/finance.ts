```typescript
import { AuditableEntity, LocalizedContent } from './common';

// Chart of Accounts
export interface Account extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: AccountType;
  category: AccountCategory;
  subCategory?: string;
  nature: 'debit' | 'credit';
  balance: {
    current: number;
    opening: number;
    lastReconciled?: number;
  };
  currency: string;
  parentId?: string;
  status: 'active' | 'inactive' | 'frozen';
  metadata: AccountMetadata;
}

export interface AccountMetadata {
  isZakatEligible: boolean;
  isCashFlow: boolean;
  isReconcilable: boolean;
  customFields: Record<string, any>;
}

// Journal Entries
export interface JournalEntry extends AuditableEntity {
  entryNumber: string;
  date: Date;
  type: EntryType;
  reference: string;
  description: LocalizedContent;
  currency: string;
  exchangeRate: number;
  amount: number;
  status: 'draft' | 'posted' | 'voided';
  lines: JournalLine[];
  attachments: string[];
}

export interface JournalLine {
  accountId: string;
  debit: number;
  credit: number;
  description?: string;
  dimensions?: Record<string, string>;
}

// Budgets
export interface Budget extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: BudgetType;
  fiscalYear: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  currency: string;
  items: BudgetItem[];
  status: BudgetStatus;
  approvals: BudgetApproval[];
}

export interface BudgetItem {
  accountId: string;
  planned: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
  };
  actual: number;
  variance: number;
  notes?: string;
}

// Common Types
export type AccountType = 
  | 'asset' 
  | 'liability' 
  | 'equity' 
  | 'revenue' 
  | 'expense';

export type AccountCategory = 
  | 'current' 
  | 'non_current' 
  | 'operating' 
  | 'financing' 
  | 'investing';

export type EntryType = 
  | 'standard' 
  | 'adjustment' 
  | 'closing' 
  | 'opening';

export type BudgetType = 
  | 'operating' 
  | 'capital' 
  | 'project' 
  | 'department';

export type BudgetStatus = 
  | 'draft' 
  | 'approved' 
  | 'active' 
  | 'closed';

export interface BudgetApproval {
  level: number;
  approver: string;
  status: 'pending' | 'approved' | 'rejected';
  date?: Date;
  comments?: string;
}
```