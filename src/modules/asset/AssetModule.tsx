```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AssetAcquisition from './components/acquisition/AssetAcquisition';
import MaintenanceScheduling from './components/maintenance/MaintenanceScheduling';
import AssetDepreciation from './components/depreciation/AssetDepreciation';
import AssetDisposal from './components/disposal/AssetDisposal';
import AssetUtilization from './components/utilization/AssetUtilization';
import AssetDashboard from './components/dashboard/AssetDashboard';

export default function AssetModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الأصول</h2>
      
      <Routes>
        <Route index element={<AssetDashboard />} />
        <Route path="acquisition/*" element={<AssetAcquisition />} />
        <Route path="maintenance/*" element={<MaintenanceScheduling />} />
        <Route path="depreciation/*" element={<AssetDepreciation />} />
        <Route path="disposal/*" element={<AssetDisposal />} />
        <Route path="utilization/*" element={<AssetUtilization />} />
      </Routes>
    </div>
  );
}
```