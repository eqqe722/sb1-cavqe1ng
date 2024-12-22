import React from 'react';
import { ProjectResource } from '../../types/project';
import { formatDate } from '../../../../utils/date';
import { formatCurrency } from '../../../../utils/formatters';

interface ResourceAllocationProps {
  resources: ProjectResource[];
}

export default function ResourceAllocation({ resources }: ResourceAllocationProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">تخصيص الموارد</h3>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المورد</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">النوع</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الدور</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التخصيص</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الفترة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التكلفة</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {resource.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {resource.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {resource.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {resource.allocation}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {formatDate(resource.startDate)} - {formatDate(resource.endDate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {formatCurrency(resource.cost)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}