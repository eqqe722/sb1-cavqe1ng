```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Calendar, Users, Building2, Ticket, AlertTriangle, Star } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../../../utils/formatters';

export default function EventDashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="الفعاليات النشطة"
          subtitle="الفعاليات الحالية"
          icon={Calendar}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(12)}</div>
            <div className="text-sm text-gray-500">5 فعاليات دينية</div>
          </div>
        </Card>

        <Card
          title="التسجيلات"
          subtitle="إجمالي المسجلين"
          icon={Users}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(1250)}</div>
            <div className="text-sm text-green-600">+15% عن الشهر السابق</div>
          </div>
        </Card>

        <Card
          title="القاعات"
          subtitle="القاعات المحجوزة"
          icon={Building2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatNumber(8)}</div>
            <div className="text-sm text-gray-500">85% نسبة الإشغال</div>
          </div>
        </Card>

        <Card
          title="التذاكر"
          subtitle="مبيعات التذاكر"
          icon={Ticket}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{formatCurrency(75000)}</div>
            <div className="text-sm text-green-600">+25% عن المتوقع</div>
          </div>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card
        title="الفعاليات القادمة"
        subtitle="جدول الفعاليات"
        icon={Calendar}
      >
        <div className="space-y-4 mt-4">
          {[
            { title: 'المؤتمر الديني السنوي', date: '2024-03-15', type: 'religious', attendees: 500 },
            { title: 'معرض الفنون التراثية', date: '2024-03-20', type: 'cultural', attendees: 300 },
            { title: 'احتفالية المولد النبوي', date: '2024-03-25', type: 'religious', attendees: 1000 },
            { title: 'مهرجان التراث العراقي', date: '2024-03-30', type: 'cultural', attendees: 750 }
          ].map((event, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-gray-500">{event.date}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  event.type === 'religious' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {event.type === 'religious' ? 'ديني' : 'ثقافي'}
                </span>
                <span className="text-sm font-medium">
                  {formatNumber(event.attendees)} مشارك
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Venue Status & Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="حالة القاعات"
          subtitle="إشغال القاعات"
          icon={Building2}
        >
          <div className="space-y-4 mt-4">
            {[
              { name: 'قاعة الرافدين', capacity: 500, booked: 450 },
              { name: 'قاعة بابل', capacity: 300, booked: 250 },
              { name: 'قاعة عشتار', capacity: 200, booked: 180 },
              { name: 'قاعة أور', capacity: 150, booked: 120 }
            ].map(venue => (
              <div key={venue.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{venue.name}</span>
                  <span className="text-sm">
                    {venue.booked} من {venue.capacity}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(venue.booked / venue.capacity) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="تقييمات الفعاليات"
          subtitle="آراء المشاركين"
          icon={Star}
        >
          <div className="space-y-4 mt-4">
            {[
              { event: 'المؤتمر الديني', rating: 4.8, feedback: 'تنظيم ممتاز وخدمات متميزة' },
              { event: 'معرض التراث', rating: 4.5, feedback: 'فعالية ثرية بالمعلومات' },
              { event: 'الاحتفالية السنوية', rating: 4.9, feedback: 'أجواء روحانية رائعة' }
            ].map((review, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-medium">{review.event}</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-1">{review.rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{review.feedback}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
```