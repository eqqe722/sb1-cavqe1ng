import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Risk extends AuditableEntity {
  riskId: string;
  title: LocalizedContent;
  description: LocalizedContent;
  category: RiskCategory;
  type: RiskType;
  impact: RiskImpact;
  likelihood: RiskLikelihood;
  status: RiskStatus;
  owner: string;
  assessments: RiskAssessment[];
  controls: RiskControl[];
  mitigationPlan: MitigationPlan;
  reviewDate: Date;
}

export interface RiskAssessment {
  id: string;
  date: Date;
  assessor: string;
  inherentRisk: RiskScore;
  residualRisk: RiskScore;
  findings: string[];
  recommendations: string[];
}

export interface RiskControl {
  id: string;
  name: LocalizedContent;
  type: ControlType;
  frequency: ControlFrequency;
  effectiveness: ControlEffectiveness;
  owner: string;
  lastTested?: Date;
  nextTest?: Date;
}

export interface MitigationPlan {
  actions: MitigationAction[];
  budget: number;
  timeline: {
    startDate: Date;
    endDate: Date;
  };
  status: 'planned' | 'in_progress' | 'completed';
}

export interface MitigationAction {
  id: string;
  description: LocalizedContent;
  assignedTo: string;
  dueDate: Date;
  status: 'pending' | 'in_progress' | 'completed';
  cost: number;
}

export type RiskCategory = 'strategic' | 'operational' | 'financial' | 'compliance' | 'reputational';
export type RiskType = 'internal' | 'external';
export type RiskImpact = 'low' | 'medium' | 'high' | 'critical';
export type RiskLikelihood = 'rare' | 'unlikely' | 'possible' | 'likely' | 'certain';
export type RiskStatus = 'identified' | 'assessed' | 'mitigated' | 'accepted' | 'closed';
export type ControlType = 'preventive' | 'detective' | 'corrective';
export type ControlFrequency = 'continuous' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annual';
export type ControlEffectiveness = 'effective' | 'partially_effective' | 'ineffective';
export type RiskScore = 1 | 2 | 3 | 4 | 5;