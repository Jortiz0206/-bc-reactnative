// src/theme.ts

export const COLORS = {
  // Fondos y Superficies
  background: '#0d1117',
  surface: '#161b22',
  card: '#161b22',
  border: '#30363d',

  // 🌸 Paleta Rosa Neón
  primary: '#ff69b4',       // Hot Pink para botones y destacados
  accent: '#ff1493',        // Rosa Intenso para precios, selecciones e íconos activos
  accentLight: '#ffb6c1',   // Rosa claro suave
  
  // Textos
  textPrimary: '#ffffff',
  textSecondary: '#f472b6', // Rosa suave para ubicaciones y etiquetas
  textMuted: '#8b949e',

  // Estado
  error: '#f85149',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16, // Incluido para solucionar el error de TypeScript en HomeScreen
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const RADIUS = {
  sm: 6,
  md: 12,
  lg: 16,
  full: 9999,
};

export const TYPOGRAPHY = {
  h1: { fontSize: 24, fontWeight: 'bold' as const },
  h2: { fontSize: 20, fontWeight: 'bold' as const },
  h3: { fontSize: 18, fontWeight: 'bold' as const },
  body: { fontSize: 14, fontWeight: 'normal' as const },
  caption: { fontSize: 12, fontWeight: 'normal' as const },
  label: { fontSize: 11, fontWeight: '600' as const },
};