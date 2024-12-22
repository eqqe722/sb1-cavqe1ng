```typescript
import { z } from 'zod';

export const orderSchema = z.object({
  customer: z.object({
    id: z.string().min(1),
    taxNumber: z.string().optional()
  }),
  items: z.array(z.object({
    productId: z.string().min(1),
    quantity: z.number().positive(),
    unitPrice: z.number().positive()
  })).min(1),
  deliveryDate: z.date().min(new Date())
});

export const validateOrder = (data: unknown) => {
  return orderSchema.safeParse(data);
};

export const validateTaxNumber = (taxNumber: string): boolean => {
  // Iraqi tax number validation
  const taxRegex = /^\d{9}$/;
  return taxRegex.test(taxNumber);
};

export const validateCreditLimit = (
  orderAmount: number,
  creditLimit: number,
  currentExposure: number
): boolean => {
  return (currentExposure + orderAmount) <= creditLimit;
};
```