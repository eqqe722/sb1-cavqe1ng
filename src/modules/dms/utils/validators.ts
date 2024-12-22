```typescript
import { z } from 'zod';

export const documentSchema = z.object({
  title: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  type: z.enum(['letter', 'contract', 'report', 'license', 'certificate', 'policy', 'procedure']),
  classification: z.enum(['public', 'internal', 'confidential', 'restricted']),
  metadata: z.object({
    author: z.string().min(1),
    department: z.string().min(1),
    isConfidential: z.boolean(),
    requiresStamp: z.boolean()
  })
});

export const validateDocument = (data: unknown) => {
  return documentSchema.safeParse(data);
};

export const validateRetentionPolicy = (
  duration: number,
  documentType: string
): boolean => {
  // Implement retention policy validation based on Iraqi regulations
  const minimumRetention = getMinimumRetention(documentType);
  return duration >= minimumRetention;
};

export const validateAccessRights = (
  userRoles: string[],
  documentClassification: string
): boolean => {
  // Implement access validation based on Iraqi data privacy laws
  return true; // Implement actual validation logic
};

const getMinimumRetention = (documentType: string): number => {
  const retentionPeriods: Record<string, number> = {
    'financial': 7 * 365, // 7 years
    'legal': 10 * 365, // 10 years
    'hr': 5 * 365, // 5 years
    'general': 2 * 365 // 2 years
  };
  return retentionPeriods[documentType] || 365; // Default 1 year
};
```