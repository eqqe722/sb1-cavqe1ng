```typescript
import React from 'react';
import { DemandForecast } from '../../types/planning';
import { Card } from '../../../../components/common/Card';
import { formatNumber } from '../../../../utils/formatters';
import { TrendingUp, Calendar, AlertTriangle } from 'lucide-react';

interface DemandForecastProps {
  forecasts: DemandForecast[];
  loading: boolean;
}

export default function DemandForecast({ forecasts, loading }: DemandForecastProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="توقعات الطلب"
          subtitle="تحليل وتوقع الطلب المستقبلي"
          icon={TrendingUp}
        >
          <div className="space-y-4">
            {forecasts.map(forecast => (
              <div key={forecast.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium">{forecast.product.name.ar}</h4>
                    <p className="text-sm text-gray-500">{forecast.region}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    forecast.confidence >= 80 ? 'bg-green-100 text-green-800' :
                    forecast.confidence >= 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {forecast.confidence}% ثقة
                  </span>
                </div>

                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>الكمية المتوقعة:</span>
                    <span className="font-medium">{formatNumber(forecast.quantity)}</span>
                  </div>
                </div>

                {forecast.seasonalFactors.length > 0 && (
                  <div className="mt-3 border-t pt-3">
                    <h5 className="text-sm font-medium mb-2">العوامل الموسمية</h5>
                    <div className="space-y-1">
                      {forecast.seasonalFactors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{factor.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="تحليل المخاطر"
          subtitle="تقييم مخاطر سلسلة التوريد"
          icon={AlertTriangle}
        >
          {/* Risk analysis content */}
        </Card>
      </div>
    </div>
  );
}
```