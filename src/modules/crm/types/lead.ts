```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Lead extends AuditableEntity {
  leadNumber: string;
  company: LocalizedContent;
  contactPerson: {
    name: string;
    title: string;
    email: string;
    phone: string;
    preferredLanguage: 'ar' | 'en';
  };
  source: LeadSource;
  status: LeadStatus;
  rating: LeadRating;
  industry: string;
  region: string; // Iraqi governorate
  estimatedValue: {
    amount: number;
    currency: string;
  };
  assignedTo: string;
  notes: LeadNote[];
  activities: LeadActivity[];
  tags: string[];
}

export interface LeadNote {
  id: string;
  content: LocalizedContent;
  createdBy: string;
  createdAt: Date;
  type: 'general' | 'followup' | 'meeting';
}

export interface LeadActivity {
  id: string;
  type: ActivityType;
  date: Date;
  description: LocalizedContent;
  outcome?: string;
  nextAction?: string;
  performedBy: string;
  location?: string;
}

export type LeadSource = 
  | 'website' 
  | 'referral' 
  | 'exhibition' 
  | 'social_media' 
  | 'cold_call' 
  | 'agent';

export type LeadStatus = 
  | 'new' 
  | 'contacted' 
  | 'qualified' 
  | 'negotiating' 
  | 'converted' 
  | 'lost';

export type LeadRating = 'hot' | 'warm' | 'cold';

export type ActivityType = 
  | 'call' 
  | 'meeting' 
  | 'email' 
  | 'visit' 
  | 'proposal';
```