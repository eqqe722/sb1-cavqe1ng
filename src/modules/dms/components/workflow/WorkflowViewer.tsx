import React from 'react';
import { WorkflowInstance, StepHistory } from '../../types/workflow';
import { formatDate } from '../../../../utils/date';
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

interface WorkflowViewerProps {
  workflow: WorkflowInstance;
}

export default function WorkflowViewer({ workflow }: WorkflowViewerProps) {
  const getStepIcon = (action: string) => {
    switch (action) {
      case 'approve':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'reject':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'request_changes':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium mb-4">سير العمل</h3>
      <div className="space-y-6">
        {workflow.history.map((step: StepHistory, index: number) => (
          <div key={step.stepId} className="relative">
            {index !== workflow.history.length - 1 && (
              <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-gray-200" />
            )}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {getStepIcon(step.action)}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{step.performedBy}</h4>
                  <span className="text-sm text-gray-500">
                    {formatDate(step.performedAt)}
                  </span>
                </div>
                {step.comments && (
                  <p className="mt-1 text-sm text-gray-600">{step.comments}</p>
                )}
                {step.attachments && step.attachments.length > 0 && (
                  <div className="mt-2">
                    <h5 className="text-xs font-medium text-gray-500 mb-1">
                      المرفقات
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {step.attachments.map((attachment) => (
                        <a
                          key={attachment}
                          href={attachment}
                          className="text-xs text-blue-600 hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          عرض المرفق
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}