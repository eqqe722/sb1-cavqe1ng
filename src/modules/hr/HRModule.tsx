import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

export default function HRModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">إدارة الموارد البشرية</h2>
      <Routes>
        <Route index element={<EmployeeList />} />
        <Route path="add" element={<EmployeeForm />} />
        <Route path="edit/:id" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}