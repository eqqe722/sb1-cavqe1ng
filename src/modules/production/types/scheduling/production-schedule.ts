```typescript
import { AuditableEntity } from '../../../../types/database/common';

export interface ProductionSchedule extends AuditableEntity {
  scheduleId: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  workCenter: string;
  shifts: WorkShift[];
  orders: ScheduledOrder[];
  constraints: ScheduleConstraint[];
  status: ScheduleStatus;
}

export interface WorkShift {
  shiftId: string;
  name: string;
  startTime: string;
  endTime: string;
  breakDuration: number;
  capacity: number;
  energyAvailability: boolean;
  laborAvailability: number;
}

export interface ScheduledOrder {
  orderId: string;
  productId: string;
  quantity: number;
  priority: PriorityLevel;
  plannedStart: Date;
  plannedEnd: Date;
  actualStart?: Date;
  actualEnd?: Date;
  status: OrderStatus;
}

export interface ScheduleConstraint {
  type: ConstraintType;
  resource: string;
  startDate: Date;
  endDate: Date;
  reason: string;
}

export type ScheduleStatus = 'draft' | 'confirmed' | 'in_progress' | 'completed';
export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
export type OrderStatus = 'scheduled' | 'in_progress' | 'completed' | 'delayed';
export type ConstraintType = 'maintenance' | 'power_outage' | 'labor_shortage' | 'material_shortage';
```