import React from 'react';
import { Card } from '../../../../components/common/Card';
import { TrendingUp, Package, Users } from 'lucide-react';
import { formatCurrency, formatNumber } from '../../../../utils/formatters';

interface OrderSummaryProps {
  summary: {
    totalOrders: number;
    totalRevenue: number;
    averageOrderValue: number;
    period: string;
  } | null;
  loading: boolean;
}

export default function OrderSummary({ summary, loading }: OrderSummaryProps) {
  if (loading || !summary) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">إجمالي الطلبات</p>
              <p className="text-2xl font-bold">{formatNumber(summary.totalOrders)}</p>
            </div>
            <Package className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">إجمالي الإيرادات</p>
              <p className="text-2xl font-bold">{formatCurrency(summary.totalRevenue)}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">متوسط قيمة الطلب</p>
              <p className="text-2xl font-bold">{formatCurrency(summary.averageOrderValue)}</p>
            </div>
            <Users className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}