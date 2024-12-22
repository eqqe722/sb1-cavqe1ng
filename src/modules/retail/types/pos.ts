```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface POSTransaction extends AuditableEntity {
  transactionNumber: string;
  storeId: string;
  terminalId: string;
  cashierId: string;
  items: POSItem[];
  payments: PaymentDetail[];
  totals: TransactionTotals;
  customer?: {
    id: string;
    name: string;
    loyaltyCard?: string;
  };
  status: TransactionStatus;
  isVoided: boolean;
  voidReason?: string;
}

export interface POSItem {
  productId: string;
  barcode: string;
  name: LocalizedContent;
  quantity: number;
  unit: string;
  unitPrice: number;
  discount: {
    type: DiscountType;
    value: number;
    reason?: string;
  };
  taxes: TaxDetail[];
  total: number;
  isRefunded: boolean;
  refundReason?: string;
}

export interface PaymentDetail {
  method: PaymentMethod;
  amount: number;
  currency: string;
  reference?: string;
  cardType?: string;
  authCode?: string;
}

export interface TransactionTotals {
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  total: number;
  totalPaid: number;
  change: number;
  pointsEarned?: number;
  pointsRedeemed?: number;
}

export interface TaxDetail {
  type: TaxType;
  rate: number;
  amount: number;
  isExempt: boolean;
}

export type TransactionStatus = 'pending' | 'completed' | 'voided' | 'refunded';
export type PaymentMethod = 'cash' | 'card' | 'points' | 'wallet';
export type DiscountType = 'percentage' | 'amount' | 'points';
export type TaxType = 'vat' | 'sales_tax' | 'service';
```