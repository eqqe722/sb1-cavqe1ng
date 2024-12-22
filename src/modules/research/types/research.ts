```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface ResearchProject extends AuditableEntity {
  projectNumber: string;
  title: LocalizedContent;
  abstract: LocalizedContent;
  type: ResearchType;
  status: ProjectStatus;
  domain: ResearchDomain;
  investigators: Investigator[];
  funding: FundingDetails;
  timeline: {
    startDate: Date;
    endDate: Date;
    milestones: Milestone[];
  };
  publications: Publication[];
  patents: Patent[];
}

export interface Investigator {
  id: string;
  name: LocalizedContent;
  role: InvestigatorRole;
  institution: string;
  department: string;
  expertise: string[];
  publications: number;
  citations: number;
}

export interface FundingDetails {
  source: FundingSource;
  grantNumber?: string;
  amount: number;
  currency: string;
  duration: number; // months
  disbursements: Disbursement[];
}

export interface Milestone {
  title: LocalizedContent;
  dueDate: Date;
  deliverables: string[];
  status: MilestoneStatus;
  reviewComments?: string;
}

export interface Publication {
  title: string;
  journal: string;
  date: Date;
  doi?: string;
  type: PublicationType;
  authors: string[];
  citations: number;
  impact?: number;
}

export interface Patent {
  title: LocalizedContent;
  number: string;
  filingDate: Date;
  grantDate?: Date;
  status: PatentStatus;
  inventors: string[];
  assignee: string;
}

export type ResearchType = 
  | 'basic' 
  | 'applied' 
  | 'development' 
  | 'clinical';

export type ResearchDomain = 
  | 'engineering' 
  | 'medical' 
  | 'agricultural' 
  | 'environmental' 
  | 'energy';

export type InvestigatorRole = 
  | 'principal' 
  | 'co_investigator' 
  | 'researcher' 
  | 'advisor';

export type FundingSource = 
  | 'government' 
  | 'university' 
  | 'industry' 
  | 'international';

export type ProjectStatus = 
  | 'proposed' 
  | 'active' 
  | 'suspended' 
  | 'completed';

export type MilestoneStatus = 
  | 'pending' 
  | 'in_progress' 
  | 'completed' 
  | 'delayed';

export type PublicationType = 
  | 'journal' 
  | 'conference' 
  | 'book' 
  | 'patent';

export type PatentStatus = 
  | 'filed' 
  | 'published' 
  | 'granted' 
  | 'rejected';
```