import { format, formatDistance } from 'date-fns';
import { arIQ } from 'date-fns/locale';
import { APP_CONFIG } from '../config/constants';

export const formatDate = (date: Date): string => {
  return format(date, APP_CONFIG.DATE_FORMAT, { locale: arIQ });
};

export const formatRelativeTime = (date: Date): string => {
  return formatDistance(date, new Date(), { 
    locale: arIQ,
    addSuffix: true 
  });
};

export const formatHijriDate = (date: Date): string => {
  // Implementation for Hijri calendar conversion
  // This would use a proper Hijri calendar library in production
  return 'التاريخ الهجري';
};