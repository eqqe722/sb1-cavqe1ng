import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface PriceListItem {
  productId: string;
  basePrice: number;
  minimumPrice: number;
  discounts: PriceDiscount[];
  taxes: PriceTax[];
  conditions?: PriceCondition[];
}

export interface PriceDiscount {
  type: DiscountType;
  value: number;
  minQuantity?: number;
  maxQuantity?: number;
  startDate?: Date;
  endDate?: Date;
}

export interface PriceTax {
  type: TaxType;
  rate: number;
  isIncluded: boolean;
}

export interface PriceCondition {
  field: string;
  operator: 'equals' | 'greater_than' | 'less_than' | 'between';
  value: string | number | [number, number];
}

export interface PriceList extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  type: PriceListType;
  currency: string;
  validFrom: Date;
  validTo?: Date;
  status: 'active' | 'inactive';
  items: PriceListItem[];
  customerGroups: string[];
}

export interface DiscountRule extends AuditableEntity {
  name: LocalizedContent;
  type: DiscountType;
  value: number;
  minQuantity?: number;
  validFrom: Date;
  validTo?: Date;
  status: 'active' | 'inactive';
}

export type PriceListType = 'retail' | 'wholesale' | 'distributor' | 'special';
export type DiscountType = 'percentage' | 'amount' | 'fixed_price';
export type TaxType = 'vat' | 'sales_tax' | 'excise' | 'service';