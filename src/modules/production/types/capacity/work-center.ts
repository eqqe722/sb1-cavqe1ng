```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface WorkCenter extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: WorkCenterType;
  location: string;
  capacity: {
    daily: number;
    shift: number;
    unit: string;
  };
  resources: {
    machines: Machine[];
    labor: LaborRequirement[];
    tools: Tool[];
  };
  efficiency: number;
  utilization: number;
  maintenance: MaintenanceSchedule[];
  downtime: DowntimeRecord[];
}

export interface Machine {
  id: string;
  name: string;
  model: string;
  capacity: number;
  powerConsumption: number; // KWh
  status: MachineStatus;
  lastMaintenance?: Date;
  nextMaintenance: Date;
}

export interface LaborRequirement {
  skillLevel: string;
  count: number;
  shift: string;
  certification: string[];
}

export interface MaintenanceSchedule {
  type: MaintenanceType;
  frequency: string;
  duration: number;
  lastDate?: Date;
  nextDate: Date;
  status: 'scheduled' | 'overdue' | 'completed';
}

export interface DowntimeRecord {
  startTime: Date;
  endTime?: Date;
  reason: DowntimeReason;
  impact: number;
  actions: string[];
}

export type WorkCenterType = 'assembly' | 'machining' | 'testing' | 'packaging';
export type MachineStatus = 'operational' | 'maintenance' | 'breakdown' | 'idle';
export type MaintenanceType = 'preventive' | 'corrective' | 'calibration';
export type DowntimeReason = 'power' | 'breakdown' | 'setup' | 'material_shortage';
```