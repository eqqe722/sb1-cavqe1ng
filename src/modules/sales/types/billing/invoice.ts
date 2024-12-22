```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface Invoice extends AuditableEntity {
  invoiceNumber: string;
  orderNumber: string;
  customer: {
    id: string;
    name: LocalizedContent;
    taxNumber?: string;
  };
  issuedDate: Date;
  dueDate: Date;
  items: InvoiceItem[];
  totals: InvoiceTotals;
  taxes: TaxDetail[];
  payment: PaymentInfo;
  status: InvoiceStatus;
  printedNumber?: string; // Arabic sequential number
}

export interface InvoiceItem {
  productId: string;
  name: LocalizedContent;
  quantity: number;
  unit: string;
  unitPrice: number;
  discount: number;
  taxable: boolean;
  total: number;
}

export interface InvoiceTotals {
  subtotal: number;
  discountTotal: number;
  taxableAmount: number;
  taxTotal: number;
  total: number;
  currency: string;
  exchangeRate: number;
}

export interface TaxDetail {
  type: TaxType;
  base: number;
  rate: number;
  amount: number;
  isExempt: boolean;
  exemptionReason?: string;
}

export type InvoiceStatus = 'draft' | 'issued' | 'paid' | 'overdue' | 'cancelled';
export type TaxType = 'vat' | 'sales_tax' | 'service_tax' | 'withholding';
```