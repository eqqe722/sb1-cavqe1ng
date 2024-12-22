```typescript
import React, { useState } from 'react';
import { POSTransaction, POSItem } from '../../types/pos';
import { Button } from '../../../../components/common/Button';
import { Plus, Trash, CreditCard, Banknote, Receipt, User, Search } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatters';

export default function POSTerminal() {
  const [transaction, setTransaction] = useState<Partial<POSTransaction>>({
    items: [],
    totals: {
      subtotal: 0,
      discountTotal: 0,
      taxTotal: 0,
      total: 0,
      totalPaid: 0,
      change: 0
    }
  });

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="h-screen flex">
      {/* Left Panel - Products */}
      <div className="flex-1 p-4 bg-gray-100">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="بحث عن منتج..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Product Quick Select Buttons */}
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="text-center">
              <div className="font-medium">منتج 1</div>
              <div className="text-sm text-gray-500">15,000 د.ع</div>
            </div>
          </button>
          {/* Add more product buttons */}
        </div>
      </div>

      {/* Right Panel - Transaction */}
      <div className="w-96 bg-white border-r flex flex-col">
        {/* Customer Info */}
        <div className="p-4 border-b">
          <button className="w-full flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50">
            <User className="w-5 h-5" />
            <span>إضافة عميل</span>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-auto p-4">
          {transaction.items?.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-2 p-2 border rounded hover:bg-gray-50">
              <div>
                <div className="font-medium">{item.name.ar}</div>
                <div className="text-sm text-gray-500">
                  {item.quantity} × {formatCurrency(item.unitPrice)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{formatCurrency(item.total)}</span>
                <button className="text-red-500 hover:text-red-700">
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="p-4 border-t bg-gray-50">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>المجموع</span>
              <span>{formatCurrency(transaction.totals?.subtotal || 0)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>الخصم</span>
              <span>-{formatCurrency(transaction.totals?.discountTotal || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>الضريبة (15%)</span>
              <span>{formatCurrency(transaction.totals?.taxTotal || 0)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>الإجمالي</span>
              <span>{formatCurrency(transaction.totals?.total || 0)}</span>
            </div>
          </div>
        </div>

        {/* Payment Actions */}
        <div className="p-4 border-t">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <Banknote className="w-4 h-4" />
              نقداً
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              بطاقة
            </Button>
          </div>
          <div className="mt-4">
            <Button
              className="w-full flex items-center justify-center gap-2"
            >
              <Receipt className="w-4 h-4" />
              إتمام البيع
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```