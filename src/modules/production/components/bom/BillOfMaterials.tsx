import React from 'react';
import { Card } from '../../../../components/common/Card';
import BOMList from './BOMList';
import ComponentTree from './ComponentTree';
import { useBOM } from '../../hooks/useBOM';
import { Layers, GitBranch } from 'lucide-react';

export default function BillOfMaterials() {
  const { boms, loading } = useBOM();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="قائمة المواد"
          subtitle="إدارة قوائم المواد"
          icon={Layers}
        >
          <BOMList boms={boms} loading={loading} />
        </Card>

        <Card
          title="شجرة المكونات"
          subtitle="عرض هيكل المنتج"
          icon={GitBranch}
        >
          <ComponentTree bom={boms[0]} loading={loading} />
        </Card>
      </div>
    </div>
  );
}