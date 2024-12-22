```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExplorationManagement from './components/exploration/ExplorationManagement';
import RefineryOperations from './components/refinery/RefineryOperations';
import PipelineMonitoring from './components/pipeline/PipelineMonitoring';
import EnergyDistribution from './components/distribution/EnergyDistribution';
import RegulatoryCompliance from './components/compliance/RegulatoryCompliance';
import EnergyDashboard from './components/dashboard/EnergyDashboard';

export default function EnergyModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة قطاع الطاقة</h2>
      
      <Routes>
        <Route index element={<EnergyDashboard />} />
        <Route path="exploration/*" element={<ExplorationManagement />} />
        <Route path="refinery/*" element={<RefineryOperations />} />
        <Route path="pipeline/*" element={<PipelineMonitoring />} />
        <Route path="distribution/*" element={<EnergyDistribution />} />
        <Route path="compliance/*" element={<RegulatoryCompliance />} />
      </Routes>
    </div>
  );
}
```