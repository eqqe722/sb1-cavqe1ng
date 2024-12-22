```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

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

export type ForecastStatus = 
  | 'draft' 
  | 'review' 
  | 'approved' 
  | 'active';
```