import { useState, useEffect } from 'react';
import { Account, Transaction } from '../../../types/database/finance';
import { financeService } from '../services/financeService';

export const useGeneralLedger = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accountsData, transactionsData] = await Promise.all([
          financeService.getAccounts(),
          financeService.getTransactions()
        ]);
        
        setAccounts(accountsData);
        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching general ledger data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    accounts,
    transactions,
    loading
  };
};