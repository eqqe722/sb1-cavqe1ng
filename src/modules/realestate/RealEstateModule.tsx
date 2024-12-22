```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropertyListings from './components/property/PropertyListings';
import TenantManagement from './components/tenant/TenantManagement';
import MaintenanceScheduling from './components/maintenance/MaintenanceScheduling';
import LeaseManagement from './components/lease/LeaseManagement';
import RevenueTracking from './components/revenue/RevenueTracking';
import RealEstateDashboard from './components/dashboard/RealEstateDashboard';

export default function RealEstateModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة العقارات</h2>
      
      <Routes>
        <Route index element={<RealEstateDashboard />} />
        <Route path="properties/*" element={<PropertyListings />} />
        <Route path="tenants/*" element={<TenantManagement />} />
        <Route path="maintenance/*" element={<MaintenanceScheduling />} />
        <Route path="leases/*" element={<LeaseManagement />} />
        <Route path="revenue/*" element={<RevenueTracking />} />
      </Routes>
    </div>
  );
}
```