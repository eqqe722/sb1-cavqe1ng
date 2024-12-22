```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface ResearchIdea extends AuditableEntity {
  ideaNumber: string;
  title: LocalizedContent;
  description: LocalizedContent;
  category: IdeaCategory;
  status: IdeaStatus;
  proposer: {
    id: string;
    name: string;
    department: string;
    institution: string;
  };
  impact: {
    scientific: ImpactLevel;
    economic: ImpactLevel;
    social: ImpactLevel;
  };
  requirements: {
    resources: string[];
    estimatedBudget: number;
    timeline: number; // months
  };
  reviews: IdeaReview[];
  attachments: string[];
}

export interface IdeaReview {
  reviewerId: string;
  date: Date;
  criteria: {
    novelty: number;
    feasibility: number;
    impact: number;
    alignment: number;
  };
  comments: string;
  recommendation: ReviewRecommendation;
}

export type IdeaCategory = 
  | 'technology' 
  | 'process' 
  | 'product' 
  | 'methodology';

export type IdeaStatus = 
  | 'submitted' 
  | 'under_review' 
  | 'approved' 
  | 'rejected' 
  | 'implemented';

export type ImpactLevel = 
  | 'high' 
  | 'medium' 
  | 'low';

export type ReviewRecommendation = 
  | 'proceed' 
  | 'revise' 
  | 'reject';
```