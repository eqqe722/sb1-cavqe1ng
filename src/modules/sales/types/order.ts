```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface SalesOrder extends AuditableEntity {
  orderNumber: string;
  customer: {
    id: string;
    name: LocalizedContent;
    taxNumber?: string;
  };
  date: Date;
  deliveryDate?: Date;
  items: OrderItem[];
  totals: OrderTotals;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentTerms: string;
  deliveryMethod: DeliveryMethod;
  currency: string;
  exchangeRate: number;
  notes?: LocalizedContent;
  attachments: string[];
}

export interface OrderItem {
  productId: string;
  name: LocalizedContent;
  quantity: number;
  unit: string;
  unitPrice: number;
  discount: {
    percentage: number;
    amount: number;
  };
  taxes: TaxDetail[];
  total: number;
}

export interface TaxDetail {
  type: TaxType;
  base: number;
  rate: number;
  amount: number;
}

export interface OrderTotals {
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  shippingTotal: number;
  total: number;
  paid: number;
  balance: number;
}

export type OrderStatus = 
  | 'draft' 
  | 'confirmed' 
  | 'processing' 
  | 'ready' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled';

export type PaymentStatus = 
  | 'pending' 
  | 'partial' 
  | 'paid' 
  | 'overdue';

export type DeliveryMethod = 
  | 'pickup' 
  | 'company_delivery' 
  | 'third_party';

export type TaxType = 
  | 'vat' 
  | 'sales_tax' 
  | 'service_tax' 
  | 'withholding';
```