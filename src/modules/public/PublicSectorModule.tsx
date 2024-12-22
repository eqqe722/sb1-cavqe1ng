```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CitizenServices from './components/citizen/CitizenServices';
import BudgetAllocation from './components/budget/BudgetAllocation';
import ProjectManagement from './components/project/ProjectManagement';
import RevenueCollection from './components/revenue/RevenueCollection';
import DisasterManagement from './components/disaster/DisasterManagement';
import PSMDashboard from './components/dashboard/PSMDashboard';

export default function PublicSectorModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة القطاع العام</h2>
      
      <Routes>
        <Route index element={<PSMDashboard />} />
        <Route path="citizen/*" element={<CitizenServices />} />
        <Route path="budget/*" element={<BudgetAllocation />} />
        <Route path="projects/*" element={<ProjectManagement />} />
        <Route path="revenue/*" element={<RevenueCollection />} />
        <Route path="disaster/*" element={<DisasterManagement />} />
      </Routes>
    </div>
  );
}
```