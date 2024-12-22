```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PreventiveMaintenance from './components/preventive/PreventiveMaintenance';
import WorkOrderManagement from './components/workorder/WorkOrderManagement';
import SparePartsInventory from './components/inventory/SparePartsInventory';
import ServiceContracts from './components/contract/ServiceContracts';
import DowntimeAnalysis from './components/downtime/DowntimeAnalysis';
import MaintenanceDashboard from './components/dashboard/MaintenanceDashboard';

export default function MaintenanceModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الصيانة</h2>
      
      <Routes>
        <Route index element={<MaintenanceDashboard />} />
        <Route path="preventive/*" element={<PreventiveMaintenance />} />
        <Route path="workorders/*" element={<WorkOrderManagement />} />
        <Route path="spareparts/*" element={<SparePartsInventory />} />
        <Route path="contracts/*" element={<ServiceContracts />} />
        <Route path="downtime/*" element={<DowntimeAnalysis />} />
      </Routes>
    </div>
  );
}
```