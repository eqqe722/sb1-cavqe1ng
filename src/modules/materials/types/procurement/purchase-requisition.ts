```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

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

export interface ApprovalStep {
  level: number;
  approver: string;
  status: 'pending' | 'approved' | 'rejected';
  date?: Date;
  comments?: string;
}

export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
export type RequisitionStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'ordered';
```