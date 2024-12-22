```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface CustomerInvoice extends AuditableEntity {
  invoiceNumber: string;
  customerId: string;
  date: Date;
  dueDate: Date;
  currency: string;
  exchangeRate: number;
  items: InvoiceItem[];
  taxes: TaxDetail[];
  totals: InvoiceTotals;
  terms: string;
  status: InvoiceStatus;
  collectionStatus: CollectionStatus;
  printedNumber?: string; // Arabic sequential number
}

export interface ReceiptVoucher extends AuditableEntity {
  receiptNumber: string;
  customerId: string;
  date: Date;
  amount: number;
  currency: string;
  exchangeRate: number;
  paymentMethod: PaymentMethod;
  bankAccount?: string;
  checkNumber?: string;
  status: PaymentStatus;
  allocations: ReceiptAllocation[];
}

export interface ReceiptAllocation {
  invoiceId: string;
  amount: number;
  writeOffAmount?: number;
  writeOffReason?: string;
}

export interface CollectionSchedule {
  customerId: string;
  invoiceId: string;
  dueDate: Date;
  amount: number;
  status: CollectionStatus;
  followUps: CollectionFollowUp[];
}

export interface CollectionFollowUp {
  date: Date;
  type: FollowUpType;
  agent: string;
  notes: string;
  nextAction?: string;
  nextActionDate?: Date;
}

export type CollectionStatus = 'pending' | 'partial' | 'collected' | 'overdue' | 'written_off';
export type FollowUpType = 'call' | 'email' | 'visit' | 'letter';
```