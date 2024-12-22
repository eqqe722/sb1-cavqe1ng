import { z } from 'zod';

export const inspectionResultSchema = z.object({
  checkpointId: z.string().min(1),
  value: z.number(),
  result: z.enum(['pass', 'fail', 'warning']),
  notes: z.string().optional()
});

export const qualityNotificationSchema = z.object({
  type: z.enum(['defect', 'improvement', 'deviation', 'complaint']),
  priority: z.enum(['high', 'medium', 'low']),
  description: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  dueDate: z.date().min(new Date())
});

export const validateInspectionResult = (data: unknown) => {
  return inspectionResultSchema.safeParse(data);
};

export const validateQualityNotification = (data: unknown) => {
  return qualityNotificationSchema.safeParse(data);
};