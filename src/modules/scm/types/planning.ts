```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface DemandForecast extends AuditableEntity {
  forecastNumber: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  product: {
    id: string;
    name: LocalizedContent;
  };
  region: string; // Iraqi governorate
  quantity: number;
  confidence: number;
  seasonalFactors: SeasonalFactor[];
  marketTrends: MarketTrend[];
  status: ForecastStatus;
}

export interface SeasonalFactor {
  type: SeasonType;
  startDate: Date;
  endDate: Date;
  impact: number; // -1 to 1
  description: string;
}

export interface MarketTrend {
  type: TrendType;
  impact: number;
  source: string;
  validityPeriod: {
    start: Date;
    end: Date;
  };
}

export interface SupplyPlan extends AuditableEntity {
  planNumber: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  items: SupplyPlanItem[];
  suppliers: PreferredSupplier[];
  transportRoutes: TransportRoute[];
  status: PlanStatus;
}

export interface SupplyPlanItem {
  productId: string;
  requiredQuantity: number;
  safetyStock: number;
  leadTime: number;
  sources: SupplySource[];
}

export interface PreferredSupplier {
  supplierId: string;
  priority: number;
  reliabilityScore: number;
  leadTime: number;
  customsClearance: number; // Days
  restrictions?: string[];
}

export interface TransportRoute {
  origin: string;
  destination: string;
  mode: TransportMode;
  duration: number;
  restrictions: string[];
  alternateRoutes: string[];
}

export type SeasonType = 
  | 'religious' // Ramadan, Eid, etc.
  | 'agricultural' 
  | 'weather' 
  | 'social';

export type TrendType = 
  | 'economic' 
  | 'political' 
  | 'social' 
  | 'technological';

export type TransportMode = 
  | 'road' 
  | 'air' 
  | 'sea' 
  | 'rail' 
  | 'multimodal';

export type ForecastStatus = 
  | 'draft' 
  | 'review' 
  | 'approved' 
  | 'active';

export type PlanStatus = 
  | 'planning' 
  | 'approved' 
  | 'executing' 
  | 'completed';
```