export const APP_CONFIG = {
  LOCALE: 'ar-IQ',
  CURRENCY: 'IQD',
  TIMEZONE: 'Asia/Baghdad',
  DATE_FORMAT: 'dd/MM/yyyy',
  FISCAL_YEAR_START: '01/01', // Iraqi fiscal year starts January 1st
};

export const DOCUMENT_TYPES = {
  INVOICE: 'فاتورة',
  RECEIPT: 'وصل قبض',
  PURCHASE_ORDER: 'طلب شراء',
  DELIVERY_NOTE: 'مذكرة تسليم',
  CONTRACT: 'عقد',
};

export const TAX_RATES = {
  SALES_TAX: 0.15, // 15% standard Iraqi sales tax
  INCOME_TAX: 0.15, // 15% corporate income tax
  SOCIAL_SECURITY: 0.12, // 12% social security contribution
};

export const EMPLOYEE_TYPES = {
  PERMANENT: 'دائمي',
  CONTRACT: 'عقد',
  TEMPORARY: 'مؤقت',
};