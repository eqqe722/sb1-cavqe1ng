```typescript
import { z } from 'zod';

export const requisitionSchema = z.object({
  department: z.string().min(1),
  items: z.array(z.object({
    materialId: z.string().min(1),
    quantity: z.number().positive(),
    unit: z.string().min(1)
  })).min(1),
  requiredDate: z.date().min(new Date())
});

export const validateRequisition = (data: unknown) => {
  return requisitionSchema.safeParse(data);
};

export const validateSupplierTaxNumber = (taxNumber: string): boolean => {
  // Iraqi tax number validation
  const taxRegex = /^\d{9}$/;
  return taxRegex.test(taxNumber);
};

export const validateImportLicense = (license: string): boolean => {
  // Iraqi import license validation
  const licenseRegex = /^IM\d{8}$/;
  return licenseRegex.test(license);
};

export const validateBatchNumber = (batchNumber: string): boolean => {
  // Batch number format validation
  const batchRegex = /^[A-Z]{2}\d{6}$/;
  return batchRegex.test(batchNumber);
};
```