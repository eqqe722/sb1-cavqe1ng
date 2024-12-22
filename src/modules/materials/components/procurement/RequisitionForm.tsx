```typescript
import React from 'react';
import { PurchaseRequisition, RequisitionItem } from '../../types/procurement';
import { Button } from '../../../../components/common/Button';
import { Plus, Trash } from 'lucide-react';

interface RequisitionFormProps {
  requisition?: PurchaseRequisition;
  onSubmit: (data: Partial<PurchaseRequisition>) => void;
}

export default function RequisitionForm({ requisition, onSubmit }: RequisitionFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Process form data...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات الطلب</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              القسم
            </label>
            <select
              name="department"
              defaultValue={requisition?.department}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="">اختر القسم</option>
              {/* Department options */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              الأولوية
            </label>
            <select
              name="priority"
              defaultValue={requisition?.priority}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="urgent">عاجل</option>
              <option value="high">مرتفع</option>
              <option value="medium">متوسط</option>
              <option value="low">منخفض</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              تاريخ الطلب
            </label>
            <input
              type="date"
              name="requiredDate"
              defaultValue={requisition?.requiredDate.toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">المواد المطلوبة</h3>
          <Button
            type="button"
            variant="outline"
            onClick={() => {/* Add item logic */}}
          >
            <Plus className="w-4 h-4 ml-2" />
            إضافة مادة
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المادة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المواصفات</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الكمية</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الوحدة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">السعر التقديري</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Requisition items */}
            </tbody>
          </table>
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