```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface WorkCenter extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  department: string;
  type: WorkCenterType;
  capacity: {
    daily: number;
    shift: number;
    unit: string;
  };
  shifts: WorkShift[];
  efficiency: number;
  utilization: number;
  availability: number;
  costs: WorkCenterCosts;
  maintenance: MaintenanceSchedule[];
}

export interface WorkShift {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  breakDuration: number;
  capacity: number;
  operators: number;
  energyAvailability: boolean;
}

export interface WorkCenterCosts {
  laborRate: number;
  machineRate: number;
  overheadRate: number;
  setupCost: number;
  currency: string;
}

export interface MaintenanceSchedule {
  type: 'preventive' | 'calibration' | 'cleaning';
  frequency: string;
  duration: number;
  lastDate?: Date;
  nextDate: Date;
  status: 'scheduled' | 'overdue' | 'completed';
}

export interface CapacityPlan extends AuditableEntity {
  planId: string;
  workCenterId: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  capacity: {
    available: number;
    allocated: number;
    maintenance: number;
    net: number;
  };
  loadDetails: WorkLoad[];
}

export interface WorkLoad {
  orderId: string;
  operationId: string;
  startDate: Date;
  endDate: Date;
  hours: number;
  priority: PriorityLevel;
  status: 'planned' | 'confirmed' | 'completed';
}

export type WorkCenterType = 'machine' | 'assembly' | 'testing' | 'packaging';
export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
```