```typescript
import { WorkOrder, MaintenanceRecord, Asset } from '../types/maintenance';

export const calculateMaintenanceCosts = (workOrder: WorkOrder): number => {
  return workOrder.costs.labor + 
         workOrder.costs.materials + 
         workOrder.costs.equipment + 
         workOrder.costs.other;
};

export const calculateDowntime = (
  startDate: Date,
  endDate: Date | undefined
): number => {
  if (!endDate) return 0;
  return (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60); // Hours
};

export const calculateMTBF = (
  asset: Asset,
  startDate: Date,
  endDate: Date
): number => {
  const failures = asset.maintenanceHistory.filter(
    record => record.type === 'corrective' &&
    record.date >= startDate &&
    record.date <= endDate
  );
  
  const operatingHours = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
  return failures.length > 0 ? operatingHours / failures.length : operatingHours;
};

export const calculateMaintenanceEfficiency = (
  workOrder: WorkOrder
): number => {
  if (!workOrder.actualEnd || !workOrder.actualStart) return 0;
  
  const plannedDuration = workOrder.scheduledEnd.getTime() - workOrder.scheduledStart.getTime();
  const actualDuration = workOrder.actualEnd.getTime() - workOrder.actualStart.getTime();
  
  return (plannedDuration / actualDuration) * 100;
};
```