import React from 'react';
import { Card } from '../../../../components/common/Card';
import CostCenterList from './CostCenterList';
import CostAllocationView from './CostAllocationView';
import { useCostCenters } from '../../hooks/useCostCenters';
import { Building2, PieChart } from 'lucide-react';

export default function CostCenterAccounting() {
  const { costCenters, allocations, loading } = useCostCenters();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="مراكز التكلفة"
          subtitle="إدارة وتتبع مراكز التكلفة"
          icon={Building2}
        >
          <CostCenterList costCenters={costCenters} loading={loading} />
        </Card>

        <Card
          title="توزيع التكاليف"
          subtitle="تحليل توزيع التكاليف حسب المركز"
          icon={PieChart}
        >
          <CostAllocationView allocations={allocations} loading={loading} />
        </Card>
      </div>
    </div>
  );
}