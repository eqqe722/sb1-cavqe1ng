```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Campaign extends AuditableEntity {
  campaignNumber: string;
  title: LocalizedContent;
  type: CampaignType;
  status: CampaignStatus;
  schedule: {
    startDate: Date;
    endDate: Date;
    timezone: string;
  };
  targeting: {
    segments: string[];
    locations: string[]; // Iraqi governorates
    demographics: Demographics;
    interests: string[];
  };
  budget: {
    allocated: number;
    spent: number;
    currency: string;
  };
  channels: CampaignChannel[];
  content: CampaignContent[];
  metrics: CampaignMetrics;
}

export interface CampaignChannel {
  type: ChannelType;
  platform: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  metrics: ChannelMetrics;
}

export interface CampaignContent {
  type: ContentType;
  title: LocalizedContent;
  description: LocalizedContent;
  mediaUrls: string[];
  callToAction: string;
  language: 'ar' | 'en' | 'ku';
}

export interface CampaignMetrics {
  reach: number;
  impressions: number;
  engagement: number;
  conversions: number;
  roi: number;
}

export interface Demographics {
  ageRanges: string[];
  genders: string[];
  languages: string[];
  occupations: string[];
}

export type CampaignType = 
  | 'awareness' 
  | 'promotion' 
  | 'seasonal' 
  | 'religious' 
  | 'social';

export type CampaignStatus = 
  | 'draft' 
  | 'scheduled' 
  | 'active' 
  | 'paused' 
  | 'completed';

export type ChannelType = 
  | 'social_media' 
  | 'email' 
  | 'sms' 
  | 'whatsapp' 
  | 'traditional';

export type ContentType = 
  | 'image' 
  | 'video' 
  | 'text' 
  | 'carousel' 
  | 'story';
```