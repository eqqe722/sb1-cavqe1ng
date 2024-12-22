import React from 'react';
import { ComplianceRequirement } from '../../types/compliance';
import { Card } from '../../../../components/common/Card';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface ComplianceStatusProps {
  requirements: ComplianceRequirement[];
}

export default function ComplianceStatus({ requirements }: ComplianceStatusProps) {
  const getStatusCount = (status: ComplianceRequirement['status']) => {
    return requirements.filter(req => req.status === status).length;
  };

  const getStatusColor = (status: ComplianceRequirement['status']) => {
    const colors = {
      compliant: 'bg-green-100 text-green-800',
      partially_compliant: 'bg-yellow-100 text-yellow-800',
      non_compliant: 'bg-red-100 text-red-800',
      under_review: 'bg-blue-100 text-blue-800'
    };
    return colors[status];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        title="متوافق"
        icon={CheckCircle}
        className={getStatusColor('compliant')}
      >
        <div className="text-3xl font-bold">{getStatusCount('compliant')}</div>
      </Card>

      <Card
        title="متوافق جزئياً"
        icon={AlertTriangle}
        className={getStatusColor('partially_compliant')}
      >
        <div className="text-3xl font-bold">{getStatusCount('partially_compliant')}</div>
      </Card>

      <Card
        title="غير متوافق"
        icon={Shield}
        className={getStatusColor('non_compliant')}
      >
        <div className="text-3xl font-bold">{getStatusCount('non_compliant')}</div>
      </Card>

      <Card
        title="قيد المراجعة"
        icon={Clock}
        className={getStatusColor('under_review')}
      >
        <div className="text-3xl font-bold">{getStatusCount('under_review')}</div>
      </Card>
    </div>
  );
}