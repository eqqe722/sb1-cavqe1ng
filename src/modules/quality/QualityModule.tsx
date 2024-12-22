import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QualityPlanning from './components/planning/QualityPlanning';
import QualityInspection from './components/inspection/QualityInspection';
import QualityControl from './components/control/QualityControl';
import QualityNotifications from './components/notifications/QualityNotifications';
import SupplierQuality from './components/supplier/SupplierQuality';

export default function QualityModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">إدارة الجودة</h2>
      <Routes>
        <Route index element={<QualityPlanning />} />
        <Route path="inspection/*" element={<QualityInspection />} />
        <Route path="control/*" element={<QualityControl />} />
        <Route path="notifications/*" element={<QualityNotifications />} />
        <Route path="supplier/*" element={<SupplierQuality />} />
      </Routes>
    </div>
  );
}