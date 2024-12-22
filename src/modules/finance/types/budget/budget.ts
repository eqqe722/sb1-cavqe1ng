```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface Budget extends AuditableEntity {
  budgetNumber: string;
  name: LocalizedContent;
  fiscalYear: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  type: BudgetType;
  status: BudgetStatus;
  items: BudgetItem[];
  approvals: BudgetApproval[];
  revisions: BudgetRevision[];
}

export interface BudgetItem {
  accountId: string;
  planned: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    total: number;
  };
  actual: number;
  variance: number;
  notes?: string;
}

export interface BudgetRevision {
  version: number;
  date: Date;
  changes: BudgetChange[];
  reason: string;
  approvedBy?: string;
}

export interface BudgetChange {
  accountId: string;
  previousAmount: number;
  newAmount: number;
  reason: string;
}

export type BudgetType = 'operating' | 'capital' | 'project' | 'cash_flow';
export type BudgetStatus = 'draft' | 'approved' | 'active' | 'closed' | 'revised';
```