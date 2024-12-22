```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Heart, Users, HandHeart, FileText, Coins, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function NonprofitDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="التبرعات"
          subtitle="إجمالي التبرعات"
          icon={Heart}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(850000)}</div>
            <div className="text-sm text-green-600">+15% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="المتطوعين"
          subtitle="المتطوعين النشطين"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-gray-500">23 متطوع جديد</div>
          </div>
        </Card>

        <Card
          title="المستفيدين"
          subtitle="عدد المستفيدين"
          icon={HandHeart}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-green-600">+8% هذا الشهر</div>
          </div>
        </Card>

        <Card
          title="الزكاة"
          subtitle="تحصيل الزكاة"
          icon={Coins}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(450000)}</div>
            <div className="text-sm text-gray-500">85% تم توزيعها</div>
          </div>
        </Card>
      </div>

      {/* Donation Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="تحليل التبرعات"
          subtitle="حسب النوع"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'زكاة المال', amount: 450000, percentage: 45 },
              { type: 'صدقة', amount: 250000, percentage: 25 },
              { type: 'وقف', amount: 150000, percentage: 15 },
              { type: 'تبرعات عامة', amount: 150000, percentage: 15 }
            ].map(donation => (
              <div key={donation.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{donation.type}</span>
                  <span className="text-sm">{formatCurrency(donation.amount)}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${donation.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="المشاريع الخيرية"
          subtitle="حالة المشاريع"
          icon={FileText}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'كفالة الأيتام', beneficiaries: 250, status: 'active' },
              { name: 'إفطار صائم', beneficiaries: 1000, status: 'seasonal' },
              { name: 'مساعدات طبية', beneficiaries: 150, status: 'active' },
              { name: 'دعم تعليمي', beneficiaries: 300, status: 'active' }
            ].map(project => (
              <div key={project.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-gray-500">
                    {formatNumber(project.beneficiaries)} مستفيد
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === 'active' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {project.status === 'active' ? 'نشط' : 'موسمي'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Impact Metrics */}
      <Card
        title="مؤشرات الأثر"
        subtitle="تأثير البرامج الخيرية"
        icon={TrendingUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="space-y-4">
            <h3 className="font-medium">المساعدات الغذائية</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>السلال الغذائية</span>
                <span>{formatNumber(500)} سلة</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>الوجبات اليومية</span>
                <span>{formatNumber(1500)} وجبة</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>العائلات المستفيدة</span>
                <span>{formatNumber(300)} عائلة</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">الرعاية الصحية</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>العمليات الجراحية</span>
                <span>{formatNumber(25)} عملية</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>الأدوية الشهرية</span>
                <span>{formatNumber(150)} مستفيد</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>الفحوصات الطبية</span>
                <span>{formatNumber(450)} فحص</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">الدعم التعليمي</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>المنح الدراسية</span>
                <span>{formatNumber(75)} منحة</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>الحقائب المدرسية</span>
                <span>{formatNumber(250)} حقيبة</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>دورات التدريب</span>
                <span>{formatNumber(15)} دورة</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
```