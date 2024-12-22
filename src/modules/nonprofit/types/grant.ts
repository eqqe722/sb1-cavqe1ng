```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Grant extends AuditableEntity {
  grantNumber: string;
  title: LocalizedContent;
  donor: {
    id: string;
    name: LocalizedContent;
    type: 'government' | 'organization' | 'international';
  };
  amount: number;
  currency: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  status: GrantStatus;
  category: GrantCategory;
  programs: string[];
  disbursements: Disbursement[];
  reports: GrantReport[];
  compliance: ComplianceRequirement[];
}

export interface Disbursement {
  date: Date;
  amount: number;
  description: string;
  status: 'scheduled' | 'received' | 'delayed';
  reference: string;
}

export interface GrantReport {
  type: ReportType;
  dueDate: Date;
  submissionDate?: Date;
  status: ReportStatus;
  metrics: {
    metric: string;
    target: number;
    actual: number;
  }[];
}

export interface ComplianceRequirement {
  type: string;
  description: LocalizedContent;
  dueDate: Date;
  status: 'pending' | 'submitted' | 'approved';
  documents: string[];
}

export type GrantStatus = 'draft' | 'submitted' | 'approved' | 'active' | 'completed' | 'cancelled';
export type GrantCategory = 'education' | 'health' | 'social' | 'relief' | 'development';
export type ReportType = 'progress' | 'financial' | 'impact' | 'final';
export type ReportStatus = 'pending' | 'submitted' | 'reviewed' | 'approved';
```