import React from 'react';
import { WorkflowInstance } from '../../types/instance';
import { formatDate } from '../../../../utils/date';
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

interface WorkflowViewerProps {
  instance: WorkflowInstance;
}

export default function WorkflowViewer({ instance }: WorkflowViewerProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'in_progress': return <Clock className="w-5 h-5 text-blue-500" />;
      default: return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">{instance.title}</h2>
            <p className="text-sm text-gray-500">
              تم البدء بواسطة {instance.initiator} في {formatDate(instance.createdAt)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {getStatusIcon(instance.status)}
            <span className="text-sm font-medium">{instance.status}</span>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-lg font-medium mb-4">سجل الإجراءات</h3>
          <div className="space-y-4">
            {instance.history.map((step) => (
              <div key={step.stepId} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(step.action)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{step.performedBy}</span>
                    <span className="text-sm text-gray-500">
                      {formatDate(step.performedAt)}
                    </span>
                  </div>
                  {step.comments && (
                    <p className="mt-1 text-gray-600">{step.comments}</p>
                  )}
                  {step.attachments && step.attachments.length > 0 && (
                    <div className="mt-2 flex gap-2">
                      {step.attachments.map((attachment) => (
                        <a
                          key={attachment}
                          href={attachment}
                          className="text-sm text-blue-600 hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          عرض المرفق
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}