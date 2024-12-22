import React from 'react';
import { PaymentVoucher } from '../../types/payable';
import { formatCurrency } from '../../../../utils/formatters';
import { formatDate } from '../../../../utils/date';

interface PaymentScheduleProps {
  payments: PaymentVoucher[];
  loading: boolean;
}

export default function PaymentSchedule({ payments, loading }: PaymentScheduleProps) {
  if (loading) {
    return <div className="text-center py-4">جاري التحميل...</div>;
  }

  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div key={payment.id} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{payment.voucherNumber}</h4>
              <p className="text-sm text-gray-500">
                تاريخ الدفع: {formatDate(payment.date)}
              </p>
            </div>
            <div className="text-right">
              <div className="font-medium">{formatCurrency(payment.amount)}</div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {payment.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}