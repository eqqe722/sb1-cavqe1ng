import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface ComplianceRequirement extends AuditableEntity {
  requirementId: string;
  title: LocalizedContent;
  description: LocalizedContent;
  framework: string;
  category: string;
  applicability: string[];
  controls: ComplianceControl[];
  assessments: ComplianceAssessment[];
  documents: ComplianceDocument[];
  status: ComplianceStatus;
}

export interface ComplianceControl {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  type: ControlType;
  owner: string;
  evidence: string[];
  status: ControlStatus;
}

export interface ComplianceAssessment {
  id: string;
  date: Date;
  assessor: string;
  findings: Finding[];
  score: number;
  recommendations: string[];
  nextReview: Date;
}

export interface Finding {
  id: string;
  description: LocalizedContent;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'closed';
  remediation: string;
  dueDate: Date;
}

export interface ComplianceDocument {
  id: string;
  title: LocalizedContent;
  type: DocumentType;
  version: string;
  url: string;
  approvedBy: string;
  approvalDate: Date;
  expiryDate?: Date;
}

export type ComplianceStatus = 'compliant' | 'partially_compliant' | 'non_compliant' | 'under_review';
export type ControlType = 'policy' | 'procedure' | 'technical' | 'physical';
export type ControlStatus = 'implemented' | 'partially_implemented' | 'not_implemented';
export type DocumentType = 'policy' | 'procedure' | 'evidence' | 'report' | 'certification';