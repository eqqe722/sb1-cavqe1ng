```typescript
import React from 'react';
import { DefectRecord } from '../../types/defect';
import { formatDate } from '../../../../utils/date';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface DefectAnalysisProps {
  defect: DefectRecord;
}

export default function DefectAnalysis({ defect }: DefectAnalysisProps) {
  const getImpactIcon = (level: string) => {
    switch (level) {
      case 'high': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'low': return <CheckCircle className="w-5 h-5 text-green-500" />;
      default: return <XCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">تحليل العيب</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">السبب الجذري</h4>
            <p className="text-gray-600">{defect.analysis.rootCause}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">تقييم الأثر</h4>
            <div className="space-y-2">
              {Object.entries(defect.analysis.impact).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-gray-600">{key}</span>
                  <div className="flex items-center gap-2">
                    {getImpactIcon(value)}
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-2">الإجراءات التصحيحية</h4>
          <div className="space-y-4">
            {defect.actions.map(action => (
              <div key={action.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{action.description.ar}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    action.status === 'completed' ? 'bg-green-100 text-green-800' :
                    action.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {action.status}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  تاريخ الاستحقاق: {formatDate(action.dueDate)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```