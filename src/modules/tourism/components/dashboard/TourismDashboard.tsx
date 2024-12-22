```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Users, Building2, Bus, Package, Calendar, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function TourismDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الزوار"
          subtitle="إجمالي الزوار"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(25000)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">+15%</span> عن الشهر السابق
            </div>
          </div>
        </Card>

        <Card
          title="الإقامة"
          subtitle="الغرف المحجوزة"
          icon={Building2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(850)}</div>
            <div className="text-sm text-gray-500">85% نسبة الإشغال</div>
          </div>
        </Card>

        <Card
          title="النقل"
          subtitle="الرحلات النشطة"
          icon={Bus}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">12 رحلة قادمة</div>
          </div>
        </Card>

        <Card
          title="الباقات"
          subtitle="الباقات النشطة"
          icon={Package}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(15)}</div>
            <div className="text-sm text-green-600">8 باقات جديدة</div>
          </div>
        </Card>
      </div>

      {/* Pilgrimage Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="إحصائيات الزيارات"
          subtitle="توزيع الزوار حسب المدينة"
          icon={Users}
        >
          <div className="space-y-4 mt-4">
            {[
              { city: 'النجف الأشرف', visitors: 12000, capacity: 15000 },
              { city: 'كربلاء المقدسة', visitors: 15000, capacity: 18000 },
              { city: 'الكاظمية', visitors: 8000, capacity: 10000 },
              { city: 'سامراء', visitors: 5000, capacity: 7000 }
            ].map(city => (
              <div key={city.city} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{city.city}</span>
                  <span className="text-sm">
                    {formatNumber(city.visitors)} من {formatNumber(city.capacity)}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(city.visitors / city.capacity) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الحجوزات القادمة"
          subtitle="الأسبوع القادم"
          icon={Calendar}
        >
          <div className="space-y-4 mt-4">
            {[
              { package: 'زيارة الأربعين', date: '2024-03-15', pilgrims: 500 },
              { package: 'زيارة النصف من شعبان', date: '2024-03-20', pilgrims: 300 },
              { package: 'زيارة عرفة', date: '2024-03-25', pilgrims: 250 },
              { package: 'زيارة الإمام الرضا', date: '2024-03-30', pilgrims: 150 }
            ].map((booking, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium">{booking.package}</div>
                  <div className="text-sm text-gray-500">{booking.date}</div>
                </div>
                <div className="text-sm">
                  {formatNumber(booking.pilgrims)} زائر
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Revenue Analysis */}
      <Card
        title="تحليل الإيرادات"
        subtitle="الإيرادات حسب النوع"
        icon={TrendingUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            {[
              { type: 'باقات الزيارة', amount: 1500000, percentage: 45 },
              { type: 'خدمات الإقامة', amount: 800000, percentage: 25 },
              { type: 'خدمات النقل', amount: 500000, percentage: 15 },
              { type: 'خدمات إضافية', amount: 500000, percentage: 15 }
            ].map(revenue => (
              <div key={revenue.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{revenue.type}</span>
                  <span className="text-sm">{formatCurrency(revenue.amount)}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${revenue.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>إجمالي الإيرادات</span>
              <span className="font-medium">{formatCurrency(3300000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>متوسط قيمة الحجز</span>
              <span className="font-medium">{formatCurrency(2500)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>نسبة الإشغال</span>
              <span className="font-medium">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>معدل رضا الزوار</span>
              <span className="font-medium">4.8/5</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
```