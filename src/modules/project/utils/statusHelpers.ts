import {
  ProjectStatus,
  PhaseStatus,
  MilestoneStatus,
  RiskStatus,
  PriorityLevel
} from '../types/project';

export const getProjectStatusColor = (status: ProjectStatus): string => {
  const colors = {
    planning: 'bg-blue-100 text-blue-800',
    active: 'bg-green-100 text-green-800',
    on_hold: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800'
  };
  return colors[status];
};

export const getPhaseStatusColor = (status: PhaseStatus): string => {
  const colors = {
    not_started: 'bg-gray-100 text-gray-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    delayed: 'bg-red-100 text-red-800'
  };
  return colors[status];
};

export const getMilestoneStatusColor = (status: MilestoneStatus): string => {
  const colors = {
    pending: 'bg-gray-100 text-gray-800',
    achieved: 'bg-green-100 text-green-800',
    delayed: 'bg-red-100 text-red-800',
    at_risk: 'bg-yellow-100 text-yellow-800'
  };
  return colors[status];
};

export const getRiskStatusColor = (status: RiskStatus): string => {
  const colors = {
    identified: 'bg-blue-100 text-blue-800',
    assessed: 'bg-yellow-100 text-yellow-800',
    mitigated: 'bg-green-100 text-green-800',
    closed: 'bg-gray-100 text-gray-800'
  };
  return colors[status];
};

export const getPriorityColor = (priority: PriorityLevel): string => {
  const colors = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800'
  };
  return colors[priority];
};