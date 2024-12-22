```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface GroupBooking extends AuditableEntity {
  bookingNumber: string;
  packageId: string;
  operatorId: string;
  groupName: LocalizedContent;
  pilgrims: PilgrimInfo[];
  status: BookingStatus;
  payments: PaymentRecord[];
  requirements: RequirementStatus[];
  specialRequests?: string[];
}

export interface PilgrimInfo {
  id: string;
  name: {
    first: string;
    middle: string;
    last: string;
    prefix?: string;
  };
  nationality: string;
  passportNumber: string;
  birthDate: Date;
  gender: 'male' | 'female';
  maritalStatus: string;
  contact: {
    phone: string;
    email?: string;
    emergencyContact: {
      name: string;
      relation: string;
      phone: string;
    };
  };
  accommodation: {
    roomType: string;
    roommates?: string[];
    specialNeeds?: string[];
  };
  medicalInfo?: {
    conditions?: string[];
    medications?: string[];
    disabilities?: string[];
  };
}

export interface PaymentRecord {
  id: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  date: Date;
  reference?: string;
}

export interface RequirementStatus {
  type: string;
  status: 'pending' | 'submitted' | 'approved' | 'rejected';
  submissionDate?: Date;
  expiryDate?: Date;
  notes?: string;
}

export type BookingStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled';

export type PaymentMethod = 
  | 'bank_transfer' 
  | 'cash' 
  | 'card' 
  | 'office_payment';

export type PaymentStatus = 
  | 'pending' 
  | 'completed' 
  | 'failed' 
  | 'refunded';
```