```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CropPlanning from './components/crop/CropPlanning';
import EquipmentManagement from './components/equipment/EquipmentManagement';
import IrrigationMonitoring from './components/irrigation/IrrigationMonitoring';
import SupplyChain from './components/supply/SupplyChain';
import SubsidyManagement from './components/subsidy/SubsidyManagement';
import AgricultureDashboard from './components/dashboard/AgricultureDashboard';

export default function AgricultureModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الزراعة</h2>
      
      <Routes>
        <Route index element={<AgricultureDashboard />} />
        <Route path="crops/*" element={<CropPlanning />} />
        <Route path="equipment/*" element={<EquipmentManagement />} />
        <Route path="irrigation/*" element={<IrrigationMonitoring />} />
        <Route path="supply/*" element={<SupplyChain />} />
        <Route path="subsidies/*" element={<SubsidyManagement />} />
      </Routes>
    </div>
  );
}
```