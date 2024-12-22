```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Factory, Users, Zap, AlertTriangle, Gauge, CheckCircle } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function ProductionDashboard() {
  return (
    <div className="space-y-6">
      {/* Production Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="الإنتاج اليومي"
          subtitle="معدل الإنتاج الحالي"
          icon={Factory}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">95%</span> من الهدف اليومي
            </div>
          </div>
        </Card>

        <Card
          title="كفاءة الخط"
          subtitle="معدل الكفاءة الكلي"
          icon={Gauge}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">87%</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">+2%</span> عن الأسبوع الماضي
            </div>
          </div>
        </Card>

        <Card
          title="استهلاك الطاقة"
          subtitle="الاستهلاك اليومي"
          icon={Zap}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">2,450 kWh</div>
            <div className="text-sm text-green-600">5% أقل من المعدل</div>
          </div>
        </Card>
      </div>

      {/* Production Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة خطوط الإنتاج"
          subtitle="الحالة الحالية"
          icon={Factory}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'خط الإنتاج 1', status: 'running', efficiency: 92 },
              { name: 'خط الإنتاج 2', status: 'running', efficiency: 88 },
              { name: 'خط الإنتاج 3', status: 'maintenance', efficiency: 0 },
              { name: 'خط الإنتاج 4', status: 'running', efficiency: 95 }
            ].map(line => (
              <div key={line.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${
                    line.status === 'running' ? 'bg-green-500' :
                    line.status === 'maintenance' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <span className="font-medium">{line.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${line.efficiency}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{line.efficiency}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="جودة الإنتاج"
          subtitle="معدلات الجودة"
          icon={CheckCircle}
        >
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <span>الوحدات المنتجة</span>
              <span className="font-medium">{formatNumber(1250)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>الوحدات المقبولة</span>
              <span className="font-medium text-green-600">{formatNumber(1200)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>الوحدات المرفوضة</span>
              <span className="font-medium text-red-600">{formatNumber(50)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>معدل الجودة</span>
              <span className="font-medium">96%</span>
            </div>
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
            { message: 'انخفاض مستوى المواد الخام في خط الإنتاج 2', type: 'warning' },
            { message: 'موعد الصيانة الدورية لخط الإنتاج 3', type: 'info' },
            { message: 'تجاوز معدل استهلاك الطاقة في وحدة التصنيع 4', type: 'error' },
            { message: 'اكتمال دورة الإنتاج في خط الإنتاج 1', type: 'success' }
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