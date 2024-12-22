import { z } from 'zod';

export const requisitionSchema = z.object({
  department: z.string().min(1),
  requestedBy: z.string().min(1),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().positive(),
    estimatedPrice: z.number().positive()
  })).min(1),
  requiredDate: z.date().min(new Date())
});

export const purchaseOrderSchema = z.object({
  vendorId: z.string().min(1),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().positive(),
    unitPrice: z.number().positive()
  })).min(1),
  deliveryDate: z.date().min(new Date()),
  terms: z.string().min(1)
});

export const validateRequisition = (data: unknown) => {
  return requisitionSchema.safeParse(data);
};

export const validatePurchaseOrder = (data: unknown) => {
  return purchaseOrderSchema.safeParse(data);
};