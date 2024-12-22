```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface DefectRecord extends AuditableEntity {
  defectNumber: string;
  type: DefectType;
  category: DefectCategory;
  severity: DefectSeverity;
  description: LocalizedContent;
  location: string;
  discoveredAt: {
    process: string;
    station: string;
    date: Date;
  };
  analysis: DefectAnalysis;
  corrective: CorrectiveAction[];
  preventive: PreventiveAction[];
  status: DefectStatus;
}

export interface DefectAnalysis {
  rootCause?: string;
  impactAssessment: {
    quality: ImpactLevel;
    cost: number;
    delivery: ImpactLevel;
    safety: ImpactLevel;
  };
  investigationMethod: string;
  findings: string[];
  attachments: string[];
}

export interface CorrectiveAction {
  id: string;
  description: LocalizedContent;
  assignedTo: string;
  dueDate: Date;
  status: ActionStatus;
  verification: {
    method: string;
    result: string;
    verifiedBy?: string;
    verifiedDate?: Date;
  };
}

export type DefectType = 'product' | 'process' | 'material' | 'documentation';
export type DefectCategory = 'dimensional' | 'visual' | 'functional' | 'packaging';
export type DefectSeverity = 'critical' | 'major' | 'minor';
export type DefectStatus = 'new' | 'analyzing' | 'correcting' | 'verifying' | 'closed';
export type ImpactLevel = 'high' | 'medium' | 'low' | 'none';
export type ActionStatus = 'planned' | 'in_progress' | 'completed' | 'verified';
```