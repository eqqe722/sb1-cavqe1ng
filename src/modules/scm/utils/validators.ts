```typescript
import { z } from 'zod';

export const transportPlanSchema = z.object({
  type: z.enum(['local_delivery', 'regional_distribution', 'import', 'export']),
  route: z.object({
    origin: z.object({
      governorate: z.string().min(1),
      city: z.string().min(1)
    }),
    destination: z.object({
      governorate: z.string().min(1),
      city: z.string().min(1)
    })
  }),
  security: z.object({
    level: z.enum(['standard', 'high_value', 'sensitive', 'restricted']),
    escort: z.boolean(),
    tracking: z.boolean()
  })
});

export const warehouseSchema = z.object({
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  location: z.object({
    governorate: z.string().min(1),
    city: z.string().min(1),
    address: z.string().min(1)
  }),
  security: z.object({
    level: z.enum(['basic', 'medium', 'high', 'restricted']),
    accessControl: z.boolean(),
    cctv: z.boolean()
  })
});

export const validateTransportPlan = (data: unknown) => {
  return transportPlanSchema.safeParse(data);
};

export const validateWarehouse = (data: unknown) => {
  return warehouseSchema.safeParse(data);
};

export const validateCustomsDocument = (documentNumber: string): boolean => {
  // Iraqi customs document number validation
  const docRegex = /^CD\d{10}$/;
  return docRegex.test(documentNumber);
};

export const validateSecurityClearance = (clearanceNumber: string): boolean => {
  // Iraqi security clearance number validation
  const clearanceRegex = /^SC\d{8}$/;
  return clearanceRegex.test(clearanceNumber);
};
```