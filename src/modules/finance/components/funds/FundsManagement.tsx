import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Wallet, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatters';

export default function FundsManagement() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="إدارة الصناديق"
          subtitle="الصناديق النشطة"
          icon={Wallet}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'الصندوق العام', balance: 1500000, type: 'تشغيلي' },
              { name: 'صندوق المشاريع', balance: 2500000, type: 'استثماري' },
              { name: 'صندوق الطوارئ', balance: 500000, type: 'احتياطي' }
            ].map((fund, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{fund.name}</div>
                  <div className="text-sm text-gray-500">{fund.type}</div>
                </div>
                <div className="font-medium">{formatCurrency(fund.balance)}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="أداء الاستثمارات"
          subtitle="عائدات الاستثمار"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'ودائع ثابتة', return: 8.5, amount: 1200000 },
              { type: 'صكوك إسلامية', return: 7.2, amount: 800000 },
              { type: 'استثمارات عقارية', return: 12.5, amount: 2500000 }
            ].map((investment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{investment.type}</div>
                  <div className="text-sm text-gray-500">عائد: {investment.return}%</div>
                </div>
                <div className="font-medium">{formatCurrency(investment.amount)}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}