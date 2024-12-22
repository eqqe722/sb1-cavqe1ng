```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Customer extends AuditableEntity {
  customerNumber: string;
  name: string;
  email: string;
  phone: string;
  type: CustomerType;
  status: CustomerStatus;
  addresses: DeliveryAddress[];
  preferences: {
    language: 'ar' | 'en';
    currency: string;
    newsletter: boolean;
    marketing: boolean;
  };
  profile: {
    gender?: string;
    birthDate?: Date;
    occupation?: string;
    interests?: string[];
  };
  loyalty: {
    points: number;
    tier: LoyaltyTier;
    joinDate: Date;
    history: LoyaltyActivity[];
  };
  orders: {
    total: number;
    lastOrder?: Date;
    averageValue: number;
  };
  payment: {
    methods: SavedPaymentMethod[];
    defaultMethod?: string;
  };
}

export interface DeliveryAddress {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  street: string;
  district: string;
  city: string;
  governorate: string;
  landmark?: string;
  isDefault: boolean;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface SavedPaymentMethod {
  id: string;
  type: PaymentType;
  details: {
    cardType?: string;
    last4?: string;
    expiryDate?: string;
    holderName?: string;
  };
  isDefault: boolean;
}

export interface LoyaltyActivity {
  date: Date;
  type: ActivityType;
  points: number;
  reference: string;
  description: string;
}

export type CustomerType = 
  | 'individual' 
  | 'business' 
  | 'government';

export type CustomerStatus = 
  | 'active' 
  | 'inactive' 
  | 'blocked' 
  | 'pending';

export type LoyaltyTier = 
  | 'bronze' 
  | 'silver' 
  | 'gold' 
  | 'platinum';

export type PaymentType = 
  | 'card' 
  | 'bank_account' 
  | 'mobile_wallet' 
  | 'prepaid_card';

export type ActivityType = 
  | 'earn' 
  | 'redeem' 
  | 'expire' 
  | 'adjust';
```