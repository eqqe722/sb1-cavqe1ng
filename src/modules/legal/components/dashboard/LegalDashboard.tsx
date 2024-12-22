```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { FileText, Gavel, Shield, BookOpen, AlertTriangle, Calendar } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function LegalDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="العقود النشطة"
          subtitle="إدارة العقود"
          icon={FileText}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-yellow-600">12</span> تجديد مستحق
            </div>
          </div>
        </Card>

        <Card
          title="القضايا"
          subtitle="الدعاوى القضائية"
          icon={Gavel}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">8 جلسات هذا الأسبوع</div>
          </div>
        </Card>

        <Card
          title="الامتثال"
          subtitle="معدل الامتثال"
          icon={Shield}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">92%</div>
            <div className="text-sm text-green-600">+5% عن الربع السابق</div>
          </div>
        </Card>

        <Card
          title="السياسات"
          subtitle="السياسات والإجراءات"
          icon={BookOpen}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(85)}</div>
            <div className="text-sm text-blue-600">15 تحديث جديد</div>
          </div>
        </Card>
      </div>

      {/* Contract Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة العقود"
          subtitle="تصنيف العقود النشطة"
          icon={FileText}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'عقود توظيف', count: 85, total: 100 },
              { type: 'عقود موردين', count: 45, total: 50 },
              { type: 'عقود إيجار', count: 25, total: 30 },
              { type: 'عقود خدمات', count: 15, total: 20 }
            ].map(contract => (
              <div key={contract.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{contract.type}</span>
                  <span className="text-sm">
                    {contract.count} من {contract.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(contract.count / contract.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="المواعيد القانونية"
          subtitle="المواعيد المهمة"
          icon={Calendar}
        >
          <div className="space-y-4 mt-4">
            {[
              { event: 'جلسة محكمة - قضية رقم 123', date: '2024-03-15', type: 'urgent' },
              { event: 'تجديد عقد إيجار المقر الرئيسي', date: '2024-03-20', type: 'warning' },
              { event: 'مراجعة تقرير الامتثال الربعي', date: '2024-03-25', type: 'info' },
              { event: 'تحديث السياسات الداخلية', date: '2024-03-30', type: 'normal' }
            ].map((event, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  event.type === 'urgent' ? 'bg-red-50 text-red-800' :
                  event.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                  event.type === 'info' ? 'bg-blue-50 text-blue-800' :
                  'bg-gray-50 text-gray-800'
                }`}
              >
                <div className="font-medium">{event.event}</div>
                <div className="text-sm mt-1">{event.date}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Compliance & Alerts */}
      <Card
        title="تنبيهات الامتثال"
        subtitle="التحديثات والمخاطر"
        icon={AlertTriangle}
      >
        <div className="space-y-4 mt-4">
          {[
            { message: 'تحديث في قانون العمل العراقي - مراجعة مطلوبة', type: 'warning' },
            { message: 'موعد تجديد التراخيص التجارية', type: 'info' },
            { message: 'مخالفة في سياسة الأمن والسلامة', type: 'error' },
            { message: 'اكتمال مراجعة العقود الشهرية', type: 'success' }
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