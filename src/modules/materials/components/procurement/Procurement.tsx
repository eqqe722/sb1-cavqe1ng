import React from 'react';
import { Card } from '../../../../components/common/Card';
import RequisitionList from './RequisitionList';
import PurchaseOrders from './PurchaseOrders';
import { useProcurement } from '../../hooks/useProcurement';
import { FileText, ShoppingBag } from 'lucide-react';

export default function Procurement() {
  const { requisitions, orders, loading } = useProcurement();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="طلبات الشراء"
          subtitle="إدارة طلبات الشراء"
          icon={FileText}
        >
          <RequisitionList requisitions={requisitions} loading={loading} />
        </Card>

        <Card
          title="أوامر الشراء"
          subtitle="متابعة أوامر الشراء"
          icon={ShoppingBag}
        >
          <PurchaseOrders orders={orders} loading={loading} />
        </Card>
      </div>
    </div>
  );
}