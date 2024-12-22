import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Audit extends AuditableEntity {
  auditId: string;
  title: LocalizedContent;
  type: AuditType;
  scope: LocalizedContent;
  period: {
    startDate: Date;
    endDate: Date;
  };
  auditor: string;
  status: AuditStatus;
  findings: AuditFinding[];
  recommendations: AuditRecommendation[];
  documents: AuditDocument[];
}

export interface AuditFinding {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  category: FindingCategory;
  severity: FindingSeverity;
  status: FindingStatus;
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
  priority: 'low' | 'medium' | 'high';
  implementationStatus: 'pending' | 'implemented' | 'rejected';
  implementationDate?: Date;
}

export type AuditType = 'internal' | 'external' | 'regulatory' | 'compliance';
export type AuditStatus = 'planned' | 'in_progress' | 'draft' | 'final' | 'closed';
export type FindingCategory = 'control' | 'compliance' | 'process' | 'security';
export type FindingSeverity = 'low' | 'medium' | 'high' | 'critical';
export type FindingStatus = 'open' | 'in_progress' | 'closed' | 'accepted';