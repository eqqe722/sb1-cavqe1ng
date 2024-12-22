export const calculateVariance = (actual: number, budget: number): number => {
  return actual - budget;
};

export const calculateProfitMargin = (revenue: number, cost: number): number => {
  return ((revenue - cost) / revenue) * 100;
};

export const calculateOverheadRate = (
  totalOverhead: number,
  totalDirectCost: number
): number => {
  return (totalOverhead / totalDirectCost) * 100;
};

export const calculateCostAllocation = (
  totalCost: number,
  allocationBase: number,
  driverQuantity: number
): number => {
  return (totalCost / allocationBase) * driverQuantity;
};