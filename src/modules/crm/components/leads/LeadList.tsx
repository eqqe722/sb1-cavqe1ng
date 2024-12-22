import React from 'react';
import { Lead } from '../../types/lead';
import { formatDate } from '../../../../utils/date';
import { getLeadStatusColor, getLeadRatingColor } from '../../utils/statusHelpers';
import { Phone, Mail, Calendar } from 'lucide-react';

interface LeadListProps {
  leads: Lead[];
  loading: boolean;
}

export default function LeadList({ leads, loading }: LeadListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الشركة</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">جهة الاتصال</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">التصنيف</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الحالة</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {lead.company.ar}
                  </div>
                  <div className="text-sm text-gray-500">
                    {lead.industry}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {lead.contactPerson.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {lead.contactPerson.title}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${getLeadRatingColor(lead.rating)}`}>
                  {lead.rating}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${getLeadStatusColor(lead.status)}`}>
                  {lead.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:text-blue-600">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:text-blue-600">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:text-blue-600">
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}