```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface JournalEntry extends AuditableEntity {
  entryNumber: string;
  date: Date;
  type: EntryType;
  reference: string;
  description: LocalizedContent;
  postingStatus: PostingStatus;
  lines: JournalLine[];
  attachments: string[];
  approvalFlow: JournalApproval[];
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

export interface JournalApproval {
  level: number;
  approver: string;
  status: ApprovalStatus;
  date?: Date;
  comments?: string;
}

export type EntryType = 'standard' | 'adjustment' | 'closing' | 'opening' | 'reversal';
export type PostingStatus = 'draft' | 'pending_approval' | 'posted' | 'reversed';
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';
```