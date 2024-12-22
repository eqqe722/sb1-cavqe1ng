```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Medication extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  scientificName: string;
  type: MedicationType;
  form: MedicationForm;
  strength: string;
  manufacturer: string;
  category: string;
  controlled: boolean;
  requiresPrescription: boolean;
  stock: {
    quantity: number;
    unit: string;
    batchNumber: string;
    expiryDate: Date;
    reorderLevel: number;
  };
  price: number;
  status: MedicationStatus;
}

export interface Prescription extends AuditableEntity {
  prescriptionNumber: string;
  patientId: string;
  doctorId: string;
  date: Date;
  diagnosis: string;
  items: PrescriptionItem[];
  status: PrescriptionStatus;
  dispensedBy?: string;
  dispensedAt?: Date;
  notes?: string;
}

export interface PrescriptionItem {
  medicationId: string;
  dosage: string;
  frequency: string;
  duration: number;
  quantity: number;
  instructions: LocalizedContent;
  status: 'pending' | 'dispensed' | 'cancelled';
}

export interface Inventory extends AuditableEntity {
  medicationId: string;
  batchNumber: string;
  quantity: number;
  manufactureDate: Date;
  expiryDate: Date;
  supplier: string;
  purchasePrice: number;
  location: string;
  status: InventoryStatus;
}

export type MedicationType = 
  | 'antibiotic' 
  | 'analgesic' 
  | 'antihypertensive' 
  | 'antidiabetic' 
  | 'other';

export type MedicationForm = 
  | 'tablet' 
  | 'capsule' 
  | 'syrup' 
  | 'injection' 
  | 'cream';

export type MedicationStatus = 
  | 'active' 
  | 'discontinued' 
  | 'recalled' 
  | 'out_of_stock';

export type PrescriptionStatus = 
  | 'pending' 
  | 'verified' 
  | 'dispensed' 
  | 'cancelled';

export type InventoryStatus = 
  | 'in_stock' 
  | 'low_stock' 
  | 'expired' 
  | 'quarantine';
```