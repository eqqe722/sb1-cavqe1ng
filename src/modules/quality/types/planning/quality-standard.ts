```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface QualityStandard extends AuditableEntity {
  standardNumber: string;
  name: LocalizedContent;
  type: StandardType;
  category: StandardCategory;
  version: string;
  issuedBy: string; // e.g., COSQC, ISO
  validFrom: Date;
  validTo?: Date;
  requirements: QualityRequirement[];
  certifications: Certification[];
  status: StandardStatus;
}

export interface QualityRequirement {
  code: string;
  description: LocalizedContent;
  parameters: QualityParameter[];
  testMethods: TestMethod[];
  isMandatory: boolean;
  references: string[];
}

export interface QualityParameter {
  name: LocalizedContent;
  specification: {
    target?: number;
    minimum?: number;
    maximum?: number;
    unit: string;
    tolerance?: number;
  };
  importance: 'critical' | 'major' | 'minor';
}

export interface TestMethod {
  code: string;
  name: LocalizedContent;
  equipment: string[];
  procedure: LocalizedContent;
  frequency: string;
  sampleSize: number;
}

export type StandardType = 'COSQC' | 'ISO' | 'Industry' | 'Internal';
export type StandardCategory = 'Product' | 'Process' | 'System' | 'Safety';
export type StandardStatus = 'draft' | 'active' | 'superseded' | 'withdrawn';
```