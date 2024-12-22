import React from 'react';
import { Card } from '../../../../components/common/Card';
import { DollarSign, AlertTriangle } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatters';

export default function CreditManagement() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حدود الائتمان"
          subtitle="إدارة الحدود الائتمانية للعملاء"
          icon={DollarSign}
        >
          <div className="space-y-4 mt-4">
            {[
              { customer: 'شركة البصرة للتجارة', limit: 500000, used: 350000 },
              { customer: 'مؤسسة النور', limit: 250000, used: 180000 },
              { customer: 'شركة الأمل', limit: 750000, used: 600000 },
              { customer: 'مجموعة السلام', limit: 1000000, used: 450000 }
            ].map(credit => (
              <div key={credit.customer} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{credit.customer}</span>
                  <span className="text-sm">
                    {formatCurrency(credit.used)} / {formatCurrency(credit.limit)}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      (credit.used / credit.limit) > 0.8 ? 'bg-red-600' :
                      (credit.used / credit.limit) > 0.6 ? 'bg-yellow-600' :
                      'bg-green-600'
                    }`}
                    style={{ width: `${(credit.used / credit.limit) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="تنبيهات الائتمان"
          subtitle="المخاطر والتحذيرات"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { message: 'تجاوز حد الائتمان - شركة الأمل', type: 'error' },
              { message: 'اقتراب من حد الائتمان - مؤسسة النور', type: 'warning' },
              { message: 'فواتير متأخرة السداد - شركة البصرة للتجارة', type: 'warning' },
              { message: 'تجديد حد ائتماني - مجموعة السلام', type: 'info' }
            ].map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  alert.type === 'error' ? 'bg-red-50 text-red-800' :
                  alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
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