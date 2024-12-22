```typescript
import { AuditableEntity } from '../../../types/database/common';

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
  bankDetails: BankDetails;
  status: PayslipStatus;
}

export interface PayrollTotals {
  basicTotal: number;
  allowancesTotal: number;
  deductionsTotal: number;
  benefitsTotal: number;
  netTotal: number;
  employeeCount: number;
  socialSecurityTotal: number;
  incomeTaxTotal: number;
}

export interface PayrollApproval {
  level: number;
  approver: string;
  status: 'pending' | 'approved' | 'rejected';
  date?: Date;
  comments?: string;
}

export interface BankDetails {
  bankName: string;
  branchName: string;
  accountNumber: string;
  iban?: string;
  swiftCode?: string;
}

export type PayrollStatus = 'draft' | 'processing' | 'approved' | 'paid' | 'cancelled';
export type PayslipStatus = 'draft' | 'approved' | 'paid' | 'cancelled';
```