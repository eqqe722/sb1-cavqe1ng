```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Book, Users, GraduationCap, Search, TrendingUp, FileText } from 'lucide-react';
import { formatNumber } from '../../../../utils/formatters';

export default function KnowledgeDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المستندات"
          subtitle="إجمالي المستندات"
          icon={Book}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">+15</span> هذا الشهر
            </div>
          </div>
        </Card>

        <Card
          title="المساهمون"
          subtitle="المساهمون النشطون"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(85)}</div>
            <div className="text-sm text-gray-500">12 مساهم جديد</div>
          </div>
        </Card>

        <Card
          title="التدريب"
          subtitle="الموارد التدريبية"
          icon={GraduationCap}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(450)}</div>
            <div className="text-sm text-green-600">95% معدل الإكمال</div>
          </div>
        </Card>

        <Card
          title="البحث"
          subtitle="عمليات البحث"
          icon={Search}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(2500)}</div>
            <div className="text-sm text-gray-500">85% معدل النجاح</div>
          </div>
        </Card>
      </div>

      {/* Popular Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="المستندات الأكثر استخداماً"
          subtitle="تحليل الاستخدام"
          icon={FileText}
        >
          <div className="space-y-4 mt-4">
            {[
              { title: 'دليل السياسات الداخلية', views: 450, downloads: 120 },
              { title: 'إجراءات السلامة', views: 380, downloads: 95 },
              { title: 'دليل التدريب', views: 320, downloads: 85 },
              { title: 'معايير الجودة', views: 280, downloads: 75 }
            ].map(doc => (
              <div key={doc.title} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{doc.title}</div>
                  <div className="text-sm text-gray-500">
                    {doc.views} مشاهدة
                  </div>
                </div>
                <div className="text-sm">
                  {doc.downloads} تحميل
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="نشاط المستخدمين"
          subtitle="تحليل المساهمات"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { department: 'الموارد البشرية', documents: 85, contributions: 250 },
              { department: 'العمليات', documents: 65, contributions: 180 },
              { department: 'تقنية المعلومات', documents: 45, contributions: 150 },
              { department: 'المالية', documents: 35, contributions: 120 }
            ].map(dept => (
              <div key={dept.department} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{dept.department}</span>
                  <span className="text-sm">
                    {dept.documents} مستند | {dept.contributions} مساهمة
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(dept.contributions / 250) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
```