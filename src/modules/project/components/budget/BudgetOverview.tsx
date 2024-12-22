import React from 'react';
import { ProjectBudget } from '../../types/project';
import { formatCurrency } from '../../../../utils/formatters';
import { calculateVariance, calculatePercentage } from '../../utils/calculations';

interface BudgetOverviewProps {
  budget: ProjectBudget;
}

export default function BudgetOverview({ budget }: BudgetOverviewProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">نظرة عامة على الميزانية</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h4 className="text-sm text-gray-500 mb-2">الميزانية المخططة</h4>
          <p className="text-2xl font-semibold">{formatCurrency(budget.planned.total)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h4 className="text-sm text-gray-500 mb-2">النفقات الفعلية</h4>
          <p className="text-2xl font-semibold">{formatCurrency(budget.actual.total)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h4 className="text-sm text-gray-500 mb-2">الفرق</h4>
          <p className={`text-2xl font-semibold ${budget.variance.total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(budget.variance.total)}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-medium mb-4">تفاصيل الميزانية</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الفئة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">المخطط</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الفعلي</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الفرق</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">النسبة</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(budget.planned).map(([category, amount]) => (
                category !== 'total' && (
                  <tr key={category}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {formatCurrency(amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {formatCurrency(budget.actual[category as keyof BudgetDetails])}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {formatCurrency(budget.variance[category as keyof BudgetDetails])}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {calculatePercentage(
                        budget.actual[category as keyof BudgetDetails],
                        amount
                      )}%
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}