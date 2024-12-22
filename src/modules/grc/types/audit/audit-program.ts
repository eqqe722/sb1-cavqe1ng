```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface AuditProgram extends AuditableEntity {
  programId: string;
  title: LocalizedContent;
  type: AuditType;
  scope: LocalizedContent;
  period: {
    startDate: Date;
    endDate: Date;
  };
  auditor: string;
  status: AuditStatus;
  methodology: string;
  findings: AuditFinding[];
  recommendations: AuditRecommendation[];
  followUps: FollowUpAction[];
}

export interface AuditFinding {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  category: FindingCategory;
  severity: FindingSeverity;
  status: FindingStatus;
  evidence: string[];
  remediation: RemediationPlan;
}

export interface RemediationPlan {
  actions: string[];
  owner: string;
  dueDate: Date;
  status: 'pending' | 'in_progress' | 'completed';
  evidence: string[];
}

export interface AuditRecommendation {
  id: string;
  description: LocalizedContent;
  priority: 'high' | 'medium' | 'low';
  implementationStatus: 'pending' | 'implemented' | 'rejected';
  implementationDate?: Date;
}

export interface FollowUpAction {
  findingId: string;
  date: Date;
  status: 'open' | 'closed';
  comments: string;
  verifiedBy?: string;
}

export type AuditType = 
  | 'internal' 
  | 'external' 
  | 'regulatory' 
  | 'compliance';

export type AuditStatus = 
  | 'planned' 
  | 'in_progress' 
  | 'draft' 
  | 'final' 
  | 'closed';

export type FindingCategory = 
  | 'control' 
  | 'compliance' 
  | 'process' 
  | 'security';

export type FindingSeverity = 
  | 'critical' 
  | 'major' 
  | 'minor';

export type FindingStatus = 
  | 'open' 
  | 'in_progress' 
  | 'closed' 
  | 'accepted';
```