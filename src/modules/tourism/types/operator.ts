```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface TourOperator extends AuditableEntity {
  operatorNumber: string;
  name: LocalizedContent;
  type: OperatorType;
  license: {
    number: string;
    issuedBy: string;
    issueDate: Date;
    expiryDate: Date;
    category: string;
  };
  contact: {
    primaryContact: string;
    phone: string;
    email: string;
    website?: string;
    address: {
      street: string;
      city: string;
      governorate: string;
    };
  };
  services: {
    destinations: string[];
    packageTypes: string[];
    languages: string[];
    specializations: string[];
  };
  compliance: {
    tourismBoard: string;
    religiousAffairs: string;
    insurance: string;
  };
  ratings: {
    overallRating: number;
    serviceQuality: number;
    reliability: number;
    customerFeedback: number;
    reviews: OperatorReview[];
  };
  status: OperatorStatus;
}

export interface OperatorReview {
  id: string;
  packageId: string;
  rating: number;
  comment: string;
  reviewer: string;
  date: Date;
  verified: boolean;
}

export interface ServiceAgreement extends AuditableEntity {
  agreementNumber: string;
  operatorId: string;
  type: AgreementType;
  terms: {
    startDate: Date;
    endDate: Date;
    commissionRate: number;
    paymentTerms: string;
  };
  services: string[];
  restrictions?: string[];
  status: AgreementStatus;
}

export type OperatorType = 
  | 'local' 
  | 'international' 
  | 'specialized' 
  | 'combined';

export type OperatorStatus = 
  | 'active' 
  | 'suspended' 
  | 'blacklisted' 
  | 'pending';

export type AgreementType = 
  | 'standard' 
  | 'premium' 
  | 'seasonal' 
  | 'exclusive';

export type AgreementStatus = 
  | 'draft' 
  | 'active' 
  | 'expired' 
  | 'terminated';
```