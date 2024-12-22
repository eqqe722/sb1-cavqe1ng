```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Zap, TrendingDown, AlertTriangle, Battery } from 'lucide-react';

export default function EnergyMonitoring() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">مراقبة استهلاك الطاقة</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="الاستهلاك الحالي"
          subtitle="معدل الاستهلاك اللحظي"
          icon={Zap}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">245 kW</div>
            <div className="text-sm text-green-600">ضمن الحدود المسموحة</div>
          </div>
        </Card>

        <Card
          title="كفاءة الطاقة"
          subtitle="معدل الكفاءة اليومي"
          icon={TrendingDown}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">92%</div>
            <div className="text-sm text-gray-500">الهدف: 95%</div>
          </div>
        </Card>

        <Card
          title="الحمل الكهربائي"
          subtitle="نسبة الحمل الكلي"
          icon={Battery}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">78%</div>
            <div className="text-sm text-yellow-600">قريب من الحد الأقصى</div>
          </div>
        </Card>
      </div>

      {/* Energy Distribution */}
      <Card
        title="توزيع استهلاك الطاقة"
        subtitle="حسب خطوط الإنتاج"
        icon={Zap}
      >
        <div className="space-y-4 mt-4">
          {[
            { name: 'خط الإنتاج 1', consumption: 85, limit: 100 },
            { name: 'خط الإنتاج 2', consumption: 92, limit: 100 },
            { name: 'خط الإنتاج 3', consumption: 45, limit: 100 },
            { name: 'خط الإنتاج 4', consumption: 78, limit: 100 }
          ].map(line => (
            <div key={line.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{line.name}</span>
                <span className="text-sm">{line.consumption} kW</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div 
                  className={`h-2 rounded-full ${
                    (line.consumption / line.limit) > 0.9 ? 'bg-red-600' :
                    (line.consumption / line.limit) > 0.7 ? 'bg-yellow-600' :
                    'bg-green-600'
                  }`}
                  style={{ width: `${(line.consumption / line.limit) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
```