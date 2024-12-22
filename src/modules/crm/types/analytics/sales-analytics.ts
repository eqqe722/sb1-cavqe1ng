```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface SalesAnalytics extends AuditableEntity {
  period: {
    startDate: Date;
    endDate: Date;
  };
  metrics: {
    revenue: MetricValue;
    deals: MetricValue;
    conversion: MetricValue;
    avgDealSize: MetricValue;
  };
  segments: SegmentAnalysis[];
  trends: TrendAnalysis[];
  forecasts: SalesForecast[];
}

export interface MetricValue {
  current: number;
  previous: number;
  target: number;
  variance: number;
  trend: 'up' | 'down' | 'stable';
}

export interface SegmentAnalysis {
  segment: string;
  revenue: number;
  customers: number;
  growth: number;
  profitability: number;
}

export interface TrendAnalysis {
  category: TrendCategory;
  data: TimeSeriesData[];
  seasonality?: SeasonalFactor[];
}

export interface SalesForecast {
  period: string;
  amount: number;
  probability: number;
  factors: string[];
}

export interface TimeSeriesData {
  date: Date;
  value: number;
  target?: number;
}

export interface SeasonalFactor {
  name: string;
  impact: number;
  startDate: Date;
  endDate: Date;
}

export type TrendCategory = 
  | 'revenue' 
  | 'customers' 
  | 'products' 
  | 'regions';
```