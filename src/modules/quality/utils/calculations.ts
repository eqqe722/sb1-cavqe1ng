```typescript
import { QualityParameter, InspectionResult } from '../types/inspection/quality-check';
import { ComplianceMetric } from '../types/reporting/compliance-report';

export const calculateQualityScore = (
  parameters: QualityParameter[],
  results: InspectionResult[]
): number => {
  let totalScore = 0;
  let totalWeight = 0;

  parameters.forEach(param => {
    const weight = param.importance === 'critical' ? 3 :
                  param.importance === 'major' ? 2 : 1;
    const result = results.find(r => r.parameterId === param.id);
    
    if (result) {
      totalScore += result.isWithinSpec ? weight : 0;
      totalWeight += weight;
    }
  });

  return totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;
};

export const calculateComplianceRate = (
  metrics: ComplianceMetric[]
): number => {
  const compliantMetrics = metrics.filter(m => m.actual >= m.target).length;
  return (compliantMetrics / metrics.length) * 100;
};

export const calculateDefectRate = (
  defectCount: number,
  totalInspected: number
): number => {
  return (defectCount / totalInspected) * 100;
};

export const calculateCOSQCCompliance = (
  requiredStandards: number,
  implementedStandards: number
): number => {
  return (implementedStandards / requiredStandards) * 100;
};
```