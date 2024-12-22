```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Volunteer extends AuditableEntity {
  volunteerId: string;
  name: LocalizedContent;
  nationalId: string;
  contact: {
    phone: string;
    email?: string;
    address: string;
    governorate: string;
  };
  availability: {
    days: number[]; // 0-6 (Sunday-Saturday)
    shifts: string[];
    hoursPerWeek: number;
  };
  skills: string[];
  interests: string[];
  languages: string[];
  education: string;
  profession: string;
  status: VolunteerStatus;
  assignments: VolunteerAssignment[];
  documents: {
    type: DocumentType;
    number: string;
    issuedBy: string;
    expiryDate?: Date;
  }[];
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
}

export interface VolunteerAssignment {
  programId: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  hours: number;
  status: AssignmentStatus;
  supervisor: string;
  evaluation?: {
    rating: number;
    comments: string;
    date: Date;
  };
}

export type VolunteerStatus = 'active' | 'inactive' | 'pending' | 'blacklisted';
export type AssignmentStatus = 'assigned' | 'completed' | 'cancelled';
export type DocumentType = 'id' | 'certificate' | 'clearance' | 'reference';
```