```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IdeaManagement from './components/idea/IdeaManagement';
import PrototypeDevelopment from './components/prototype/PrototypeDevelopment';
import ExperimentTracking from './components/experiment/ExperimentTracking';
import ComplianceManagement from './components/compliance/ComplianceManagement';
import KnowledgeRepository from './components/knowledge/KnowledgeRepository';
import ResearchDashboard from './components/dashboard/ResearchDashboard';

export default function ResearchModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة البحث والتطوير</h2>
      
      <Routes>
        <Route index element={<ResearchDashboard />} />
        <Route path="ideas/*" element={<IdeaManagement />} />
        <Route path="prototypes/*" element={<PrototypeDevelopment />} />
        <Route path="experiments/*" element={<ExperimentTracking />} />
        <Route path="compliance/*" element={<ComplianceManagement />} />
        <Route path="knowledge/*" element={<KnowledgeRepository />} />
      </Routes>
    </div>
  );
}
```