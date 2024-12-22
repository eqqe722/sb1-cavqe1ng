export const validateJournalEntry = (debit: number, credit: number): boolean => {
  return Math.abs(debit - credit) < 0.01; // Account for floating point precision
};

export const calculateAccountBalance = (
  openingBalance: number,
  debits: number[],
  credits: number[]
): number => {
  const totalDebits = debits.reduce((sum, amount) => sum + amount, 0);
  const totalCredits = credits.reduce((sum, amount) => sum + amount, 0);
  return openingBalance + totalDebits - totalCredits;
};

export const calculateZakat = (
  zakatableAssets: number,
  zakatableLiabilities: number,
  rate: number = 0.025
): number => {
  const zakatBase = zakatableAssets - zakatableLiabilities;
  return zakatBase > 0 ? zakatBase * rate : 0;
};

export const calculateVAT = (
  amount: number,
  rate: number = 0.15 // Standard Iraqi VAT rate
): number => {
  return amount * rate;
};