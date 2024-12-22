```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface Document extends AuditableEntity {
  documentNumber: string;
  title: LocalizedContent;
  description: LocalizedContent;
  type: DocumentType;
  category: DocumentCategory;
  classification: DocumentClassification;
  language: 'ar' | 'en' | 'both';
  version: Version;
  metadata: DocumentMetadata;
  content: DocumentContent;
  access: AccessControl;
  workflow?: string; // Reference to workflow instance
  retention: RetentionPolicy;
  status: DocumentStatus;
  tags: string[];
}

export interface Version {
  number: string;
  createdAt: Date;
  createdBy: string;
  changes: LocalizedContent;
  fileUrl: string;
  size: number;
  checksum: string;
  previousVersion?: string;
}

export interface DocumentMetadata {
  author: string;
  department: string;
  referenceNumber?: string;
  expiryDate?: Date;
  isConfidential: boolean;
  isOriginal: boolean;
  requiresStamp: boolean;
  customFields: Record<string, any>;
}

export interface DocumentContent {
  fileUrl: string;
  mimeType: string;
  size: number;
  encoding: string;
  thumbnail?: string;
  textContent?: string; // For searchable documents
  translations?: {
    ar?: string;
    en?: string;
  };
}

export interface AccessControl {
  owner: string;
  department: string;
  permissions: Permission[];
  groups: string[];
  shareLinks?: ShareLink[];
}

export interface Permission {
  userId: string;
  rights: AccessRight[];
  grantedBy: string;
  grantedAt: Date;
  expiresAt?: Date;
}

export interface ShareLink {
  id: string;
  url: string;
  expiresAt: Date;
  accessCount: number;
  maxAccess?: number;
  password?: boolean;
  rights: AccessRight[];
}

export interface RetentionPolicy {
  duration: number; // In days
  expiryAction: 'archive' | 'delete' | 'review';
  legalHold: boolean;
  reviewers: string[];
}

export type DocumentType = 'letter' | 'contract' | 'report' | 'license' | 'certificate' | 'policy' | 'procedure';
export type DocumentCategory = 'administrative' | 'legal' | 'financial' | 'hr' | 'technical';
export type DocumentClassification = 'public' | 'internal' | 'confidential' | 'restricted';
export type DocumentStatus = 'draft' | 'review' | 'approved' | 'published' | 'archived' | 'expired';
export type AccessRight = 'view' | 'edit' | 'delete' | 'share' | 'print' | 'download';
```