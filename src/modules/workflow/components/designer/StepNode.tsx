import React from 'react';
import { WorkflowStep } from '../../types/workflow';
import { UserCheck, Bell, Cog, FileText } from 'lucide-react';

interface StepNodeProps {
  step: WorkflowStep;
  onUpdate: (updates: Partial<WorkflowStep>) => void;
}

export default function StepNode({ step, onUpdate }: StepNodeProps) {
  const getStepIcon = () => {
    switch (step.type) {
      case 'approval': return <UserCheck className="w-5 h-5" />;
      case 'notification': return <Bell className="w-5 h-5" />;
      case 'system': return <Cog className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-full">
          {getStepIcon()}
        </div>
        <div>
          <h3 className="font-medium">{step.name.ar}</h3>
          <p className="text-sm text-gray-500">
            {step.assignee.type}: {step.assignee.value}
          </p>
        </div>
      </div>
      
      {step.conditions && step.conditions.length > 0 && (
        <div className="mt-3 border-t pt-3">
          <h4 className="text-sm font-medium mb-2">الشروط</h4>
          <div className="space-y-1">
            {step.conditions.map((condition, index) => (
              <div key={index} className="text-sm text-gray-600">
                {condition.field} {condition.operator} {condition.value}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {step.actions.map(action => (
          <span
            key={action.id}
            className="px-2 py-1 bg-white rounded text-sm text-gray-600"
          >
            {action.name.ar}
          </span>
        ))}
      </div>
    </div>
  );
}