```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContractManagement from './components/contract/ContractManagement';
import LitigationTracking from './components/litigation/LitigationTracking';
import ComplianceReporting from './components/compliance/ComplianceReporting';
import PolicyManagement from './components/policy/PolicyManagement';
import LegalDashboard from './components/dashboard/LegalDashboard';

export default function LegalModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الشؤون القانونية والامتثال</h2>
      
      <Routes>
        <Route index element={<LegalDashboard />} />
        <Route path="contracts/*" element={<ContractManagement />} />
        <Route path="litigation/*" element={<LitigationTracking />} />
        <Route path="compliance/*" element={<ComplianceReporting />} />
        <Route path="policies/*" element={<PolicyManagement />} />
      </Routes>
    </div>
  );
}
```