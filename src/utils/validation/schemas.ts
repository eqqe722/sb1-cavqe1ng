import { z } from 'zod';

export const addressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  postalCode: z.string().regex(/^\d{5}$/),
  country: z.string().min(1),
  coordinates: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }).optional(),
});

export const employeeSchema = z.object({
  nationalId: z.string().regex(/^\d{12}$/),
  firstName: z.object({
    ar: z.string().min(1),
    en: z.string().optional(),
  }),
  lastName: z.object({
    ar: z.string().min(1),
    en: z.string().optional(),
  }),
  birthDate: z.date(),
  employmentType: z.enum(['permanent', 'contract', 'temporary']),
  departmentId: z.string().uuid(),
  position: z.string().min(1),
  status: z.enum(['active', 'inactive', 'pending', 'archived']),
  joiningDate: z.date(),
});

export const productSchema = z.object({
  code: z.string().min(1),
  name: z.object({
    ar: z.string().min(1),
    en: z.string().optional(),
  }),
  price: z.object({
    purchase: z.number().positive(),
    sale: z.number().positive(),
    currency: z.string().length(3),
  }),
  status: z.enum(['active', 'inactive']),
});