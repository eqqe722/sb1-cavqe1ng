```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface RiskAssessment extends AuditableEntity {
  assessmentNumber: string;
  type: AssessmentType;
  scope: LocalizedContent;
  period: {
    startDate: Date;
    endDate: Date;
  };
  department: string;
  risks: Risk[];
  methodology: string;
  status: AssessmentStatus;
  approvals: Approval[];
}

export interface Risk {
  id: string;
  category: RiskCategory;
  description: LocalizedContent;
  source: RiskSource;
  impact: {
    financial: number;
    operational: number;
    reputational: number;
    compliance: number;
  };
  likelihood: number;
  inherentRisk: number;
  controls: RiskControl[];
  residualRisk: number;
  status: RiskStatus;
  mitigationPlan?: MitigationPlan;
}

export interface RiskControl {
  id: string;
  name: LocalizedContent;
  type: ControlType;
  effectiveness: number;
  frequency: string;
  evidence: string[];
  owner: string;
  lastTested?: Date;
}

export interface MitigationPlan {
  actions: MitigationAction[];
  owner: string;
  timeline: {
    startDate: Date;
    endDate: Date;
  };
  budget: number;
  status: 'planned' | 'in_progress' | 'completed';
}

export type AssessmentType = 
  | 'operational' 
  | 'security' 
  | 'compliance' 
  | 'financial';

export type RiskCategory = 
  | 'political' 
  | 'economic' 
  | 'security' 
  | 'regulatory' 
  | 'operational';

export type RiskSource = 
  | 'internal' 
  | 'external' 
  | 'third_party';

export type ControlType = 
  | 'preventive' 
  | 'detective' 
  | 'corrective';

export type AssessmentStatus = 
  | 'draft' 
  | 'in_review' 
  | 'approved' 
  | 'active';

export type RiskStatus = 
  | 'identified' 
  | 'assessed' 
  | 'mitigated' 
  | 'accepted' 
  | 'closed';
```