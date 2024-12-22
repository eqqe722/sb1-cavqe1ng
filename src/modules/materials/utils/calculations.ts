```typescript
import { StockItem, BatchInfo } from '../types/inventory/stock';
import { SupplierEvaluation } from '../types/supplier/vendor';

export const calculateReorderPoint = (
  averageDailyUsage: number,
  leadTime: number,
  safetyStock: number
): number => {
  return (averageDailyUsage * leadTime) + safetyStock;
};

export const calculateStockValue = (
  batches: BatchInfo[]
): number => {
  return batches.reduce((total, batch) => {
    return total + (batch.quantity * batch.cost);
  }, 0);
};

export const calculateSupplierScore = (
  evaluation: SupplierEvaluation
): number => {
  const weights = {
    quality: 0.3,
    delivery: 0.25,
    price: 0.2,
    service: 0.15,
    compliance: 0.1
  };

  const { criteria } = evaluation;
  
  return (
    criteria.qualityScore * weights.quality +
    criteria.deliveryScore * weights.delivery +
    criteria.priceScore * weights.price +
    criteria.serviceScore * weights.service +
    criteria.complianceScore * weights.compliance
  );
};

export const calculateWarehouseUtilization = (
  usedCapacity: number,
  totalCapacity: number
): number => {
  return (usedCapacity / totalCapacity) * 100;
};
```