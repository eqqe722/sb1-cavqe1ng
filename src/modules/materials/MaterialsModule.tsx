import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Procurement from './components/procurement/Procurement';
import InventoryManagement from './components/inventory/InventoryManagement';
import InvoiceVerification from './components/invoice/InvoiceVerification';
import MaterialPlanning from './components/mrp/MaterialPlanning';
import VendorEvaluation from './components/vendor/VendorEvaluation';

export default function MaterialsModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">إدارة المواد</h2>
      <Routes>
        <Route index element={<Procurement />} />
        <Route path="inventory/*" element={<InventoryManagement />} />
        <Route path="invoices/*" element={<InvoiceVerification />} />
        <Route path="planning/*" element={<MaterialPlanning />} />
        <Route path="vendors/*" element={<VendorEvaluation />} />
      </Routes>
    </div>
  );
}