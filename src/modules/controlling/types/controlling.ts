import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface CostCenter extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  manager: string;
  totalCost: number;
  budget: number;
  variance: number;
  status: 'active' | 'inactive';
}

export interface CostAllocation extends AuditableEntity {
  costCenterId: string;
  amount: number;
  category: string;
  date: Date;
  description: string;
}

export interface ProfitCenter extends AuditableEntity {
  code: string;
  name: LocalizedContent;
  revenue: number;
  costs: number;
  profit: number;
  status: 'active' | 'inactive';
}

export interface ProductCost extends AuditableEntity {
  productId: string;
  materialCost: number;
  laborCost: number;
  overheadCost: number;
  totalCost: number;
  period: string;
}

export interface ActivityCost extends AuditableEntity {
  activityId: string;
  name: LocalizedContent;
  costDriver: string;
  rate: number;
  totalCost: number;
  allocatedCost: number;
}