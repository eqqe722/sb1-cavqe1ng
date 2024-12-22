```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Order extends AuditableEntity {
  orderNumber: string;
  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  items: OrderItem[];
  shipping: {
    address: ShippingAddress;
    method: ShippingMethod;
    cost: number;
    trackingNumber?: string;
    estimatedDelivery?: Date;
  };
  payment: {
    method: PaymentMethod;
    status: PaymentStatus;
    amount: number;
    currency: string;
    reference?: string;
    gateway?: string;
  };
  totals: {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    total: number;
  };
  status: OrderStatus;
  notes?: string;
  timeline: OrderEvent[];
}

export interface OrderItem {
  productId: string;
  sku: string;
  name: LocalizedContent;
  quantity: number;
  unitPrice: number;
  discount?: number;
  tax: number;
  total: number;
  status: ItemStatus;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  street: string;
  district: string;
  city: string;
  governorate: string;
  landmark?: string;
  notes?: string;
}

export interface OrderEvent {
  type: EventType;
  timestamp: Date;
  description: LocalizedContent;
  user?: string;
  metadata?: Record<string, unknown>;
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled';

export type ItemStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'shipped' 
  | 'delivered' 
  | 'returned';

export type PaymentMethod = 
  | 'cash_on_delivery' 
  | 'bank_transfer' 
  | 'card' 
  | 'wallet';

export type PaymentStatus = 
  | 'pending' 
  | 'authorized' 
  | 'paid' 
  | 'failed' 
  | 'refunded';

export type ShippingMethod = 
  | 'standard' 
  | 'express' 
  | 'same_day' 
  | 'pickup';

export type EventType = 
  | 'order_placed' 
  | 'payment_received' 
  | 'order_shipped' 
  | 'order_delivered' 
  | 'order_cancelled';
```