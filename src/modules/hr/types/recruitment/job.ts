```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface JobPosting extends AuditableEntity {
  postingNumber: string;
  title: LocalizedContent;
  department: string;
  description: LocalizedContent;
  requirements: JobRequirements;
  quotas: NationalityQuota[];
  type: JobType;
  status: PostingStatus;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  benefits: string[];
  positions: number;
  startDate: Date;
  endDate: Date;
  applications: JobApplication[];
}

export interface JobRequirements {
  education: string[];
  experience: number;
  skills: string[];
  languages: Language[];
  certifications: string[];
  nationality?: string[];
}

export interface NationalityQuota {
  nationality: string;
  percentage: number;
  current: number;
  required: number;
}

export interface Language {
  code: string;
  name: string;
  proficiency: LanguageProficiency;
  required: boolean;
}

export type JobType = 'full_time' | 'part_time' | 'contract' | 'temporary';
export type PostingStatus = 'draft' | 'published' | 'closed' | 'cancelled';
export type LanguageProficiency = 'basic' | 'intermediate' | 'advanced' | 'native';
```