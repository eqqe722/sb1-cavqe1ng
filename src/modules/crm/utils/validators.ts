```typescript
import { z } from 'zod';

export const leadSchema = z.object({
  company: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  contactPerson: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().regex(/^07[3-9]\d{8}$/), // Iraqi phone format
    preferredLanguage: z.enum(['ar', 'en'])
  }),
  region: z.string().min(1),
  estimatedValue: z.object({
    amount: z.number().positive(),
    currency: z.string()
  })
});

export const customerSchema = z.object({
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  type: z.enum(['company', 'government', 'individual']),
  taxNumber: z.string().regex(/^\d{9}$/).optional(), // Iraqi tax number format
  contact: z.object({
    phone: z.string().regex(/^07[3-9]\d{8}$/),
    email: z.string().email()
  })
});

export const validateLead = (data: unknown) => {
  return leadSchema.safeParse(data);
};

export const validateCustomer = (data: unknown) => {
  return customerSchema.safeParse(data);
};

export const validateIraqiPhone = (phone: string): boolean => {
  const phoneRegex = /^07[3-9]\d{8}$/;
  return phoneRegex.test(phone);
};

export const validateTaxNumber = (taxNumber: string): boolean => {
  const taxRegex = /^\d{9}$/;
  return taxRegex.test(taxNumber);
};
```