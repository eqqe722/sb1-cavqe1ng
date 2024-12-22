```typescript
import { AuditableEntity } from '../../../types/database/common';

export interface Attendance extends AuditableEntity {
  employeeId: string;
  date: Date;
  hijriDate: string; // Islamic calendar date
  shift: WorkShift;
  checkIn?: Date;
  checkOut?: Date;
  status: AttendanceStatus;
  workHours: number;
  overtime: number;
  lateMinutes: number;
  earlyDepartureMinutes: number;
  isHoliday: boolean;
  isWeekend: boolean;
  notes?: string;
}

export interface WorkShift {
  id: string;
  name: string;
  startTime: string; // HH:mm format
  endTime: string;
  flexibleMinutes: number;
  breakDuration: number;
  workingDays: number[]; // 0-6 (Sunday-Saturday)
  ramadanTiming?: {
    startTime: string;
    endTime: string;
  };
}

export interface LeaveRequest extends AuditableEntity {
  employeeId: string;
  type: LeaveType;
  startDate: Date;
  endDate: Date;
  duration: number;
  reason: string;
  attachments?: string[];
  status: LeaveStatus;
  approvalFlow: LeaveApproval[];
}

export interface LeaveBalance {
  employeeId: string;
  year: number;
  balances: Record<LeaveType, {
    entitled: number;
    taken: number;
    remaining: number;
    carried: number;
  }>;
}

export interface LeaveApproval {
  level: number;
  approver: string;
  status: 'pending' | 'approved' | 'rejected';
  date?: Date;
  comments?: string;
}

export type AttendanceStatus = 'present' | 'absent' | 'late' | 'leave' | 'holiday';
export type LeaveType = 
  | 'annual' 
  | 'sick' 
  | 'marriage' 
  | 'maternity' 
  | 'paternity'
  | 'hajj' 
  | 'unpaid';
export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
```