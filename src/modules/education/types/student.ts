```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Student extends AuditableEntity {
  studentId: string;
  nationalId: string;
  name: {
    first: LocalizedContent;
    middle: LocalizedContent;
    last: LocalizedContent;
  };
  birthDate: Date;
  gender: 'male' | 'female';
  enrollmentStatus: EnrollmentStatus;
  academicInfo: AcademicInfo;
  contact: ContactInfo;
  guardian: GuardianInfo;
  documents: StudentDocument[];
}

export interface AcademicInfo {
  level: string;
  batch: string;
  section: string;
  admissionDate: Date;
  previousSchool?: string;
  specialNeeds?: string[];
  achievements: Achievement[];
  attendance: AttendanceRecord[];
}

export interface ContactInfo {
  phone: string;
  alternatePhone?: string;
  email?: string;
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
}

export interface GuardianInfo {
  name: string;
  relation: GuardianRelation;
  occupation: string;
  phone: string;
  email?: string;
  nationalId: string;
}

export interface Achievement {
  type: AchievementType;
  title: LocalizedContent;
  date: Date;
  description?: LocalizedContent;
  issuer?: string;
}

export interface AttendanceRecord {
  date: Date;
  status: AttendanceStatus;
  reason?: string;
  verifiedBy: string;
}

export interface StudentDocument {
  type: DocumentType;
  title: LocalizedContent;
  fileUrl: string;
  uploadDate: Date;
  verified: boolean;
  verifiedBy?: string;
}

export type EnrollmentStatus = 'active' | 'graduated' | 'transferred' | 'withdrawn' | 'suspended';
export type GuardianRelation = 'father' | 'mother' | 'brother' | 'sister' | 'other';
export type AchievementType = 'academic' | 'sports' | 'cultural' | 'leadership';
export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused';
export type DocumentType = 'birth_certificate' | 'previous_certificate' | 'medical_record' | 'residence_proof';
```