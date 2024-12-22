import React from 'react';
import { WorkOrder } from '../../types/maintenance';
import { formatDate } from '../../../../utils/date';
import { getWorkOrderStatusColor, getWorkOrderPriorityColor } from '../../utils/statusHelpers';

interface WorkOrderListProps {
  workOrders: WorkOrder[];
  loading: boolean;
}

export default function WorkOrderList({ workOrders, loading }: WorkOrderListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              رقم الأمر
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              النوع
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              الأولوية
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              تاريخ البدء
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              الحالة
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {workOrders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {order.orderNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {order.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${getWorkOrderPriorityColor(order.priority)}`}>
                  {order.priority}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatDate(order.scheduledStart)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${getWorkOrderStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}