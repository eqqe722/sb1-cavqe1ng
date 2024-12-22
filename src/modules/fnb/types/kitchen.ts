```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface KitchenOrder extends AuditableEntity {
  orderNumber: string;
  type: OrderType;
  status: OrderStatus;
  priority: PriorityLevel;
  items: OrderItem[];
  station: string;
  prepTime: number;
  startTime?: Date;
  completionTime?: Date;
  notes?: string;
  modifiers: OrderModifier[];
}

export interface OrderItem {
  recipeId: string;
  name: LocalizedContent;
  quantity: number;
  status: ItemStatus;
  specialInstructions?: string[];
  allergenAlert?: string[];
}

export interface OrderModifier {
  type: ModifierType;
  description: LocalizedContent;
  price?: number;
}

export interface KitchenStation {
  id: string;
  name: LocalizedContent;
  type: StationType;
  equipment: Equipment[];
  staff: StaffAssignment[];
  status: StationStatus;
  capacity: {
    maxOrders: number;
    currentLoad: number;
  };
}

export interface Equipment {
  id: string;
  name: LocalizedContent;
  type: string;
  status: 'operational' | 'maintenance' | 'offline';
  lastMaintenance?: Date;
  nextMaintenance: Date;
}

export interface StaffAssignment {
  employeeId: string;
  role: StaffRole;
  shift: string;
  specialties: string[];
}

export type OrderType = 
  | 'dine_in' 
  | 'takeaway' 
  | 'delivery' 
  | 'catering';

export type OrderStatus = 
  | 'pending' 
  | 'preparing' 
  | 'ready' 
  | 'delivered' 
  | 'cancelled';

export type ItemStatus = 
  | 'queued' 
  | 'in_progress' 
  | 'completed' 
  | 'on_hold';

export type PriorityLevel = 
  | 'urgent' 
  | 'high' 
  | 'normal' 
  | 'low';

export type ModifierType = 
  | 'add' 
  | 'remove' 
  | 'substitute' 
  | 'special_request';

export type StationType = 
  | 'hot_kitchen' 
  | 'cold_kitchen' 
  | 'grill' 
  | 'pastry';

export type StationStatus = 
  | 'operational' 
  | 'busy' 
  | 'closed' 
  | 'cleaning';

export type StaffRole = 
  | 'chef' 
  | 'sous_chef' 
  | 'line_cook' 
  | 'prep_cook';
```