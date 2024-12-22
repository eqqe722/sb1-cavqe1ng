```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Appointment extends AuditableEntity {
  appointmentNumber: string;
  patientId: string;
  doctorId: string;
  department: string;
  type: AppointmentType;
  priority: PriorityLevel;
  dateTime: Date;
  duration: number; // minutes
  status: AppointmentStatus;
  reason: LocalizedContent;
  notes?: string;
  vitals?: VitalSigns;
  followUp?: FollowUp;
}

export interface VitalSigns {
  temperature: number;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  heartRate: number;
  respiratoryRate: number;
  oxygenSaturation: number;
  weight: number;
  height: number;
  bmi: number;
  recordedAt: Date;
  recordedBy: string;
}

export interface FollowUp {
  recommended: boolean;
  period: number; // days
  reason: string;
  instructions: LocalizedContent;
}

export interface Schedule {
  doctorId: string;
  date: Date;
  slots: TimeSlot[];
  breaks: Break[];
  maxPatients: number;
  currentPatients: number;
}

export interface TimeSlot {
  startTime: string; // HH:mm
  endTime: string;
  isAvailable: boolean;
  appointmentId?: string;
}

export interface Break {
  reason: string;
  startTime: string;
  endTime: string;
}

export type AppointmentType = 
  | 'consultation' 
  | 'follow_up' 
  | 'procedure' 
  | 'emergency';

export type PriorityLevel = 
  | 'routine' 
  | 'urgent' 
  | 'emergency';

export type AppointmentStatus = 
  | 'scheduled' 
  | 'confirmed' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled' 
  | 'no_show';
```