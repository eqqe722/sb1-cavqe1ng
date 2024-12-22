import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CostCenterAccounting from './components/cca/CostCenterAccounting';
import ProfitCenterAccounting from './components/pca/ProfitCenterAccounting';
import ProductCostControlling from './components/pc/ProductCostControlling';
import ProfitabilityAnalysis from './components/pa/ProfitabilityAnalysis';
import ActivityBasedCosting from './components/abc/ActivityBasedCosting';

export default function ControllingModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">الرقابة والتكاليف</h2>
      <Routes>
        <Route index element={<CostCenterAccounting />} />
        <Route path="pca/*" element={<ProfitCenterAccounting />} />
        <Route path="pc/*" element={<ProductCostControlling />} />
        <Route path="pa/*" element={<ProfitabilityAnalysis />} />
        <Route path="abc/*" element={<ActivityBasedCosting />} />
      </Routes>
    </div>
  );
}