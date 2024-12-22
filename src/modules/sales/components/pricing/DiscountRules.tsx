import React from 'react';
import { DiscountRule } from '../../types/pricing';
import { formatCurrency } from '../../../../utils/formatters';

interface DiscountRulesProps {
  discounts: DiscountRule[];
  loading: boolean;
}

export default function DiscountRules({ discounts, loading }: DiscountRulesProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="space-y-4">
      {discounts.map((rule) => (
        <div key={rule.id} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-medium">{rule.name.ar}</h4>
              <p className="text-sm text-gray-500">
                {rule.validFrom.toLocaleDateString()} - {rule.validTo?.toLocaleDateString()}
              </p>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              rule.status === 'active' ? 'bg-green-100 text-green-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {rule.status}
            </span>
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">نوع الخصم:</span>
              <span>{rule.type === 'percentage' ? 'نسبة مئوية' : 'مبلغ ثابت'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">القيمة:</span>
              <span>
                {rule.type === 'percentage' ? 
                  `${rule.value}%` : 
                  formatCurrency(rule.value)
                }
              </span>
            </div>
            {rule.minQuantity && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">الحد الأدنى للكمية:</span>
                <span>{rule.minQuantity} وحدة</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}