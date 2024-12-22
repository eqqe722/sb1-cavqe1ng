import { Opportunity, Lead, ServiceTicket } from '../types';

export const calculateConversionRate = (
  totalLeads: number,
  convertedLeads: number
): number => {
  return (convertedLeads / totalLeads) * 100;
};

export const calculateWinRate = (
  totalOpportunities: number,
  wonOpportunities: number
): number => {
  return (wonOpportunities / totalOpportunities) * 100;
};

export const calculateAverageTicketResolutionTime = (
  tickets: ServiceTicket[]
): number => {
  const resolvedTickets = tickets.filter(
    ticket => ticket.status === 'resolved' || ticket.status === 'closed'
  );
  
  if (resolvedTickets.length === 0) return 0;
  
  const totalTime = resolvedTickets.reduce((sum, ticket) => {
    const createdDate = new Date(ticket.createdAt);
    const resolvedDate = new Date(ticket.updatedAt);
    return sum + (resolvedDate.getTime() - createdDate.getTime());
  }, 0);
  
  return totalTime / resolvedTickets.length / (1000 * 60 * 60); // Convert to hours
};

export const calculateOpportunityValue = (opportunity: Opportunity): number => {
  return opportunity.value.amount * (opportunity.probability / 100);
};