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

export type Status = 'active' | 'inactive' | 'pending' | 'archived';