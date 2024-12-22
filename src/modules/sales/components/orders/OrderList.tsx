import React from 'react';
import { SalesOrder } from '../../types/sales';
import { formatCurrency } from '../../../../utils/formatters';
import { formatDate } from '../../../../utils/date';

interface OrderListProps {
  orders: SalesOrder[];
  loading: boolean;
}

export default function OrderList({ orders, loading }: OrderListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">رقم الطلب</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">العميل</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التاريخ</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المبلغ</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.orderNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{order.customer.name.ar}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{formatDate(order.date)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{formatCurrency(order.totals.total)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
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