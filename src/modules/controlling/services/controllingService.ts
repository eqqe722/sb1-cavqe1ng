import { CostCenter, CostAllocation, ProfitCenter, ProductCost } from '../types/controlling';
import { fetchApi } from '../../../lib/api';

export const controllingService = {
  async getCostCenters() {
    // Simulated API call
    return [
      {
        id: '1',
        code: 'CC001',
        name: { ar: 'قسم تكنولوجيا المعلومات', en: 'IT Department' },
        manager: 'أحمد محمد',
        totalCost: 150000,
        budget: 200000,
        variance: -50000,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as CostCenter[];
  },

  async getCostAllocations() {
    // Simulated API call
    return [
      {
        id: '1',
        costCenterId: 'CC001',
        amount: 25000,
        category: 'رواتب',
        date: new Date(),
        description: 'رواتب موظفي تكنولوجيا المعلومات',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as CostAllocation[];
  },

  async getProfitCenters() {
    // Simulated API call
    return [
      {
        id: '1',
        code: 'PC001',
        name: { ar: 'وحدة المبيعات', en: 'Sales Unit' },
        revenue: 500000,
        costs: 300000,
        profit: 200000,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as ProfitCenter[];
  },

  async getProductCosts() {
    // Simulated API call
    return [
      {
        id: '1',
        productId: 'PROD001',
        materialCost: 50000,
        laborCost: 25000,
        overheadCost: 15000,
        totalCost: 90000,
        period: '2024-03',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as ProductCost[];
  }
};