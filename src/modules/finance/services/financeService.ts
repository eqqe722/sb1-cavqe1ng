import { Account, Transaction, Budget, VendorInvoice, PaymentVoucher } from '../types/finance';
import { fetchApi } from '../../../lib/api';

export const financeService = {
  async getVendorInvoices() {
    // Simulated API call
    return [
      {
        id: '1',
        invoiceNumber: 'INV-2024-001',
        vendorId: 'V001',
        date: new Date(),
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        currency: 'IQD',
        items: [],
        totals: {
          subtotal: 50000,
          tax: 7500,
          total: 57500,
          paid: 0,
          balance: 57500
        },
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as VendorInvoice[];
  },

  async getPaymentVouchers() {
    // Simulated API call
    return [
      {
        id: '1',
        voucherNumber: 'PV-2024-001',
        vendorId: 'V001',
        date: new Date(),
        amount: 57500,
        currency: 'IQD',
        paymentMethod: 'bank_transfer',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as PaymentVoucher[];
  },

  async getAccounts() {
    // Simulated API call
    return [
      {
        id: '1',
        code: '1000',
        name: { ar: 'النقد في البنك', en: 'Cash in Bank' },
        type: 'asset',
        subType: 'current',
        balance: 500000,
        currency: 'IQD',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as Account[];
  },

  async getTransactions() {
    // Simulated API call
    return [
      {
        id: '1',
        transactionId: 'TRX-001',
        type: 'debit',
        amount: 25000,
        currency: 'IQD',
        accountId: '1',
        reference: 'INV-001',
        description: { ar: 'دفع فاتورة مورد', en: 'Vendor Payment' },
        date: new Date(),
        status: 'posted',
        metadata: {},
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] as Transaction[];
  }
};