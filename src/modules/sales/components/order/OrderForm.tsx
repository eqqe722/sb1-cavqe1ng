```typescript
import React from 'react';
import { SalesOrder, OrderItem } from '../../types/order';
import { Button } from '../../../../components/common/Button';
import { formatCurrency } from '../../../../utils/formatters';
import { Plus, Trash } from 'lucide-react';

interface OrderFormProps {
  order?: SalesOrder;
  onSubmit: (data: Partial<SalesOrder>) => void;
}

export default function OrderForm({ order, onSubmit }: OrderFormProps) {
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
              العميل
            </label>
            <select
              name="customerId"
              defaultValue={order?.customer.id}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="">اختر العميل</option>
              {/* Customer options */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              تاريخ التسليم المطلوب
            </label>
            <input
              type="date"
              name="deliveryDate"
              defaultValue={order?.deliveryDate?.toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">المنتجات</h3>
          <Button
            type="button"
            variant="outline"
            onClick={() => {/* Add item logic */}}
          >
            <Plus className="w-4 h-4 ml-2" />
            إضافة منتج
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المنتج</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الكمية</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">السعر</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الخصم</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الضريبة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المجموع</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Order items */}
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