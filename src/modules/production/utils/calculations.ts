```typescript
import { BOMComponent, RoutingStep } from '../types/bom/bill-of-materials';
import { WorkCenter } from '../types/capacity/work-center';
import { QualityParameter, InspectionResult } from '../types/quality/inspection';

export const calculateMaterialRequirements = (
  quantity: number,
  components: BOMComponent[]
): Record<string, number> => {
  const requirements: Record<string, number> = {};
  
  components.forEach(component => {
    const requiredQty = quantity * component.quantity;
    const withWastage = requiredQty * (1 + component.wastagePercent / 100);
    requirements[component.materialId] = Math.ceil(withWastage);
  });
  
  return requirements;
};

export const calculateCycleTime = (
  steps: RoutingStep[]
): number => {
  return steps.reduce((total, step) => {
    return total + step.setupTime + (step.machineTime * step.standardLotSize) + step.queueTime;
  }, 0);
};

export const calculateWorkCenterEfficiency = (
  workCenter: WorkCenter,
  period: { start: Date; end: Date }
): number => {
  const availableTime = 0; // Calculate available time
  const productiveTime = 0; // Calculate productive time
  return (productiveTime / availableTime) * 100;
};

export const calculateQualityScore = (
  parameters: QualityParameter[],
  results: InspectionResult
): number => {
  let totalScore = 0;
  let totalWeight = 0;

  parameters.forEach(param => {
    const weight = param.isCritical ? 2 : 1;
    totalWeight += weight;
    // Calculate parameter score based on specification limits
    // Add to totalScore
  });

  return (totalScore / totalWeight) * 100;
};
```