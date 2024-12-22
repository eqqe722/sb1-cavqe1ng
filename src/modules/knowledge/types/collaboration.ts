```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Project extends AuditableEntity {
  projectNumber: string;
  title: LocalizedContent;
  description: LocalizedContent;
  type: ProjectType;
  status: ProjectStatus;
  team: TeamMember[];
  tasks: CollaborationTask[];
  documents: SharedDocument[];
  discussions: Discussion[];
  timeline: {
    startDate: Date;
    endDate: Date;
    milestones: Milestone[];
  };
}

export interface TeamMember {
  userId: string;
  role: MemberRole;
  permissions: Permission[];
  contributions: Contribution[];
}

export interface CollaborationTask {
  id: string;
  title: LocalizedContent;
  assignedTo: string[];
  status: TaskStatus;
  priority: PriorityLevel;
  dueDate: Date;
  comments: Comment[];
}

export interface SharedDocument {
  id: string;
  title: LocalizedContent;
  version: string;
  url: string;
  sharedBy: string;
  sharedAt: Date;
  permissions: Permission[];
}

export interface Discussion {
  id: string;
  topic: LocalizedContent;
  messages: Message[];
  participants: string[];
  tags: string[];
  status: 'active' | 'resolved' | 'archived';
}

export interface Message {
  id: string;
  content: LocalizedContent;
  author: string;
  timestamp: Date;
  attachments?: string[];
  reactions: Reaction[];
}

export type ProjectType = 
  | 'research' 
  | 'documentation' 
  | 'training' 
  | 'improvement';

export type ProjectStatus = 
  | 'planning' 
  | 'active' 
  | 'review' 
  | 'completed';

export type MemberRole = 
  | 'leader' 
  | 'contributor' 
  | 'reviewer' 
  | 'observer';

export type Permission = 
  | 'view' 
  | 'edit' 
  | 'comment' 
  | 'share';

export type TaskStatus = 
  | 'pending' 
  | 'in_progress' 
  | 'review' 
  | 'completed';

export type PriorityLevel = 
  | 'urgent' 
  | 'high' 
  | 'medium' 
  | 'low';
```