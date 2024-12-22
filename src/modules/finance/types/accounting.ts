```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

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
  };
  currency: string;
  status: AccountStatus;
  parentId?: string;
  metadata: AccountMetadata;
}

export interface AccountMetadata {
  isZakatEligible: boolean;
  isCashFlow: boolean;
  isReconcilable: boolean;
  customFields: Record<string, unknown>;
}

export interface JournalEntry extends AuditableEntity {
  entryNumber: string;
  date: Date;
  type: EntryType;
  reference: string;
  description: LocalizedContent;
  postingStatus: PostingStatus;
  lines: JournalLine[];
  attachments: string[];
  approvedBy?: string;
  approvalDate?: Date;
}

export interface JournalLine {
  accountId: string;
  debit: number;
  credit: number;
  currency: string;
  exchangeRate: number;
  description?: string;
  dimensions?: Record<string, string>;
}

export type AccountType = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
export type AccountCategory = 'current' | 'non_current' | 'operating' | 'financing' | 'investing';
export type AccountStatus = 'active' | 'inactive' | 'frozen';
export type EntryType = 'standard' | 'adjustment' | 'closing' | 'opening' | 'reversal';
export type PostingStatus = 'draft' | 'posted' | 'reversed';
```