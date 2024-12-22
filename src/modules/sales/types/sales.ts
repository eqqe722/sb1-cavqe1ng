import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface SalesOrder extends AuditableEntity {
  orderNumber: string;
  customer: {
    id: string;
    name: LocalizedContent;
  };
  date: Date;
  items: OrderItem[];
  totals: OrderTotals;
  status: OrderStatus;
  shippingInfo?: ShippingInfo;
  paymentStatus: PaymentStatus;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
  discount?: number;
  tax?: number;
  total: number;
}

export interface OrderTotals {
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
}

export interface ShippingInfo {
  address: string;
  city: string;
  phone: string;
  method: string;
  cost: number;
}

export type OrderStatus = 'draft' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'partial' | 'paid' | 'refunded';