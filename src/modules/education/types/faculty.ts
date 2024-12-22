```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Faculty extends AuditableEntity {
  employeeId: string;
  nationalId: string;
  name: {
    first: LocalizedContent;
    middle: LocalizedContent;
    last: LocalizedContent;
  };
  academicInfo: AcademicInfo;
  specialization: string[];
  employmentInfo: EmploymentInfo;
  schedule: TeachingSchedule[];
  qualifications: Qualification[];
  performance: PerformanceRecord[];
}

export interface AcademicInfo {
  department: string;
  rank: AcademicRank;
  tenure: boolean;
  researchInterests: string[];
  publications: Publication[];
}

export interface EmploymentInfo {
  type: EmploymentType;
  startDate: Date;
  endDate?: Date;
  contractDetails: {
    salary: number;
    benefits: string[];
    workload: number; // Hours per week
  };
  status: EmploymentStatus;
}

export interface TeachingSchedule {
  academicYear: string;
  semester: string;
  courses: TeachingAssignment[];
  officeHours: OfficeHour[];
}

export interface TeachingAssignment {
  courseId: string;
  section: string;
  schedule: {
    day: number; // 0-6 (Sunday-Saturday)
    startTime: string;
    endTime: string;
    room: string;
  }[];
}

export interface Qualification {
  degree: string;
  field: string;
  institution: string;
  country: string;
  year: number;
  verified: boolean;
}

export interface PerformanceRecord {
  academicYear: string;
  evaluations: Evaluation[];
  achievements: Achievement[];
  complaints: Complaint[];
}

export interface Publication {
  title: string;
  type: PublicationType;
  journal?: string;
  year: number;
  doi?: string;
  citations: number;
}

export type AcademicRank = 
  | 'professor' 
  | 'associate_professor' 
  | 'assistant_professor' 
  | 'lecturer' 
  | 'assistant_lecturer';

export type EmploymentType = 
  | 'full_time' 
  | 'part_time' 
  | 'visiting' 
  | 'contract';

export type EmploymentStatus = 
  | 'active' 
  | 'on_leave' 
  | 'suspended' 
  | 'terminated';

export type PublicationType = 
  | 'journal' 
  | 'conference' 
  | 'book' 
  | 'book_chapter';
```