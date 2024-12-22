import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Department extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  description: LocalizedContent;
  managerId: string;
  parentId?: string;
  costCenter: string;
  status: 'active' | 'inactive';
  positions: Position[];
}

export interface Position extends AuditableEntity {
  code: string;
  title: LocalizedContent;
  description: LocalizedContent;
  department: string;
  grade: string;
  reportingTo: string;
  requirements: PositionRequirement;
  status: 'active' | 'inactive';
}

export interface PositionRequirement {
  education: string[];
  experience: number;
  skills: string[];
  certifications: string[];
  languages: Language[];
}

export interface Language {
  code: string;
  name: string;
  level: 'basic' | 'intermediate' | 'advanced' | 'native';
}

export interface OrganizationChart {
  id: string;
  version: string;
  effectiveDate: Date;
  status: 'draft' | 'active' | 'archived';
  nodes: OrgChartNode[];
}

export interface OrgChartNode {
  id: string;
  type: 'position' | 'department';
  title: LocalizedContent;
  level: number;
  parentId?: string;
  children: string[];
}