```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Sprout, Tractor, Droplets, TrendingUp, AlertTriangle, Coins } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function AgricultureDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="المحاصيل النشطة"
          subtitle="المساحة المزروعة"
          icon={Sprout}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)} دونم</div>
            <div className="text-sm text-green-600">85% معدل النمو</div>
          </div>
        </Card>

        <Card
          title="المعدات"
          subtitle="حالة المعدات الزراعية"
          icon={Tractor}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">38</span> معدة نشطة
            </div>
          </div>
        </Card>

        <Card
          title="استهلاك المياه"
          subtitle="معدل الري اليومي"
          icon={Droplets}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(2500)} م³</div>
            <div className="text-sm text-yellow-600">75% من المخصص</div>
          </div>
        </Card>
      </div>

      {/* Crop Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة المحاصيل"
          subtitle="توزيع المحاصيل"
          icon={Sprout}
        >
          <div className="space-y-4 mt-4">
            {[
              { crop: 'القمح', area: 450, total: 500 },
              { crop: 'الشعير', area: 300, total: 350 },
              { crop: 'الرز', area: 200, total: 250 },
              { crop: 'الذرة', area: 150, total: 200 }
            ].map(crop => (
              <div key={crop.crop} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{crop.crop}</span>
                  <span className="text-sm">
                    {crop.area} من {crop.total} دونم
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${(crop.area / crop.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="الدعم الحكومي"
          subtitle="حالة الدعم والإعانات"
          icon={Coins}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'دعم البذور', amount: 250000, status: 'approved' },
              { type: 'دعم الأسمدة', amount: 180000, status: 'pending' },
              { type: 'دعم الوقود', amount: 120000, status: 'approved' },
              { type: 'دعم المعدات', amount: 350000, status: 'processing' }
            ].map(subsidy => (
              <div key={subsidy.type} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{subsidy.type}</div>
                  <div className="text-sm text-gray-500">
                    {formatCurrency(subsidy.amount)}
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  subsidy.status === 'approved' ? 'bg-green-100 text-green-800' :
                  subsidy.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {subsidy.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts & Weather */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="التنبيهات"
          subtitle="تحذيرات وإشعارات"
          icon={AlertTriangle}
        >
          <div className="space-y-4 mt-4">
            {[
              { message: 'انخفاض مستوى المياه في القطاع الشمالي', type: 'warning' },
              { message: 'موعد صيانة الجرار رقم 5', type: 'info' },
              { message: 'تأخر توريد الأسمدة للموسم القادم', type: 'error' },
              { message: 'اكتمال حصاد القمح في القطاع A', type: 'success' }
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

        <Card
          title="المؤشرات المالية"
          subtitle="الأداء المالي"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <span>التكاليف التشغيلية</span>
              <span className="font-medium">{formatCurrency(450000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>الإيرادات المتوقعة</span>
              <span className="font-medium text-green-600">{formatCurrency(850000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>الدعم الحكومي</span>
              <span className="font-medium text-blue-600">{formatCurrency(200000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>صافي الربح المتوقع</span>
              <span className="font-medium">{formatCurrency(600000)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
```