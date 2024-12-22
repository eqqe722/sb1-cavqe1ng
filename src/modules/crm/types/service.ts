import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface ServiceTicket extends AuditableEntity {
  ticketNumber: string;
  customer: {
    id: string;
    name: LocalizedContent;
  };
  type: TicketType;
  priority: TicketPriority;
  status: TicketStatus;
  subject: string;
  description: string;
  category: string;
  assignedTo: string;
  dueDate?: Date;
  resolution?: string;
  attachments: string[];
  activities: TicketActivity[];
}

export interface TicketActivity {
  id: string;
  type: ActivityType;
  date: Date;
  performedBy: string;
  description: string;
  timeSpent?: number;
  isInternal: boolean;
}

export type TicketType = 'issue' | 'request' | 'complaint' | 'inquiry';
export type TicketPriority = 'critical' | 'high' | 'medium' | 'low';
export type TicketStatus = 'new' | 'assigned' | 'in_progress' | 'pending' | 'resolved' | 'closed';
export type ActivityType = 'comment' | 'status_change' | 'assignment' | 'resolution';