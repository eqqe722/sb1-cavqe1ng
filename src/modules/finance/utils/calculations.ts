```typescript
export const calculateAccountBalance = (
  openingBalance: number,
  debits: number[],
  credits: number[]
): number => {
  const totalDebits = debits.reduce((sum, amount) => sum + amount, 0);
  const totalCredits = credits.reduce((sum, amount) => sum + amount, 0);
  return openingBalance + totalDebits - totalCredits;
};

export const calculateDepreciation = (
  cost: number,
  salvageValue: number,
  life: number,
  method: 'straight_line' | 'declining_balance',
  periodInMonths: number
): number => {
  switch (method) {
    case 'straight_line':
      return ((cost - salvageValue) / life) * periodInMonths;
    case 'declining_balance':
      const rate = 2 / life; // Double declining rate
      return (cost * rate * periodInMonths) / 12;
    default:
      return 0;
  }
};

export const calculateZakat = (
  zakatableAssets: number,
  zakatableLiabilities: number
): number => {
  const zakatBase = zakatableAssets - zakatableLiabilities;
  return zakatBase > 0 ? zakatBase * 0.025 : 0; // 2.5% Zakat rate
};

export const calculateBudgetVariance = (
  planned: number,
  actual: number
): { amount: number; percentage: number } => {
  const variance = planned - actual;
  const percentage = planned !== 0 ? (variance / planned) * 100 : 0;
  return { amount: variance, percentage };
};
```