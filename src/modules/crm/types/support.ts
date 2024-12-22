```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface SupportTicket extends AuditableEntity {
  ticketNumber: string;
  customer: {
    id: string;
    name: LocalizedContent;
  };
  type: TicketType;
  priority: TicketPriority;
  status: TicketStatus;
  subject: LocalizedContent;
  description: LocalizedContent;
  category: string;
  assignedTo: string;
  dueDate?: Date;
  resolution?: LocalizedContent;
  feedback?: TicketFeedback;
  activities: TicketActivity[];
  attachments: string[];
}

export interface TicketActivity {
  id: string;
  type: ActivityType;
  date: Date;
  performedBy: string;
  description: LocalizedContent;
  timeSpent?: number;
  isInternal: boolean;
}

export interface TicketFeedback {
  rating: number;
  comment?: string;
  submittedAt: Date;
  submittedBy: string;
}

export type TicketType = 
  | 'issue' 
  | 'request' 
  | 'complaint' 
  | 'inquiry';

export type TicketPriority = 
  | 'critical' 
  | 'high' 
  | 'medium' 
  | 'low';

export type TicketStatus = 
  | 'new' 
  | 'assigned' 
  | 'in_progress' 
  | 'pending' 
  | 'resolved' 
  | 'closed';

export type ActivityType = 
  | 'comment' 
  | 'status_change' 
  | 'assignment' 
  | 'resolution';
```