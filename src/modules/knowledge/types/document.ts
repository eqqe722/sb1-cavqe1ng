```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface KnowledgeDocument extends AuditableEntity {
  documentNumber: string;
  title: LocalizedContent;
  type: DocumentType;
  category: DocumentCategory;
  content: {
    body: LocalizedContent;
    summary: LocalizedContent;
    keywords: string[];
    attachments: Attachment[];
  };
  metadata: {
    department: string;
    author: string;
    reviewers: string[];
    version: string;
    tags: string[];
  };
  classification: {
    level: SecurityLevel;
    accessGroups: string[];
    restrictions?: string[];
  };
  lifecycle: {
    status: DocumentStatus;
    validFrom: Date;
    validTo?: Date;
    reviewDate: Date;
    archiveDate?: Date;
  };
  references: DocumentReference[];
  metrics: DocumentMetrics;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface DocumentReference {
  documentId: string;
  type: ReferenceType;
  description: LocalizedContent;
}

export interface DocumentMetrics {
  views: number;
  downloads: number;
  shares: number;
  likes: number;
  comments: number;
  lastAccessed: Date;
}

export type DocumentType = 
  | 'policy' 
  | 'procedure' 
  | 'guide' 
  | 'template' 
  | 'report';

export type DocumentCategory = 
  | 'hr' 
  | 'finance' 
  | 'operations' 
  | 'technical' 
  | 'compliance';

export type SecurityLevel = 
  | 'public' 
  | 'internal' 
  | 'confidential' 
  | 'restricted';

export type DocumentStatus = 
  | 'draft' 
  | 'review' 
  | 'approved' 
  | 'published' 
  | 'archived';

export type ReferenceType = 
  | 'related' 
  | 'supersedes' 
  | 'supports' 
  | 'implements';
```