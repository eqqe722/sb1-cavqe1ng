import { WorkOrderStatus, AssetStatus, PriorityLevel } from '../types/maintenance';

export const getWorkOrderStatusColor = (status: WorkOrderStatus): string => {
  const colors = {
    draft: 'bg-gray-100 text-gray-800',
    scheduled: 'bg-blue-100 text-blue-800',
    in_progress: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };
  return colors[status];
};

export const getAssetStatusColor = (status: AssetStatus): string => {
  const colors = {
    operational: 'bg-green-100 text-green-800',
    under_maintenance: 'bg-yellow-100 text-yellow-800',
    broken: 'bg-red-100 text-red-800',
    retired: 'bg-gray-100 text-gray-800'
  };
  return colors[status];
};

export const getWorkOrderPriorityColor = (priority: PriorityLevel): string => {
  const colors = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800'
  };
  return colors[priority];
};