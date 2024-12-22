```typescript
import { AuditableEntity } from '../../../types/database/common';

export interface Timesheet extends AuditableEntity {
  timesheetNumber: string;
  contractorId: string;
  project: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  entries: TimesheetEntry[];
  totals: {
    regularHours: number;
    overtimeHours: number;
    holidayHours: number;
    totalHours: number;
  };
  approvals: TimesheetApproval[];
  status: TimesheetStatus;
}

export interface TimesheetEntry {
  date: Date;
  workerId: string;
  regularHours: number;
  overtimeHours: number;
  location: string;
  task: string;
  breakTime: number;
  notes?: string;
}

export interface TimesheetApproval {
  level: number;
  approver: string;
  status: ApprovalStatus;
  date?: Date;
  comments?: string;
}

export interface WorkerAttendance {
  workerId: string;
  date: Date;
  checkIn: Date;
  checkOut?: Date;
  location: string;
  status: AttendanceStatus;
  verifiedBy?: string;
}

export type TimesheetStatus = 
  | 'draft' 
  | 'submitted' 
  | 'approved' 
  | 'rejected' 
  | 'paid';

export type ApprovalStatus = 
  | 'pending' 
  | 'approved' 
  | 'rejected';

export type AttendanceStatus = 
  | 'present' 
  | 'absent' 
  | 'late' 
  | 'leave';
```