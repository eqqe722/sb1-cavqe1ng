```typescript
import { z } from 'zod';

export const employeeSchema = z.object({
  nationalId: z.string().regex(/^\d{12}$/), // Iraqi Civil ID format
  name: z.object({
    first: z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    }),
    last: z.object({
      ar: z.string().min(1),
      en: z.string().optional()
    })
  }),
  employmentInfo: z.object({
    type: z.enum(['permanent', 'contract', 'temporary', 'probation']),
    joiningDate: z.date(),
    department: z.string().min(1)
  })
});

export const validateEmployee = (data: unknown) => {
  return employeeSchema.safeParse(data);
};

export const validateIraqiPhone = (phone: string): boolean => {
  // Iraqi phone number validation (e.g., 07X XXXX XXXX)
  const phoneRegex = /^07[3-9]\d{8}$/;
  return phoneRegex.test(phone);
};

export const validateWorkPermit = (permitNumber: string): boolean => {
  // Iraqi work permit number validation
  const permitRegex = /^WP\d{8}$/;
  return permitRegex.test(permitNumber);
};
```