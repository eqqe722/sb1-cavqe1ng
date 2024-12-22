```typescript
// Core Database Types and Interfaces

// Common Types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface AuditableEntity extends BaseEntity {
  createdBy: string;
  updatedBy: string;
  deletedBy?: string;
}

export interface LocalizedContent {
  ar: string;
  en?: string;
}

// Master Data
export interface Organization extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: 'headquarters' | 'branch' | 'department' | 'unit';
  parentId?: string;
  status: 'active' | 'inactive';
  address: Address;
  contact: ContactInfo;
  settings: OrganizationSettings;
}

export interface Address {
  street: string;
  district: string;
  city: string;
  governorate: string;
  postalCode?: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  fax?: string;
  website?: string;
  primaryContact?: string;
}

export interface OrganizationSettings {
  fiscalYear: {
    startMonth: number;
    startDay: number;
  };
  currency: string;
  language: string;
  timezone: string;
  taxIdentification?: string;
}

// User Management
export interface User extends AuditableEntity {
  username: string;
  email: string;
  passwordHash: string;
  firstName: LocalizedContent;
  lastName: LocalizedContent;
  organizationId: string;
  role: UserRole;
  permissions: Permission[];
  preferences: UserPreferences;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin?: Date;
}

export interface UserRole extends AuditableEntity {
  name: LocalizedContent;
  description: LocalizedContent;
  permissions: Permission[];
  level: number;
}

export interface Permission {
  module: string;
  action: 'view' | 'create' | 'update' | 'delete' | 'approve';
  constraints?: Record<string, any>;
}

export interface UserPreferences {
  language: 'ar' | 'en';
  theme: 'light' | 'dark';
  notifications: NotificationPreference[];
  dashboard: DashboardPreference;
}

// Document Management
export interface Document extends AuditableEntity {
  number: string;
  type: DocumentType;
  title: LocalizedContent;
  description: LocalizedContent;
  version: string;
  status: DocumentStatus;
  category: string;
  tags: string[];
  metadata: DocumentMetadata;
  content: DocumentContent;
  access: AccessControl;
  workflow?: string;
}

export interface DocumentMetadata {
  author: string;
  department: string;
  expiryDate?: Date;
  isConfidential: boolean;
  customFields: Record<string, any>;
}

export interface DocumentContent {
  fileUrl: string;
  mimeType: string;
  size: number;
  checksum: string;
  thumbnail?: string;
}

export interface AccessControl {
  level: 'public' | 'internal' | 'confidential' | 'restricted';
  groups: string[];
  users: string[];
  permissions: string[];
}

// Workflow
export interface Workflow extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  description: LocalizedContent;
  type: WorkflowType;
  steps: WorkflowStep[];
  status: 'active' | 'inactive';
}

export interface WorkflowStep {
  sequence: number;
  type: 'approval' | 'notification' | 'action';
  name: LocalizedContent;
  assignee: {
    type: 'user' | 'role' | 'department';
    id: string;
  };
  actions: string[];
  conditions?: WorkflowCondition[];
  timeout?: number;
}

export interface WorkflowCondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'contains';
  value: any;
}

// Common Types
export type DocumentType = 
  | 'contract' 
  | 'invoice' 
  | 'report' 
  | 'policy' 
  | 'procedure';

export type DocumentStatus = 
  | 'draft' 
  | 'review' 
  | 'approved' 
  | 'published' 
  | 'archived';

export type WorkflowType = 
  | 'document_approval' 
  | 'purchase_approval' 
  | 'leave_request' 
  | 'expense_claim';

export type NotificationPreference = {
  type: string;
  email: boolean;
  inApp: boolean;
  sms: boolean;
};

export type DashboardPreference = {
  layout: string;
  widgets: string[];
  refreshInterval: number;
};
```