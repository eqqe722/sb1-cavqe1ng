```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Employee extends AuditableEntity {
  employeeNumber: string;
  nationalId: string; // Iraqi Civil ID
  firstName: LocalizedContent;
  lastName: LocalizedContent;
  birthDate: Date;
  gender: Gender;
  nationality: string;
  maritalStatus: MaritalStatus;
  employmentType: EmploymentType;
  status: EmployeeStatus;
  department: string;
  position: string;
  grade: string;
  joiningDate: Date;
  confirmationDate?: Date;
  terminationDate?: Date;
  contact: EmployeeContact;
  documents: EmployeeDocument[];
  dependents: Dependent[];
  workPermit?: WorkPermit; // For non-Iraqi employees
}

export interface EmployeeContact {
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

export interface EmployeeDocument {
  id: string;
  type: DocumentType;
  number: string;
  issueDate: Date;
  expiryDate?: Date;
  issuingAuthority: string;
  fileUrl: string;
  status: 'active' | 'expired' | 'pending';
}

export interface Dependent {
  id: string;
  name: string;
  relationship: Relationship;
  birthDate: Date;
  nationalId?: string;
  isStudent?: boolean;
  documents: EmployeeDocument[];
}

export interface WorkPermit {
  permitNumber: string;
  issueDate: Date;
  expiryDate: Date;
  type: 'work' | 'residence';
  sponsor: string;
  status: 'active' | 'expired' | 'cancelled';
}

export type Gender = 'male' | 'female';
export type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed';
export type EmploymentType = 'permanent' | 'contract' | 'temporary' | 'probation';
export type EmployeeStatus = 'active' | 'inactive' | 'terminated' | 'suspended';
export type DocumentType = 'civilId' | 'passport' | 'degree' | 'contract' | 'other';
export type Relationship = 'spouse' | 'child' | 'parent' | 'sibling';
```