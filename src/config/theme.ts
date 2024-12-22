import { createTheme } from './themeUtils';

export const theme = createTheme({
  direction: 'rtl',
  fonts: {
    primary: 'Noto Kufi Arabic',
    secondary: 'Arial',
  },
  colors: {
    primary: {
      main: '#1F2937',
      light: '#374151',
      dark: '#111827',
    },
    secondary: {
      main: '#059669',
      light: '#34D399',
      dark: '#047857',
    },
    background: {
      default: '#F3F4F6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
  },
  spacing: {
    unit: 8,
  },
});