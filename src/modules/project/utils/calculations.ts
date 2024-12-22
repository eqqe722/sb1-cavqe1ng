import { Project, ProjectPhase, ProjectBudget, Risk } from '../types/project';

export const calculateProjectProgress = (phases: ProjectPhase[]): number => {
  if (phases.length === 0) return 0;
  const totalProgress = phases.reduce((sum, phase) => sum + phase.progress, 0);
  return totalProgress / phases.length;
};

export const calculateVariance = (actual: number, planned: number): number => {
  return planned - actual;
};

export const calculatePercentage = (actual: number, planned: number): number => {
  if (planned === 0) return 0;
  return Math.round((actual / planned) * 100);
};

export const calculateRiskScore = (
  probability: number,
  impact: number
): number => {
  return probability * impact;
};

export const calculateCriticalPath = (phases: ProjectPhase[]): string[] => {
  // Implementation of critical path calculation algorithm
  return phases
    .filter(phase => phase.dependencies.length === 0)
    .map(phase => phase.id);
};

export const calculateResourceUtilization = (
  project: Project
): Record<string, number> => {
  const utilization: Record<string, number> = {};
  
  project.resources.forEach(resource => {
    utilization[resource.id] = resource.allocation;
  });
  
  return utilization;
};