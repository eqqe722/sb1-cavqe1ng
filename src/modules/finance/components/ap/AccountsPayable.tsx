import React from 'react';
import { Card } from '../../../../components/common/Card';
import VendorInvoices from './VendorInvoices';
import PaymentSchedule from './PaymentSchedule';
import { useAccountsPayable } from '../../hooks/useAccountsPayable';
import { Receipt, Calendar } from 'lucide-react';

export default function AccountsPayable() {
  const { invoices, payments, loading } = useAccountsPayable();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="فواتير الموردين"
          subtitle="الفواتير المستحقة الدفع"
          icon={Receipt}
        >
          <VendorInvoices invoices={invoices} loading={loading} />
        </Card>

        <Card
          title="جدول المدفوعات"
          subtitle="المدفوعات المجدولة"
          icon={Calendar}
        >
          <PaymentSchedule payments={payments} loading={loading} />
        </Card>
      </div>
    </div>
  );
}