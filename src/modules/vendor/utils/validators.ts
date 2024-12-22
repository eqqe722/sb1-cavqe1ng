```typescript
import { z } from 'zod';

export const vendorSchema = z.object({
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  registration: z.object({
    taxNumber: z.string().regex(/^\d{9}$/),
    commercialRegister: z.string().min(1)
  }),
  contact: z.object({
    email: z.string().email(),
    phone: z.string().regex(/^07[3-9]\d{8}$/),
    address: z.object({
      city: z.string().min(1),
      governorate: z.string().min(1)
    })
  }),
  type: z.enum(['manufacturer', 'distributor', 'service_provider', 'contractor']),
  category: z.enum(['strategic', 'preferred', 'approved', 'provisional'])
});

export const contractSchema = z.object({
  vendorId: z.string().min(1),
  type: z.enum(['fixed_price', 'time_materials', 'framework', 'service']),
  period: z.object({
    startDate: z.date(),
    endDate: z.date()
  }),
  terms: z.object({
    paymentTerms: z.string().min(1),
    deliveryTerms: z.string().min(1)
  })
});

export const validateVendor = (data: unknown) => {
  return vendorSchema.safeParse(data);
};

export const validateContract = (data: unknown) => {
  return contractSchema.safeParse(data);
};

export const validateTaxNumber = (taxNumber: string): boolean => {
  // Iraqi tax number validation
  const taxRegex = /^\d{9}$/;
  return taxRegex.test(taxNumber);
};

export const validateCommercialRegister = (registerNumber: string): boolean => {
  // Iraqi commercial register validation
  const registerRegex = /^[A-Z]\d{6}$/;
  return registerRegex.test(registerNumber);
};
```