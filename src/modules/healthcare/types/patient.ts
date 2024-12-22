```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Patient extends AuditableEntity {
  fileNumber: string; // Iraqi medical file number
  nationalId: string; // Iraqi civil ID
  name: {
    first: LocalizedContent;
    middle: LocalizedContent;
    last: LocalizedContent;
  };
  birthDate: Date;
  gender: 'male' | 'female';
  bloodType: BloodType;
  contact: {
    phone: string;
    alternatePhone?: string;
    address: {
      street: string;
      district: string;
      city: string;
      governorate: string;
    };
    emergencyContact: {
      name: string;
      relation: string;
      phone: string;
    };
  };
  insurance: InsuranceDetails;
  medicalHistory: MedicalHistory;
  allergies: Allergy[];
  medications: Medication[];
  status: PatientStatus;
  consent: ConsentRecord[];
}

export interface InsuranceDetails {
  provider: string;
  policyNumber: string;
  validFrom: Date;
  validTo: Date;
  coverageType: string;
  status: 'active' | 'expired' | 'suspended';
}

export interface MedicalHistory {
  conditions: MedicalCondition[];
  surgeries: Surgery[];
  familyHistory: FamilyHistory[];
  vaccinations: Vaccination[];
}

export interface MedicalCondition {
  name: LocalizedContent;
  diagnosedDate: Date;
  status: 'active' | 'resolved' | 'chronic';
  severity: 'mild' | 'moderate' | 'severe';
  notes?: string;
}

export interface Allergy {
  type: 'medication' | 'food' | 'environmental';
  agent: string;
  reaction: string;
  severity: 'mild' | 'moderate' | 'severe';
  diagnosedDate: Date;
}

export interface Medication {
  name: LocalizedContent;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  prescribedBy: string;
  status: 'active' | 'discontinued' | 'completed';
}

export interface ConsentRecord {
  type: ConsentType;
  givenDate: Date;
  expiryDate?: Date;
  procedure?: string;
  witness?: string;
  document: string; // URL to scanned consent form
  status: 'valid' | 'expired' | 'revoked';
}

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type PatientStatus = 'active' | 'inactive' | 'deceased';
export type ConsentType = 'general' | 'procedure' | 'research' | 'data_sharing';
```