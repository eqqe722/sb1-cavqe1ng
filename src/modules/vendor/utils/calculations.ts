```typescript
import { PerformanceMetric } from '../types/vendor';

export const calculateOverallScore = (metrics: PerformanceMetric): number => {
  const weights = {
    quality: 0.3,
    delivery: 0.25,
    price: 0.2,
    response: 0.15,
    compliance: 0.1
  };

  return Object.entries(metrics.metrics).reduce((total, [key, value]) => {
    return total + (value * weights[key as keyof typeof weights]);
  }, 0);
};

export const calculateRiskScore = (
  performanceScore: number,
  incidents: number,
  complaints: number
): number => {
  const incidentImpact = incidents * 5;
  const complaintImpact = complaints * 2;
  const baseScore = 100;

  return Math.max(0, baseScore - incidentImpact - complaintImpact);
};

export const calculateContractValue = (
  baseValue: number,
  duration: number,
  escalationRate: number
): number => {
  return baseValue * (1 + (escalationRate * duration));
};

export const calculateComplianceRate = (
  totalRequirements: number,
  metRequirements: number
): number => {
  return (metRequirements / totalRequirements) * 100;
};
```