```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectPlanning from './components/planning/ProjectPlanning';
import TaskManagement from './components/task/TaskManagement';
import ResourceManagement from './components/resource/ResourceManagement';
import BudgetTracking from './components/budget/BudgetTracking';
import RiskManagement from './components/risk/RiskManagement';
import ProjectDashboard from './components/dashboard/ProjectDashboard';

export default function ProjectModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة المشاريع</h2>
      
      <Routes>
        <Route index element={<ProjectDashboard />} />
        <Route path="planning/*" element={<ProjectPlanning />} />
        <Route path="tasks/*" element={<TaskManagement />} />
        <Route path="resources/*" element={<ResourceManagement />} />
        <Route path="budget/*" element={<BudgetTracking />} />
        <Route path="risks/*" element={<RiskManagement />} />
      </Routes>
    </div>
  );
}
```