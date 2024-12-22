import React from 'react';
import { Card } from '../../../../components/common/Card';
import { TrendingUp, ShoppingBag, Users, DollarSign } from 'lucide-react';
import { formatCurrency, formatNumber } from '../../../../utils/formatters';

export default function SalesAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="إجمالي المبيعات"
          subtitle="المبيعات الشهرية"
          icon={DollarSign}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(1250000)}</div>
            <div className="text-sm text-green-600">+15% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="الطلبات"
          subtitle="عدد الطلبات"
          icon={ShoppingBag}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(450)}</div>
            <div className="text-sm text-gray-500">85 طلب جديد</div>
          </div>
        </Card>

        <Card
          title="العملاء"
          subtitle="العملاء النشطون"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(120)}</div>
            <div className="text-sm text-green-600">+8 عملاء جدد</div>
          </div>
        </Card>

        <Card
          title="معدل التحويل"
          subtitle="نسبة تحويل العملاء"
          icon={TrendingUp}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">24.5%</div>
            <div className="text-sm text-green-600">+2.5% تحسن</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="أداء المبيعات"
          subtitle="تحليل المبيعات حسب المنتج"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { product: 'المنتج أ', sales: 450000, growth: 15 },
              { product: 'المنتج ب', sales: 320000, growth: 8 },
              { product: 'المنتج ج', sales: 280000, growth: -5 },
              { product: 'المنتج د', sales: 150000, growth: 12 }
            ].map(item => (
              <div key={item.product} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.product}</span>
                  <span className="text-sm">{formatCurrency(item.sales)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className={`h-2 rounded-full ${
                        item.growth > 0 ? 'bg-green-600' : 'bg-red-600'
                      }`}
                      style={{ width: `${Math.abs(item.growth)}0%` }}
                    />
                  </div>
                  <span className={`text-sm ${
                    item.growth > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.growth > 0 ? '+' : ''}{item.growth}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="توزيع المبيعات"
          subtitle="المبيعات حسب المنطقة"
          icon={ShoppingBag}
        >
          <div className="space-y-4 mt-4">
            {[
              { region: 'بغداد', sales: 450000, percentage: 35 },
              { region: 'البصرة', sales: 320000, percentage: 25 },
              { region: 'أربيل', sales: 280000, percentage: 22 },
              { region: 'الموصل', sales: 230000, percentage: 18 }
            ].map(region => (
              <div key={region.region} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{region.region}</span>
                  <span className="text-sm">{formatCurrency(region.sales)}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${region.percentage}%` }}
                  />
                </div>
                <div className="text-sm text-gray-500 text-right">
                  {region.percentage}% من إجمالي المبيعات
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}