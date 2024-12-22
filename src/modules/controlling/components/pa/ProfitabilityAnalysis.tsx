import React from 'react';
import { Card } from '../../../../components/common/Card';
import ProfitabilityChart from './ProfitabilityChart';
import ProfitabilityTable from './ProfitabilityTable';
import { useProfitability } from '../../hooks/useProfitability';
import { TrendingUp, BarChart } from 'lucide-react';

export default function ProfitabilityAnalysis() {
  const { profitData, loading } = useProfitability();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="تحليل الربحية"
          subtitle="تحليل الأداء المالي"
          icon={TrendingUp}
        >
          <ProfitabilityTable data={profitData} loading={loading} />
        </Card>

        <Card
          title="مؤشرات الربحية"
          subtitle="الرسوم البيانية للربحية"
          icon={BarChart}
        >
          <ProfitabilityChart data={profitData} loading={loading} />
        </Card>
      </div>
    </div>
  );
}