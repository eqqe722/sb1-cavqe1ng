import React from 'react';
import { Card } from '../../../../components/common/Card';
import { DollarSign, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatters';

export default function BankAccounting() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="الحسابات البنكية"
          subtitle="أرصدة الحسابات"
          icon={DollarSign}
        >
          <div className="space-y-4 mt-4">
            {[
              { bank: 'البنك المركزي العراقي', account: '1234567890', balance: 2500000 },
              { bank: 'مصرف الرافدين', account: '0987654321', balance: 1500000 },
              { bank: 'مصرف الرشيد', account: '5678901234', balance: 800000 }
            ].map((account, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{account.bank}</div>
                  <div className="text-sm text-gray-500">حساب رقم: {account.account}</div>
                </div>
                <div className="font-medium">{formatCurrency(account.balance)}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="التدفقات النقدية"
          subtitle="حركة الأموال"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'واردة', amount: 450000, source: 'مبيعات' },
              { type: 'صادرة', amount: -280000, source: 'رواتب' },
              { type: 'واردة', amount: 150000, source: 'استثمارات' },
              { type: 'صادرة', amount: -95000, source: 'مصاريف تشغيلية' }
            ].map((flow, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{flow.source}</div>
                  <div className="text-sm text-gray-500">{flow.type}</div>
                </div>
                <div className={`font-medium ${flow.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(Math.abs(flow.amount))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}