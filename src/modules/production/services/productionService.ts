import { ProductionOrder, BillOfMaterials, WorkCenter } from '../types/production';
import { fetchApi } from '../../../lib/api';

export const productionService = {
  async getProductionOrders() {
    // Simulated API call
    return [
      {
        id: '1',
        orderNumber: 'PO-2024-001',
        productId: 'PROD001',
        quantity: 100,
        startDate: new Date(),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: 'planned',
        priority: 'high',
        workCenterId: 'WC001',
        bomId: 'BOM001',
        completedQuantity: 0,
        qualityChecks: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as ProductionOrder[];
  },

  async getBillOfMaterials() {
    // Simulated API call
    return [
      {
        id: '1',
        bomNumber: 'BOM-2024-001',
        productId: 'PROD001',
        version: '1.0',
        status: 'active',
        components: [
          {
            materialId: 'MAT001',
            quantity: 2,
            unit: 'pcs',
            wastagePercent: 5,
            isOptional: false
          }
        ],
        laborRequirements: [],
        routingSteps: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as BillOfMaterials[];
  },

  async getWorkCenters() {
    // Simulated API call
    return [
      {
        id: '1',
        code: 'WC001',
        name: { ar: 'خط التجميع الرئيسي', en: 'Main Assembly Line' },
        capacity: {
          daily: 100,
          shift: 35,
          unit: 'units'
        },
        efficiency: 0.85,
        utilization: 0.75,
        maintenanceSchedule: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as WorkCenter[];
  }
};