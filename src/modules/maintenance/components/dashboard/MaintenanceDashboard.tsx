```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Tool, AlertTriangle, Clock, Wrench, CheckCircle, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function MaintenanceDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="أوامر العمل"
          subtitle="أوامر العمل النشطة"
          icon={Wrench}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-red-600">8</span> طلبات عاجلة
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
            <div className="text-sm text-green-600">85% معدل التشغيل</div>
          </div>
        </Card>

        <Card
          title="وقت التوقف"
          subtitle="معدل التوقف"
          icon={Clock}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">3.5%</div>
            <div className="text-sm text-gray-500">-1.2% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="التكاليف"
          subtitle="تكاليف الصيانة"
          icon={TrendingUp}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(75000)}</div>
            <div className="text-sm text-yellow-600">+5% عن الميزانية</div>
          </div>
        </Card>
      </div>

      {/* Work Orders Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة أوامر العمل"
          subtitle="توزيع الأوامر حسب النوع"
          icon={Wrench}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'صيانة وقائية', count: 25, total: 30 },
              { type: 'صيانة تصحيحية', count: 12, total: 15 },
              { type: 'صيانة طارئة', count: 5, total: 8 },
              { type: 'تحديثات', count: 3, total: 5 }
            ].map(order => (
              <div key={order.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{order.type}</span>
                  <span className="text-sm">
                    {order.count} من {order.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(order.count / order.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الصيانة الوقائية"
          subtitle="جدول الصيانة"
          icon={CheckCircle}
        >
          <div className="space-y-4 mt-4">
            {[
              { asset: 'مولد كهربائي رئيسي', date: '2024-03-15', status: 'scheduled' },
              { asset: 'خط إنتاج A', date: '2024-03-18', status: 'overdue' },
              { asset: 'نظام تكييف مركزي', date: '2024-03-20', status: 'in_progress' },
              { asset: 'رافعة شوكية', date: '2024-03-25', status: 'scheduled' }
            ].map((maintenance, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">{maintenance.asset}</div>
                  <div className="text-sm text-gray-500">{maintenance.date}</div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  maintenance.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                  maintenance.status === 'overdue' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {maintenance.status === 'scheduled' ? 'مجدول' :
                   maintenance.status === 'overdue' ? 'متأخر' : 'قيد التنفيذ'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts & Notifications */}
      <Card
        title="التنبيهات والإشعارات"
        subtitle="آخر التحديثات"
        icon={AlertTriangle}
      >
        <div className="space-y-4 mt-4">
          {[
            { message: 'عطل مفاجئ في خط الإنتاج B - يتطلب صيانة فورية', type: 'error' },
            { message: 'موعد الصيانة الدورية للمولد الاحتياطي', type: 'warning' },
            { message: 'نقص في قطع الغيار الأساسية', type: 'warning' },
            { message: 'اكتمال صيانة نظام التبريد المركزي', type: 'success' }
          ].map((alert, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg ${
                alert.type === 'error' ? 'bg-red-50 text-red-800' :
                alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                'bg-green-50 text-green-800'
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