```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Equipment extends AuditableEntity {
  equipmentNumber: string;
  name: LocalizedContent;
  category: EquipmentCategory;
  type: EquipmentType;
  status: EquipmentStatus;
  specifications: {
    manufacturer: string;
    model: string;
    serialNumber: string;
    yearManufactured: number;
    powerRating?: {
      value: number;
      unit: string;
    };
    capacity?: {
      value: number;
      unit: string;
    };
    dimensions: {
      length: number;
      width: number;
      height: number;
      unit: string;
    };
  };
  operation: {
    department: string;
    operator?: string;
    operatingHours: number;
    efficiency: number;
    lastInspection?: Date;
    nextInspection: Date;
  };
  maintenance: {
    schedule: MaintenanceTask[];
    history: MaintenanceRecord[];
    spareParts: SparePart[];
  };
  safety: {
    certifications: Certification[];
    inspections: SafetyInspection[];
    incidents: Incident[];
  };
  documentation: {
    manual: string;
    drawings: string[];
    certificates: string[];
  };
}

export interface MaintenanceTask {
  id: string;
  type: TaskType;
  frequency: string;
  description: LocalizedContent;
  checklist: string[];
  lastPerformed?: Date;
  nextDue: Date;
  assignedTo?: string;
}

export interface SparePart {
  code: string;
  name: LocalizedContent;
  quantity: number;
  minimumStock: number;
  supplier: string;
  lastOrdered?: Date;
  unitCost: number;
  location: string;
}

export interface Certification {
  type: CertificationType;
  number: string;
  issuedBy: string;
  issueDate: Date;
  expiryDate: Date;
  status: 'valid' | 'expired' | 'pending';
}

export type EquipmentCategory = 
  | 'production' 
  | 'construction' 
  | 'material_handling' 
  | 'utilities';

export type EquipmentType = 
  | 'machine' 
  | 'tool' 
  | 'vehicle' 
  | 'generator';

export type EquipmentStatus = 
  | 'operational' 
  | 'maintenance' 
  | 'repair' 
  | 'standby' 
  | 'retired';

export type TaskType = 
  | 'inspection' 
  | 'service' 
  | 'repair' 
  | 'calibration';

export type CertificationType = 
  | 'safety' 
  | 'quality' 
  | 'environmental' 
  | 'operational';
```