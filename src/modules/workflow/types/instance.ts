import { AuditableEntity } from '../../../types/database/common';
import { WorkflowDefinition, WorkflowStep } from './workflow';

export interface WorkflowInstance extends AuditableEntity {
  instanceId: string;
  definitionId: string;
  title: string;
  initiator: string;
  currentStep: string;
  status: InstanceStatus;
  priority: PriorityLevel;
  dueDate?: Date;
  data: Record<string, unknown>;
  history: StepHistory[];
  attachments: Attachment[];
}

export interface StepHistory {
  stepId: string;
  action: string;
  performedBy: string;
  performedAt: Date;
  comments?: string;
  attachments?: string[];
  metadata: Record<string, unknown>;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export type InstanceStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'rejected';
export type PriorityLevel = 'low' | 'medium' | 'high' | 'urgent';