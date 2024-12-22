```typescript
import React from 'react';
import { BillOfMaterials, BOMComponent } from '../../types/bom';
import { formatNumber } from '../../../../utils/formatters';
import { Layers, GitBranch, Tool } from 'lucide-react';

interface BOMViewerProps {
  bom: BillOfMaterials;
}

export default function BOMViewer({ bom }: BOMViewerProps) {
  const renderComponent = (component: BOMComponent, level: number = 0) => {
    return (
      <div
        key={component.materialId}
        className="border-b last:border-b-0"
        style={{ paddingRight: `${level * 1.5}rem` }}
      >
        <div className="flex items-center justify-between py-2 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <span className="text-gray-500">{component.position}</span>
            <span className="font-medium">{component.name.ar}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">
              {formatNumber(component.quantity)} {component.unit}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              component.source === 'make' ? 'bg-blue-100 text-blue-800' :
              component.source === 'buy' ? 'bg-green-100 text-green-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {component.source}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium">{bom.name.ar}</h3>
            <p className="text-sm text-gray-500">
              رقم التسلسل: {bom.bomNumber} | الإصدار: {bom.version}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            bom.status === 'active' ? 'bg-green-100 text-green-800' :
            bom.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {bom.status}
          </span>
        </div>

        <div className="space-y-4">
          {bom.components.map(component => renderComponent(component))}
        </div>
      </div>

      {bom.routings.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">خطوات التصنيع</h3>
          <div className="space-y-4">
            {bom.routings.map(step => (
              <div key={step.sequence} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="flex-shrink-0">
                  <Tool className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium">{step.description.ar}</p>
                  <p className="text-sm text-gray-500">
                    وقت الإعداد: {step.setupTime} دقيقة | 
                    وقت التشغيل: {step.machineTime} دقيقة
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```