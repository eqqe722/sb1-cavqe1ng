import React from 'react';
import { Account } from '../../../../types/database/finance';
import { formatCurrency } from '../../../../utils/formatters';

interface AccountListProps {
  accounts: Account[];
  loading: boolean;
}

export default function AccountList({ accounts, loading }: AccountListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              رقم الحساب
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              اسم الحساب
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              النوع
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              الرصيد
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {account.code}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {account.name.ar}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {account.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatCurrency(account.balance)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}