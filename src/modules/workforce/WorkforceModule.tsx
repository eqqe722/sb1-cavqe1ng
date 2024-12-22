```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContractorAgreements from './components/contractor/ContractorAgreements';
import TimeTracking from './components/time/TimeTracking';
import ComplianceManagement from './components/compliance/ComplianceManagement';
import PerformanceTracking from './components/performance/PerformanceTracking';
import WorkforceReporting from './components/reporting/WorkforceReporting';
import WorkforceDashboard from './components/dashboard/WorkforceDashboard';

export default function WorkforceModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة القوى العاملة والمقاولين</h2>
      
      <Routes>
        <Route index element={<WorkforceDashboard />} />
        <Route path="contractors/*" element={<ContractorAgreements />} />
        <Route path="time/*" element={<TimeTracking />} />
        <Route path="compliance/*" element={<ComplianceManagement />} />
        <Route path="performance/*" element={<PerformanceTracking />} />
        <Route path="reports/*" element={<WorkforceReporting />} />
      </Routes>
    </div>
  );
}
```