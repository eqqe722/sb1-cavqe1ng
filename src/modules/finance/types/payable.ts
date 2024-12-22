```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface VendorInvoice extends AuditableEntity {
  invoiceNumber: string;
  vendorId: string;
  date: Date;
  dueDate: Date;
  currency: string;
  exchangeRate: number;
  items: InvoiceItem[];
  taxes: TaxDetail[];
  totals: InvoiceTotals;
  paymentTerms: string;
  status: InvoiceStatus;
  paymentStatus: PaymentStatus;
  attachments: string[];
}

export interface InvoiceItem {
  description: LocalizedContent;
  quantity: number;
  unitPrice: number;
  discount?: number;
  taxRate: number;
  total: number;
  accountId: string;
  dimensions?: Record<string, string>;
}

export interface TaxDetail {
  type: TaxType;
  base: number;
  rate: number;
  amount: number;
}

export interface InvoiceTotals {
  subtotal: number;
  discount: number;
  taxTotal: number;
  total: number;
  paid: number;
  balance: number;
}

export interface PaymentVoucher extends AuditableEntity {
  voucherNumber: string;
  vendorId: string;
  date: Date;
  amount: number;
  currency: string;
  exchangeRate: number;
  paymentMethod: PaymentMethod;
  bankAccount?: string;
  checkNumber?: string;
  status: PaymentStatus;
  invoices: PaymentAllocation[];
}

export interface PaymentAllocation {
  invoiceId: string;
  amount: number;
  discountTaken?: number;
}

export type InvoiceStatus = 'draft' | 'approved' | 'disputed' | 'cancelled';
export type PaymentStatus = 'pending' | 'partial' | 'paid' | 'cancelled';
export type PaymentMethod = 'cash' | 'check' | 'bank_transfer' | 'credit_card';
export type TaxType = 'vat' | 'withholding' | 'sales' | 'service';
```