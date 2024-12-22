```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Course extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  description: LocalizedContent;
  level: string;
  semester: string;
  credits: number;
  category: CourseCategory;
  prerequisites: string[];
  objectives: LocalizedContent[];
  outcomes: LocalizedContent[];
  status: CourseStatus;
}

export interface Curriculum extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  academicYear: string;
  level: string;
  courses: CurriculumCourse[];
  approvedBy: string;
  status: CurriculumStatus;
}

export interface CurriculumCourse {
  courseId: string;
  semester: number;
  isRequired: boolean;
  weeklyHours: {
    theory: number;
    practical: number;
    tutorial: number;
  };
  evaluationCriteria: EvaluationCriteria[];
}

export interface EvaluationCriteria {
  type: AssessmentType;
  weight: number;
  minimumPass: number;
  description: LocalizedContent;
}

export interface Grade {
  studentId: string;
  courseId: string;
  semester: string;
  academicYear: string;
  assessments: Assessment[];
  finalGrade: number;
  letterGrade: string;
  status: GradeStatus;
  submittedBy: string;
  submittedAt: Date;
  modifiedBy?: string;
  modifiedAt?: Date;
}

export interface Assessment {
  type: AssessmentType;
  date: Date;
  score: number;
  maxScore: number;
  weight: number;
  remarks?: string;
}

export type CourseCategory = 
  | 'core' 
  | 'elective' 
  | 'specialization' 
  | 'general';

export type CourseStatus = 
  | 'active' 
  | 'inactive' 
  | 'pending_approval' 
  | 'archived';

export type CurriculumStatus = 
  | 'draft' 
  | 'active' 
  | 'archived';

export type AssessmentType = 
  | 'midterm' 
  | 'final' 
  | 'quiz' 
  | 'assignment' 
  | 'practical' 
  | 'project';

export type GradeStatus = 
  | 'pending' 
  | 'submitted' 
  | 'approved' 
  | 'under_review';
```