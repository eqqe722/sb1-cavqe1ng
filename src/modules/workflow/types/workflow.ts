import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface WorkflowDefinition extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  description: LocalizedContent;
  type: WorkflowType;
  category: WorkflowCategory;
  steps: WorkflowStep[];
  status: 'active' | 'draft' | 'archived';
  metadata: Record<string, unknown>;
}

export interface WorkflowStep {
  id: string;
  name: LocalizedContent;
  type: StepType;
  assignee: StepAssignee;
  actions: StepAction[];
  conditions?: StepCondition[];
  timeouts?: StepTimeout;
  nextSteps: string[];
}

export interface StepAssignee {
  type: 'user' | 'role' | 'department' | 'dynamic';
  value: string;
  fallback?: string;
}

export interface StepAction {
  id: string;
  type: ActionType;
  name: LocalizedContent;
  metadata: Record<string, unknown>;
}

export interface StepCondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'contains';
  value: string | number | boolean;
}

export interface StepTimeout {
  duration: number;
  action: 'escalate' | 'auto_approve' | 'auto_reject' | 'notify';
  escalateTo?: string;
}

export type WorkflowType = 'approval' | 'review' | 'notification' | 'process';
export type WorkflowCategory = 'hr' | 'finance' | 'procurement' | 'it' | 'general';
export type StepType = 'approval' | 'review' | 'notification' | 'system' | 'manual';
export type ActionType = 'approve' | 'reject' | 'request_changes' | 'delegate' | 'comment';