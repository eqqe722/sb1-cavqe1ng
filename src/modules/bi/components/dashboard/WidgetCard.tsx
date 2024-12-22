import React from 'react';
import { Widget } from '../../types/analytics';
import { LineChart, BarChart, PieChart, Map } from 'lucide-react';
import { Card } from '../../../../components/common/Card';

interface WidgetCardProps {
  widget: Widget;
}

export default function WidgetCard({ widget }: WidgetCardProps) {
  const getWidgetIcon = () => {
    switch (widget.visualization.type) {
      case 'line': return LineChart;
      case 'bar': return BarChart;
      case 'pie': return PieChart;
      case 'map': return Map;
      default: return LineChart;
    }
  };

  return (
    <Card
      title={widget.title.ar}
      icon={getWidgetIcon()}
      className="h-full"
    >
      <div className="p-4">
        {/* Add visualization component based on widget.visualization.type */}
        <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Visualization Placeholder</span>
        </div>
      </div>
    </Card>
  );
}