import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface ProductionOrder extends AuditableEntity {
  orderNumber: string;
  productId: string;
  quantity: number;
  startDate: Date;
  dueDate: Date;
  status: ProductionStatus;
  priority: 'high' | 'medium' | 'low';
  workCenterId: string;
  bomId: string;
  completedQuantity: number;
  qualityChecks: QualityCheck[];
}

export interface BillOfMaterials extends AuditableEntity {
  bomNumber: string;
  productId: string;
  version: string;
  status: 'active' | 'draft' | 'obsolete';
  components: BOMComponent[];
  laborRequirements: LaborRequirement[];
  routingSteps: RoutingStep[];
}

export interface BOMComponent {
  materialId: string;
  quantity: number;
  unit: string;
  wastagePercent: number;
  isOptional: boolean;
  alternativeIds?: string[];
}

export interface WorkCenter extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  capacity: {
    daily: number;
    shift: number;
    unit: string;
  };
  efficiency: number;
  utilization: number;
  maintenanceSchedule: MaintenanceSchedule[];
}

export interface QualityCheck {
  checkpointId: string;
  result: 'pass' | 'fail' | 'pending';
  checkedBy: string;
  checkedAt: Date;
  parameters: Record<string, number>;
  notes?: string;
}

export interface RoutingStep {
  sequence: number;
  workCenterId: string;
  operation: string;
  setupTime: number;
  runTime: number;
  waitTime: number;
  batchSize: number;
}

export type ProductionStatus = 
  | 'planned'
  | 'in_progress'
  | 'completed'
  | 'on_hold'
  | 'cancelled';