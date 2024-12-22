```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Shield, AlertTriangle, FileCheck, Lock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المخاطر النشطة"
          subtitle="المخاطر التي تتطلب المتابعة"
          icon={AlertTriangle}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm text-gray-500">4 مخاطر عالية</div>
          </div>
        </Card>

        <Card
          title="التدقيقات الجارية"
          subtitle="عمليات التدقيق الحالية"
          icon={FileCheck}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">3</div>
            <div className="text-sm text-gray-500">2 تدقيق داخلي</div>
          </div>
        </Card>

        <Card
          title="طلبات الصلاحيات"
          subtitle="طلبات الوصول المعلقة"
          icon={Lock}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">8</div>
            <div className="text-sm text-gray-500">5 طلبات عاجلة</div>
          </div>
        </Card>

        <Card
          title="الامتثال"
          subtitle="نسبة الامتثال الكلية"
          icon={Shield}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">85%</div>
            <div className="text-sm text-gray-500">+2% عن الشهر السابق</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">المخاطر حسب القطاع</h3>
          <div className="space-y-4">
            {[
              { sector: 'العمليات', count: 5, color: 'bg-blue-100' },
              { sector: 'تقنية المعلومات', count: 4, color: 'bg-green-100' },
              { sector: 'المالية', count: 3, color: 'bg-yellow-100' },
              { sector: 'الموارد البشرية', count: 2, color: 'bg-purple-100' },
            ].map(item => (
              <div key={item.sector} className="flex items-center justify-between">
                <span>{item.sector}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{item.count}</span>
                  <div className={`w-24 h-2 rounded-full ${item.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">الامتثال للمعايير</h3>
          <div className="space-y-4">
            {[
              { standard: 'ISO 27001', compliance: 90 },
              { standard: 'COSQC', compliance: 85 },
              { standard: 'قوانين العمل العراقية', compliance: 95 },
              { standard: 'معايير البنك المركزي', compliance: 88 },
            ].map(item => (
              <div key={item.standard} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.standard}</span>
                  <span>{item.compliance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 rounded-full h-2"
                    style={{ width: `${item.compliance}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```