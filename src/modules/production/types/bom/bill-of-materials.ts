```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

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
  source: ComponentSource;
  wastagePercent: number;
  specifications?: string[];
  qualityChecks?: QualityCheck[];
  isLocallySourced: boolean;
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
  energyRequirement: number; // KWh
  minimumLotSize: number;
  standardLotSize: number;
}

export type BOMType = 'manufacturing' | 'engineering' | 'planning' | 'costing';
export type BOMStatus = 'draft' | 'active' | 'obsolete';
export type ComponentSource = 'local' | 'import' | 'subcontract';
```