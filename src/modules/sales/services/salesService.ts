import { SalesOrder, PriceList, DiscountRule } from '../types/sales';
import { fetchApi } from '../../../lib/api';

export const salesService = {
  async getSalesOrders() {
    // Simulated API call
    return [
      {
        id: '1',
        orderNumber: 'SO-2024-001',
        customer: {
          id: 'CUST001',
          name: { ar: 'شركة البصرة للتجارة', en: 'Basra Trading Co.' }
        },
        date: new Date(),
        items: [],
        totals: {
          subtotal: 50000,
          discount: 5000,
          tax: 7500,
          shipping: 2500,
          total: 55000,
          currency: 'IQD'
        },
        status: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as SalesOrder[];
  },

  async getPriceLists() {
    // Simulated API call
    return [
      {
        id: '1',
        code: 'PL-2024-001',
        name: { ar: 'قائمة الأسعار الرئيسية', en: 'Main Price List' },
        currency: 'IQD',
        items: [],
        validFrom: new Date(),
        validTo: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as PriceList[];
  },

  async getDiscountRules() {
    // Simulated API call
    return [
      {
        id: '1',
        name: { ar: 'خصم كمية', en: 'Quantity Discount' },
        type: 'percentage',
        value: 10,
        minQuantity: 100,
        validFrom: new Date(),
        validTo: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as DiscountRule[];
  }
};