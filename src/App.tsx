import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './modules/dashboard/Dashboard';
import HRModule from './modules/hr/HRModule';
import SalesModule from './modules/sales/SalesModule';
import InventoryModule from './modules/inventory/InventoryModule';
import FinanceModule from './modules/finance/FinanceModule';
import SettingsModule from './modules/settings/SettingsModule';
import LoginPage from './modules/auth/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hr/*" element={<HRModule />} />
          <Route path="/sales/*" element={<SalesModule />} />
          <Route path="/inventory/*" element={<InventoryModule />} />
          <Route path="/finance/*" element={<FinanceModule />} />
          <Route path="/settings/*" element={<SettingsModule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;