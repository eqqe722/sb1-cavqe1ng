```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { AlertTriangle, Shield, FileCheck, GraduationCap, Activity, Calendar } from 'lucide-react';
import { formatNumber } from '../../../../utils/formatters';

export default function EHSDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الحوادث"
          subtitle="حوادث الشهر الحالي"
          icon={AlertTriangle}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(12)}</div>
            <div className="text-sm text-green-600">-25% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="الامتثال"
          subtitle="معدل الامتثال البيئي"
          icon={Shield}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">92%</div>
            <div className="text-sm text-gray-500">+5% عن الربع السابق</div>
          </div>
        </Card>

        <Card
          title="التدريب"
          subtitle="التدريبات المنجزة"
          icon={GraduationCap}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(85)}</div>
            <div className="text-sm text-gray-500">15 تدريب قادم</div>
          </div>
        </Card>

        <Card
          title="المخاطر"
          subtitle="تقييم المخاطر"
          icon={Activity}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(28)}</div>
            <div className="text-sm text-yellow-600">8 مخاطر عالية</div>
          </div>
        </Card>
      </div>

      {/* Incident Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="تحليل الحوادث"
          subtitle="توزيع الحوادث حسب النوع"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'إصابات العمل', count: 5, total: 12 },
              { type: 'حوادث بيئية', count: 3, total: 12 },
              { type: 'حوادث معدات', count: 2, total: 12 },
              { type: 'حوادث أخرى', count: 2, total: 12 }
            ].map(incident => (
              <div key={incident.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{incident.type}</span>
                  <span className="text-sm">
                    {incident.count} من {incident.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(incident.count / incident.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="التدريبات القادمة"
          subtitle="جدول التدريبات"
          icon={Calendar}
        >
          <div className="space-y-4 mt-4">
            {[
              { title: 'السلامة المهنية الأساسية', date: '2024-03-15', participants: 25 },
              { title: 'التعامل مع المواد الخطرة', date: '2024-03-20', participants: 15 },
              { title: 'الإسعافات الأولية', date: '2024-03-25', participants: 30 },
              { title: 'إجراءات الطوارئ', date: '2024-03-30', participants: 40 }
            ].map((training, index) => (
              <div 
                key={index}
                className="p-3 bg-gray-50 rounded-lg"
              >
                <div className="font-medium">{training.title}</div>
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>{training.date}</span>
                  <span>{training.participants} مشارك</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Compliance & Alerts */}
      <Card
        title="تنبيهات السلامة والبيئة"
        subtitle="آخر التحديثات"
        icon={AlertTriangle}
      >
        <div className="space-y-4 mt-4">
          {[
            { message: 'تجاوز معدلات الانبعاثات في القسم A', type: 'error' },
            { message: 'موعد تجديد شهادات السلامة المهنية', type: 'warning' },
            { message: 'اكتمال تدريب السلامة للدفعة الأولى', type: 'success' },
            { message: 'تحديث في معايير السلامة البيئية', type: 'info' }
          ].map((alert, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg ${
                alert.type === 'error' ? 'bg-red-50 text-red-800' :
                alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
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