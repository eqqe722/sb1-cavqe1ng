import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Project extends AuditableEntity {
  projectNumber: string;
  name: LocalizedContent;
  description: LocalizedContent;
  type: ProjectType;
  status: ProjectStatus;
  priority: PriorityLevel;
  startDate: Date;
  endDate: Date;
  budget: ProjectBudget;
  phases: ProjectPhase[];
  resources: ProjectResource[];
  milestones: Milestone[];
  risks: Risk[];
}

export interface ProjectPhase extends AuditableEntity {
  name: LocalizedContent;
  description: LocalizedContent;
  startDate: Date;
  endDate: Date;
  status: PhaseStatus;
  deliverables: Deliverable[];
  dependencies: string[]; // Phase IDs
  progress: number;
}

export interface ProjectBudget {
  planned: BudgetDetails;
  actual: BudgetDetails;
  variance: BudgetDetails;
  currency: string;
}

export interface BudgetDetails {
  labor: number;
  materials: number;
  equipment: number;
  services: number;
  other: number;
  total: number;
}

export interface ProjectResource {
  id: string;
  type: ResourceType;
  name: string;
  role: string;
  allocation: number; // Percentage
  startDate: Date;
  endDate: Date;
  cost: number;
  currency: string;
}

export interface Milestone extends AuditableEntity {
  name: LocalizedContent;
  description: LocalizedContent;
  dueDate: Date;
  status: MilestoneStatus;
  deliverables: Deliverable[];
  dependencies: string[]; // Milestone IDs
}

export interface Deliverable {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  status: DeliverableStatus;
  dueDate: Date;
  assignedTo: string[];
  attachments: string[];
}

export interface Risk {
  id: string;
  description: LocalizedContent;
  probability: RiskProbability;
  impact: RiskImpact;
  status: RiskStatus;
  mitigationPlan: string;
  owner: string;
}

export type ProjectType = 'internal' | 'external' | 'maintenance' | 'research';
export type ProjectStatus = 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
export type PhaseStatus = 'not_started' | 'in_progress' | 'completed' | 'delayed';
export type MilestoneStatus = 'pending' | 'achieved' | 'delayed' | 'at_risk';
export type DeliverableStatus = 'not_started' | 'in_progress' | 'review' | 'approved' | 'rejected';
export type ResourceType = 'employee' | 'contractor' | 'equipment' | 'material';
export type PriorityLevel = 'critical' | 'high' | 'medium' | 'low';
export type RiskProbability = 'very_low' | 'low' | 'medium' | 'high' | 'very_high';
export type RiskImpact = 'minimal' | 'moderate' | 'significant' | 'severe' | 'critical';
export type RiskStatus = 'identified' | 'assessed' | 'mitigated' | 'closed';