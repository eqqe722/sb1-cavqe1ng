```typescript
import { AuditableEntity } from '../../../../types/database/common';

export interface SalaryStructure extends AuditableEntity {
  employeeId: string;
  basic: number;
  allowances: {
    housing: number;
    transportation: number;
    food: number;
    other: number;
  };
  deductions: {
    socialSecurity: number; // 5% for Iraqi employees
    incomeTax: number;
    loans: number;
    other: number;
  };
  benefits: {
    overtime: number;
    bonus: number;
    commission: number;
  };
  netSalary: number;
  currency: string;
  effectiveDate: Date;
  endDate?: Date;
  status: 'active' | 'inactive';
}

export interface PayrollPeriod extends AuditableEntity {
  periodId: string;
  year: number;
  month: number;
  startDate: Date;
  endDate: Date;
  status: PayrollStatus;
  payslips: Payslip[];
  totals: PayrollTotals;
  approvals: PayrollApproval[];
}

export interface Payslip extends AuditableEntity {
  employeeId: string;
  periodId: string;
  basic: number;
  allowances: AllowanceDetails;
  deductions: DeductionDetails;
  benefits: BenefitDetails;
  netSalary: number;
  bankDetails: BankDetails;
  status: PayslipStatus;
}

export interface AllowanceDetails {
  housing: number;
  transportation: number;
  food: number;
  other: number;
  total: number;
}

export interface DeductionDetails {
  socialSecurity: number;
  incomeTax: number;
  loans: number;
  other: number;
  total: number;
}

export interface BenefitDetails {
  overtime: number;
  bonus: number;
  commission: number;
  total: number;
}

export type PayrollStatus = 'draft' | 'processing' | 'approved' | 'paid' | 'cancelled';
export type PayslipStatus = 'draft' | 'approved' | 'paid' | 'cancelled';
```