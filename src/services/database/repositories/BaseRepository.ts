```typescript
import { DatabaseService } from '../DatabaseService';
import { AuditableEntity } from '../../../types/database/common';

export class BaseRepository<T extends AuditableEntity> {
  protected db: DatabaseService;
  protected collection: string;

  constructor(db: DatabaseService, collection: string) {
    this.db = db;
    this.collection = collection;
  }

  async create(data: Partial<T>): Promise<T> {
    return this.db.create<T>(this.collection, data);
  }

  async findById(id: string): Promise<T | null> {
    return this.db.findById<T>(this.collection, id);
  }

  async findMany(query: any = {}): Promise<T[]> {
    return this.db.findMany<T>(this.collection, query);
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return this.db.update<T>(this.collection, id, data);
  }

  async delete(id: string): Promise<boolean> {
    return this.db.delete(this.collection, id);
  }

  protected async withTransaction<R>(
    operation: () => Promise<R>
  ): Promise<R> {
    try {
      await this.db.beginTransaction();
      const result = await operation();
      await this.db.commitTransaction();
      return result;
    } catch (error) {
      await this.db.rollbackTransaction();
      throw error;
    }
  }
}
```