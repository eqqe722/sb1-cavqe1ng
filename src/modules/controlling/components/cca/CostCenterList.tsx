import React from 'react';
import { CostCenter } from '../../types/costCenter';
import { formatCurrency } from '../../../../utils/formatters';

interface CostCenterListProps {
  costCenters: CostCenter[];
  loading: boolean;
}

export default function CostCenterList({ costCenters, loading }: CostCenterListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              رمز المركز
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              اسم المركز
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              المسؤول
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
              التكلفة الإجمالية
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {costCenters.map((center) => (
            <tr key={center.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {center.code}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {center.name.ar}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {center.manager}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatCurrency(center.totalCost)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}