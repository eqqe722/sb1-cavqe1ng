```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentManagement from './components/student/StudentManagement';
import CurriculumPlanning from './components/curriculum/CurriculumPlanning';
import FacultyManagement from './components/faculty/FacultyManagement';
import ExaminationSystem from './components/examination/ExaminationSystem';
import FinanceManagement from './components/finance/FinanceManagement';
import EducationDashboard from './components/dashboard/EducationDashboard';

export default function EducationModule() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">نظام إدارة التعليم</h2>
      
      <Routes>
        <Route index element={<EducationDashboard />} />
        <Route path="students/*" element={<StudentManagement />} />
        <Route path="curriculum/*" element={<CurriculumPlanning />} />
        <Route path="faculty/*" element={<FacultyManagement />} />
        <Route path="examination/*" element={<ExaminationSystem />} />
        <Route path="finance/*" element={<FinanceManagement />} />
      </Routes>
    </div>
  );
}
```