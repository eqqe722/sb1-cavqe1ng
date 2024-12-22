```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { ShoppingBag, Users, Package, CreditCard, TrendingUp, AlertTriangle } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function EcommerceDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المبيعات"
          subtitle="المبيعات اليومية"
          icon={ShoppingBag}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(25000)}</div>
            <div className="text-sm text-green-600">+15% عن الأمس</div>
          </div>
        </Card>

        <Card
          title="الطلبات"
          subtitle="الطلبات النشطة"
          icon={Package}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(156)}</div>
            <div className="text-sm text-gray-500">23 طلب جديد</div>
          </div>
        </Card>

        <Card
          title="العملاء"
          subtitle="العملاء النشطون"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(850)}</div>
            <div className="text-sm text-green-600">+45 هذا الأسبوع</div>
          </div>
        </Card>

        <Card
          title="المدفوعات"
          subtitle="المعاملات المالية"
          icon={CreditCard}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(92)}%</div>
            <div className="text-sm text-gray-500">معدل نجاح المدفوعات</div>
          </div>
        </Card>
      </div>

      {/* Sales Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="تحليل المبيعات"
          subtitle="أداء المبيعات"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            {[
              { category: 'الإلكترونيات', sales: 450000, orders: 120 },
              { category: 'الملابس', sales: 280000, orders: 250 },
              { category: 'المنزل والأثاث', sales: 350000, orders: 85 },
              { category: 'مستحضرات التجميل', sales: 180000, orders: 160 }
            ].map(category => (
              <div key={category.category} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{category.category}</span>
                    <span className="text-sm text-gray-500 mr-2">
                      ({category.orders} طلب)
                    </span>
                  </div>
                  <span className="text-sm">{formatCurrency(category.sales)}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(category.sales / 450000) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="التنبيهات"
          subtitle="تحديثات هامة"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { message: 'نفاد المخزون - 5 منتجات', type: 'warning' },
              { message: 'طلبات متأخرة التسليم', type: 'error' },
              { message: 'تحديث أسعار الشحن', type: 'info' },
              { message: 'اكتمال حملة تخفيضات', type: 'success' }
            ].map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg ${
                  alert.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                  alert.type === 'error' ? 'bg-red-50 text-red-800' :
                  alert.type === 'success' ? 'bg-green-50 text-green-800' :
                  'bg-blue-50 text-blue-800'
                }`}
              >
                {alert.message}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
```