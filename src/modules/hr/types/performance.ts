import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface PerformanceReview extends AuditableEntity {
  reviewNumber: string;
  employeeId: string;
  reviewerId: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  type: ReviewType;
  status: ReviewStatus;
  ratings: PerformanceRating[];
  goals: GoalEvaluation[];
  competencies: CompetencyEvaluation[];
  comments: ReviewComment[];
  overallRating: number;
  recommendations: string[];
}

export interface PerformanceRating {
  categoryId: string;
  score: number;
  weight: number;
  comments: string;
}

export interface GoalEvaluation {
  id: string;
  description: LocalizedContent;
  targetDate: Date;
  weight: number;
  status: GoalStatus;
  achievement: number;
  comments: string;
}

export interface CompetencyEvaluation {
  competencyId: string;
  rating: number;
  evidence: string[];
  developmentPlan: string;
}

export interface ReviewComment {
  author: string;
  date: Date;
  content: string;
  type: 'strength' | 'improvement' | 'general';
}

export interface TrainingNeed {
  id: string;
  employeeId: string;
  competencyId: string;
  priority: 'high' | 'medium' | 'low';
  status: 'identified' | 'planned' | 'completed';
  recommendedBy: string;
  dueDate: Date;
}

export type ReviewType = 'annual' | 'probation' | 'project' | 'mid_year';
export type ReviewStatus = 'draft' | 'self_review' | 'manager_review' | 'hr_review' | 'completed';
export type GoalStatus = 'not_started' | 'in_progress' | 'completed' | 'cancelled';