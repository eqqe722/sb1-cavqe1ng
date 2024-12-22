```typescript
import { z } from 'zod';

export const pilgrimSchema = z.object({
  name: z.object({
    first: z.string().min(1),
    middle: z.string().min(1),
    last: z.string().min(1)
  }),
  passportNumber: z.string().min(1),
  nationality: z.string().min(1),
  birthDate: z.date(),
  gender: z.enum(['male', 'female']),
  contact: z.object({
    phone: z.string().regex(/^07[3-9]\d{8}$/),
    emergencyContact: z.object({
      name: z.string().min(1),
      phone: z.string().min(1),
      relation: z.string().min(1)
    })
  })
});

export const packageSchema = z.object({
  title: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  type: z.enum(['ziyarat', 'hajj', 'umrah', 'combined']),
  duration: z.number().positive(),
  capacity: z.object({
    minimum: z.number().positive(),
    maximum: z.number().positive()
  }),
  schedule: z.object({
    startDate: z.date(),
    endDate: z.date()
  })
});

export const validatePilgrim = (data: unknown) => {
  return pilgrimSchema.safeParse(data);
};

export const validatePackage = (data: unknown) => {
  return packageSchema.safeParse(data);
};

export const validatePassport = (passportNumber: string): boolean => {
  // Iraqi passport number validation
  const passportRegex = /^[A-Z]\d{8}$/;
  return passportRegex.test(passportNumber);
};

export const validateVisaNumber = (visaNumber: string): boolean => {
  // Iraqi visa number validation
  const visaRegex = /^[A-Z]\d{7}$/;
  return visaRegex.test(visaNumber);
};
```