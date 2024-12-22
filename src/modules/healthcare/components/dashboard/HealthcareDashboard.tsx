```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Users, Calendar, Pill, FileText, ClipboardCheck, Activity } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function HealthcareDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="المرضى"
          subtitle="إحصائيات المرضى"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(150)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">+12</span> مريض جديد اليوم
            </div>
          </div>
        </Card>

        <Card
          title="المواعيد"
          subtitle="جدول اليوم"
          icon={Calendar}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-yellow-600">8</span> حالات طارئة
            </div>
          </div>
        </Card>

        <Card
          title="الصيدلية"
          subtitle="حالة المخزون"
          icon={Pill}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-red-500">
              15 صنف تحت الحد الأدنى
            </div>
          </div>
        </Card>
      </div>

      {/* Department Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="أقسام المستشفى"
          subtitle="حالة الأقسام"
          icon={Activity}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'الطوارئ', occupied: 12, total: 15 },
              { name: 'العناية المركزة', occupied: 8, total: 10 },
              { name: 'الجراحة', occupied: 25, total: 30 },
              { name: 'الباطنية', occupied: 35, total: 40 }
            ].map(dept => (
              <div key={dept.name} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{dept.name}</div>
                  <div className="text-sm text-gray-500">
                    {dept.occupied} من {dept.total} سرير
                  </div>
                </div>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(dept.occupied / dept.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="التقارير اليومية"
          subtitle="ملخص النشاطات"
          icon={ClipboardCheck}
        >
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <span>حالات الدخول</span>
              <span className="font-medium">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span>حالات الخروج</span>
              <span className="font-medium">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span>العمليات الجراحية</span>
              <span className="font-medium">7</span>
            </div>
            <div className="flex justify-between items-center">
              <span>الفحوصات المخبرية</span>
              <span className="font-medium">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span>صور الأشعة</span>
              <span className="font-medium">42</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
```