import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface TrainingProgram extends AuditableEntity {
  programCode: string;
  title: LocalizedContent;
  description: LocalizedContent;
  type: ProgramType;
  category: string;
  provider: string;
  duration: number;
  cost: number;
  currency: string;
  status: ProgramStatus;
  capacity: number;
  prerequisites?: string[];
  objectives: string[];
  sessions: TrainingSession[];
}

export interface TrainingSession {
  id: string;
  programId: string;
  startDate: Date;
  endDate: Date;
  location: string;
  trainer: string;
  participants: Participant[];
  materials: string[];
  attendance: AttendanceRecord[];
  evaluations: SessionEvaluation[];
}

export interface Participant {
  employeeId: string;
  registrationDate: Date;
  status: ParticipantStatus;
  completionDate?: Date;
  certificate?: string;
}

export interface AttendanceRecord {
  sessionId: string;
  employeeId: string;
  date: Date;
  status: 'present' | 'absent' | 'late';
  duration: number;
}

export interface SessionEvaluation {
  sessionId: string;
  employeeId: string;
  ratings: {
    content: number;
    trainer: number;
    materials: number;
    facilities: number;
  };
  feedback: string;
  suggestions: string;
}

export interface Certification {
  id: string;
  employeeId: string;
  name: string;
  provider: string;
  issueDate: Date;
  expiryDate?: Date;
  licenseNumber?: string;
  attachments: string[];
  status: 'active' | 'expired' | 'revoked';
}

export type ProgramType = 'technical' | 'soft_skills' | 'compliance' | 'leadership';
export type ProgramStatus = 'planned' | 'active' | 'completed' | 'cancelled';
export type ParticipantStatus = 'registered' | 'attending' | 'completed' | 'dropped';