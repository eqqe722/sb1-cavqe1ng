```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { ShoppingBag, TrendingUp, Users, Package, Receipt, ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatters';

export default function RetailDashboard() {
  return (
    <div className="space-y-6">
      {/* Sales Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المبيعات اليومية"
          subtitle="إجمالي المبيعات اليوم"
          icon={ShoppingBag}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(1250000)}</div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>12% مقارنة بالأمس</span>
            </div>
          </div>
        </Card>

        <Card
          title="المعاملات"
          subtitle="عدد المعاملات اليوم"
          icon={Receipt}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">156</div>
            <div className="text-sm text-gray-500">متوسط قيمة المعاملة: {formatCurrency(8000)}</div>
          </div>
        </Card>

        <Card
          title="العملاء"
          subtitle="العملاء النشطون"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">45</div>
            <div className="text-sm text-gray-500">15 عميل جديد</div>
          </div>
        </Card>

        <Card
          title="المخزون"
          subtitle="المنتجات المتوفرة"
          icon={Package}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">1,234</div>
            <div className="text-sm text-red-500">23 منتج تحت الحد الأدنى</div>
          </div>
        </Card>
      </div>

      {/* Sales Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="أداء المبيعات"
          subtitle="تحليل المبيعات الأسبوعي"
          icon={TrendingUp}
        >
          {/* Sales chart would go here */}
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            مخطط المبيعات
          </div>
        </Card>

        <Card
          title="أفضل المنتجات مبيعاً"
          subtitle="المنتجات الأكثر مبيعاً"
          icon={ShoppingBag}
        >
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium w-6 text-center">{item}</span>
                  <div>
                    <div className="font-medium">منتج {item}</div>
                    <div className="text-sm text-gray-500">150 وحدة</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{formatCurrency(75000)}</div>
                  <div className="text-sm text-green-600">+15%</div>
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