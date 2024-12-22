import { formatCurrency } from '../../../utils/formatters';

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};

export const formatVariance = (variance: number): string => {
  const prefix = variance > 0 ? '+' : '';
  return `${prefix}${formatCurrency(variance)}`;
};

export const formatCostRate = (rate: number): string => {
  return `${formatCurrency(rate)}/وحدة`;
};