```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Users, Home, Utensils, Star, Calendar, TrendingUp } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function HospitalityDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الحجوزات"
          subtitle="حجوزات اليوم"
          icon={Calendar}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(45)}</div>
            <div className="text-sm text-gray-500">
              <span className="text-green-600">85%</span> نسبة الإشغال
            </div>
          </div>
        </Card>

        <Card
          title="الغرف"
          subtitle="حالة الغرف"
          icon={Home}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(120)}</div>
            <div className="text-sm text-gray-500">15 غرفة تحت التنظيف</div>
          </div>
        </Card>

        <Card
          title="المطاعم"
          subtitle="طلبات الطعام"
          icon={Utensils}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(85)}</div>
            <div className="text-sm text-green-600">12 طلب جديد</div>
          </div>
        </Card>

        <Card
          title="تقييم النزلاء"
          subtitle="متوسط التقييم"
          icon={Star}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">4.8/5</div>
            <div className="text-sm text-gray-500">25 تقييم جديد</div>
          </div>
        </Card>
      </div>

      {/* Room Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة الغرف"
          subtitle="توزيع الغرف حسب النوع"
          icon={Home}
        >
          <div className="space-y-4 mt-4">
            {[
              { type: 'غرفة مفردة', occupied: 25, total: 30 },
              { type: 'غرفة مزدوجة', occupied: 40, total: 45 },
              { type: 'جناح عائلي', occupied: 15, total: 20 },
              { type: 'جناح فاخر', occupied: 8, total: 10 }
            ].map(room => (
              <div key={room.type} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{room.type}</span>
                  <span className="text-sm">
                    {room.occupied} من {room.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(room.occupied / room.total) * 100}%` }}
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
              { date: '2024-03-15', bookings: 25, type: 'religious' },
              { date: '2024-03-16', bookings: 18, type: 'business' },
              { date: '2024-03-17', bookings: 30, type: 'religious' },
              { date: '2024-03-18', bookings: 22, type: 'leisure' }
            ].map((day, index) => (
              <div 
                key={index}
                className="p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">{day.date}</div>
                    <div className="text-sm text-gray-500">{day.bookings} حجز</div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    day.type === 'religious' ? 'bg-green-100 text-green-800' :
                    day.type === 'business' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {day.type === 'religious' ? 'سياحة دينية' :
                     day.type === 'business' ? 'رجال أعمال' :
                     'سياحة ترفيهية'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Revenue & Guest Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="الإيرادات"
          subtitle="تحليل الإيرادات"
          icon={TrendingUp}
        >
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <span>إيرادات الغرف</span>
              <span className="font-medium">{formatCurrency(450000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>المطاعم والمشروبات</span>
              <span className="font-medium">{formatCurrency(180000)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>الخدمات الإضافية</span>
              <span className="font-medium">{formatCurrency(75000)}</span>
            </div>
            <div className="flex justify-between items-center font-bold">
              <span>الإجمالي</span>
              <span>{formatCurrency(705000)}</span>
            </div>
          </div>
        </Card>

        <Card
          title="آراء النزلاء"
          subtitle="آخر التقييمات"
          icon={Star}
        >
          <div className="space-y-4 mt-4">
            {[
              { guest: 'أحمد محمد', rating: 5, comment: 'خدمة ممتازة وموقع مثالي للزيارات الدينية' },
              { guest: 'فاطمة علي', rating: 4, comment: 'تجربة رائعة وطاقم ودود' },
              { guest: 'حسين كريم', rating: 5, comment: 'نظافة ممتازة وخدمة متميزة' }
            ].map((review, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-medium">{review.guest}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
```