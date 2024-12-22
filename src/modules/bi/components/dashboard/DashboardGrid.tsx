import React from 'react';
import { Dashboard, Widget } from '../../types/analytics';
import WidgetCard from './WidgetCard';

interface DashboardGridProps {
  dashboard: Dashboard;
  loading: boolean;
}

export default function DashboardGrid({ dashboard, loading }: DashboardGridProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  const getWidgetClassName = (size: Widget['size']) => {
    const base = 'rounded-lg overflow-hidden';
    switch (size) {
      case 'small': return `${base} col-span-1`;
      case 'medium': return `${base} col-span-2`;
      case 'large': return `${base} col-span-3`;
      case 'full': return `${base} col-span-full`;
      default: return base;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{dashboard.title.ar}</h2>
          <p className="text-sm text-gray-500">{dashboard.description.ar}</p>
        </div>
        <div className="flex items-center gap-2">
          {dashboard.filters.map((filter) => (
            <div key={filter.field} className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{filter.label.ar}</span>
              {/* Add filter controls based on filter.type */}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {dashboard.widgets.map((widget) => (
          <div key={widget.id} className={getWidgetClassName(widget.size)}>
            <WidgetCard widget={widget} />
          </div>
        ))}
      </div>
    </div>
  );
}