import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface PurchaseRequisition extends AuditableEntity {
  requisitionNumber: string;
  department: string;
  requestedBy: string;
  status: RequisitionStatus;
  items: RequisitionItem[];
  totalAmount: number;
  currency: string;
  requiredDate: Date;
  notes?: string;
}

export interface RequisitionItem {
  productId: string;
  quantity: number;
  estimatedPrice: number;
  specifications?: string;
}

export interface PurchaseOrder extends AuditableEntity {
  orderNumber: string;
  vendorId: string;
  requisitionId?: string;
  status: OrderStatus;
  items: OrderItem[];
  totals: OrderTotals;
  deliveryDate: Date;
  terms: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
  tax: number;
  total: number;
}

export interface OrderTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
}

export interface VendorEvaluation extends AuditableEntity {
  vendorId: string;
  period: string;
  criteria: EvaluationCriteria;
  totalScore: number;
  status: 'approved' | 'pending' | 'rejected';
  reviewedBy: string;
  comments?: string;
}

export interface EvaluationCriteria {
  qualityScore: number;
  deliveryScore: number;
  priceScore: number;
  serviceScore: number;
  complianceScore: number;
}

export type RequisitionStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'ordered';
export type OrderStatus = 'draft' | 'sent' | 'confirmed' | 'received' | 'completed' | 'cancelled';