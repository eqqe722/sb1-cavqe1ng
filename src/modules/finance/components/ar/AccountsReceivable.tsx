import React from 'react';
import { Card } from '../../../../components/common/Card';
import { DollarSign, AlertTriangle } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatters';

export default function AccountsReceivable() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="الذمم المدينة"
          subtitle="حسابات العملاء"
          icon={DollarSign}
        >
          <div className="space-y-4 mt-4">
            {[
              { customer: 'شركة البصرة للتجارة', amount: 150000, dueDate: '2024-03-15' },
              { customer: 'مؤسسة النور', amount: 85000, dueDate: '2024-03-20' },
              { customer: 'شركة الأمل', amount: 220000, dueDate: '2024-03-25' },
              { customer: 'مجموعة السلام', amount: 175000, dueDate: '2024-03-30' }
            ].map((account, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{account.customer}</div>
                  <div className="text-sm text-gray-500">تاريخ الاستحقاق: {account.dueDate}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{formatCurrency(account.amount)}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="تنبيهات التحصيل"
          subtitle="المستحقات المتأخرة"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { message: 'تجاوز موعد السداد - شركة البصرة للتجارة', days: 30, type: 'error' },
              { message: 'قرب موعد الاستحقاق - مؤسسة النور', days: 5, type: 'warning' },
              { message: 'دفعة جزئية مستلمة - شركة الأمل', amount: 50000, type: 'info' },
              { message: 'تم جدولة السداد - مجموعة السلام', date: '2024-04-15', type: 'success' }
            ].map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  alert.type === 'error' ? 'bg-red-50 text-red-800' :
                  alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                  alert.type === 'success' ? 'bg-green-50 text-green-800' :
                  'bg-blue-50 text-blue-800'
                }`}
              >
                {alert.message}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}