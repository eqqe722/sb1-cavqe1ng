```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Vendor extends AuditableEntity {
  vendorNumber: string;
  name: LocalizedContent;
  type: VendorType;
  category: VendorCategory;
  status: VendorStatus;
  registration: {
    taxNumber: string;
    commercialRegister: string;
    chamberOfCommerce?: string;
    importLicense?: string;
    validUntil: Date;
  };
  contact: {
    primaryContact: string;
    email: string;
    phone: string;
    website?: string;
    address: {
      street: string;
      city: string;
      governorate: string;
      postalCode?: string;
    };
  };
  financials: {
    bankName: string;
    accountNumber: string;
    currency: string;
    creditTerms: string;
    taxExempt: boolean;
  };
  qualifications: Qualification[];
  performance: PerformanceMetric[];
  documents: VendorDocument[];
}

export interface Qualification {
  type: QualificationType;
  certificate: string;
  issuer: string;
  issueDate: Date;
  expiryDate: Date;
  status: 'valid' | 'expired' | 'pending';
  attachments: string[];
}

export interface PerformanceMetric {
  period: string;
  metrics: {
    qualityScore: number;
    deliveryScore: number;
    priceScore: number;
    responseScore: number;
    complianceScore: number;
  };
  incidents: number;
  complaints: number;
  totalOrders: number;
  totalValue: number;
}

export interface VendorDocument {
  type: DocumentType;
  number: string;
  issueDate: Date;
  expiryDate?: Date;
  issuingAuthority: string;
  fileUrl: string;
  status: 'active' | 'expired';
}

export type VendorType = 
  | 'manufacturer' 
  | 'distributor' 
  | 'service_provider' 
  | 'contractor';

export type VendorCategory = 
  | 'strategic' 
  | 'preferred' 
  | 'approved' 
  | 'provisional';

export type VendorStatus = 
  | 'active' 
  | 'inactive' 
  | 'blacklisted' 
  | 'pending_approval';

export type QualificationType = 
  | 'quality' 
  | 'safety' 
  | 'environmental' 
  | 'technical';

export type DocumentType = 
  | 'registration' 
  | 'license' 
  | 'certification' 
  | 'financial';
```