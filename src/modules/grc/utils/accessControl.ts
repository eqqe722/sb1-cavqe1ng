```typescript
import { AccessPolicy, AccessRule, AccessCondition } from '../types/access';

export const evaluateAccess = (
  policy: AccessPolicy,
  resource: string,
  action: string,
  context: Record<string, any>
): boolean => {
  const applicableRules = policy.rules
    .filter(rule => rule.resource === resource && rule.action === action)
    .sort((a, b) => b.priority - a.priority);

  if (applicableRules.length === 0) return false;

  const rule = applicableRules[0];
  return evaluateRule(rule, context);
};

export const evaluateRule = (
  rule: AccessRule,
  context: Record<string, any>
): boolean => {
  if (!rule.conditions || rule.conditions.length === 0) {
    return rule.effect === 'allow';
  }

  const conditionsMet = rule.conditions.every(condition =>
    evaluateCondition(condition, context)
  );

  return conditionsMet ? rule.effect === 'allow' : false;
};

export const evaluateCondition = (
  condition: AccessCondition,
  context: Record<string, any>
): boolean => {
  const value = context[condition.attribute];
  
  switch (condition.operator) {
    case 'equals':
      return value === condition.value;
    case 'not_equals':
      return value !== condition.value;
    case 'contains':
      return String(value).includes(String(condition.value));
    case 'greater_than':
      return Number(value) > Number(condition.value);
    case 'less_than':
      return Number(value) < Number(condition.value);
    default:
      return false;
  }
};

export const validateAccessRequest = (
  request: any
): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!request.resource) {
    errors.push('المورد المطلوب مطلوب');
  }

  if (!request.action) {
    errors.push('نوع الصلاحية مطلوب');
  }

  if (!request.justification) {
    errors.push('مبرر الطلب مطلوب');
  }

  if (request.duration) {
    const { startDate, endDate } = request.duration;
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      errors.push('تاريخ البداية يجب أن يكون قبل تاريخ النهاية');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
};
```