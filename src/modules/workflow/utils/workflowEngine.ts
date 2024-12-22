import { WorkflowInstance, StepHistory } from '../types/instance';
import { WorkflowDefinition, StepCondition } from '../types/workflow';

export const evaluateConditions = (
  conditions: StepCondition[],
  data: Record<string, unknown>
): boolean => {
  return conditions.every(condition => {
    const value = data[condition.field];
    
    switch (condition.operator) {
      case 'equals':
        return value === condition.value;
      case 'not_equals':
        return value !== condition.value;
      case 'greater_than':
        return Number(value) > Number(condition.value);
      case 'less_than':
        return Number(value) < Number(condition.value);
      case 'contains':
        return String(value).includes(String(condition.value));
      default:
        return false;
    }
  });
};

export const getNextStep = (
  workflow: WorkflowDefinition,
  currentStepId: string,
  data: Record<string, unknown>
): string | null => {
  const currentStep = workflow.steps.find(step => step.id === currentStepId);
  if (!currentStep) return null;

  for (const nextStepId of currentStep.nextSteps) {
    const nextStep = workflow.steps.find(step => step.id === nextStepId);
    if (!nextStep) continue;

    if (!nextStep.conditions || evaluateConditions(nextStep.conditions, data)) {
      return nextStepId;
    }
  }

  return null;
};

export const isWorkflowComplete = (instance: WorkflowInstance): boolean => {
  return ['completed', 'rejected', 'cancelled'].includes(instance.status);
};