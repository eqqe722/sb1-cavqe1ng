import { z } from 'zod';

export const orderSchema = z.object({
  customer: z.object({
    id: z.string(),
    name: z.object({
      ar: z.string(),
      en: z.string().optional()
    })
  }),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().positive(),
    unitPrice: z.number().positive()
  })),
  shippingInfo: z.object({
    address: z.string(),
    city: z.string(),
    phone: z.string()
  }).optional()
});

export const validateOrder = (data: unknown) => {
  return orderSchema.safeParse(data);
};