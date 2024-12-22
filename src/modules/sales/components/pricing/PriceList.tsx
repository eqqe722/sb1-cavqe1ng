import React from 'react';
import { PriceList } from '../../types/pricing';
import { formatCurrency } from '../../../../utils/formatters';

interface PriceListProps {
  prices: PriceList[];
  loading: boolean;
}

export default function PriceList({ prices, loading }: PriceListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="space-y-4">
      {prices.map((priceList) => (
        <div key={priceList.code} className="bg-white rounded-lg shadow-sm">
          <div className="px-4 py-3 border-b">
            <h3 className="font-medium">{priceList.name.ar}</h3>
            <p className="text-sm text-gray-500">
              {priceList.validFrom.toLocaleDateString()} - {priceList.validTo?.toLocaleDateString()}
            </p>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">المنتج</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">السعر الأساسي</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">الحد الأدنى</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">الخصومات</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {priceList.items.map((item) => (
                    <tr key={item.productId}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{item.productId}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{formatCurrency(item.basePrice)}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">{formatCurrency(item.minimumPrice)}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        {item.discounts.length > 0 ? (
                          <span className="text-green-600">{item.discounts.length} خصم نشط</span>
                        ) : (
                          <span className="text-gray-500">لا يوجد</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}