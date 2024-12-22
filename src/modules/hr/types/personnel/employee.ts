```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface Employee extends AuditableEntity {
  employeeNumber: string;
  nationalId: string; // Iraqi Civil ID
  name: {
    first: LocalizedContent;
    middle: LocalizedContent;
    last: LocalizedContent;
  };
  personalInfo: PersonalInfo;
  employmentInfo: EmploymentInfo;
  contact: ContactInfo;
  documents: EmployeeDocument[];
  dependents: Dependent[];
  workPermit?: WorkPermit; // For non-Iraqi employees
}

export interface PersonalInfo {
  birthDate: Date;
  birthPlace: string;
  gender: Gender;
  nationality: string;
  maritalStatus: MaritalStatus;
  religion?: string;
  bloodType?: string;
}

export interface EmploymentInfo {
  type: EmploymentType;
  department: string;
  position: string;
  grade: string;
  joiningDate: Date;
  confirmationDate?: Date;
  terminationDate?: Date;
  status: EmployeeStatus;
  manager?: string;
  workLocation: string;
}

export interface ContactInfo {
  email: string;
  mobile: string;
  phone?: string;
  address: {
    current: string;
    permanent: string;
    governorate: string;
    district: string;
    postalCode?: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
    address: string;
  };
}

export type Gender = 'male' | 'female';
export type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed';
export type EmploymentType = 'permanent' | 'contract' | 'temporary' | 'probation';
export type EmployeeStatus = 'active' | 'inactive' | 'terminated' | 'suspended';
```