import React from 'react';
import { Transaction } from '../../../../types/database/finance';
import { formatCurrency } from '../../../../utils/formatters';
import { formatDate } from '../../../../utils/date';

interface TransactionListProps {
  transactions: Transaction[];
  loading: boolean;
}

export default function TransactionList({ transactions, loading }: TransactionListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              التاريخ
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              المرجع
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              الوصف
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              المبلغ
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatDate(transaction.date)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {transaction.reference}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {transaction.description.ar}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatCurrency(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}