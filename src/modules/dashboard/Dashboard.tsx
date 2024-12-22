import React from 'react';
import { Users, DollarSign, Package, ShoppingCart } from 'lucide-react';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export default function Dashboard() {
  const stats = [
    {
      title: 'إجمالي الموظفين',
      value: formatNumber(150),
      icon: Users,
      change: '+5%',
      changeType: 'increase'
    },
    {
      title: 'المبيعات الشهرية',
      value: formatCurrency(245000),
      icon: ShoppingCart,
      change: '+12%',
      changeType: 'increase'
    },
    {
      title: 'المخزون',
      value: formatNumber(1234),
      icon: Package,
      change: '-2%',
      changeType: 'decrease'
    },
    {
      title: 'الإيرادات',
      value: formatCurrency(890000),
      icon: DollarSign,
      change: '+8%',
      changeType: 'increase'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">لوحة التحكم</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-full">
                <stat.icon className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600 mr-2">مقارنة بالشهر السابق</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}