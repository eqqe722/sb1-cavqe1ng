export const aggregateData = (
  data: any[],
  groupBy: string,
  measure: string,
  aggregation: 'sum' | 'avg' | 'count' | 'min' | 'max'
): any[] => {
  const groups = data.reduce((acc, item) => {
    const key = item[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  return Object.entries(groups).map(([key, values]: [string, any[]]) => {
    const value = values.reduce((sum, item) => {
      switch (aggregation) {
        case 'sum': return sum + item[measure];
        case 'avg': return sum + item[measure] / values.length;
        case 'count': return values.length;
        case 'min': return Math.min(sum, item[measure]);
        case 'max': return Math.max(sum, item[measure]);
        default: return sum;
      }
    }, aggregation === 'min' ? Infinity : aggregation === 'max' ? -Infinity : 0);

    return {
      [groupBy]: key,
      [measure]: value
    };
  });
};

export const calculateGrowth = (
  current: number,
  previous: number
): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

export const calculateMovingAverage = (
  data: number[],
  period: number
): number[] => {
  const result = [];
  for (let i = period - 1; i < data.length; i++) {
    const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
    result.push(sum / period);
  }
  return result;
};