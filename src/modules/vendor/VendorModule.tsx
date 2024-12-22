```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorQualification from './components/qualification/VendorQualification';
import PerformanceTracking from './components/performance/PerformanceTracking';
import ContractManagement from './components/contract/ContractManagement';
import VendorPortal from './components/portal/VendorPortal';
import ProcurementIntegration from './components/procurement/ProcurementIntegration';
import VendorDashboard from './components/dashboard/VendorDashboard';

export default function VendorModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الموردين</h2>
      
      <Routes>
        <Route index element={<VendorDashboard />} />
        <Route path="qualification/*" element={<VendorQualification />} />
        <Route path="performance/*" element={<PerformanceTracking />} />
        <Route path="contracts/*" element={<ContractManagement />} />
        <Route path="portal/*" element={<VendorPortal />} />
        <Route path="procurement/*" element={<ProcurementIntegration />} />
      </Routes>
    </div>
  );
}
```