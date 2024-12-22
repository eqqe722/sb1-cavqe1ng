import { useState, useEffect } from 'react';
import { VendorInvoice, PaymentVoucher } from '../types/payable';
import { financeService } from '../services/financeService';

export const useAccountsPayable = () => {
  const [invoices, setInvoices] = useState<VendorInvoice[]>([]);
  const [payments, setPayments] = useState<PaymentVoucher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [invoicesData, paymentsData] = await Promise.all([
          financeService.getVendorInvoices(),
          financeService.getPaymentVouchers()
        ]);
        
        setInvoices(invoicesData);
        setPayments(paymentsData);
      } catch (error) {
        console.error('Error fetching accounts payable data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    invoices,
    payments,
    loading
  };
};