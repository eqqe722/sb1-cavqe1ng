```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Megaphone, Users, Share2, Mail, TrendingUp, Calendar } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function MarketingDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الحملات النشطة"
          subtitle="الحملات الحالية"
          icon={Megaphone}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(12)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> معدل النجاح
            </div>
          </div>
        </Card>

        <Card
          title="الجمهور المستهدف"
          subtitle="الوصول للجمهور"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(25000)}</div>
            <div className="text-sm text-green-600">+15% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="التفاعل الاجتماعي"
          subtitle="معدل التفاعل"
          icon={Share2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">4.8%</div>
            <div className="text-sm text-gray-500">12K تفاعل</div>
          </div>
        </Card>

        <Card
          title="حملات البريد"
          subtitle="معدل الفتح"
          icon={Mail}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">22.5%</div>
            <div className="text-sm text-green-600">+5% عن المعدل</div>
          </div>
        </Card>
      </div>

      {/* Campaign Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="أداء الحملات"
          subtitle="تحليل الحملات النشطة"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'حملة رمضان', reach: 15000, engagement: 8.5, roi: 3.2 },
              { name: 'العودة للمدارس', reach: 12000, engagement: 6.2, roi: 2.8 },
              { name: 'عروض الصيف', reach: 18000, engagement: 7.8, roi: 3.5 },
              { name: 'المناسبات الدينية', reach: 22000, engagement: 9.1, roi: 4.1 }
            ].map(campaign => (
              <div key={campaign.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{campaign.name}</span>
                  <span className="text-sm">ROI: {campaign.roi}x</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>الوصول: {formatNumber(campaign.reach)}</span>
                  <span>التفاعل: {campaign.engagement}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(campaign.engagement / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الحملات القادمة"
          subtitle="جدول الحملات"
          icon={Calendar}
        >
          <div className="space-y-4 mt-4">
            {[
              { title: 'حملة العيد', date: '2024-03-15', type: 'religious', budget: 50000 },
              { title: 'عروض الربيع', date: '2024-03-20', type: 'seasonal', budget: 35000 },
              { title: 'حملة رمضان', date: '2024-03-25', type: 'religious', budget: 75000 },
              { title: 'عروض نهاية الموسم', date: '2024-03-30', type: 'promotion', budget: 45000 }
            ].map((campaign, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">{campaign.title}</div>
                  <div className="text-sm text-gray-500">{campaign.date}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    campaign.type === 'religious' ? 'bg-green-100 text-green-800' :
                    campaign.type === 'seasonal' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {campaign.type}
                  </span>
                  <span className="text-sm font-medium">
                    {formatCurrency(campaign.budget)}
                  </span>
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