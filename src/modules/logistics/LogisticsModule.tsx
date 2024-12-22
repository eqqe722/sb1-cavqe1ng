```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FleetManagement from './components/fleet/FleetManagement';
import RouteOptimization from './components/route/RouteOptimization';
import FreightManagement from './components/freight/FreightManagement';
import CustomsManagement from './components/customs/CustomsManagement';
import WarehouseIntegration from './components/warehouse/WarehouseIntegration';
import LogisticsDashboard from './components/dashboard/LogisticsDashboard';

export default function LogisticsModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة النقل والخدمات اللوجستية</h2>
      
      <Routes>
        <Route index element={<LogisticsDashboard />} />
        <Route path="fleet/*" element={<FleetManagement />} />
        <Route path="routes/*" element={<RouteOptimization />} />
        <Route path="freight/*" element={<FreightManagement />} />
        <Route path="customs/*" element={<CustomsManagement />} />
        <Route path="warehouse/*" element={<WarehouseIntegration />} />
      </Routes>
    </div>
  );
}
```