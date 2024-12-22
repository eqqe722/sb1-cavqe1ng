```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Building2, Users, Wrench, FileText, DollarSign, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatters';

export default function RealEstateDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="العقارات"
          subtitle="إجمالي العقارات"
          icon={Building2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">156</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> معدل الإشغال
            </div>
          </div>
        </Card>

        <Card
          title="المستأجرين"
          subtitle="المستأجرين النشطين"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">245</div>
            <div className="text-sm text-gray-500">12 مستأجر جديد هذا الشهر</div>
          </div>
        </Card>

        <Card
          title="طلبات الصيانة"
          subtitle="الطلبات النشطة"
          icon={Wrench}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">23</div>
            <div className="text-sm text-red-500">8 طلبات عاجلة</div>
          </div>
        </Card>

        <Card
          title="الإيرادات"
          subtitle="إيرادات الشهر الحالي"
          icon={DollarSign}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(850000)}</div>
            <div className="text-sm text-green-600">+12% عن الشهر السابق</div>
          </div>
        </Card>
      </div>

      {/* Property Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة العقارات"
          subtitle="توزيع العقارات حسب النوع"
          icon={Building2}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'سكني', count: 85, total: 100 },
              { type: 'تجاري', count: 45, total: 50 },
              { type: 'مكتبي', count: 15, total: 20 },
              { type: 'صناعي', count: 8, total: 10 }
            ].map(property => (
              <div key={property.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{property.type}</span>
                  <span className="text-sm">
                    {property.count} من {property.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(property.count / property.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الإيجارات المستحقة"
          subtitle="حالة التحصيل"
          icon={FileText}
        >
          <div className="space-y-4 mt-4">
            {[
              { status: 'مدفوع', amount: 450000, color: 'bg-green-100 text-green-800' },
              { status: 'متأخر', amount: 120000, color: 'bg-red-100 text-red-800' },
              { status: 'مستحق', amount: 280000, color: 'bg-yellow-100 text-yellow-800' }
            ].map(payment => (
              <div key={payment.status} className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-sm ${payment.color}`}>
                  {payment.status}
                </span>
                <span className="font-medium">{formatCurrency(payment.amount)}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card
        title="آخر النشاطات"
        subtitle="تحديثات النظام"
        icon={TrendingUp}
      >
        <div className="space-y-4 mt-4">
          {[
            { message: 'تم توقيع عقد إيجار جديد - عمارة الرشيد', type: 'success' },
            { message: 'طلب صيانة عاجل - مجمع الخليج التجاري', type: 'warning' },
            { message: 'تم تجديد عقد - برج السلام', type: 'info' },
            { message: 'دفعة إيجار متأخرة - محل 15', type: 'error' }
          ].map((activity, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg ${
                activity.type === 'success' ? 'bg-green-50 text-green-800' :
                activity.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                activity.type === 'error' ? 'bg-red-50 text-red-800' :
                'bg-blue-50 text-blue-800'
              }`}
            >
              {activity.message}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
```