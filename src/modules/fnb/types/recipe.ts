```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Recipe extends AuditableEntity {
  recipeNumber: string;
  name: LocalizedContent;
  category: RecipeCategory;
  cuisine: CuisineType;
  type: DishType;
  ingredients: Ingredient[];
  preparation: PreparationStep[];
  nutrition: NutritionInfo;
  costInfo: CostInfo;
  images: string[];
  status: RecipeStatus;
  allergens: string[];
  servingSize: {
    quantity: number;
    unit: string;
  };
}

export interface Ingredient {
  itemId: string;
  name: LocalizedContent;
  quantity: number;
  unit: string;
  notes?: string;
  substitutes?: string[];
  isOptional: boolean;
  costPerUnit: number;
}

export interface PreparationStep {
  sequence: number;
  description: LocalizedContent;
  duration: number; // minutes
  temperature?: {
    value: number;
    unit: 'C' | 'F';
  };
  equipment?: string[];
  criticalControl?: boolean;
  images?: string[];
}

export interface NutritionInfo {
  servingSize: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fats: number;
  fiber: number;
  sodium: number;
}

export interface CostInfo {
  ingredientCost: number;
  laborCost: number;
  overheadCost: number;
  totalCost: number;
  suggestedPrice: number;
  margin: number;
  currency: string;
}

export type RecipeCategory = 
  | 'appetizer' 
  | 'main_course' 
  | 'dessert' 
  | 'beverage' 
  | 'side_dish';

export type CuisineType = 
  | 'iraqi' 
  | 'levantine' 
  | 'persian' 
  | 'turkish' 
  | 'international';

export type DishType = 
  | 'vegetarian' 
  | 'meat' 
  | 'seafood' 
  | 'vegan' 
  | 'halal';

export type RecipeStatus = 
  | 'draft' 
  | 'testing' 
  | 'approved' 
  | 'archived';
```