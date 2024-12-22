```typescript
import { TransportPlan, Location } from '../types/logistics/transportation';
import { Warehouse, StorageZone } from '../types/warehouse/storage';

export const calculateOptimalRoute = (
  origin: Location,
  destination: Location,
  restrictions: string[]
): string[] => {
  // Implementation of route optimization algorithm
  // considering security zones and infrastructure
  return [];
};

export const calculateWarehouseUtilization = (
  zones: StorageZone[]
): {
  total: number;
  used: number;
  available: number;
  utilizationRate: number;
} => {
  const total = zones.reduce((sum, zone) => sum + zone.capacity, 0);
  const used = zones.reduce((sum, zone) => sum + zone.currentOccupancy, 0);
  const available = total - used;
  const utilizationRate = (used / total) * 100;

  return { total, used, available, utilizationRate };
};

export const calculateTransportCosts = (
  plan: TransportPlan,
  fuelPrice: number,
  securityCosts: number
): number => {
  // Implementation of transport cost calculation
  // including security and insurance costs
  return 0;
};

export const calculateDeliveryWindow = (
  distance: number,
  checkpoints: number,
  securityLevel: string
): { min: number; max: number } => {
  // Calculate delivery window considering checkpoints
  // and security requirements
  return { min: 0, max: 0 };
};
```