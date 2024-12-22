import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface JobPosting extends AuditableEntity {
  postingNumber: string;
  title: LocalizedContent;
  department: string;
  description: LocalizedContent;
  requirements: LocalizedContent;
  type: JobType;
  status: PostingStatus;
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  positions: number;
  startDate: Date;
  endDate: Date;
  applications: JobApplication[];
}

export interface JobApplication extends AuditableEntity {
  applicationNumber: string;
  postingId: string;
  candidate: Candidate;
  status: ApplicationStatus;
  resume: string;
  coverLetter?: string;
  evaluations: ApplicationEvaluation[];
  interviews: Interview[];
  notes: string[];
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: number;
  currentCompany?: string;
  currentPosition?: string;
  expectedSalary: number;
  noticePeriod: number;
  source: ApplicationSource;
}

export interface ApplicationEvaluation {
  id: string;
  evaluator: string;
  criteria: {
    qualification: number;
    experience: number;
    skills: number;
    communication: number;
  };
  comments: string;
  recommendation: 'hire' | 'reject' | 'hold';
  date: Date;
}

export interface Interview {
  id: string;
  type: InterviewType;
  scheduledDate: Date;
  duration: number;
  interviewers: string[];
  status: InterviewStatus;
  feedback?: InterviewFeedback;
}

export interface InterviewFeedback {
  technicalSkills: number;
  communication: number;
  problemSolving: number;
  teamwork: number;
  overall: number;
  strengths: string[];
  weaknesses: string[];
  comments: string;
  recommendation: 'hire' | 'reject' | 'next_round';
}

export type JobType = 'full_time' | 'part_time' | 'contract' | 'internship';
export type PostingStatus = 'draft' | 'published' | 'closed' | 'cancelled';
export type ApplicationStatus = 'new' | 'screening' | 'interviewing' | 'offered' | 'hired' | 'rejected';
export type ApplicationSource = 'website' | 'referral' | 'agency' | 'linkedin' | 'other';
export type InterviewType = 'phone' | 'technical' | 'hr' | 'final';
export type InterviewStatus = 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';