import { LeadStatus, LeadRating, OpportunityStage, TicketStatus, TicketPriority } from '../types';

export const getLeadStatusColor = (status: LeadStatus): string => {
  const colors = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    qualified: 'bg-green-100 text-green-800',
    unqualified: 'bg-red-100 text-red-800',
    converted: 'bg-purple-100 text-purple-800'
  };
  return colors[status];
};

export const getLeadRatingColor = (rating: LeadRating): string => {
  const colors = {
    hot: 'bg-red-100 text-red-800',
    warm: 'bg-orange-100 text-orange-800',
    cold: 'bg-blue-100 text-blue-800'
  };
  return colors[rating];
};

export const getOpportunityStageColor = (stage: OpportunityStage): string => {
  const colors = {
    prospecting: 'bg-gray-100 text-gray-800',
    qualification: 'bg-blue-100 text-blue-800',
    proposal: 'bg-yellow-100 text-yellow-800',
    negotiation: 'bg-orange-100 text-orange-800',
    closed_won: 'bg-green-100 text-green-800',
    closed_lost: 'bg-red-100 text-red-800'
  };
  return colors[stage];
};

export const getTicketStatusColor = (status: TicketStatus): string => {
  const colors = {
    new: 'bg-blue-100 text-blue-800',
    assigned: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-orange-100 text-orange-800',
    pending: 'bg-purple-100 text-purple-800',
    resolved: 'bg-green-100 text-green-800',
    closed: 'bg-gray-100 text-gray-800'
  };
  return colors[status];
};

export const getTicketPriorityColor = (priority: TicketPriority): string => {
  const colors = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800'
  };
  return colors[priority];
};