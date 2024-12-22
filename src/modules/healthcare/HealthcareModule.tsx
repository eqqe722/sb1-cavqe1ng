```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PatientRecords from './components/patient/PatientRecords';
import AppointmentScheduling from './components/appointment/AppointmentScheduling';
import PharmacyManagement from './components/pharmacy/PharmacyManagement';
import BillingManagement from './components/billing/BillingManagement';
import HealthcareDashboard from './components/dashboard/HealthcareDashboard';
import ComplianceReporting from './components/compliance/ComplianceReporting';

export default function HealthcareModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الرعاية الصحية</h2>
      
      <Routes>
        <Route index element={<HealthcareDashboard />} />
        <Route path="patients/*" element={<PatientRecords />} />
        <Route path="appointments/*" element={<AppointmentScheduling />} />
        <Route path="pharmacy/*" element={<PharmacyManagement />} />
        <Route path="billing/*" element={<BillingManagement />} />
        <Route path="compliance/*" element={<ComplianceReporting />} />
      </Routes>
    </div>
  );
}
```