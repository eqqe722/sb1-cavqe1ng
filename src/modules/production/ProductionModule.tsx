```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductionMonitoring from './components/monitoring/ProductionMonitoring';
import ShopFloorControl from './components/shopfloor/ShopFloorControl';
import QualityControl from './components/quality/QualityControl';
import EnergyMonitoring from './components/energy/EnergyMonitoring';
import DowntimeTracking from './components/downtime/DowntimeTracking';
import ProductionDashboard from './components/dashboard/ProductionDashboard';

export default function ProductionModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الإنتاج</h2>
      
      <Routes>
        <Route index element={<ProductionDashboard />} />
        <Route path="monitoring/*" element={<ProductionMonitoring />} />
        <Route path="shopfloor/*" element={<ShopFloorControl />} />
        <Route path="quality/*" element={<QualityControl />} />
        <Route path="energy/*" element={<EnergyMonitoring />} />
        <Route path="downtime/*" element={<DowntimeTracking />} />
      </Routes>
    </div>
  );
}
```