export const calculateRiskScore = (
  impact: number,
  likelihood: number
): number => {
  return impact * likelihood;
};

export const calculateResidualRisk = (
  inherentRisk: number,
  controlEffectiveness: number
): number => {
  return inherentRisk * (1 - controlEffectiveness);
};

export const getRiskLevel = (score: number): string => {
  if (score <= 4) return 'low';
  if (score <= 9) return 'medium';
  if (score <= 14) return 'high';
  return 'critical';
};

export const calculateRiskTrend = (
  currentScore: number,
  previousScore: number
): 'increasing' | 'decreasing' | 'stable' => {
  const difference = currentScore - previousScore;
  if (difference > 0) return 'increasing';
  if (difference < 0) return 'decreasing';
  return 'stable';
};