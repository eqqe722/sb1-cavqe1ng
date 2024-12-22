```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Users, BookOpen, GraduationCap, FileText, DollarSign } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function EducationDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الطلاب"
          subtitle="إجمالي الطلاب المسجلين"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">+45</span> طالب جديد هذا الفصل
            </div>
          </div>
        </Card>

        <Card
          title="أعضاء هيئة التدريس"
          subtitle="الكادر التعليمي"
          icon={GraduationCap}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(85)}</div>
            <div className="text-sm text-gray-500">نسبة الطلاب للمدرسين 15:1</div>
          </div>
        </Card>

        <Card
          title="المقررات الدراسية"
          subtitle="المقررات النشطة"
          icon={BookOpen}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(48)}</div>
            <div className="text-sm text-gray-500">12 مقرر في الفصل الحالي</div>
          </div>
        </Card>

        <Card
          title="الرسوم الدراسية"
          subtitle="تحصيل الرسوم"
          icon={DollarSign}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(750000)}</div>
            <div className="text-sm text-red-500">15% رسوم متأخرة</div>
          </div>
        </Card>
      </div>

      {/* Academic Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="الأداء الأكاديمي"
          subtitle="متوسط الدرجات حسب القسم"
          icon={FileText}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'العلوم', average: 85 },
              { name: 'الآداب', average: 82 },
              { name: 'الهندسة', average: 78 },
              { name: 'الطب', average: 88 }
            ].map(dept => (
              <div key={dept.name} className="flex items-center justify-between">
                <span className="font-medium">{dept.name}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${dept.average}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{dept.average}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الحضور والغياب"
          subtitle="نسب الحضور اليومية"
          icon={Users}
        >
          <div className="space-y-4 mt-4">
            {[
              { level: 'السنة الأولى', attendance: 92 },
              { level: 'السنة الثانية', attendance: 88 },
              { level: 'السنة الثالثة', attendance: 94 },
              { level: 'السنة الرابعة', attendance: 96 }
            ].map(level => (
              <div key={level.level} className="flex items-center justify-between">
                <span className="font-medium">{level.level}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-green-600 rounded-full"
                      style={{ width: `${level.attendance}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{level.attendance}%</span>
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