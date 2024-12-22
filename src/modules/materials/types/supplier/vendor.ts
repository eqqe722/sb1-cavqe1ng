```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface Supplier extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: SupplierType;
  categories: string[];
  contact: {
    email: string;
    phone: string;
    website?: string;
    address: string;
  };
  registration: {
    taxNumber: string;
    commercialRegister: string;
    importLicense?: string;
    validUntil: Date;
  };
  evaluation: SupplierEvaluation;
  certifications: Certification[];
  status: SupplierStatus;
}

export interface SupplierEvaluation {
  criteria: {
    qualityScore: number;
    deliveryScore: number;
    priceScore: number;
    serviceScore: number;
    complianceScore: number;
  };
  totalScore: number;
  lastEvaluation: Date;
  nextEvaluation: Date;
  history: EvaluationHistory[];
}

export interface Certification {
  type: CertificationType;
  number: string;
  issuer: string;
  issueDate: Date;
  expiryDate: Date;
  status: 'valid' | 'expired' | 'suspended';
}

export type SupplierType = 'manufacturer' | 'distributor' | 'contractor' | 'service';
export type SupplierStatus = 'active' | 'inactive' | 'blacklisted' | 'pending';
export type CertificationType = 'iso' | 'quality' | 'environmental' | 'safety';
```