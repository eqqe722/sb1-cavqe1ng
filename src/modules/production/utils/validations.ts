import { z } from 'zod';

export const productionOrderSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().positive(),
  startDate: z.date().min(new Date()),
  dueDate: z.date().min(new Date()),
  priority: z.enum(['high', 'medium', 'low']),
  workCenterId: z.string().min(1),
  bomId: z.string().min(1)
});

export const bomComponentSchema = z.object({
  materialId: z.string().min(1),
  quantity: z.number().positive(),
  unit: z.string().min(1),
  wastagePercent: z.number().min(0).max(100),
  isOptional: z.boolean()
});

export const validateProductionOrder = (data: unknown) => {
  return productionOrderSchema.safeParse(data);
};

export const validateBOMComponent = (data: unknown) => {
  return bomComponentSchema.safeParse(data);
};