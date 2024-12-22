```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import RiskMatrix from './RiskMatrix';
import { AlertTriangle, TrendingUp } from 'lucide-react';
import { Risk } from '../../types/risk';

export default function RiskManagement() {
  // Sample data - in production, this would come from an API
  const risks: Risk[] = [
    {
      id: '1',
      title: { ar: 'مخاطر تشغيلية', en: 'Operational Risk' },
      category: 'operational',
      impact: 'high',
      likelihood: 'possible',
      status: 'identified',
    } as Risk,
    // Add more sample risks...
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">إدارة المخاطر</h2>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
          إضافة مخاطر جديدة
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card
          title="مصفوفة المخاطر"
          subtitle="تقييم المخاطر حسب الأثر والاحتمالية"
          icon={AlertTriangle}
        >
          <RiskMatrix risks={risks} />
        </Card>

        <Card
          title="اتجاهات المخاطر"
          subtitle="تحليل تطور المخاطر"
          icon={TrendingUp}
        >
          {/* Risk trends visualization would go here */}
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">المخاطر النشطة</h3>
        <div className="space-y-4">
          {risks.map(risk => (
            <div key={risk.id} className="border-b pb-4 last:border-b-0">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{risk.title.ar}</h4>
                  <p className="text-sm text-gray-500">{risk.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    risk.impact === 'high' ? 'bg-red-100 text-red-800' :
                    risk.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {risk.impact}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    risk.likelihood === 'likely' ? 'bg-red-100 text-red-800' :
                    risk.likelihood === 'possible' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {risk.likelihood}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```