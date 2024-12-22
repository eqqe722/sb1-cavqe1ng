import React from 'react';
import { Audit, AuditFinding } from '../../types/audit';
import { formatDate } from '../../../../utils/date';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface AuditTimelineProps {
  audit: Audit;
}

export default function AuditTimeline({ audit }: AuditTimelineProps) {
  const getSeverityIcon = (severity: AuditFinding['severity']) => {
    switch (severity) {
      case 'critical': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'high': return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'low': return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-l-2 border-gray-200 space-y-8">
        {audit.findings.map((finding, index) => (
          <div key={finding.id} className="relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-200" />
            <div className="mr-6">
              <div className="flex items-center gap-2">
                {getSeverityIcon(finding.severity)}
                <h4 className="text-lg font-medium">{finding.title.ar}</h4>
              </div>
              <p className="text-sm text-gray-500 mt-1">{formatDate(audit.period.startDate)}</p>
              <p className="mt-2">{finding.description.ar}</p>
              <div className="mt-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  finding.status === 'closed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {finding.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}