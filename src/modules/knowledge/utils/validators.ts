```typescript
import { z } from 'zod';

export const documentSchema = z.object({
  title: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  type: z.enum(['policy', 'procedure', 'guide', 'template', 'report']),
  category: z.enum(['hr', 'finance', 'operations', 'technical', 'compliance']),
  content: z.object({
    body: z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    }),
    keywords: z.array(z.string())
  }),
  classification: z.object({
    level: z.enum(['public', 'internal', 'confidential', 'restricted']),
    accessGroups: z.array(z.string())
  })
});

export const trainingResourceSchema = z.object({
  title: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  type: z.enum(['course', 'workshop', 'tutorial', 'guide', 'video']),
  content: z.object({
    description: z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    }),
    objectives: z.array(z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    })),
    duration: z.number().positive()
  })
});

export const validateDocument = (data: unknown) => {
  return documentSchema.safeParse(data);
};

export const validateTrainingResource = (data: unknown) => {
  return trainingResourceSchema.safeParse(data);
};

export const validateAccessPermissions = (
  userGroups: string[],
  requiredGroups: string[]
): boolean => {
  return requiredGroups.some(group => userGroups.includes(group));
};
```