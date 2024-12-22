```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface ProductionOrder extends AuditableEntity {
  orderNumber: string;
  type: OrderType;
  priority: PriorityLevel;
  product: {
    id: string;
    name: LocalizedContent;
    bomId: string;
  };
  quantity: number;
  scheduledStart: Date;
  scheduledEnd: Date;
  actualStart?: Date;
  actualEnd?: Date;
  status: OrderStatus;
  workCenter: string;
  components: MaterialRequirement[];
  operations: PlannedOperation[];
  quality: QualityRequirement[];
}

export interface MaterialRequirement {
  materialId: string;
  required: number;
  allocated: number;
  issued: number;
  returned: number;
  scrapped: number;
  unit: string;
  status: 'pending' | 'partial' | 'complete';
}

export interface PlannedOperation {
  sequence: number;
  workCenterId: string;
  description: LocalizedContent;
  plannedStart: Date;
  plannedEnd: Date;
  actualStart?: Date;
  actualEnd?: Date;
  status: OperationStatus;
  laborHours: number;
  machineHours: number;
}

export interface QualityRequirement {
  checkpointId: string;
  parameter: string;
  specification: string;
  result?: string;
  status: 'pending' | 'passed' | 'failed';
  inspector?: string;
  inspectionDate?: Date;
}

export type OrderType = 'standard' | 'rework' | 'sample' | 'maintenance';
export type OrderStatus = 'planned' | 'released' | 'in_progress' | 'completed' | 'cancelled';
export type OperationStatus = 'pending' | 'setup' | 'running' | 'completed' | 'interrupted';
export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
```