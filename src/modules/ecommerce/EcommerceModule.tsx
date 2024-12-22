```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductCatalog from './components/catalog/ProductCatalog';
import OrderManagement from './components/order/OrderManagement';
import PaymentGateways from './components/payment/PaymentGateways';
import CustomerPortal from './components/customer/CustomerPortal';
import Analytics from './components/analytics/Analytics';
import EcommerceDashboard from './components/dashboard/EcommerceDashboard';

export default function EcommerceModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة التجارة الإلكترونية</h2>
      
      <Routes>
        <Route index element={<EcommerceDashboard />} />
        <Route path="catalog/*" element={<ProductCatalog />} />
        <Route path="orders/*" element={<OrderManagement />} />
        <Route path="payments/*" element={<PaymentGateways />} />
        <Route path="customers/*" element={<CustomerPortal />} />
        <Route path="analytics/*" element={<Analytics />} />
      </Routes>
    </div>
  );
}
```