import React from 'react';
import { Account } from '../../types/accounting';
import { formatCurrency } from '../../../../utils/formatters';

interface AccountChartProps {
  accounts: Account[];
  loading: boolean;
}

export default function AccountChart({ accounts, loading }: AccountChartProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  const renderAccount = (account: Account, level: number = 0) => {
    const childAccounts = accounts.filter(a => a.parentId === account.id);

    return (
      <div key={account.id} className="border-b last:border-b-0">
        <div 
          className="flex items-center justify-between py-2 hover:bg-gray-50"
          style={{ paddingRight: `${level * 1.5}rem` }}
        >
          <div className="flex items-center gap-2">
            <span className="text-gray-500">{account.code}</span>
            <span className="font-medium">{account.name.ar}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className={`text-sm ${account.balance.current >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(account.balance.current)}
            </span>
            <span className="text-xs text-gray-500">{account.type}</span>
          </div>
        </div>
        {childAccounts.length > 0 && (
          <div className="border-r mr-4">
            {childAccounts.map(child => renderAccount(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const rootAccounts = accounts.filter(account => !account.parentId);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="font-medium">دليل الحسابات</h3>
      </div>
      <div className="p-4">
        {rootAccounts.map(account => renderAccount(account))}
      </div>
    </div>
  );
}