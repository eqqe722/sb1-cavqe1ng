```typescript
import React from 'react';
import { AccessRequest, AccessAction } from '../../types/access';
import { Button } from '../../../../components/common/Button';

interface AccessRequestFormProps {
  onSubmit: (data: Partial<AccessRequest>) => void;
}

export default function AccessRequestForm({ onSubmit }: AccessRequestFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Process form data...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">طلب صلاحية جديد</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              المورد المطلوب
            </label>
            <select
              name="resource"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="">اختر المورد</option>
              <option value="financial_reports">التقارير المالية</option>
              <option value="hr_records">سجلات الموارد البشرية</option>
              <option value="contracts">العقود</option>
              <option value="customer_data">بيانات العملاء</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              نوع الصلاحية
            </label>
            <select
              name="action"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="read">قراءة</option>
              <option value="write">كتابة</option>
              <option value="approve">موافقة</option>
              <option value="delete">حذف</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              مبرر الطلب
            </label>
            <textarea
              name="justification"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                تاريخ البداية
              </label>
              <input
                type="date"
                name="duration.startDate"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                تاريخ النهاية
              </label>
              <input
                type="date"
                name="duration.endDate"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" type="button">
          إلغاء
        </Button>
        <Button type="submit">
          تقديم الطلب
        </Button>
      </div>
    </form>
  );
}
```