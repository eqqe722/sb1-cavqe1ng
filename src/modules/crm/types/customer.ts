```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Customer extends AuditableEntity {
  customerNumber: string;
  name: LocalizedContent;
  type: CustomerType;
  category: CustomerCategory;
  taxNumber?: string;
  commercialRegister?: string;
  contact: {
    primaryContact: string;
    email: string;
    phone: string;
    fax?: string;
    website?: string;
  };
  address: {
    street: string;
    district: string;
    city: string;
    governorate: string;
    postalCode?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  financials: {
    creditLimit: number;
    paymentTerms: string;
    currency: string;
    taxExempt: boolean;
  };
  classification: {
    segment: CustomerSegment;
    tier: CustomerTier;
    status: CustomerStatus;
  };
  preferences: {
    language: 'ar' | 'en';
    communicationChannel: CommunicationChannel;
    specialInstructions?: string;
  };
}

export type CustomerType = 'company' | 'government' | 'individual';
export type CustomerCategory = 'retail' | 'wholesale' | 'distributor';
export type CustomerSegment = 'sme' | 'corporate' | 'public_sector';
export type CustomerTier = 'platinum' | 'gold' | 'silver' | 'bronze';
export type CustomerStatus = 'active' | 'inactive' | 'blocked';
export type CommunicationChannel = 'email' | 'phone' | 'whatsapp' | 'in_person';
```