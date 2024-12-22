```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReservationSystem from './components/reservation/ReservationSystem';
import HousekeepingManagement from './components/housekeeping/HousekeepingManagement';
import FoodBeverageManagement from './components/fnb/FoodBeverageManagement';
import GuestFeedback from './components/feedback/GuestFeedback';
import ReligiousTourism from './components/religious/ReligiousTourism';
import HospitalityDashboard from './components/dashboard/HospitalityDashboard';

export default function HospitalityModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الضيافة والسياحة</h2>
      
      <Routes>
        <Route index element={<HospitalityDashboard />} />
        <Route path="reservations/*" element={<ReservationSystem />} />
        <Route path="housekeeping/*" element={<HousekeepingManagement />} />
        <Route path="fnb/*" element={<FoodBeverageManagement />} />
        <Route path="feedback/*" element={<GuestFeedback />} />
        <Route path="religious/*" element={<ReligiousTourism />} />
      </Routes>
    </div>
  );
}
```