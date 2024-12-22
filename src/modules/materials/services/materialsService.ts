import { PurchaseRequisition, PurchaseOrder, VendorEvaluation } from '../types/materials';
import { fetchApi } from '../../../lib/api';

export const materialsService = {
  async getRequisitions() {
    // Simulated API call
    return [
      {
        id: '1',
        requisitionNumber: 'PR-2024-001',
        department: 'IT',
        requestedBy: 'أحمد محمد',
        status: 'pending',
        items: [],
        totalAmount: 50000,
        currency: 'IQD',
        requiredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as PurchaseRequisition[];
  },

  async getPurchaseOrders() {
    // Simulated API call
    return [
      {
        id: '1',
        orderNumber: 'PO-2024-001',
        vendorId: 'V001',
        status: 'sent',
        items: [],
        totals: {
          subtotal: 45000,
          tax: 6750,
          shipping: 2500,
          total: 54250,
          currency: 'IQD'
        },
        deliveryDate: new Date(),
        terms: 'Net 30',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as PurchaseOrder[];
  },

  async getVendorEvaluations() {
    // Simulated API call
    return [
      {
        id: '1',
        vendorId: 'V001',
        period: '2024-Q1',
        criteria: {
          qualityScore: 85,
          deliveryScore: 90,
          priceScore: 75,
          serviceScore: 80,
          complianceScore: 95
        },
        totalScore: 85,
        status: 'approved',
        reviewedBy: 'علي حسين',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as VendorEvaluation[];
  }
};