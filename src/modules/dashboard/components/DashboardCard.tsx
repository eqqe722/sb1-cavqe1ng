import React from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export default function DashboardCard({ 
  title, 
  value, 
  change, 
  icon: Icon 
}: DashboardCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-full">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
      </div>
      <div className="mt-4">
        <span className={clsx(
          'text-sm font-medium',
          isPositive ? 'text-green-600' : 'text-red-600'
        )}>
          {change}
        </span>
        <span className="text-sm text-gray-600 ml-2">vs last month</span>
      </div>
    </div>
  );
}