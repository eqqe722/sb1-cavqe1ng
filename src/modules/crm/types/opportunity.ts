import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Opportunity extends AuditableEntity {
  opportunityNumber: string;
  title: LocalizedContent;
  customer: {
    id: string;
    name: LocalizedContent;
  };
  stage: OpportunityStage;
  status: OpportunityStatus;
  value: {
    amount: number;
    currency: string;
  };
  probability: number;
  expectedCloseDate: Date;
  products: OpportunityProduct[];
  activities: OpportunityActivity[];
  assignedTo: string;
  competitors?: string[];
  winReason?: string;
  lossReason?: string;
}

export interface OpportunityProduct {
  productId: string;
  name: LocalizedContent;
  quantity: number;
  unitPrice: number;
  discount?: number;
  total: number;
}

export interface OpportunityActivity {
  id: string;
  type: ActivityType;
  date: Date;
  description: string;
  outcome: string;
  nextSteps?: string;
  performedBy: string;
}

export type OpportunityStage = 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
export type OpportunityStatus = 'active' | 'on_hold' | 'cancelled' | 'completed';
export type ActivityType = 'call' | 'email' | 'meeting' | 'proposal' | 'negotiation';