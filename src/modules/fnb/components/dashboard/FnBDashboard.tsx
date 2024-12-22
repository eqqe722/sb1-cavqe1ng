```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Utensils, DollarSign, Users, Package, Star, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function FnBDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المبيعات اليومية"
          subtitle="إجمالي المبيعات"
          icon={DollarSign}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(25000)}</div>
            <div className="text-sm text-green-600">+12% عن الأمس</div>
          </div>
        </Card>

        <Card
          title="الطلبات"
          subtitle="طلبات اليوم"
          icon={Utensils}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-gray-500">23 طلب في الساعة</div>
          </div>
        </Card>

        <Card
          title="المخزون"
          subtitle="حالة المخزون"
          icon={Package}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(450)}</div>
            <div className="text-sm text-red-500">15 صنف تحت الحد الأدنى</div>
          </div>
        </Card>

        <Card
          title="العملاء"
          subtitle="تقييم العملاء"
          icon={Star}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">4.8</div>
            <div className="text-sm text-gray-500">85 تقييم اليوم</div>
          </div>
        </Card>
      </div>

      {/* Popular Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="الأصناف الأكثر مبيعاً"
          subtitle="تحليل المبيعات"
          icon={Utensils}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'دولمة عراقية', orders: 45, revenue: 135000 },
              { name: 'كباب عراقي', orders: 38, revenue: 114000 },
              { name: 'برياني', orders: 32, revenue: 96000 },
              { name: 'مسكوف', orders: 28, revenue: 140000 }
            ].map(item => (
              <div key={item.name} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    {item.orders} طلب
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    {formatCurrency(item.revenue)}
                  </div>
                  <div className="text-sm text-green-600">
                    {((item.revenue / 485000) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="أداء المطبخ"
          subtitle="وقت التحضير"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { station: 'المطبخ الرئيسي', efficiency: 92, orders: 85 },
              { station: 'المشويات', efficiency: 88, orders: 45 },
              { station: 'المقبلات', efficiency: 95, orders: 120 },
              { station: 'الحلويات', efficiency: 90, orders: 35 }
            ].map(station => (
              <div key={station.station} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{station.station}</span>
                    <span className="text-sm text-gray-500 mr-2">
                      ({station.orders} طلب)
                    </span>
                  </div>
                  <span className="text-sm">{station.efficiency}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      station.efficiency >= 90 ? 'bg-green-600' :
                      station.efficiency >= 80 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${station.efficiency}%` }}
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