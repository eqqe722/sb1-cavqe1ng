import React from 'react';
import { WorkflowDefinition, WorkflowStep } from '../../types/workflow';
import StepNode from './StepNode';
import { ArrowRight } from 'lucide-react';

interface WorkflowDesignerProps {
  workflow: WorkflowDefinition;
  onStepUpdate: (stepId: string, updates: Partial<WorkflowStep>) => void;
}

export default function WorkflowDesigner({ workflow, onStepUpdate }: WorkflowDesignerProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col items-center space-y-6">
        {workflow.steps.map((step, index) => (
          <div key={step.id} className="w-full">
            <StepNode
              step={step}
              onUpdate={(updates) => onStepUpdate(step.id, updates)}
            />
            {index < workflow.steps.length - 1 && (
              <div className="flex justify-center my-2">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}