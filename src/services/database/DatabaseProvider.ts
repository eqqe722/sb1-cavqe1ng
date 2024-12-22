```typescript
import { createContext, useContext } from 'react';
import { DatabaseService } from './DatabaseService';
import { SQLDatabaseService } from './implementations/SQLDatabaseService';

// Create database context
const DatabaseContext = createContext<DatabaseService | null>(null);

// Database configuration
const dbConfig = {
  host: import.meta.env.VITE_DB_HOST || 'localhost',
  port: parseInt(import.meta.env.VITE_DB_PORT || '3306'),
  database: import.meta.env.VITE_DB_NAME || 'erp_db',
  username: import.meta.env.VITE_DB_USER || 'root',
  password: import.meta.env.VITE_DB_PASSWORD || '',
  options: {
    connectionLimit: 10,
    timezone: 'Asia/Baghdad',
  }
};

// Initialize database service
export const databaseService = new SQLDatabaseService(dbConfig);

// Hook for accessing database service
export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};

// Database provider component
export const DatabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DatabaseContext.Provider value={databaseService}>
      {children}
    </DatabaseContext.Provider>
  );
};
```