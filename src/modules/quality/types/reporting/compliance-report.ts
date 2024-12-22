```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface ComplianceReport extends AuditableEntity {
  reportNumber: string;
  type: ReportType;
  period: {
    startDate: Date;
    endDate: Date;
  };
  standards: string[]; // References to QualityStandard
  metrics: ComplianceMetric[];
  nonConformances: NonConformance[];
  improvements: ImprovementAction[];
  status: ReportStatus;
  submissions: ReportSubmission[];
}

export interface ComplianceMetric {
  category: string;
  indicator: string;
  target: number;
  actual: number;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
}

export interface NonConformance {
  reference: string;
  description: LocalizedContent;
  severity: 'critical' | 'major' | 'minor';
  corrective: string;
  status: 'open' | 'closed';
  closureDate?: Date;
}

export interface ReportSubmission {
  authority: string; // e.g., COSQC
  submissionDate: Date;
  reference: string;
  status: SubmissionStatus;
  feedback?: string;
  nextReviewDate?: Date;
}

export type ReportType = 'monthly' | 'quarterly' | 'annual' | 'audit';
export type ReportStatus = 'draft' | 'internal_review' | 'submitted' | 'approved';
export type SubmissionStatus = 'pending' | 'accepted' | 'rejected' | 'requires_revision';
```