```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Users, FileCheck, AlertTriangle, TrendingUp, Building2, FileText } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function VendorDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الموردين النشطين"
          subtitle="إجمالي الموردين"
          icon={Building2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> معدل الامتثال
            </div>
          </div>
        </Card>

        <Card
          title="العقود"
          subtitle="العقود النشطة"
          icon={FileText}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">12 عقد للتجديد</div>
          </div>
        </Card>

        <Card
          title="الأداء"
          subtitle="متوسط تقييم الموردين"
          icon={TrendingUp}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">92%</div>
            <div className="text-sm text-green-600">+5% عن الربع السابق</div>
          </div>
        </Card>

        <Card
          title="المشتريات"
          subtitle="إجمالي المشتريات"
          icon={FileCheck}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(850000)}</div>
            <div className="text-sm text-gray-500">هذا الشهر</div>
          </div>
        </Card>
      </div>

      {/* Vendor Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="أداء الموردين"
          subtitle="تقييم أداء الموردين"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'شركة البصرة للتجارة', score: 95, orders: 150 },
              { name: 'مؤسسة النور', score: 88, orders: 120 },
              { name: 'شركة الأمل', score: 92, orders: 200 },
              { name: 'مجموعة السلام', score: 85, orders: 80 }
            ].map(vendor => (
              <div key={vendor.name} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{vendor.name}</span>
                    <span className="text-sm text-gray-500 mr-2">
                      ({vendor.orders} طلب)
                    </span>
                  </div>
                  <span className="text-sm">{vendor.score}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      vendor.score >= 90 ? 'bg-green-600' :
                      vendor.score >= 80 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${vendor.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="التنبيهات والمخاطر"
          subtitle="تحديثات هامة"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { message: 'انتهاء صلاحية 5 عقود خلال الشهر القادم', type: 'warning' },
              { message: 'تأخر في التوريد - شركة البصرة للتجارة', type: 'error' },
              { message: 'تحديث في شروط التوريد الحكومية', type: 'info' },
              { message: 'اكتمال تأهيل 3 موردين جدد', type: 'success' }
            ].map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                  alert.type === 'error' ? 'bg-red-50 text-red-800' :
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
```