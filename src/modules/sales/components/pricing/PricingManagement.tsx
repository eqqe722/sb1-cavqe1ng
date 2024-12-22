import React from 'react';
import { Card } from '../../../../components/common/Card';
import PriceList from './PriceList';
import DiscountRules from './DiscountRules';
import { usePricing } from '../../hooks/usePricing';
import { DollarSign, Percent } from 'lucide-react';

export default function PricingManagement() {
  const { prices, discounts, loading } = usePricing();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="قائمة الأسعار"
          subtitle="إدارة أسعار المنتجات"
          icon={DollarSign}
        >
          <PriceList prices={prices} loading={loading} />
        </Card>

        <Card
          title="قواعد الخصم"
          subtitle="إدارة الخصومات والعروض"
          icon={Percent}
        >
          <DiscountRules discounts={discounts} loading={loading} />
        </Card>
      </div>
    </div>
  );
}