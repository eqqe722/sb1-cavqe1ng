import React from 'react';
import { Card } from '../../../../components/common/Card';
import InspectionList from './InspectionList';
import InspectionResults from './InspectionResults';
import { useQualityInspection } from '../../hooks/useQualityInspection';
import { ClipboardCheck, LineChart } from 'lucide-react';

export default function QualityInspection() {
  const { inspections, results, loading } = useQualityInspection();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="فحوصات الجودة"
          subtitle="إدارة عمليات الفحص"
          icon={ClipboardCheck}
        >
          <InspectionList inspections={inspections} loading={loading} />
        </Card>

        <Card
          title="نتائج الفحص"
          subtitle="تحليل نتائج فحص الجودة"
          icon={LineChart}
        >
          <InspectionResults results={results} loading={loading} />
        </Card>
      </div>
    </div>
  );
}