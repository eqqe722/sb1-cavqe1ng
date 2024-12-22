```typescript
import React from 'react';
import { AccessPolicy } from '../../types/access';
import { formatDate } from '../../../../utils/date';
import { Shield, AlertTriangle, Clock } from 'lucide-react';

interface AccessPolicyListProps {
  policies: AccessPolicy[];
  loading: boolean;
}

export default function AccessPolicyList({ policies, loading }: AccessPolicyListProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  const getPolicyStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Shield className="w-5 h-5 text-green-500" />;
      case 'expired': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {policies.map(policy => (
        <div key={policy.id} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getPolicyStatusIcon(policy.status)}
              <div>
                <h4 className="font-medium">{policy.name}</h4>
                <p className="text-sm text-gray-500">{policy.type}</p>
              </div>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              policy.status === 'active' ? 'bg-green-100 text-green-800' :
              policy.status === 'expired' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {policy.status}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">تاريخ السريان:</span>
              <span className="mr-2">{formatDate(policy.effectiveDate)}</span>
            </div>
            {policy.expiryDate && (
              <div>
                <span className="text-gray-500">تاريخ الانتهاء:</span>
                <span className="mr-2">{formatDate(policy.expiryDate)}</span>
              </div>
            )}
          </div>

          <div className="mt-4">
            <h5 className="text-sm font-medium mb-2">القواعد المطبقة</h5>
            <div className="space-y-2">
              {policy.rules.map(rule => (
                <div key={rule.id} className="flex items-center justify-between text-sm">
                  <span>{rule.resource}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    rule.effect === 'allow' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {rule.effect}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```