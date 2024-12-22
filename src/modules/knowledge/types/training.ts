```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface TrainingResource extends AuditableEntity {
  resourceNumber: string;
  title: LocalizedContent;
  type: ResourceType;
  format: ContentFormat;
  content: {
    description: LocalizedContent;
    objectives: LocalizedContent[];
    materials: LearningMaterial[];
    duration: number; // minutes
    language: 'ar' | 'en' | 'both';
  };
  requirements: {
    prerequisites: string[];
    targetAudience: string[];
    skillLevel: SkillLevel;
  };
  assessment: {
    type: AssessmentType;
    passingScore: number;
    questions?: AssessmentQuestion[];
    certification?: boolean;
  };
  tracking: {
    enrollments: number;
    completions: number;
    averageScore: number;
    feedback: ResourceFeedback[];
  };
}

export interface LearningMaterial {
  id: string;
  type: MaterialType;
  title: LocalizedContent;
  url: string;
  duration?: number;
  sequence: number;
}

export interface AssessmentQuestion {
  id: string;
  text: LocalizedContent;
  type: QuestionType;
  options?: LocalizedContent[];
  correctAnswer: string | string[];
  points: number;
}

export interface ResourceFeedback {
  userId: string;
  rating: number;
  comments?: string;
  date: Date;
  helpful: boolean;
}

export type ResourceType = 
  | 'course' 
  | 'workshop' 
  | 'tutorial' 
  | 'guide' 
  | 'video';

export type ContentFormat = 
  | 'video' 
  | 'document' 
  | 'interactive' 
  | 'presentation';

export type MaterialType = 
  | 'video' 
  | 'pdf' 
  | 'presentation' 
  | 'exercise';

export type SkillLevel = 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'expert';

export type AssessmentType = 
  | 'quiz' 
  | 'test' 
  | 'project' 
  | 'practical';

export type QuestionType = 
  | 'multiple_choice' 
  | 'true_false' 
  | 'open_ended' 
  | 'matching';
```