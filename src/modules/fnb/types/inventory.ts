```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface FoodItem extends AuditableEntity {
  itemNumber: string;
  name: LocalizedContent;
  category: ItemCategory;
  type: ItemType;
  unit: string;
  stock: {
    current: number;
    minimum: number;
    maximum: number;
    reorderPoint: number;
  };
  storage: {
    location: string;
    temperature: number;
    humidity?: number;
  };
  supplier: {
    id: string;
    name: string;
    leadTime: number;
  };
  cost: {
    purchase: number;
    average: number;
    lastPurchase: number;
    currency: string;
  };
  expiry: {
    shelfLife: number;
    receivedDate?: Date;
    expiryDate?: Date;
  };
  quality: {
    grade?: string;
    inspectionRequired: boolean;
    lastInspection?: Date;
  };
}

export interface InventoryTransaction extends AuditableEntity {
  transactionNumber: string;
  type: TransactionType;
  items: TransactionItem[];
  reference: {
    type: ReferenceType;
    id: string;
  };
  department: string;
  authorizedBy: string;
  notes?: string;
}

export interface TransactionItem {
  itemId: string;
  quantity: number;
  unit: string;
  cost: number;
  batch?: string;
  expiryDate?: Date;
}

export interface WastageRecord extends AuditableEntity {
  recordNumber: string;
  items: WastageItem[];
  reason: WastageReason;
  reportedBy: string;
  verifiedBy?: string;
  cost: number;
  action: WastageAction;
}

export interface WastageItem {
  itemId: string;
  quantity: number;
  value: number;
  reason: string;
}

export type ItemCategory = 
  | 'meat' 
  | 'produce' 
  | 'dairy' 
  | 'dry_goods' 
  | 'spices';

export type ItemType = 
  | 'raw' 
  | 'processed' 
  | 'prepared' 
  | 'packaging';

export type TransactionType = 
  | 'receipt' 
  | 'issue' 
  | 'return' 
  | 'adjustment';

export type ReferenceType = 
  | 'purchase' 
  | 'kitchen' 
  | 'wastage' 
  | 'transfer';

export type WastageReason = 
  | 'expired' 
  | 'damaged' 
  | 'quality_issue' 
  | 'overproduction';

export type WastageAction = 
  | 'dispose' 
  | 'return' 
  | 'donate' 
  | 'repurpose';
```