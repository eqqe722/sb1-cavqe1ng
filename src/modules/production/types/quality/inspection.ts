```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface QualityCheck extends AuditableEntity {
  checkId: string;
  type: InspectionType;
  productId: string;
  standards: QualityStandard[];
  parameters: QualityParameter[];
  frequency: string;
  sampleSize: number;
  result?: InspectionResult;
}

export interface QualityStandard {
  code: string;
  name: LocalizedContent;
  type: StandardType;
  parameters: string[];
  certifyingBody: string;
  validUntil: Date;
}

export interface QualityParameter {
  name: string;
  specification: {
    target: number;
    upperLimit: number;
    lowerLimit: number;
    unit: string;
  };
  method: string;
  equipment?: string[];
  isCritical: boolean;
}

export interface InspectionResult {
  inspector: string;
  date: Date;
  measurements: Measurement[];
  defects: Defect[];
  decision: 'accept' | 'reject' | 'rework';
  certificate?: string;
}

export interface Defect {
  type: DefectType;
  severity: DefectSeverity;
  quantity: number;
  location: string;
  images?: string[];
}

export type InspectionType = 'incoming' | 'in_process' | 'final' | 'certification';
export type StandardType = 'ISO' | 'COSQC' | 'Industry' | 'Company';
export type DefectType = 'dimensional' | 'visual' | 'functional' | 'material';
export type DefectSeverity = 'critical' | 'major' | 'minor';
```