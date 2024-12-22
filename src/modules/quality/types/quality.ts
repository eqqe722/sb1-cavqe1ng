import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface InspectionPlan extends AuditableEntity {
  planNumber: string;
  name: LocalizedContent;
  type: InspectionType;
  frequency: InspectionFrequency;
  checkpoints: Checkpoint[];
  status: 'active' | 'draft' | 'obsolete';
  department: string;
  responsiblePerson: string;
}

export interface Checkpoint {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  specifications: {
    parameter: string;
    min?: number;
    max?: number;
    target?: number;
    unit: string;
  };
  method: string;
  isMandatory: boolean;
}

export interface QualityInspectionRecord extends AuditableEntity {
  inspectionNumber: string;
  planId: string;
  type: InspectionType;
  status: InspectionStatus;
  results: InspectionResult[];
  inspector: string;
  date: Date;
  reference: {
    type: ReferenceType;
    id: string;
  };
}

export interface InspectionResult {
  checkpointId: string;
  value: number;
  result: 'pass' | 'fail' | 'warning';
  notes?: string;
  attachments?: string[];
}

export interface QualityNotification extends AuditableEntity {
  notificationNumber: string;
  type: NotificationType;
  priority: 'high' | 'medium' | 'low';
  status: NotificationStatus;
  description: LocalizedContent;
  reportedBy: string;
  assignedTo?: string;
  dueDate?: Date;
  actions: CorrectiveAction[];
}

export interface CorrectiveAction extends AuditableEntity {
  description: LocalizedContent;
  assignedTo: string;
  status: 'open' | 'in_progress' | 'completed' | 'verified';
  dueDate: Date;
  completionDate?: Date;
  effectiveness?: number;
}

export interface SupplierQualityRating extends AuditableEntity {
  supplierId: string;
  period: string;
  ratings: {
    productQuality: number;
    deliveryQuality: number;
    documentationQuality: number;
    responseTime: number;
    overall: number;
  };
  inspections: QualityInspectionRecord[];
  nonConformances: QualityNotification[];
}

export type InspectionType = 'incoming' | 'in_process' | 'final' | 'supplier';
export type InspectionFrequency = 'each_lot' | 'daily' | 'weekly' | 'monthly';
export type InspectionStatus = 'planned' | 'in_progress' | 'completed' | 'cancelled';
export type NotificationType = 'defect' | 'improvement' | 'deviation' | 'complaint';
export type NotificationStatus = 'new' | 'assigned' | 'in_progress' | 'resolved' | 'closed';
export type ReferenceType = 'purchase_order' | 'production_order' | 'sales_order' | 'material';