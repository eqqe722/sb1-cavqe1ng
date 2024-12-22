```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IncidentManagement from './components/incident/IncidentManagement';
import ComplianceManagement from './components/compliance/ComplianceManagement';
import RiskAssessment from './components/risk/RiskAssessment';
import TrainingManagement from './components/training/TrainingManagement';
import EHSDashboard from './components/dashboard/EHSDashboard';

export default function EHSModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة البيئة والصحة والسلامة</h2>
      
      <Routes>
        <Route index element={<EHSDashboard />} />
        <Route path="incidents/*" element={<IncidentManagement />} />
        <Route path="compliance/*" element={<ComplianceManagement />} />
        <Route path="risk/*" element={<RiskAssessment />} />
        <Route path="training/*" element={<TrainingManagement />} />
      </Routes>
    </div>
  );
}
```