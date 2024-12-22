```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventScheduling from './components/scheduling/EventScheduling';
import VenueManagement from './components/venue/VenueManagement';
import TicketingSystem from './components/ticketing/TicketingSystem';
import VendorCoordination from './components/vendor/VendorCoordination';
import FeedbackManagement from './components/feedback/FeedbackManagement';
import EventDashboard from './components/dashboard/EventDashboard';

export default function EventModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة الفعاليات</h2>
      
      <Routes>
        <Route index element={<EventDashboard />} />
        <Route path="scheduling/*" element={<EventScheduling />} />
        <Route path="venues/*" element={<VenueManagement />} />
        <Route path="ticketing/*" element={<TicketingSystem />} />
        <Route path="vendors/*" element={<VendorCoordination />} />
        <Route path="feedback/*" element={<FeedbackManagement />} />
      </Routes>
    </div>
  );
}
```