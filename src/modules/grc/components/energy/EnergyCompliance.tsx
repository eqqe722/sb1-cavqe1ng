```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Flame, AlertTriangle, FileCheck, Shield } from 'lucide-react';
import { useEnergyCompliance } from '../../hooks/useEnergyCompliance';

export default function EnergyCompliance() {
  const { metrics, requirements, loading } = useEnergyCompliance();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">امتثال قطاع الطاقة</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="متطلبات وزارة النفط"
          subtitle="معايير التشغيل والسلامة"
          icon={Flame}
        >
          <div className="space-y-4 mt-4">
            {requirements?.map(req => (
              <div key={req.id} className="flex items-center justify-between">
                <span className="text-sm">{req.name.ar}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  req.status === 'compliant' ? 'bg-green-100 text-green-800' :
                  req.status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="تقييم المخاطر"
          subtitle="مخاطر العمليات والبيئة"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {metrics?.risks.map(risk => (
              <div key={risk.id} className="flex items-center justify-between">
                <span className="text-sm">{risk.name.ar}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  risk.level === 'high' ? 'bg-red-100 text-red-800' :
                  risk.level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {risk.level}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="التدقيق والمراجعة"
          subtitle="عمليات التفتيش والتدقيق"
          icon={FileCheck}
        >
          <div className="space-y-4 mt-4">
            {metrics?.audits.map(audit => (
              <div key={audit.id} className="flex items-center justify-between">
                <span className="text-sm">{audit.title.ar}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  audit.status === 'completed' ? 'bg-green-100 text-green-800' :
                  audit.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {audit.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
```