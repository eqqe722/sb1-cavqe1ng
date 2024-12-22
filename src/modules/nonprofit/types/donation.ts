```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Donation extends AuditableEntity {
  donationNumber: string;
  donor: {
    id: string;
    name: LocalizedContent;
    type: DonorType;
  };
  type: DonationType;
  amount: number;
  currency: string;
  category: DonationCategory;
  campaign?: string;
  paymentMethod: PaymentMethod;
  isAnonymous: boolean;
  isRecurring: boolean;
  frequency?: RecurrenceFrequency;
  zakatDetails?: ZakatDetails;
  receipt: {
    number: string;
    date: Date;
    issuedBy: string;
  };
  allocation: {
    program: string;
    percentage: number;
  }[];
}

export interface ZakatDetails {
  type: ZakatType;
  calculationMethod: string;
  wealthSource: string[];
  nisabReference: 'gold' | 'silver';
  hijriYear: string;
  scholarApproval?: {
    scholarId: string;
    date: Date;
    notes?: string;
  };
}

export type DonorType = 'individual' | 'organization' | 'government' | 'anonymous';
export type DonationType = 'zakat' | 'sadaqah' | 'waqf' | 'general';
export type DonationCategory = 'monetary' | 'in_kind' | 'services';
export type PaymentMethod = 'cash' | 'bank_transfer' | 'card' | 'digital_wallet';
export type RecurrenceFrequency = 'monthly' | 'quarterly' | 'annually';
export type ZakatType = 'mal' | 'fitr' | 'business' | 'agriculture' | 'livestock';
```