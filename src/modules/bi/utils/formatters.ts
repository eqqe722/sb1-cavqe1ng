import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

export const formatMetric = (
  value: number,
  format: string,
  locale: string = 'ar-IQ'
): string => {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'IQD'
      }).format(value);
    
    case 'percentage':
      return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: 1
      }).format(value / 100);
    
    case 'number':
      return new Intl.NumberFormat(locale).format(value);
    
    default:
      return value.toString();
  }
};

export const formatDateRange = (
  startDate: Date,
  endDate: Date
): string => {
  return `${format(startDate, 'dd MMM yyyy', { locale: ar })} - ${format(endDate, 'dd MMM yyyy', { locale: ar })}`;
};

export const abbreviateNumber = (
  value: number,
  locale: string = 'ar-IQ'
): string => {
  const suffixes = ['', 'ألف', 'مليون', 'مليار'];
  let suffixIndex = 0;

  while (value >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000;
    suffixIndex++;
  }

  return `${new Intl.NumberFormat(locale, {
    maximumFractionDigits: 1
  }).format(value)} ${suffixes[suffixIndex]}`;
};