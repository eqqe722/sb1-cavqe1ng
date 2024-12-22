```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Briefcase, Clock, Users, DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function ProjectDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المشاريع النشطة"
          subtitle="حالة المشاريع"
          icon={Briefcase}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> في المسار الصحيح
            </div>
          </div>
        </Card>

        <Card
          title="المهام"
          subtitle="المهام المعلقة"
          icon={Clock}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-yellow-600">23 مهمة متأخرة</div>
          </div>
        </Card>

        <Card
          title="الموارد"
          subtitle="الموارد المخصصة"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(85)}</div>
            <div className="text-sm text-gray-500">12 مورد متاح</div>
          </div>
        </Card>

        <Card
          title="الميزانية"
          subtitle="إجمالي الميزانية"
          icon={DollarSign}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(12500000)}</div>
            <div className="text-sm text-green-600">ضمن الميزانية</div>
          </div>
        </Card>
      </div>

      {/* Project Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة المشاريع"
          subtitle="تقدم المشاريع الرئيسية"
          icon={Briefcase}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'تطوير البنية التحتية', progress: 75, status: 'on_track' },
              { name: 'إعادة تأهيل المدارس', progress: 60, status: 'delayed' },
              { name: 'مشروع المياه', progress: 90, status: 'on_track' },
              { name: 'تطوير الطرق', progress: 45, status: 'at_risk' }
            ].map(project => (
              <div key={project.name} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{project.name}</span>
                    <span className={`mr-2 px-2 py-1 text-xs rounded-full ${
                      project.status === 'on_track' ? 'bg-green-100 text-green-800' :
                      project.status === 'delayed' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.status === 'on_track' ? 'في المسار' :
                       project.status === 'delayed' ? 'متأخر' : 'في خطر'}
                    </span>
                  </div>
                  <span className="text-sm">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      project.status === 'on_track' ? 'bg-green-600' :
                      project.status === 'delayed' ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="المخاطر والقضايا"
          subtitle="تحليل المخاطر"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { issue: 'تأخر في توريد المواد', severity: 'high', project: 'تطوير الطرق' },
              { issue: 'نقص في العمالة الماهرة', severity: 'medium', project: 'إعادة تأهيل المدارس' },
              { issue: 'تحديات بيئية', severity: 'low', project: 'مشروع المياه' },
              { issue: 'تأخر الموافقات', severity: 'high', project: 'البنية التحتية' }
            ].map((issue, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  issue.severity === 'high' ? 'bg-red-50 text-red-800' :
                  issue.severity === 'medium' ? 'bg-yellow-50 text-yellow-800' :
                  'bg-blue-50 text-blue-800'
                }`}
              >
                <div className="font-medium">{issue.issue}</div>
                <div className="text-sm mt-1">{issue.project}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Budget Overview */}
      <Card
        title="نظرة عامة على الميزانية"
        subtitle="تحليل الميزانية والإنفاق"
        icon={TrendingUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            {[
              { category: 'تكاليف العمالة', allocated: 4500000, spent: 3200000 },
              { category: 'المواد والمعدات', allocated: 5500000, spent: 4800000 },
              { category: 'الخدمات الاستشارية', allocated: 1500000, spent: 900000 },
              { category: 'المصاريف الإدارية', allocated: 1000000, spent: 750000 }
            ].map(budget => (
              <div key={budget.category} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{budget.category}</span>
                  <span className="text-sm">
                    {formatCurrency(budget.spent)} / {formatCurrency(budget.allocated)}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      (budget.spent / budget.allocated) > 0.9 ? 'bg-red-600' :
                      (budget.spent / budget.allocated) > 0.7 ? 'bg-yellow-600' :
                      'bg-green-600'
                    }`}
                    style={{ width: `${(budget.spent / budget.allocated) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>الميزانية المخصصة</span>
              <span className="font-medium">{formatCurrency(12500000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>المصروفات الفعلية</span>
              <span className="font-medium text-green-600">{formatCurrency(9650000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>المتبقي</span>
              <span className="font-medium text-blue-600">{formatCurrency(2850000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>نسبة الإنفاق</span>
              <span className="font-medium">77%</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
```