```typescript
import { OrderItem, TaxDetail } from '../types/order/sales-order';

export const calculateOrderTotals = (
  items: OrderItem[],
  taxRate: number = 0.15 // 15% standard Iraqi VAT
): {
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  total: number;
} => {
  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  const discountTotal = items.reduce((sum, item) => sum + item.discount.amount, 0);
  const taxableAmount = subtotal - discountTotal;
  const taxTotal = taxableAmount * taxRate;

  return {
    subtotal,
    discountTotal,
    taxTotal,
    total: subtotal - discountTotal + taxTotal
  };
};

export const calculateTaxBreakdown = (
  amount: number,
  taxes: TaxDetail[]
): number => {
  return taxes.reduce((total, tax) => {
    if (tax.isExempt) return total;
    return total + (tax.base * tax.rate);
  }, 0);
};

export const calculateCreditExposure = (
  currentBalance: number,
  pendingOrders: number,
  overdueAmount: number
): number => {
  return currentBalance + pendingOrders + (overdueAmount * 1.1); // 10% risk factor for overdue
};
```