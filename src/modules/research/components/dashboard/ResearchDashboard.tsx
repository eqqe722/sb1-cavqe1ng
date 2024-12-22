```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Lightbulb, Flask, FileText, Shield, Book, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function ResearchDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المشاريع النشطة"
          subtitle="مشاريع البحث والتطوير"
          icon={Flask}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> نسبة الإنجاز
            </div>
          </div>
        </Card>

        <Card
          title="الأفكار المقترحة"
          subtitle="مقترحات البحث"
          icon={Lightbulb}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-gray-500">23 فكرة قيد المراجعة</div>
          </div>
        </Card>

        <Card
          title="المنشورات"
          subtitle="الأوراق العلمية"
          icon={Book}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(85)}</div>
            <div className="text-sm text-green-600">12 منشور جديد</div>
          </div>
        </Card>

        <Card
          title="المنح البحثية"
          subtitle="التمويل البحثي"
          icon={TrendingUp}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(750000)}</div>
            <div className="text-sm text-gray-500">5 منح نشطة</div>
          </div>
        </Card>
      </div>

      {/* Research Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="المشاريع البحثية"
          subtitle="حالة المشاريع"
          icon={Flask}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'تطوير تقنيات الطاقة المتجددة', progress: 75, domain: 'energy' },
              { name: 'دراسة جودة المياه', progress: 60, domain: 'environmental' },
              { name: 'تحسين المحاصيل الزراعية', progress: 90, domain: 'agricultural' },
              { name: 'تطوير المواد الذكية', progress: 45, domain: 'engineering' }
            ].map(project => (
              <div key={project.name} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{project.name}</span>
                    <span className={`mr-2 px-2 py-1 text-xs rounded-full ${
                      project.domain === 'energy' ? 'bg-yellow-100 text-yellow-800' :
                      project.domain === 'environmental' ? 'bg-green-100 text-green-800' :
                      project.domain === 'agricultural' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.domain}
                    </span>
                  </div>
                  <span className="text-sm">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الامتثال والموافقات"
          subtitle="حالة الموافقات البحثية"
          icon={Shield}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'موافقة لجنة الأخلاقيات', status: 'approved', date: '2024-03-15' },
              { type: 'ترخيص المختبر', status: 'pending', date: '2024-03-20' },
              { type: 'موافقة السلامة البيولوجية', status: 'approved', date: '2024-03-25' },
              { type: 'تصريح المواد الخطرة', status: 'review', date: '2024-03-30' }
            ].map((approval, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">{approval.type}</div>
                  <div className="text-sm text-gray-500">{approval.date}</div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  approval.status === 'approved' ? 'bg-green-100 text-green-800' :
                  approval.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {approval.status === 'approved' ? 'معتمد' :
                   approval.status === 'pending' ? 'معلق' : 'قيد المراجعة'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Publications & Patents */}
      <Card
        title="المخرجات البحثية"
        subtitle="المنشورات وبراءات الاختراع"
        icon={FileText}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <h3 className="font-medium">أحدث المنشورات</h3>
            {[
              { title: 'دراسة في كفاءة الطاقة الشمسية', journal: 'المجلة العراقية للطاقة', citations: 15 },
              { title: 'تحليل جودة المياه الجوفية', journal: 'مجلة البيئة العربية', citations: 8 },
              { title: 'تطوير محاصيل مقاومة للجفاف', journal: 'مجلة الزراعة العراقية', citations: 12 }
            ].map((pub, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">{pub.title}</div>
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-gray-500">{pub.journal}</span>
                  <span>{pub.citations} اقتباس</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">براءات الاختراع</h3>
            {[
              { title: 'نظام ذكي لإدارة الري', status: 'granted', date: '2024-02' },
              { title: 'جهاز قياس جودة الهواء', status: 'pending', date: '2024-01' },
              { title: 'تقنية معالجة المياه', status: 'filed', date: '2023-12' }
            ].map((patent, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">{patent.title}</div>
                <div className="flex justify-between mt-1 text-sm">
                  <span className="text-gray-500">{patent.date}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    patent.status === 'granted' ? 'bg-green-100 text-green-800' :
                    patent.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {patent.status === 'granted' ? 'ممنوحة' :
                     patent.status === 'pending' ? 'قيد المراجعة' : 'مقدمة'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
```