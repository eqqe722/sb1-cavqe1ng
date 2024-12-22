import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SalesOrders from './components/orders/SalesOrders';
import PricingManagement from './components/pricing/PricingManagement';
import CreditManagement from './components/credit/CreditManagement';
import SalesAnalytics from './components/analytics/SalesAnalytics';

export default function SalesModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">إدارة المبيعات والتوزيع</h2>
      <Routes>
        <Route index element={<SalesOrders />} />
        <Route path="pricing/*" element={<PricingManagement />} />
        <Route path="credit/*" element={<CreditManagement />} />
        <Route path="analytics/*" element={<SalesAnalytics />} />
      </Routes>
    </div>
  );
}