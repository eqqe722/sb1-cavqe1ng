import { InspectionPlan, QualityInspectionRecord, QualityNotification, SupplierQualityRating } from '../types/quality';
import { fetchApi } from '../../../lib/api';

export const qualityService = {
  async getInspectionPlans() {
    // Simulated API call
    return [
      {
        id: '1',
        planNumber: 'QIP-2024-001',
        name: { ar: 'فحص المواد الواردة', en: 'Incoming Materials Inspection' },
        type: 'incoming',
        frequency: 'each_lot',
        checkpoints: [],
        status: 'active',
        department: 'QC',
        responsiblePerson: 'محمد علي',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as InspectionPlan[];
  },

  async getInspectionRecords() {
    // Simulated API call
    return [
      {
        id: '1',
        inspectionNumber: 'INS-2024-001',
        planId: 'QIP-2024-001',
        type: 'incoming',
        status: 'completed',
        results: [],
        inspector: 'أحمد حسين',
        date: new Date(),
        reference: {
          type: 'purchase_order',
          id: 'PO-2024-001'
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as QualityInspectionRecord[];
  },

  async getQualityNotifications() {
    // Simulated API call
    return [
      {
        id: '1',
        notificationNumber: 'QN-2024-001',
        type: 'defect',
        priority: 'high',
        status: 'new',
        description: { 
          ar: 'عيب في المواد الخام', 
          en: 'Raw Material Defect' 
        },
        reportedBy: 'علي محمود',
        dueDate: new Date(),
        actions: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as QualityNotification[];
  }
};