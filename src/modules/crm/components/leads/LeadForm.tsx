```typescript
import React from 'react';
import { Lead, LeadSource, LeadStatus } from '../../types/lead';
import { Button } from '../../../../components/common/Button';

interface LeadFormProps {
  lead?: Lead;
  onSubmit: (data: Partial<Lead>) => void;
}

export default function LeadForm({ lead, onSubmit }: LeadFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Process form data...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات العميل المحتمل</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم الشركة (بالعربية)
            </label>
            <input
              type="text"
              name="company.ar"
              defaultValue={lead?.company.ar}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم الشركة (بالإنجليزية)
            </label>
            <input
              type="text"
              name="company.en"
              defaultValue={lead?.company.en}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              المحافظة
            </label>
            <select
              name="region"
              defaultValue={lead?.region}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="baghdad">بغداد</option>
              <option value="basra">البصرة</option>
              <option value="erbil">أربيل</option>
              {/* Add other Iraqi governorates */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              مصدر العميل
            </label>
            <select
              name="source"
              defaultValue={lead?.source}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="website">الموقع الإلكتروني</option>
              <option value="referral">إحالة</option>
              <option value="exhibition">معرض</option>
              <option value="social_media">وسائل التواصل الاجتماعي</option>
              <option value="cold_call">اتصال مباشر</option>
              <option value="agent">وكيل</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات الاتصال</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم جهة الاتصال
            </label>
            <input
              type="text"
              name="contactPerson.name"
              defaultValue={lead?.contactPerson.name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              المسمى الوظيفي
            </label>
            <input
              type="text"
              name="contactPerson.title"
              defaultValue={lead?.contactPerson.title}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="contactPerson.email"
              defaultValue={lead?.contactPerson.email}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              رقم الهاتف
            </label>
            <input
              type="tel"
              name="contactPerson.phone"
              defaultValue={lead?.contactPerson.phone}
              pattern="^07[3-9][0-9]{8}$"
              title="رقم هاتف عراقي صحيح"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" type="button">
          إلغاء
        </Button>
        <Button type="submit">
          حفظ
        </Button>
      </div>
    </form>
  );
}
```