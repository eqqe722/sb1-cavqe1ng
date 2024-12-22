```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CampaignPlanning from './components/campaign/CampaignPlanning';
import CustomerSegmentation from './components/customer/CustomerSegmentation';
import SocialMediaManagement from './components/social/SocialMediaManagement';
import EmailMarketing from './components/email/EmailMarketing';
import PerformanceAnalytics from './components/analytics/PerformanceAnalytics';
import MarketingDashboard from './components/dashboard/MarketingDashboard';

export default function MarketingModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة التسويق والحملات</h2>
      
      <Routes>
        <Route index element={<MarketingDashboard />} />
        <Route path="campaigns/*" element={<CampaignPlanning />} />
        <Route path="segments/*" element={<CustomerSegmentation />} />
        <Route path="social/*" element={<SocialMediaManagement />} />
        <Route path="email/*" element={<EmailMarketing />} />
        <Route path="analytics/*" element={<PerformanceAnalytics />} />
      </Routes>
    </div>
  );
}
```