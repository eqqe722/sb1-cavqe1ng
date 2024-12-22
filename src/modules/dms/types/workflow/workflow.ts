```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface WorkflowTemplate extends AuditableEntity {
  name: LocalizedContent;
  description: LocalizedContent;
  type: WorkflowType;
  steps: WorkflowStep[];
  status: 'active' | 'inactive';
}

export interface WorkflowStep {
  id: string;
  name: LocalizedContent;
  type: StepType;
  assignee: {
    type: 'user' | 'role' | 'group';
    id: string;
  };
  deadline?: number; // Hours from step start
  actions: StepAction[];
  conditions?: StepCondition[];
  nextSteps: string[];
}

export interface WorkflowInstance extends AuditableEntity {
  templateId: string;
  documentId: string;
  status: WorkflowStatus;
  currentStep: string;
  history: StepHistory[];
  dueDate?: Date;
}

export interface StepHistory {
  stepId: string;
  action: StepAction;
  performedBy: string;
  performedAt: Date;
  comments?: string;
  attachments?: string[];
}

export interface StepCondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than';
  value: string | number | boolean;
}

export type WorkflowType = 'approval' | 'review' | 'publication' | 'archival';
export type StepType = 'approval' | 'review' | 'notification' | 'automation';
export type StepAction = 'approve' | 'reject' | 'request_changes' | 'delegate';
export type WorkflowStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';
```