```typescript
import { KnowledgeDocument } from '../types/document';

export interface SearchOptions {
  query: string;
  filters?: {
    type?: string[];
    category?: string[];
    department?: string[];
    language?: 'ar' | 'en' | 'both';
  };
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
}

export const searchDocuments = (
  documents: KnowledgeDocument[],
  options: SearchOptions
): KnowledgeDocument[] => {
  let results = [...documents];

  // Apply text search
  if (options.query) {
    const searchTerms = options.query.toLowerCase().split(' ');
    results = results.filter(doc => 
      searchTerms.every(term => 
        doc.title.ar.toLowerCase().includes(term) ||
        doc.title.en?.toLowerCase().includes(term) ||
        doc.content.body.ar.toLowerCase().includes(term) ||
        doc.content.body.en?.toLowerCase().includes(term) ||
        doc.content.keywords.some(keyword => 
          keyword.toLowerCase().includes(term)
        )
      )
    );
  }

  // Apply filters
  if (options.filters) {
    if (options.filters.type) {
      results = results.filter(doc => 
        options.filters?.type?.includes(doc.type)
      );
    }
    if (options.filters.category) {
      results = results.filter(doc => 
        options.filters?.category?.includes(doc.category)
      );
    }
    if (options.filters.department) {
      results = results.filter(doc => 
        options.filters?.department?.includes(doc.metadata.department)
      );
    }
  }

  // Apply sorting
  if (options.sort) {
    results.sort((a, b) => {
      const aValue = getNestedValue(a, options.sort!.field);
      const bValue = getNestedValue(b, options.sort!.field);
      return options.sort!.order === 'asc' ? 
        compare(aValue, bValue) : 
        compare(bValue, aValue);
    });
  }

  return results;
};

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
};

const compare = (a: any, b: any): number => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b, 'ar');
  }
  return a - b;
};
```