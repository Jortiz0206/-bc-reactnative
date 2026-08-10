// ============================================
// THEME — Semana 02
// Paleta de estilo premium para patinetas eléctricas.
// ============================================

export const COLORS = {
  background: '#fff7fb',
  surface: '#ffffff',
  surfaceAlt: '#ffe7ef',

  border: '#f3d6e3',
  borderLight: '#f8e7ee',

  textPrimary: '#222222',
  textSecondary: '#6f6470',
  textMuted: '#9a8793',

  accent: '#d81b60',
  accentDim: '#ffe7ef',

  success: '#2ca24c',
  warning: '#ff9f1c',
  error: '#e63946',
  info: '#4c9aff',
} as const;

export const TYPOGRAPHY = {
  size: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    xxl: 30,
  },
  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const RADIUS = {
  sm: 6,
  md: 8,
  lg: 12,
  full: 9999,
} as const;