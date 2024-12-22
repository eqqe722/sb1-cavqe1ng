```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface RegulatoryRequirement extends AuditableEntity {
  requirementId: string;
  title: LocalizedContent;
  description: LocalizedContent;
  authority: string; // e.g., Central Bank of Iraq, COSQC
  category: RequirementCategory;
  applicability: string[];
  deadline?: Date;
  status: ComplianceStatus;
  documents: RequiredDocument[];
  controls: ComplianceControl[];
  assessments: ComplianceAssessment[];
}

export interface ComplianceControl {
  id: string;
  name: LocalizedContent;
  type: ControlType;
  description: LocalizedContent;
  owner: string;
  frequency: string;
  evidence: string[];
  effectiveness: number;
  status: ControlStatus;
}

export interface ComplianceAssessment {
  id: string;
  date: Date;
  assessor: string;
  result: AssessmentResult;
  findings: Finding[];
  evidence: string[];
  nextReview: Date;
}

export interface Finding {
  id: string;
  description: LocalizedContent;
  severity: 'critical' | 'major' | 'minor';
  status: 'open' | 'in_progress' | 'closed';
  remediation: string;
  dueDate: Date;
}

export interface RequiredDocument {
  type: DocumentType;
  name: LocalizedContent;
  template?: string;
  submitted?: {
    date: Date;
    reference: string;
    status: SubmissionStatus;
  };
}

export type RequirementCategory = 
  | 'banking' 
  | 'trade' 
  | 'labor' 
  | 'environmental' 
  | 'quality';

export type ComplianceStatus = 
  | 'applicable' 
  | 'not_applicable' 
  | 'in_progress' 
  | 'compliant' 
  | 'non_compliant';

export type ControlStatus = 
  | 'implemented' 
  | 'partially_implemented' 
  | 'not_implemented';

export type AssessmentResult = 
  | 'compliant' 
  | 'partially_compliant' 
  | 'non_compliant';

export type SubmissionStatus = 
  | 'pending' 
  | 'submitted' 
  | 'accepted' 
  | 'rejected';

export type DocumentType = 
  | 'license' 
  | 'permit' 
  | 'certification' 
  | 'report';
```