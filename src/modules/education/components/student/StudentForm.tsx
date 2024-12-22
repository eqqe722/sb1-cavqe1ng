```typescript
import React from 'react';
import { Student } from '../../types/student';
import { Button } from '../../../../components/common/Button';

interface StudentFormProps {
  student?: Student;
  onSubmit: (data: Partial<Student>) => void;
}

export default function StudentForm({ student, onSubmit }: StudentFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Process form data...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات الطالب</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              الاسم الأول (بالعربية)
            </label>
            <input
              type="text"
              name="name.first.ar"
              defaultValue={student?.name.first.ar}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم العائلة (بالعربية)
            </label>
            <input
              type="text"
              name="name.last.ar"
              defaultValue={student?.name.last.ar}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              رقم الهوية المدنية
            </label>
            <input
              type="text"
              name="nationalId"
              defaultValue={student?.nationalId}
              pattern="[0-9]{12}"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              المرحلة الدراسية
            </label>
            <select
              name="academicInfo.level"
              defaultValue={student?.academicInfo.level}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="">اختر المرحلة</option>
              <option value="primary">الابتدائية</option>
              <option value="intermediate">المتوسطة</option>
              <option value="secondary">الإعدادية</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات ولي الأمر</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              اسم ولي الأمر
            </label>
            <input
              type="text"
              name="guardian.name"
              defaultValue={student?.guardian.name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              صلة القرابة
            </label>
            <select
              name="guardian.relation"
              defaultValue={student?.guardian.relation}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="father">الأب</option>
              <option value="mother">الأم</option>
              <option value="brother">الأخ</option>
              <option value="sister">الأخت</option>
              <option value="other">أخرى</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              رقم الهاتف
            </label>
            <input
              type="tel"
              name="guardian.phone"
              defaultValue={student?.guardian.phone}
              pattern="^07[3-9][0-9]{8}$"
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