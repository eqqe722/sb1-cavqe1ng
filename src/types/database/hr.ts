```typescript
import { AuditableEntity, LocalizedContent } from './common';

// Employee Management
export interface Employee extends AuditableEntity {
  employeeNumber: string;
  nationalId: string;
  name: {
    first: LocalizedContent;
    middle: LocalizedContent;
    last: LocalizedContent;
  };
  personalInfo: PersonalInfo;
  employmentInfo: EmploymentInfo;
  contact: ContactInfo;
  documents: EmployeeDocument[];
  benefits: EmployeeBenefit[];
  skills: EmployeeSkill[];
  performance: PerformanceRecord[];
}

export interface PersonalInfo {
  birthDate: Date;
  gender: 'male' | 'female';
  maritalStatus: MaritalStatus;
  nationality: string;
  religion?: string;
  bloodType?: string;
}

export interface EmploymentInfo {
  department: string;
  position: string;
  type: EmploymentType;
  status: EmployeeStatus;
  joiningDate: Date;
  confirmationDate?: Date;
  terminationDate?: Date;
  manager?: string;
  grade: string;
  workLocation: string;
}

// Payroll
export interface PayrollPeriod extends AuditableEntity {
  periodId: string;
  year: number;
  month: number;
  startDate: Date;
  endDate: Date;
  status: PayrollStatus;
  payslips: Payslip[];
  totals: PayrollTotals;
}

export interface Payslip extends AuditableEntity {
  employeeId: string;
  basic: number;
  allowances: {
    housing: number;
    transportation: number;
    other: number;
  };
  deductions: {
    tax: number;
    socialSecurity: number;
    loans: number;
  };
  net: number;
  currency: string;
  status: 'draft' | 'approved' | 'paid';
}

// Attendance
export interface Attendance extends AuditableEntity {
  employeeId: string;
  date: Date;
  checkIn?: Date;
  checkOut?: Date;
  status: AttendanceStatus;
  shift: string;
  overtime: number;
  notes?: string;
}

// Common Types
export type MaritalStatus = 
  | 'single' 
  | 'married' 
  | 'divorced' 
  | 'widowed';

export type EmploymentType = 
  | 'permanent' 
  | 'contract' 
  | 'temporary' 
  | 'probation';

export type EmployeeStatus = 
  | 'active' 
  | 'inactive' 
  | 'terminated' 
  | 'suspended';

export type PayrollStatus = 
  | 'draft' 
  | 'processing' 
  | 'approved' 
  | 'paid';

export type AttendanceStatus = 
  | 'present' 
  | 'absent' 
  | 'late' 
  | 'leave';
```