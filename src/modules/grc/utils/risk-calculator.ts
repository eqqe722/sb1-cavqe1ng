```typescript
import { Risk, RiskControl } from '../types/risk/risk-assessment';

export const calculateRiskScore = (
  impact: Record<string, number>,
  likelihood: number
): number => {
  // Calculate weighted impact score
  const weights = {
    financial: 0.3,
    operational: 0.25,
    reputational: 0.2,
    compliance: 0.25
  };

  const weightedImpact = Object.entries(impact).reduce(
    (score, [key, value]) => score + (value * weights[key as keyof typeof weights]),
    0
  );

  return weightedImpact * likelihood;
};

export const calculateResidualRisk = (
  inherentRisk: number,
  controls: RiskControl[]
): number => {
  const controlEffectiveness = controls.reduce(
    (total, control) => total + control.effectiveness,
    0
  ) / controls.length;

  return inherentRisk * (1 - (controlEffectiveness / 100));
};

export const calculateRiskTrend = (
  currentScore: number,
  previousScore: number
): 'increasing' | 'decreasing' | 'stable' => {
  const difference = currentScore - previousScore;
  if (difference > 0) return 'increasing';
  if (difference < 0) return 'decreasing';
  return 'stable';
};

export const prioritizeRisks = (risks: Risk[]): Risk[] => {
  return [...risks].sort((a, b) => {
    if (a.residualRisk === b.residualRisk) {
      return b.impact.compliance - a.impact.compliance;
    }
    return b.residualRisk - a.residualRisk;
  });
};
```