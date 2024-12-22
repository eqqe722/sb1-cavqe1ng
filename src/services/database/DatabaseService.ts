```typescript
import { AuditableEntity, LocalizedContent } from '../../types/database/common';

// Database Service Interface
export interface DatabaseService {
  // Generic CRUD Operations
  create<T extends AuditableEntity>(collection: string, data: Partial<T>): Promise<T>;
  findById<T extends AuditableEntity>(collection: string, id: string): Promise<T | null>;
  findMany<T extends AuditableEntity>(collection: string, query: QueryParams): Promise<T[]>;
  update<T extends AuditableEntity>(collection: string, id: string, data: Partial<T>): Promise<T>;
  delete(collection: string, id: string): Promise<boolean>;
  
  // Specialized Operations
  findWithRelations<T extends AuditableEntity>(
    collection: string,
    id: string,
    relations: string[]
  ): Promise<T | null>;
  
  aggregate(collection: string, pipeline: any[]): Promise<any[]>;
  
  // Transaction Support
  beginTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  rollbackTransaction(): Promise<void>;
}

// Query Parameters Interface
export interface QueryParams {
  filters?: Record<string, any>;
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
  pagination?: {
    page: number;
    limit: number;
  };
  search?: {
    fields: string[];
    query: string;
  };
}

// Database Configuration
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  options?: Record<string, any>;
}
```