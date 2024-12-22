import React from 'react';
import { Card } from '../../../../components/common/Card';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';
import { useSalesOrders } from '../../hooks/useSalesOrders';
import { ShoppingCart, TrendingUp } from 'lucide-react';

export default function SalesOrders() {
  const { orders, summary, loading } = useSalesOrders();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="طلبات المبيعات"
          subtitle="إدارة طلبات العملاء"
          icon={ShoppingCart}
        >
          <OrderList orders={orders} loading={loading} />
        </Card>

        <Card
          title="ملخص المبيعات"
          subtitle="إحصائيات وتحليلات المبيعات"
          icon={TrendingUp}
        >
          <OrderSummary summary={summary} loading={loading} />
        </Card>
      </div>
    </div>
  );
}