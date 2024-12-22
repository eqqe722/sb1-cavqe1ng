```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface Account extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: AccountType;
  category: AccountCategory;
  subCategory?: string;
  nature: AccountNature;
  balance: AccountBalance;
  currency: string;
  status: AccountStatus;
  parentId?: string;
  metadata: AccountMetadata;
}

export interface AccountBalance {
  current: number;
  opening: number;
  lastReconciled?: number;
  lastReconciledDate?: Date;
}

export interface AccountMetadata {
  isZakatEligible: boolean;
  isCashFlow: boolean;
  isReconcilable: boolean;
  isIslamic: boolean;
  customFields: Record<string, unknown>;
}

export type AccountType = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
export type AccountCategory = 'current' | 'non_current' | 'operating' | 'financing' | 'investing';
export type AccountNature = 'debit' | 'credit';
export type AccountStatus = 'active' | 'inactive' | 'frozen';
```