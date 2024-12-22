```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface DefectRecord extends AuditableEntity {
  defectNumber: string;
  type: DefectType;
  category: DefectCategory;
  severity: DefectSeverity;
  status: DefectStatus;
  description: LocalizedContent;
  location: string;
  reportedBy: string;
  assignedTo?: string;
  reference: {
    type: string;
    id: string;
  };
  analysis: DefectAnalysis;
  actions: CorrectiveAction[];
  attachments: string[];
}

export interface DefectAnalysis {
  rootCause?: string;
  impact: ImpactAssessment;
  containmentActions: string[];
  verificationMethod: string;
  analyzedBy: string;
  analyzedDate: Date;
}

export interface ImpactAssessment {
  quality: ImpactLevel;
  cost: number;
  delivery: ImpactLevel;
  safety: ImpactLevel;
  customer: ImpactLevel;
}

export interface CorrectiveAction {
  id: string;
  description: LocalizedContent;
  type: ActionType;
  priority: PriorityLevel;
  assignedTo: string;
  dueDate: Date;
  status: ActionStatus;
  effectiveness?: number;
  verifiedBy?: string;
  verificationDate?: Date;
}

export type DefectType = 'product' | 'process' | 'system' | 'documentation';
export type DefectCategory = 'dimensional' | 'visual' | 'functional' | 'material';
export type DefectSeverity = 'critical' | 'major' | 'minor';
export type DefectStatus = 'new' | 'analyzing' | 'correcting' | 'verifying' | 'closed';
export type ActionType = 'immediate' | 'corrective' | 'preventive';
export type ActionStatus = 'open' | 'in_progress' | 'completed' | 'verified';
export type ImpactLevel = 'high' | 'medium' | 'low' | 'none';
export type PriorityLevel = 'urgent' | 'high' | 'medium' | 'low';
```