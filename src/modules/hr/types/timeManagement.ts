import { AuditableEntity } from '../../../types/database/common';

export interface Attendance extends AuditableEntity {
  employeeId: string;
  date: Date;
  checkIn: Date;
  checkOut?: Date;
  status: AttendanceStatus;
  workHours: number;
  overtime?: number;
  notes?: string;
}

export interface LeaveRequest extends AuditableEntity {
  requestNumber: string;
  employeeId: string;
  type: LeaveType;
  startDate: Date;
  endDate: Date;
  duration: number;
  reason: string;
  status: LeaveStatus;
  attachments?: string[];
  approver?: string;
  approvalDate?: Date;
  comments?: string;
}

export interface LeaveBalance {
  employeeId: string;
  year: number;
  balances: Record<LeaveType, {
    entitled: number;
    taken: number;
    remaining: number;
  }>;
  lastUpdated: Date;
}

export interface Shift {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  breakDuration: number;
  workingDays: number[];
  flexibleTiming: boolean;
  graceTime: number;
}

export interface TimeSheet extends AuditableEntity {
  employeeId: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  entries: TimeSheetEntry[];
  status: TimeSheetStatus;
  approver?: string;
  approvalDate?: Date;
  comments?: string;
}

export interface TimeSheetEntry {
  date: Date;
  project?: string;
  task?: string;
  hours: number;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type AttendanceStatus = 'present' | 'absent' | 'late' | 'half_day';
export type LeaveType = 'annual' | 'sick' | 'emergency' | 'maternity' | 'unpaid';
export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type TimeSheetStatus = 'draft' | 'submitted' | 'approved' | 'rejected';