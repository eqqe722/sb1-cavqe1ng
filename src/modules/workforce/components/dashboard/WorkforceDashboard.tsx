```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Users, FileCheck, AlertTriangle, TrendingUp, Briefcase, Clock } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function WorkforceDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المقاولين النشطين"
          subtitle="إجمالي المقاولين"
          icon={Briefcase}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> نسبة الامتثال
            </div>
          </div>
        </Card>

        <Card
          title="القوى العاملة"
          subtitle="إجمالي العمال"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-gray-500">75% عمالة عراقية</div>
          </div>
        </Card>

        <Card
          title="ساعات العمل"
          subtitle="الساعات المسجلة"
          icon={Clock}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45000)}</div>
            <div className="text-sm text-green-600">+12% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="التكاليف"
          subtitle="تكاليف العمالة"
          icon={TrendingUp}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(850000)}</div>
            <div className="text-sm text-gray-500">ضمن الميزانية</div>
          </div>
        </Card>
      </div>

      {/* Contractor Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة المقاولين"
          subtitle="توزيع المقاولين حسب النوع"
          icon={Briefcase}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'مقاولات إنشائية', count: 15, workers: 500 },
              { type: 'خدمات صيانة', count: 12, workers: 300 },
              { type: 'خدمات أمنية', count: 8, workers: 250 },
              { type: 'خدمات نظافة', count: 10, workers: 200 }
            ].map(contractor => (
              <div key={contractor.type} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{contractor.type}</span>
                    <span className="text-sm text-gray-500 mr-2">
                      ({contractor.count} مقاول)
                    </span>
                  </div>
                  <span className="text-sm">{formatNumber(contractor.workers)} عامل</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(contractor.workers / 500) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الامتثال والمخالفات"
          subtitle="حالة الامتثال"
          icon={FileCheck}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'تصاريح العمل', status: 'compliant', count: 850 },
              { type: 'الضمان الاجتماعي', status: 'warning', count: 950 },
              { type: 'السلامة المهنية', status: 'compliant', count: 1100 },
              { type: 'التأمين الصحي', status: 'violation', count: 780 }
            ].map(compliance => (
              <div key={compliance.type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{compliance.type}</div>
                  <div className="text-sm text-gray-500">
                    {formatNumber(compliance.count)} عامل
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  compliance.status === 'compliant' ? 'bg-green-100 text-green-800' :
                  compliance.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {compliance.status === 'compliant' ? 'متوافق' :
                   compliance.status === 'warning' ? 'تحذير' : 'مخالفة'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts & Notifications */}
      <Card
        title="التنبيهات والمخالفات"
        subtitle="آخر التحديثات"
        icon={AlertTriangle}
      >
        <div className="space-y-4 mt-4">
          {[
            { message: 'تجاوز ساعات العمل القانونية - شركة البناء المتحدة', type: 'warning' },
            { message: 'انتهاء تصاريح العمل - 5 عمال', type: 'error' },
            { message: 'تحديث سياسات السلامة المهنية', type: 'info' },
            { message: 'اكتمال تدريب السلامة للدفعة الجديدة', type: 'success' }
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