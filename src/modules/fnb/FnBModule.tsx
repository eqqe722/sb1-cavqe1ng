```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeManagement from './components/recipe/RecipeManagement';
import KitchenOperations from './components/kitchen/KitchenOperations';
import InventoryControl from './components/inventory/InventoryControl';
import POSIntegration from './components/pos/POSIntegration';
import CustomerFeedback from './components/feedback/CustomerFeedback';
import FnBDashboard from './components/dashboard/FnBDashboard';

export default function FnBModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة المطاعم والأغذية</h2>
      
      <Routes>
        <Route index element={<FnBDashboard />} />
        <Route path="recipes/*" element={<RecipeManagement />} />
        <Route path="kitchen/*" element={<KitchenOperations />} />
        <Route path="inventory/*" element={<InventoryControl />} />
        <Route path="pos/*" element={<POSIntegration />} />
        <Route path="feedback/*" element={<CustomerFeedback />} />
      </Routes>
    </div>
  );
}
```