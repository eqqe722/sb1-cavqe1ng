```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface InspectionPlan extends AuditableEntity {
  planNumber: string;
  title: LocalizedContent;
  type: InspectionType;
  category: InspectionCategory;
  frequency: InspectionFrequency;
  standards: QualityStandard[];
  checkpoints: Checkpoint[];
  department: string;
  status: PlanStatus;
}

export interface Checkpoint {
  id: string;
  name: LocalizedContent;
  method: string;
  specification: {
    parameter: string;
    target?: number;
    minimum?: number;
    maximum?: number;
    unit: string;
    tolerance?: number;
  };
  equipment?: string[];
  isMandatory: boolean;
  referenceStandard?: string;
}

export interface QualityStandard {
  code: string;
  name: LocalizedContent;
  type: 'ISO' | 'COSQC' | 'Industry' | 'Company';
  version: string;
  validFrom: Date;
  validTo?: Date;
}

export interface InspectionRecord extends AuditableEntity {
  recordNumber: string;
  planId: string;
  type: InspectionType;
  reference: {
    type: ReferenceType;
    id: string;
  };
  inspector: string;
  date: Date;
  results: InspectionResult[];
  status: RecordStatus;
  attachments: string[];
}

export interface InspectionResult {
  checkpointId: string;
  value: number | string;
  result: ResultStatus;
  remarks?: string;
  evidence?: string[];
}

export type InspectionType = 'incoming' | 'in_process' | 'final' | 'vendor';
export type InspectionCategory = 'material' | 'product' | 'process' | 'equipment';
export type InspectionFrequency = 'each_lot' | 'daily' | 'weekly' | 'monthly';
export type PlanStatus = 'draft' | 'active' | 'inactive';
export type RecordStatus = 'pending' | 'completed' | 'rejected';
export type ResultStatus = 'pass' | 'fail' | 'conditional';
export type ReferenceType = 'purchase' | 'production' | 'sales' | 'maintenance';
```