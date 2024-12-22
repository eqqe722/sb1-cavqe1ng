```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KnowledgeRepository from './components/repository/KnowledgeRepository';
import CollaborationTools from './components/collaboration/CollaborationTools';
import TrainingResources from './components/training/TrainingResources';
import SearchPortal from './components/search/SearchPortal';
import KnowledgeDashboard from './components/dashboard/KnowledgeDashboard';

export default function KnowledgeModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة المعرفة</h2>
      
      <Routes>
        <Route index element={<KnowledgeDashboard />} />
        <Route path="repository/*" element={<KnowledgeRepository />} />
        <Route path="collaboration/*" element={<CollaborationTools />} />
        <Route path="training/*" element={<TrainingResources />} />
        <Route path="search/*" element={<SearchPortal />} />
      </Routes>
    </div>
  );
}
```