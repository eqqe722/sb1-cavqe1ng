```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Building2, Tool, TrendingDown, Wrench, AlertTriangle, Activity } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function AssetDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الأصول النشطة"
          subtitle="إجمالي الأصول"
          icon={Building2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(450)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> معدل الاستخدام
            </div>
          </div>
        </Card>

        <Card
          title="المعدات"
          subtitle="حالة المعدات"
          icon={Tool}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(120)}</div>
            <div className="text-sm text-yellow-600">15 في الصيانة</div>
          </div>
        </Card>

        <Card
          title="الإهلاك"
          subtitle="القيمة الدفترية"
          icon={TrendingDown}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(8500000)}</div>
            <div className="text-sm text-gray-500">-12% هذا العام</div>
          </div>
        </Card>

        <Card
          title="الصيانة"
          subtitle="طلبات الصيانة"
          icon={Wrench}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-red-600">8 طلبات عاجلة</div>
          </div>
        </Card>
      </div>

      {/* Asset Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="توزيع الأصول"
          subtitle="حسب النوع"
          icon={Building2}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'عقارات', count: 150, value: 5000000 },
              { type: 'معدات صناعية', count: 200, value: 2500000 },
              { type: 'مركبات', count: 50, value: 750000 },
              { type: 'أجهزة', count: 100, value: 250000 }
            ].map(asset => (
              <div key={asset.type} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{asset.type}</span>
                    <span className="text-sm text-gray-500 mr-2">
                      ({asset.count} أصل)
                    </span>
                  </div>
                  <span className="text-sm">{formatCurrency(asset.value)}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(asset.value / 5000000) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="حالة الصيانة"
          subtitle="جدول الصيانة"
          icon={Activity}
        >
          <div className="space-y-4 mt-4">
            {[
              { asset: 'مولد كهربائي رئيسي', date: '2024-03-15', type: 'دورية', priority: 'high' },
              { asset: 'رافعة شوكية', date: '2024-03-20', type: 'وقائية', priority: 'medium' },
              { asset: 'مكيف مركزي', date: '2024-03-25', type: 'طارئة', priority: 'urgent' },
              { asset: 'مصعد', date: '2024-03-30', type: 'دورية', priority: 'low' }
            ].map((maintenance, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">{maintenance.asset}</div>
                  <div className="text-sm text-gray-500">{maintenance.date}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">{maintenance.type}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    maintenance.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                    maintenance.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                    maintenance.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {maintenance.priority === 'urgent' ? 'عاجل' :
                     maintenance.priority === 'high' ? 'مرتفع' :
                     maintenance.priority === 'medium' ? 'متوسط' :
                     'منخفض'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts & Notifications */}
      <Card
        title="التنبيهات والإشعارات"
        subtitle="تحديثات الأصول"
        icon={AlertTriangle}
      >
        <div className="space-y-4 mt-4">
          {[
            { message: 'تجاوز العمر الافتراضي - مولد كهربائي #123', type: 'warning' },
            { message: 'موعد الصيانة الدورية - رافعة شوكية #456', type: 'info' },
            { message: 'عطل طارئ - مكيف مركزي الطابق الثالث', type: 'error' },
            { message: 'اكتمال الصيانة - مصعد المبنى الرئيسي', type: 'success' }
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
  );
}
```