```typescript
import { AuditableEntity } from '../../../../types/database/common';

export interface AuditLog extends AuditableEntity {
  documentId: string;
  action: AuditAction;
  performedBy: string;
  details: AuditDetails;
  ipAddress: string;
  userAgent: string;
}

export interface AuditDetails {
  previousState?: Record<string, any>;
  newState?: Record<string, any>;
  changes: string[];
  metadata: Record<string, any>;
}

export type AuditAction =
  | 'create'
  | 'view'
  | 'edit'
  | 'delete'
  | 'download'
  | 'print'
  | 'share'
  | 'change_permission'
  | 'change_status'
  | 'version_create';
```