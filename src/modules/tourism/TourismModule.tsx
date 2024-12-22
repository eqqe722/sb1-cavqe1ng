```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TourOperators from './components/operator/TourOperators';
import BookingManagement from './components/booking/BookingManagement';
import AccommodationSystem from './components/accommodation/AccommodationSystem';
import TransportManagement from './components/transport/TransportManagement';
import PilgrimagePackages from './components/package/PilgrimagePackages';
import TourismDashboard from './components/dashboard/TourismDashboard';

export default function TourismModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة السياحة والزيارات الدينية</h2>
      
      <Routes>
        <Route index element={<TourismDashboard />} />
        <Route path="operators/*" element={<TourOperators />} />
        <Route path="bookings/*" element={<BookingManagement />} />
        <Route path="accommodation/*" element={<AccommodationSystem />} />
        <Route path="transport/*" element={<TransportManagement />} />
        <Route path="packages/*" element={<PilgrimagePackages />} />
      </Routes>
    </div>
  );
}
```