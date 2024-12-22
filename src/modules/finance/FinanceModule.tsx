import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GeneralLedger from './components/gl/GeneralLedger';
import AccountsPayable from './components/ap/AccountsPayable';
import AccountsReceivable from './components/ar/AccountsReceivable';
import BankAccounting from './components/bank/BankAccounting';
import FundsManagement from './components/funds/FundsManagement';

export default function FinanceModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">الإدارة المالية</h2>
      <Routes>
        <Route index element={<GeneralLedger />} />
        <Route path="ap/*" element={<AccountsPayable />} />
        <Route path="ar/*" element={<AccountsReceivable />} />
        <Route path="bank/*" element={<BankAccounting />} />
        <Route path="funds/*" element={<FundsManagement />} />
      </Routes>
    </div>
  );
}