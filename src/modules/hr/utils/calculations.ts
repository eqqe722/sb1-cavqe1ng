```typescript
import { WorkShift, LeaveBalance } from '../types/attendance/timesheet';
import { SalaryStructure } from '../types/payroll/salary';

export const calculateWorkHours = (
  checkIn: Date,
  checkOut: Date,
  shift: WorkShift
): { regular: number; overtime: number; late: number } => {
  // Implementation for work hours calculation
  return { regular: 0, overtime: 0, late: 0 };
};

export const calculateLeaveBalance = (
  balance: LeaveBalance,
  requestedDays: number
): { available: boolean; remaining: number } => {
  // Implementation for leave balance calculation
  return { available: false, remaining: 0 };
};

export const calculateNetSalary = (
  salary: SalaryStructure,
  workDays: number,
  overtime: number
): number => {
  const basic = (salary.basic / 30) * workDays;
  const allowances = Object.values(salary.allowances).reduce((a, b) => a + b, 0);
  const deductions = Object.values(salary.deductions).reduce((a, b) => a + b, 0);
  const benefits = Object.values(salary.benefits).reduce((a, b) => a + b, 0);
  
  return basic + allowances - deductions + benefits + overtime;
};

export const calculateSocialSecurity = (
  basicSalary: number,
  isIraqi: boolean
): number => {
  const rate = isIraqi ? 0.05 : 0; // 5% for Iraqi employees
  return basicSalary * rate;
};
```