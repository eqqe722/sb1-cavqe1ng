import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { APP_CONFIG } from '../config/constants';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ar-IQ', {
    style: 'currency',
    currency: APP_CONFIG.CURRENCY,
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return format(date, APP_CONFIG.DATE_FORMAT, { locale: ar });
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ar-IQ').format(num);
};