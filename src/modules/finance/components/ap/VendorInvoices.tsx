import React from 'react';
import { VendorInvoice } from '../../types/payable';
import { formatCurrency } from '../../../../utils/formatters';
import { formatDate } from '../../../../utils/date';

interface VendorInvoicesProps {
  invoices: VendorInvoice[];
  loading: boolean;
}

export default function VendorInvoices({ invoices, loading }: VendorInvoicesProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">رقم الفاتورة</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تاريخ الاستحقاق</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المبلغ</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {invoice.invoiceNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatDate(invoice.dueDate)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatCurrency(invoice.totals.total)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                  invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {invoice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}