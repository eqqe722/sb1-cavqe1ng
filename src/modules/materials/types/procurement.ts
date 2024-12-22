```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface PurchaseRequisition extends AuditableEntity {
  requisitionNumber: string;
  department: string;
  requestedBy: string;
  priority: PriorityLevel;
  requiredDate: Date;
  items: RequisitionItem[];
  status: RequisitionStatus;
  approvals: ApprovalStep[];
  attachments: string[];
  notes?: string;
}

export interface RequisitionItem {
  materialId: string;
  name: LocalizedContent;
  specification: string;
  quantity: number;
  unit: string;
  estimatedPrice: number;
  currency: string;
  purpose: string;
  suggestedSuppliers?: string[];
}

export interface PurchaseOrder extends AuditableEntity {
  orderNumber: string;
  requisitionId?: string;
  supplier: {
    id: string;
    name: LocalizedContent;
    taxNumber: string;
  };
  items: OrderItem[];
  deliveryTerms: DeliveryTerms;
  paymentTerms: string;
  currency: string;
  exchangeRate: number;
  status: OrderStatus;
  documents: PurchaseDocument[];
}

export interface OrderItem {
  materialId: string;
  name: LocalizedContent;
  quantity: number;
  unit: string;
  unitPrice: number;
  taxes: TaxDetail[];
  total: number;
  deliverySchedule?: DeliverySchedule[];
}

export interface DeliveryTerms {
  location: string;
  method: 'supplier' | 'company' | 'third_party';
  incoterm?: string;
  instructions?: string;
}

export interface DeliverySchedule {
  quantity: number;
  date: Date;
  location: string;
  status: 'scheduled' | 'delivered' | 'delayed';
}

export interface PurchaseDocument {
  type: DocumentType;
  number: string;
  date: Date;
  url: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
export type RequisitionStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'ordered';
export type OrderStatus = 'draft' | 'sent' | 'confirmed' | 'partial' | 'completed' | 'cancelled';
export type DocumentType = 'order' | 'quotation' | 'certificate' | 'import_license';
```