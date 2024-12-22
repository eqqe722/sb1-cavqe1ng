```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface LoyaltyProgram extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  description: LocalizedContent;
  rules: LoyaltyRule[];
  tiers: LoyaltyTier[];
  pointsValidity: number; // Days
  status: 'active' | 'inactive';
}

export interface LoyaltyRule {
  type: RuleType;
  condition: {
    field: string;
    operator: 'equals' | 'greater_than' | 'less_than' | 'between';
    value: number | [number, number];
  };
  points: number;
  multiplier?: number;
  validFrom?: Date;
  validTo?: Date;
}

export interface LoyaltyTier {
  code: string;
  name: LocalizedContent;
  requiredPoints: number;
  benefits: TierBenefit[];
  color: string;
}

export interface TierBenefit {
  type: BenefitType;
  value: number;
  description: LocalizedContent;
}

export interface LoyaltyCard {
  cardNumber: string;
  customerId: string;
  tier: string;
  points: {
    balance: number;
    lifetime: number;
    expiring: number;
    expiryDate: Date;
  };
  status: CardStatus;
  issuedAt: Date;
  lastUsed?: Date;
}

export type RuleType = 'purchase' | 'visit' | 'category' | 'product' | 'event';
export type BenefitType = 'discount' | 'points_multiplier' | 'free_delivery' | 'vip_service';
export type CardStatus = 'active' | 'inactive' | 'blocked' | 'expired';
```