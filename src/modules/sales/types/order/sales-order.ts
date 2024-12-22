```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface SalesOrder extends AuditableEntity {
  orderNumber: string;
  customer: {
    id: string;
    name: LocalizedContent;
    taxNumber?: string;
  };
  type: OrderType;
  date: Date;
  deliveryDate?: Date;
  items: OrderItem[];
  pricing: OrderPricing;
  payment: PaymentTerms;
  delivery: DeliveryDetails;
  status: OrderStatus;
  approvals: OrderApproval[];
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
    reason?: string;
  };
  taxes: TaxDetail[];
  total: number;
}

export interface OrderPricing {
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  shippingTotal: number;
  total: number;
  currency: string;
  exchangeRate: number;
}

export interface PaymentTerms {
  type: PaymentType;
  dueDate?: Date;
  creditDays: number;
  creditLimit: number;
  bankDetails?: string;
}

export type OrderType = 'retail' | 'wholesale' | 'export' | 'government';
export type OrderStatus = 'draft' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentType = 'cash' | 'credit' | 'installment' | 'letter_of_credit';
```