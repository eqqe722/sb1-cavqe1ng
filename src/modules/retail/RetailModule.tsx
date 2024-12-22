```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import POSTerminal from './components/pos/POSTerminal';
import InventoryManagement from './components/inventory/InventoryManagement';
import LoyaltyProgram from './components/loyalty/LoyaltyProgram';
import PricingManagement from './components/pricing/PricingManagement';
import ReturnsManagement from './components/returns/ReturnsManagement';
import RetailDashboard from './components/dashboard/RetailDashboard';

export default function RetailModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">إدارة المبيعات والنقاط البيع</h2>
      
      <Routes>
        <Route index element={<RetailDashboard />} />
        <Route path="pos/*" element={<POSTerminal />} />
        <Route path="inventory/*" element={<InventoryManagement />} />
        <Route path="loyalty/*" element={<LoyaltyProgram />} />
        <Route path="pricing/*" element={<PricingManagement />} />
        <Route path="returns/*" element={<ReturnsManagement />} />
      </Routes>
    </div>
  );
}
```