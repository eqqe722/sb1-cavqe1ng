import { z } from 'zod';

export const projectSchema = z.object({
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  type: z.enum(['internal', 'external', 'maintenance', 'research']),
  priority: z.enum(['critical', 'high', 'medium', 'low']),
  startDate: z.date(),
  endDate: z.date(),
  budget: z.object({
    planned: z.object({
      total: z.number().positive()
    })
  })
});

export const phaseSchema = z.object({
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  startDate: z.date(),
  endDate: z.date(),
  deliverables: z.array(z.object({
    name: z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    }),
    dueDate: z.date()
  }))
});

export const milestoneSchema = z.object({
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  dueDate: z.date(),
  deliverables: z.array(z.string())
});

export const validateProject = (data: unknown) => {
  return projectSchema.safeParse(data);
};

export const validatePhase = (data: unknown) => {
  return phaseSchema.safeParse(data);
};

export const validateMilestone = (data: unknown) => {
  return milestoneSchema.safeParse(data);
};