```typescript
import React from 'react';
import { Vendor, Qualification } from '../../types/vendor';
import { Button } from '../../../../components/common/Button';
import { Plus, Trash } from 'lucide-react';

interface QualificationFormProps {
  vendor?: Vendor;
  onSubmit: (data: Partial<Vendor>) => void;
}

export default function QualificationForm({ vendor, onSubmit }: QualificationFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Process form data...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات المورد</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم المورد (بالعربية)
            </label>
            <input
              type="text"
              name="name.ar"
              defaultValue={vendor?.name.ar}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              رقم السجل التجاري
            </label>
            <input
              type="text"
              name="registration.commercialRegister"
              defaultValue={vendor?.registration.commercialRegister}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              نوع المورد
            </label>
            <select
              name="type"
              defaultValue={vendor?.type}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="manufacturer">مصنع</option>
              <option value="distributor">موزع</option>
              <option value="service_provider">مزود خدمة</option>
              <option value="contractor">مقاول</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              الفئة
            </label>
            <select
              name="category"
              defaultValue={vendor?.category}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="strategic">استراتيجي</option>
              <option value="preferred">مفضل</option>
              <option value="approved">معتمد</option>
              <option value="provisional">مؤقت</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">المؤهلات والشهادات</h3>
          <Button
            type="button"
            variant="outline"
            onClick={() => {/* Add qualification logic */}}
          >
            <Plus className="w-4 h-4 ml-2" />
            إضافة مؤهل
          </Button>
        </div>

        <div className="space-y-4">
          {vendor?.qualifications.map((qualification, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">{qualification.type}</h4>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {/* Remove qualification logic */}}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    رقم الشهادة
                  </label>
                  <input
                    type="text"
                    name={`qualifications.${index}.certificate`}
                    defaultValue={qualification.certificate}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    تاريخ الانتهاء
                  </label>
                  <input
                    type="date"
                    name={`qualifications.${index}.expiryDate`}
                    defaultValue={qualification.expiryDate.toISOString().split('T')[0]}
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