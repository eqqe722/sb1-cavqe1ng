```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Flame, Pipeline, Factory, Zap, AlertTriangle, FileCheck } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function EnergyDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="إنتاج النفط"
          subtitle="المعدل اليومي"
          icon={Flame}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(3.5)}M برميل/يوم</div>
            <div className="text-sm text-green-600">98% من المستهدف</div>
          </div>
        </Card>

        <Card
          title="المصافي"
          subtitle="معدل التكرير"
          icon={Factory}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(850)}K برميل/يوم</div>
            <div className="text-sm text-gray-500">85% كفاءة التشغيل</div>
          </div>
        </Card>

        <Card
          title="خطوط الأنابيب"
          subtitle="حالة النقل"
          icon={Pipeline}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">92%</div>
            <div className="text-sm text-green-600">معدل التشغيل</div>
          </div>
        </Card>
      </div>

      {/* Operations Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة المصافي"
          subtitle="أداء وحدات التكرير"
          icon={Factory}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'مصفاة بيجي', capacity: 85, status: 'operational' },
              { name: 'مصفاة الدورة', capacity: 92, status: 'operational' },
              { name: 'مصفاة البصرة', capacity: 78, status: 'maintenance' },
              { name: 'مصفاة كركوك', capacity: 95, status: 'operational' }
            ].map(refinery => (
              <div key={refinery.name} className="space-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      refinery.status === 'operational' ? 'bg-green-500' :
                      'bg-yellow-500'
                    }`} />
                    <span className="font-medium">{refinery.name}</span>
                  </div>
                  <span className="text-sm">{refinery.capacity}% الكفاءة</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      refinery.capacity >= 90 ? 'bg-green-600' :
                      refinery.capacity >= 70 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${refinery.capacity}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الامتثال التنظيمي"
          subtitle="حالة المعايير والتراخيص"
          icon={FileCheck}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'تراخيص التشغيل', status: 'valid', expiry: '2024-12' },
              { type: 'معايير البيئة', status: 'warning', expiry: '2024-06' },
              { type: 'شهادات السلامة', status: 'valid', expiry: '2024-09' },
              { type: 'تصاريح التصدير', status: 'valid', expiry: '2024-08' }
            ].map(compliance => (
              <div key={compliance.type} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{compliance.type}</div>
                  <div className="text-sm text-gray-500">
                    ينتهي في {compliance.expiry}
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  compliance.status === 'valid' ? 'bg-green-100 text-green-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {compliance.status === 'valid' ? 'ساري' : 'تحذير'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts & Monitoring */}
      <Card
        title="التنبيهات والمراقبة"
        subtitle="حالة السلامة والأمن"
        icon={AlertTriangle}
      >
        <div className="space-y-4 mt-4">
          {[
            { message: 'ارتفاع في ضغط خط الأنابيب - المنطقة الجنوبية', type: 'warning' },
            { message: 'صيانة مجدولة لوحدة التكرير رقم 3', type: 'info' },
            { message: 'تجاوز معدلات الانبعاثات - مصفاة البصرة', type: 'error' },
            { message: 'اكتمال فحص السلامة الدوري - حقل الرميلة', type: 'success' }
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