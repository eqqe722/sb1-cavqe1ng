```typescript
import { z } from 'zod';

export const journalEntrySchema = z.object({
  date: z.date(),
  type: z.enum(['standard', 'adjustment', 'closing', 'opening', 'reversal']),
  description: z.object({
    ar: z.string().min(1),
    en: z.string().optional()
  }),
  lines: z.array(z.object({
    accountId: z.string().min(1),
    debit: z.number().min(0),
    credit: z.number().min(0)
  })).min(1)
});

export const validateJournalEntry = (data: unknown) => {
  return journalEntrySchema.safeParse(data);
};

export const validateAccountingBalance = (
  debits: number[],
  credits: number[]
): boolean => {
  const totalDebits = debits.reduce((sum, amount) => sum + amount, 0);
  const totalCredits = credits.reduce((sum, amount) => sum + amount, 0);
  return Math.abs(totalDebits - totalCredits) < 0.01; // Account for floating point precision
};

export const validateBankAccount = (iban: string): boolean => {
  // Iraqi IBAN validation
  const ibanRegex = /^IQ\d{2}[A-Z]{4}\d{15}$/;
  return ibanRegex.test(iban);
};
```