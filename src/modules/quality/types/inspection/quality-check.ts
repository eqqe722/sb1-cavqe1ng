```typescript
import { AuditableEntity, LocalizedContent } from '../../../../types/database/common';

export interface QualityInspection extends AuditableEntity {
  inspectionNumber: string;
  type: InspectionType;
  reference: {
    type: ReferenceType;
    id: string;
  };
  standards: string[]; // References to QualityStandard
  inspector: string;
  location: string;
  schedule: {
    plannedDate: Date;
    actualDate?: Date;
    duration: number;
  };
  samples: InspectionSample[];
  results: InspectionResult[];
  decision: InspectionDecision;
  certificates: InspectionCertificate[];
}

export interface InspectionSample {
  sampleId: string;
  batchNumber: string;
  quantity: number;
  selectionMethod: string;
  conditions: {
    temperature?: number;
    humidity?: number;
    pressure?: number;
  };
}

export interface InspectionResult {
  parameterId: string;
  value: number | string;
  isWithinSpec: boolean;
  deviation?: number;
  remarks?: string;
  evidence?: string[];
}

export interface InspectionCertificate {
  certificateNumber: string;
  type: CertificateType;
  issueDate: Date;
  validUntil?: Date;
  issuedBy: string;
  attachments: string[];
}

export type InspectionType = 'incoming' | 'in_process' | 'final' | 'supplier';
export type ReferenceType = 'purchase' | 'production' | 'customer' | 'supplier';
export type InspectionDecision = 'accept' | 'reject' | 'conditional' | 'rework';
export type CertificateType = 'COA' | 'COC' | 'COSQC' | 'Test_Report';
```