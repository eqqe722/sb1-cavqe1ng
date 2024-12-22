```typescript
import { z } from 'zod';

export const workOrderSchema = z.object({
  assetId: z.string().min(1),
  type: z.enum(['preventive', 'corrective', 'emergency', 'modification']),
  priority: z.enum(['critical', 'high', 'medium', 'low']),
  scheduledStart: z.date().min(new Date()),
  scheduledEnd: z.date().min(new Date()),
  assignedTo: z.array(z.string()).min(1),
  tasks: z.array(z.object({
    name: z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    }),
    estimatedDuration: z.number().positive(),
    requiredSkills: z.array(z.string())
  })).min(1)
});

export const assetSchema = z.object({
  assetNumber: z.string().min(1),
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  category: z.string().min(1),
  location: z.string().min(1),
  manufacturer: z.string().min(1),
  model: z.string().min(1),
  serialNumber: z.string().min(1),
  purchaseDate: z.date(),
  warrantyExpiry: z.date()
});

export const validateWorkOrder = (data: unknown) => {
  return workOrderSchema.safeParse(data);
};

export const validateAsset = (data: unknown) => {
  return assetSchema.safeParse(data);
};
```