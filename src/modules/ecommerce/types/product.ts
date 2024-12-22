```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Product extends AuditableEntity {
  sku: string;
  name: LocalizedContent;
  description: LocalizedContent;
  category: ProductCategory;
  type: ProductType;
  brand?: string;
  pricing: {
    basePrice: number;
    salePrice?: number;
    currency: string;
    taxRate: number;
    discounts?: Discount[];
  };
  inventory: {
    quantity: number;
    minStock: number;
    maxStock: number;
    reservedQuantity: number;
    warehouseLocation?: string;
  };
  specifications: ProductSpecification[];
  media: {
    images: string[];
    videos?: string[];
    documents?: string[];
  };
  shipping: {
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
      unit: string;
    };
    freeShipping: boolean;
    restrictions?: string[];
  };
  seo: {
    metaTitle: LocalizedContent;
    metaDescription: LocalizedContent;
    keywords: string[];
    slug: string;
  };
  status: ProductStatus;
  ratings: {
    average: number;
    count: number;
    reviews: ProductReview[];
  };
}

export interface ProductSpecification {
  name: LocalizedContent;
  value: string;
  unit?: string;
  group?: string;
  sortOrder: number;
}

export interface Discount {
  type: DiscountType;
  value: number;
  startDate: Date;
  endDate: Date;
  minQuantity?: number;
  maxQuantity?: number;
  customerGroups?: string[];
}

export interface ProductReview {
  id: string;
  customerId: string;
  rating: number;
  title?: string;
  comment?: string;
  images?: string[];
  verified: boolean;
  createdAt: Date;
  status: ReviewStatus;
}

export type ProductCategory = 
  | 'electronics' 
  | 'clothing' 
  | 'home' 
  | 'beauty' 
  | 'food';

export type ProductType = 
  | 'physical' 
  | 'digital' 
  | 'service' 
  | 'subscription';

export type ProductStatus = 
  | 'active' 
  | 'draft' 
  | 'out_of_stock' 
  | 'discontinued';

export type DiscountType = 
  | 'percentage' 
  | 'fixed' 
  | 'buy_x_get_y' 
  | 'bundle';

export type ReviewStatus = 
  | 'pending' 
  | 'approved' 
  | 'rejected' 
  | 'hidden';
```