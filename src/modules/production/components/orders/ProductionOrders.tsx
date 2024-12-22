import React from 'react';
import { Card } from '../../../../components/common/Card';
import OrderList from './OrderList';
import OrderSchedule from './OrderSchedule';
import { useProductionOrders } from '../../hooks/useProductionOrders';
import { ClipboardList, Calendar } from 'lucide-react';

export default function ProductionOrders() {
  const { orders, schedule, loading } = useProductionOrders();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="أوامر الإنتاج"
          subtitle="إدارة أوامر الإنتاج"
          icon={ClipboardList}
        >
          <OrderList orders={orders} loading={loading} />
        </Card>

        <Card
          title="جدول الإنتاج"
          subtitle="جدولة وتتبع الإنتاج"
          icon={Calendar}
        >
          <OrderSchedule schedule={schedule} loading={loading} />
        </Card>
      </div>
    </div>
  );
}