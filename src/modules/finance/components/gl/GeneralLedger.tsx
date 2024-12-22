import React from 'react';
import { Card } from '../../../../components/common/Card';
import { useGeneralLedger } from '../../hooks/useGeneralLedger';
import AccountList from './AccountList';
import TransactionList from './TransactionList';
import { FileText, TrendingUp } from 'lucide-react';

export default function GeneralLedger() {
  const { accounts, transactions, loading } = useGeneralLedger();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="الحسابات"
          subtitle="دفتر الحسابات العام"
          icon={FileText}
        >
          <AccountList accounts={accounts} loading={loading} />
        </Card>

        <Card
          title="الحركات المالية"
          subtitle="آخر المعاملات"
          icon={TrendingUp}
        >
          <TransactionList transactions={transactions} loading={loading} />
        </Card>
      </div>
    </div>
  );
}