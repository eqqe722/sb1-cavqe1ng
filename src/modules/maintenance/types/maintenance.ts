```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface MaintenanceSchedule extends AuditableEntity {
  scheduleNumber: string;
  assetId: string;
  type: MaintenanceType;
  frequency: MaintenanceFrequency;
  nextDueDate: Date;
  tasks: MaintenanceTask[];
  status: ScheduleStatus;
  priority: PriorityLevel;
  department: string;
}

export interface MaintenanceTask {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  estimatedDuration: number;
  requiredSkills: string[];
  materials: RequiredMaterial[];
  checkpoints: TaskCheckpoint[];
  instructions: string;
}

export interface WorkOrder extends AuditableEntity {
  orderNumber: string;
  type: WorkOrderType;
  assetId: string;
  priority: PriorityLevel;
  status: WorkOrderStatus;
  scheduledStart: Date;
  scheduledEnd: Date;
  actualStart?: Date;
  actualEnd?: Date;
  assignedTo: string[];
  tasks: MaintenanceTask[];
  materials: RequiredMaterial[];
  costs: WorkOrderCosts;
}

export interface Asset extends AuditableEntity {
  assetNumber: string;
  name: LocalizedContent;
  category: string;
  location: string;
  status: AssetStatus;
  specifications: Record<string, string>;
  manufacturer: string;
  model: string;
  serialNumber: string;
  purchaseDate: Date;
  warrantyExpiry: Date;
  maintenanceHistory: MaintenanceRecord[];
  documents: AssetDocument[];
}

export interface MaintenanceRecord {
  id: string;
  date: Date;
  type: MaintenanceType;
  description: LocalizedContent;
  cost: number;
  performedBy: string;
  workOrderId: string;
}

export interface RequiredMaterial {
  materialId: string;
  quantity: number;
  unit: string;
  estimatedCost: number;
}

export interface TaskCheckpoint {
  id: string;
  description: LocalizedContent;
  expectedValue?: string;
  tolerance?: string;
  isMandatory: boolean;
}

export interface WorkOrderCosts {
  labor: number;
  materials: number;
  equipment: number;
  other: number;
  total: number;
  currency: string;
}

export interface AssetDocument {
  id: string;
  type: DocumentType;
  title: string;
  fileUrl: string;
  uploadDate: Date;
  expiryDate?: Date;
}

export type MaintenanceType = 'preventive' | 'corrective' | 'predictive' | 'condition-based';
export type MaintenanceFrequency = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
export type ScheduleStatus = 'active' | 'completed' | 'overdue' | 'cancelled';
export type WorkOrderType = 'preventive' | 'corrective' | 'emergency' | 'modification';
export type WorkOrderStatus = 'draft' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
export type AssetStatus = 'operational' | 'under_maintenance' | 'broken' | 'retired';
export type PriorityLevel = 'critical' | 'high' | 'medium' | 'low';
export type DocumentType = 'manual' | 'warranty' | 'certificate' | 'inspection_report';
```