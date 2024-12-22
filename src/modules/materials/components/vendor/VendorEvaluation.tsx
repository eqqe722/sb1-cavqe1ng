import React from 'react';
import { Card } from '../../../../components/common/Card';
import VendorScorecard from './VendorScorecard';
import VendorPerformance from './VendorPerformance';
import { useVendorEvaluation } from '../../hooks/useVendorEvaluation';
import { UserCheck, BarChart } from 'lucide-react';

export default function VendorEvaluation() {
  const { evaluations, performance, loading } = useVendorEvaluation();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="تقييم الموردين"
          subtitle="بطاقات تقييم الموردين"
          icon={UserCheck}
        >
          <VendorScorecard evaluations={evaluations} loading={loading} />
        </Card>

        <Card
          title="أداء الموردين"
          subtitle="تحليل أداء الموردين"
          icon={BarChart}
        >
          <VendorPerformance performance={performance} loading={loading} />
        </Card>
      </div>
    </div>
  );
}