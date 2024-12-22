```typescript
import React from 'react';
import { InspectionPlan, Checkpoint } from '../../types/inspection';
import { Button } from '../../../../components/common/Button';
import { Plus, Trash } from 'lucide-react';

interface InspectionFormProps {
  plan?: InspectionPlan;
  onSubmit: (data: Partial<InspectionPlan>) => void;
}

export default function InspectionForm({ plan, onSubmit }: InspectionFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Process form data...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات خطة الفحص</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              العنوان (بالعربية)
            </label>
            <input
              type="text"
              name="title.ar"
              defaultValue={plan?.title.ar}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              نوع الفحص
            </label>
            <select
              name="type"
              defaultValue={plan?.type}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="incoming">فحص المواد الواردة</option>
              <option value="in_process">فحص أثناء الإنتاج</option>
              <option value="final">فحص نهائي</option>
              <option value="vendor">فحص المورد</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">نقاط الفحص</h3>
          <Button
            type="button"
            variant="outline"
            onClick={() => {/* Add checkpoint logic */}}
          >
            <Plus className="w-4 h-4 ml-2" />
            إضافة نقطة فحص
          </Button>
        </div>

        <div className="space-y-4">
          {plan?.checkpoints.map((checkpoint, index) => (
            <div key={checkpoint.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">{checkpoint.name.ar}</h4>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {/* Remove checkpoint logic */}}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    طريقة الفحص
                  </label>
                  <input
                    type="text"
                    name={`checkpoints.${index}.method`}
                    defaultValue={checkpoint.method}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    المواصفات
                  </label>
                  <input
                    type="text"
                    name={`checkpoints.${index}.specification.parameter`}
                    defaultValue={checkpoint.specification.parameter}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          ))}
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