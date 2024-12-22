import React from 'react';
import { Asset } from '../../types/maintenance';
import { formatDate } from '../../../../utils/date';
import { formatCurrency } from '../../../../utils/formatters';
import { getAssetStatusColor } from '../../utils/statusHelpers';

interface AssetDetailsProps {
  asset: Asset;
}

export default function AssetDetails({ asset }: AssetDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">معلومات الأصل</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-gray-500">رقم الأصل</dt>
                <dd className="text-sm">{asset.assetNumber}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">الاسم</dt>
                <dd className="text-sm">{asset.name.ar}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">الحالة</dt>
                <dd>
                  <span className={`px-2 py-1 text-xs rounded-full ${getAssetStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">المواصفات الفنية</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-gray-500">الشركة المصنعة</dt>
                <dd className="text-sm">{asset.manufacturer}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">الموديل</dt>
                <dd className="text-sm">{asset.model}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">الرقم التسلسلي</dt>
                <dd className="text-sm">{asset.serialNumber}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">سجل الصيانة</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التاريخ</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">النوع</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الوصف</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التكلفة</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {asset.maintenanceHistory.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {formatDate(record.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {record.type}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {record.description.ar}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {formatCurrency(record.cost)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}