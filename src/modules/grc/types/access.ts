```typescript
import { AuditableEntity } from '../../../types/database/common';

export interface AccessPolicy extends AuditableEntity {
  policyId: string;
  name: string;
  description: string;
  type: PolicyType;
  rules: AccessRule[];
  status: PolicyStatus;
  effectiveDate: Date;
  expiryDate?: Date;
  reviewCycle: number; // Days
  lastReview?: Date;
}

export interface AccessRule {
  id: string;
  resource: string;
  action: AccessAction;
  conditions?: AccessCondition[];
  priority: number;
  effect: 'allow' | 'deny';
}

export interface AccessCondition {
  attribute: string;
  operator: ConditionOperator;
  value: string | number | boolean;
}

export interface AccessRequest extends AuditableEntity {
  requestId: string;
  requestor: string;
  resource: string;
  action: AccessAction;
  justification: string;
  duration?: {
    startDate: Date;
    endDate: Date;
  };
  status: RequestStatus;
  approvals: AccessApproval[];
}

export interface AccessApproval {
  level: number;
  approver: string;
  status: ApprovalStatus;
  date?: Date;
  comments?: string;
}

export type PolicyType = 
  | 'system' 
  | 'data' 
  | 'physical' 
  | 'network';

export type PolicyStatus = 
  | 'draft' 
  | 'active' 
  | 'inactive' 
  | 'expired';

export type AccessAction = 
  | 'read' 
  | 'write' 
  | 'delete' 
  | 'execute' 
  | 'approve';

export type ConditionOperator = 
  | 'equals' 
  | 'not_equals' 
  | 'contains' 
  | 'greater_than' 
  | 'less_than';

export type RequestStatus = 
  | 'pending' 
  | 'approved' 
  | 'rejected' 
  | 'expired';

export type ApprovalStatus = 
  | 'pending' 
  | 'approved' 
  | 'rejected';
```