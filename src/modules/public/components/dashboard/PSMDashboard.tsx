```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Users, Building2, FileText, DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function PSMDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="طلبات المواطنين"
          subtitle="الطلبات النشطة"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> معدل الإنجاز
            </div>
          </div>
        </Card>

        <Card
          title="المشاريع"
          subtitle="المشاريع الجارية"
          icon={Building2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">12 مشروع جديد</div>
          </div>
        </Card>

        <Card
          title="الإيرادات"
          subtitle="تحصيل الإيرادات"
          icon={DollarSign}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(8500000)}</div>
            <div className="text-sm text-green-600">+12% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="الميزانية"
          subtitle="الإنفاق الحكومي"
          icon={TrendingUp}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(12500000)}</div>
            <div className="text-sm text-yellow-600">75% من المخصص</div>
          </div>
        </Card>
      </div>

      {/* Service Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="أداء الخدمات"
          subtitle="معدل إنجاز الخدمات"
          icon={FileText}
        >
          <div className="space-y-4 mt-4">
            {[
              { service: 'البطاقة الوطنية', completed: 850, total: 1000 },
              { service: 'رخص البناء', completed: 120, total: 150 },
              { service: 'التراخيص التجارية', completed: 280, total: 300 },
              { service: 'الخدمات البلدية', completed: 450, total: 500 }
            ].map(service => (
              <div key={service.service} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{service.service}</span>
                  <span className="text-sm">
                    {service.completed} من {service.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(service.completed / service.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="حالة الطوارئ"
          subtitle="تنبيهات وتحذيرات"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { message: 'تحذير من هطول أمطار غزيرة - محافظة نينوى', type: 'warning' },
              { message: 'حالة تأهب قصوى - الدفاع المدني', type: 'error' },
              { message: 'تحديث خطة الطوارئ - محافظة البصرة', type: 'info' },
              { message: 'اكتمال تدريب فرق الإنقاذ', type: 'success' }
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

      {/* Budget Allocation */}
      <Card
        title="توزيع الميزانية"
        subtitle="حسب القطاعات"
        icon={DollarSign}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            {[
              { sector: 'البنية التحتية', amount: 4500000, percentage: 35 },
              { sector: 'التعليم', amount: 3200000, percentage: 25 },
              { sector: 'الصحة', amount: 2800000, percentage: 22 },
              { sector: 'الخدمات البلدية', amount: 2300000, percentage: 18 }
            ].map(sector => (
              <div key={sector.sector} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{sector.sector}</span>
                  <span className="text-sm">{formatCurrency(sector.amount)}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${sector.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>الميزانية المخصصة</span>
              <span className="font-medium">{formatCurrency(12500000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>المصروف الفعلي</span>
              <span className="font-medium text-green-600">{formatCurrency(9375000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>المتبقي</span>
              <span className="font-medium text-blue-600">{formatCurrency(3125000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>نسبة الصرف</span>
              <span className="font-medium">75%</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
```