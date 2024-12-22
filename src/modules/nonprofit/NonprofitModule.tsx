```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonorManagement from './components/donor/DonorManagement';
import FundraisingCampaigns from './components/fundraising/FundraisingCampaigns';
import VolunteerManagement from './components/volunteer/VolunteerManagement';
import GrantManagement from './components/grant/GrantManagement';
import ZakatManagement from './components/zakat/ZakatManagement';
import ImpactReporting from './components/impact/ImpactReporting';
import NonprofitDashboard from './components/dashboard/NonprofitDashboard';

export default function NonprofitModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة المؤسسات الخيرية</h2>
      
      <Routes>
        <Route index element={<NonprofitDashboard />} />
        <Route path="donors/*" element={<DonorManagement />} />
        <Route path="fundraising/*" element={<FundraisingCampaigns />} />
        <Route path="volunteers/*" element={<VolunteerManagement />} />
        <Route path="grants/*" element={<GrantManagement />} />
        <Route path="zakat/*" element={<ZakatManagement />} />
        <Route path="impact/*" element={<ImpactReporting />} />
      </Routes>
    </div>
  );
}
```