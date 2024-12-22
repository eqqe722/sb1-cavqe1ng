```typescript
import { Recipe, Ingredient } from '../types/recipe';
import { KitchenOrder } from '../types/kitchen';
import { FoodItem } from '../types/inventory';

export const calculateRecipeCost = (
  recipe: Recipe
): number => {
  return recipe.ingredients.reduce((total, ingredient) => {
    return total + (ingredient.quantity * ingredient.costPerUnit);
  }, 0);
};

export const calculateProfitMargin = (
  cost: number,
  sellingPrice: number
): number => {
  return ((sellingPrice - cost) / sellingPrice) * 100;
};

export const calculateOrderPreparationTime = (
  order: KitchenOrder
): number => {
  // Base preparation time
  let totalTime = 0;

  // Add prep time for each item
  order.items.forEach(item => {
    totalTime += item.quantity * 10; // Base 10 minutes per item
  });

  // Adjust for order size
  if (order.items.length > 5) {
    totalTime *= 1.2; // 20% more time for large orders
  }

  // Adjust for priority
  if (order.priority === 'urgent') {
    totalTime *= 0.8; // 20% faster for urgent orders
  }

  return Math.ceil(totalTime);
};

export const calculateInventoryValue = (
  items: FoodItem[]
): number => {
  return items.reduce((total, item) => {
    return total + (item.stock.current * item.cost.average);
  }, 0);
};

export const calculateWastagePercentage = (
  wastedQuantity: number,
  totalQuantity: number
): number => {
  return (wastedQuantity / totalQuantity) * 100;
};
```