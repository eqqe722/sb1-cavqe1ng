```typescript
import { AuditableEntity } from '../../../types/database/common';

export interface PaymentTransaction extends AuditableEntity {
  transactionId: string;
  orderId: string;
  gateway: PaymentGateway;
  method: PaymentMethod;
  amount: number;
  currency: string;
  status: TransactionStatus;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  gatewayResponse: {
    reference: string;
    authCode?: string;
    responseCode: string;
    message: string;
  };
  refund?: RefundDetails;
}

export interface PaymentGateway {
  id: string;
  name: string;
  type: GatewayType;
  credentials: {
    merchantId: string;
    apiKey: string;
    secretKey: string;
    environment: 'sandbox' | 'production';
  };
  settings: {
    supportedMethods: PaymentMethod[];
    supportedCurrencies: string[];
    fees: {
      percentage: number;
      fixed: number;
    };
  };
  status: 'active' | 'inactive';
}

export interface RefundDetails {
  refundId: string;
  amount: number;
  reason: string;
  status: RefundStatus;
  processedAt: Date;
  processedBy: string;
}

export interface PaymentMethod {
  code: string;
  name: string;
  type: PaymentType;
  enabled: boolean;
  minAmount?: number;
  maxAmount?: number;
  processingTime: string;
  instructions?: string;
}

export type GatewayType = 
  | 'zaincash' 
  | 'asiacell' 
  | 'amwal' 
  | 'tasdid' 
  | 'custom';

export type PaymentType = 
  | 'cash_on_delivery' 
  | 'bank_transfer' 
  | 'card' 
  | 'mobile_wallet' 
  | 'prepaid_card';

export type TransactionStatus = 
  | 'pending' 
  | 'authorized' 
  | 'completed' 
  | 'failed' 
  | 'refunded' 
  | 'cancelled';

export type RefundStatus = 
  | 'pending' 
  | 'processing' 
  | 'completed' 
  | 'failed';
```