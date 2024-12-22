import React from 'react';
import { Employee, EmploymentType, MaritalStatus } from '../../types/employee';
import { Button } from '../../../../components/common/Button';

interface EmployeeFormProps {
  employee?: Employee;
  onSubmit: (data: Partial<Employee>) => void;
}

export default function EmployeeForm({ employee, onSubmit }: EmployeeFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Process form data...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">المعلومات الأساسية</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              الاسم الأول (بالعربية)
            </label>
            <input
              type="text"
              name="firstName.ar"
              defaultValue={employee?.firstName.ar}
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
              name="lastName.ar"
              defaultValue={employee?.lastName.ar}
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
              defaultValue={employee?.nationalId}
              pattern="[0-9]{12}"
              title="يجب أن يتكون من 12 رقم"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              تاريخ الميلاد
            </label>
            <input
              type="date"
              name="birthDate"
              defaultValue={employee?.birthDate.toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">معلومات التوظيف</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              نوع التوظيف
            </label>
            <select
              name="employmentType"
              defaultValue={employee?.employmentType}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            >
              <option value="permanent">دائم</option>
              <option value="contract">عقد</option>
              <option value="temporary">مؤقت</option>
              <option value="probation">تجربة</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              تاريخ المباشرة
            </label>
            <input
              type="date"
              name="joiningDate"
              defaultValue={employee?.joiningDate.toISOString().split('T')[0]}
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