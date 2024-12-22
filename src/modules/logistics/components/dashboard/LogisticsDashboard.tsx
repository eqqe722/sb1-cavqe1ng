```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Truck, Route, Package, FileCheck, AlertTriangle, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function LogisticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المركبات النشطة"
          subtitle="حالة الأسطول"
          icon={Truck}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> معدل التشغيل
            </div>
          </div>
        </Card>

        <Card
          title="الشحنات"
          subtitle="الشحنات النشطة"
          icon={Package}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-gray-500">23 شحنة في الطريق</div>
          </div>
        </Card>

        <Card
          title="التخليص الجمركي"
          subtitle="المعاملات الجمركية"
          icon={FileCheck}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(12)}</div>
            <div className="text-sm text-yellow-600">5 معاملات معلقة</div>
          </div>
        </Card>

        <Card
          title="الإيرادات"
          subtitle="إيرادات الشهر الحالي"
          icon={TrendingUp}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(750000)}</div>
            <div className="text-sm text-green-600">+8% عن الشهر السابق</div>
          </div>
        </Card>
      </div>

      {/* Fleet Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة الأسطول"
          subtitle="توزيع المركبات"
          icon={Truck}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'شاحنات نقل', active: 25, total: 30 },
              { type: 'شاحنات تبريد', active: 12, total: 15 },
              { type: 'شاحنات صغيرة', active: 18, total: 20 },
              { type: 'سيارات توصيل', active: 35, total: 40 }
            ].map(vehicle => (
              <div key={vehicle.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{vehicle.type}</span>
                  <span className="text-sm">
                    {vehicle.active} من {vehicle.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(vehicle.active / vehicle.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="التنبيهات والمخاطر"
          subtitle="تحديثات الأمن والسلامة"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { message: 'تأخير في التخليص الجمركي - منفذ طريبيل', type: 'warning' },
              { message: 'مشكلة فنية في شاحنة رقم 125', type: 'error' },
              { message: 'تحذير أمني على طريق بغداد - البصرة', type: 'warning' },
              { message: 'اكتمال الصيانة الدورية لـ 5 مركبات', type: 'success' }
            ].map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                  alert.type === 'error' ? 'bg-red-50 text-red-800' :
                  'bg-green-50 text-green-800'
                }`}
              >
                {alert.message}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Route Performance */}
      <Card
        title="أداء المسارات"
        subtitle="تحليل المسارات النشطة"
        icon={Route}
      >
        <div className="space-y-4 mt-4">
          {[
            { route: 'بغداد - البصرة', deliveries: 45, onTime: 92 },
            { route: 'بغداد - أربيل', deliveries: 38, onTime: 88 },
            { route: 'بغداد - الموصل', deliveries: 32, onTime: 85 },
            { route: 'البصرة - الناصرية', deliveries: 28, onTime: 90 }
          ].map(route => (
            <div key={route.route} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{route.route}</div>
                <div className="text-sm text-gray-500">
                  {route.deliveries} شحنة هذا الشهر
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">نسبة الالتزام بالوقت</div>
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      route.onTime >= 90 ? 'bg-green-600' :
                      route.onTime >= 80 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${route.onTime}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{route.onTime}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
```