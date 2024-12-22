```typescript
import { z } from 'zod';

export const recipeSchema = z.object({
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  category: z.enum(['appetizer', 'main_course', 'dessert', 'beverage', 'side_dish']),
  cuisine: z.enum(['iraqi', 'levantine', 'persian', 'turkish', 'international']),
  ingredients: z.array(z.object({
    itemId: z.string().min(1),
    quantity: z.number().positive(),
    unit: z.string().min(1)
  })).min(1),
  preparation: z.array(z.object({
    sequence: z.number().positive(),
    description: z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    }),
    duration: z.number().positive()
  })).min(1)
});

export const kitchenOrderSchema = z.object({
  type: z.enum(['dine_in', 'takeaway', 'delivery', 'catering']),
  items: z.array(z.object({
    recipeId: z.string().min(1),
    quantity: z.number().positive(),
    specialInstructions: z.array(z.string()).optional()
  })).min(1),
  priority: z.enum(['urgent', 'high', 'normal', 'low'])
});

export const validateRecipe = (data: unknown) => {
  return recipeSchema.safeParse(data);
};

export const validateKitchenOrder = (data: unknown) => {
  return kitchenOrderSchema.safeParse(data);
};

export const validateIngredientQuantity = (
  available: number,
  required: number
): boolean => {
  return available >= required;
};

export const validateStorageTemperature = (
  current: number,
  required: { min: number; max: number }
): boolean => {
  return current >= required.min && current <= required.max;
};
```