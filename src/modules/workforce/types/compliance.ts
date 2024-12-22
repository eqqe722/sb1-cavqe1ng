```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface ComplianceRecord extends AuditableEntity {
  recordNumber: string;
  contractorId: string;
  type: ComplianceType;
  status: ComplianceStatus;
  requirements: Requirement[];
  violations: Violation[];
  inspections: Inspection[];
  documents: ComplianceDocument[];
}

export interface Requirement {
  code: string;
  description: LocalizedContent;
  category: RequirementCategory;
  deadline: Date;
  status: 'pending' | 'compliant' | 'non_compliant';
  evidence?: string[];
}

export interface Violation {
  date: Date;
  type: ViolationType;
  description: LocalizedContent;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved';
  resolution?: {
    action: string;
    date: Date;
    verifiedBy: string;
  };
}

export interface Inspection {
  date: Date;
  inspector: string;
  type: InspectionType;
  findings: Finding[];
  recommendations: string[];
  followUpDate?: Date;
}

export interface ComplianceDocument {
  type: DocumentType;
  number: string;
  issueDate: Date;
  expiryDate: Date;
  issuingAuthority: string;
  status: 'valid' | 'expired' | 'revoked';
}

export type ComplianceType = 
  | 'labor_law' 
  | 'safety' 
  | 'environmental' 
  | 'social_security';

export type ComplianceStatus = 
  | 'compliant' 
  | 'non_compliant' 
  | 'under_review' 
  | 'suspended';

export type RequirementCategory = 
  | 'permits' 
  | 'licenses' 
  | 'certifications' 
  | 'insurance';

export type ViolationType = 
  | 'labor_rights' 
  | 'safety_violation' 
  | 'environmental' 
  | 'documentation';

export type InspectionType = 
  | 'routine' 
  | 'surprise' 
  | 'incident' 
  | 'followup';

export type DocumentType = 
  | 'work_permit' 
  | 'safety_cert' 
  | 'insurance' 
  | 'training';
```