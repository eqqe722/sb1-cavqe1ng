import { AuditableEntity, LocalizedContent } from './common';

export interface Customer extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: 'individual' | 'company';
  taxNumber?: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  creditLimit: number;
  paymentTerms: string;
  status: 'active' | 'inactive' | 'blocked';
}

export interface SalesOrder extends AuditableEntity {
  orderNumber: string;
  customerId: string;
  date: Date;
  deliveryDate?: Date;
  status: 'draft' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: SalesOrderItem[];
  totals: OrderTotals;
  paymentStatus: 'pending' | 'partial' | 'paid';
  notes?: string;
}

export interface SalesOrderItem {
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