```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RiskManagement from './components/risk/RiskManagement';
import AuditManagement from './components/audit/AuditManagement';
import AccessControl from './components/access/AccessControl';
import EnergyCompliance from './components/energy/EnergyCompliance';
import PublicSectorCompliance from './components/public/PublicSectorCompliance';
import IslamicFinance from './components/islamic/IslamicFinance';
import ConstructionCompliance from './components/construction/ConstructionCompliance';
import GRCDashboard from './components/dashboard/GRCDashboard';

export default function GRCModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">الحوكمة والمخاطر والامتثال</h2>
      
      <Routes>
        <Route index element={<GRCDashboard />} />
        <Route path="risk/*" element={<RiskManagement />} />
        <Route path="audit/*" element={<AuditManagement />} />
        <Route path="access/*" element={<AccessControl />} />
        <Route path="energy/*" element={<EnergyCompliance />} />
        <Route path="public/*" element={<PublicSectorCompliance />} />
        <Route path="islamic/*" element={<IslamicFinance />} />
        <Route path="construction/*" element={<ConstructionCompliance />} />
      </Routes>
    </div>
  );
}
```