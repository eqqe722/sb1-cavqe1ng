```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface CustomerFeedback extends AuditableEntity {
  feedbackNumber: string;
  orderId?: string;
  type: FeedbackType;
  rating: {
    food: number;
    service: number;
    ambiance: number;
    cleanliness: number;
    overall: number;
  };
  comments?: LocalizedContent;
  sentiment: SentimentType;
  items?: ItemFeedback[];
  response?: FeedbackResponse;
  status: FeedbackStatus;
}

export interface ItemFeedback {
  itemId: string;
  name: LocalizedContent;
  rating: number;
  comments?: string;
  issues?: string[];
}

export interface FeedbackResponse {
  respondedBy: string;
  date: Date;
  content: LocalizedContent;
  followUpRequired: boolean;
  resolution?: string;
}

export interface LoyaltyProgram extends AuditableEntity {
  memberNumber: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  tier: LoyaltyTier;
  points: {
    balance: number;
    lifetime: number;
    expiring: number;
    expiryDate?: Date;
  };
  preferences: {
    favoriteItems: string[];
    dietaryRestrictions?: string[];
    specialOccasions?: {
      type: string;
      date: Date;
    }[];
  };
  status: 'active' | 'inactive';
}

export type FeedbackType = 
  | 'dining' 
  | 'delivery' 
  | 'catering' 
  | 'event';

export type SentimentType = 
  | 'positive' 
  | 'neutral' 
  | 'negative';

export type FeedbackStatus = 
  | 'new' 
  | 'in_review' 
  | 'responded' 
  | 'closed';

export type LoyaltyTier = 
  | 'bronze' 
  | 'silver' 
  | 'gold' 
  | 'platinum';
```