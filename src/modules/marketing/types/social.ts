```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface SocialMediaAccount extends AuditableEntity {
  platform: SocialPlatform;
  handle: string;
  name: LocalizedContent;
  profileUrl: string;
  metrics: SocialMetrics;
  status: AccountStatus;
  contentCalendar: ContentSchedule[];
  engagementRules: EngagementRule[];
}

export interface SocialMetrics {
  followers: number;
  engagement: number;
  reach: number;
  impressions: number;
  mentions: number;
}

export interface ContentSchedule {
  date: Date;
  time: string;
  content: {
    type: ContentType;
    text: LocalizedContent;
    media?: string[];
    hashtags: string[];
  };
  status: 'scheduled' | 'published' | 'failed';
  performance?: ContentPerformance;
}

export interface EngagementRule {
  type: EngagementType;
  keywords: string[];
  response: LocalizedContent;
  priority: 'high' | 'medium' | 'low';
}

export interface ContentPerformance {
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  clicks: number;
}

export type SocialPlatform = 
  | 'facebook' 
  | 'instagram' 
  | 'twitter' 
  | 'linkedin' 
  | 'tiktok' 
  | 'telegram';

export type AccountStatus = 
  | 'active' 
  | 'inactive' 
  | 'suspended' 
  | 'pending';

export type EngagementType = 
  | 'comment' 
  | 'message' 
  | 'mention' 
  | 'review';
```