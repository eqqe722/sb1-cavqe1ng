```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface BillOfMaterials extends AuditableEntity {
  bomNumber: string;
  productId: string;
  name: LocalizedContent;
  version: string;
  type: BOMType;
  status: BOMStatus;
  components: BOMComponent[];
  alternates: AlternateComponent[];
  routings: RoutingStep[];
  validFrom: Date;
  validTo?: Date;
}

export interface BOMComponent {
  materialId: string;
  name: LocalizedContent;
  quantity: number;
  unit: string;
  position: string; // Assembly position
  isPhantom: boolean;
  wastagePercent: number;
  source: ComponentSource;
  specifications?: string[];
  qualityChecks?: QualityCheck[];
}

export interface AlternateComponent {
  primaryId: string;
  alternateId: string;
  conversionFactor: number;
  priority: number;
  validFrom: Date;
  validTo?: Date;
}

export interface RoutingStep {
  sequence: number;
  workCenterId: string;
  operation: string;
  description: LocalizedContent;
  setupTime: number;
  machineTime: number;
  laborTime: number;
  queueTime: number;
  minimumLotSize: number;
  standardLotSize: number;
}

export interface QualityCheck {
  parameter: string;
  specification: string;
  method: string;
  frequency: string;
}

export type BOMType = 'manufacturing' | 'engineering' | 'planning' | 'costing';
export type BOMStatus = 'draft' | 'active' | 'obsolete';
export type ComponentSource = 'make' | 'buy' | 'subcontract';
```