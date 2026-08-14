// src/navigation/types.ts
import type { Item } from '@/types';

// ============================================
// TAB NAVIGATOR — pantallas de nivel raíz
// ============================================
export type RootTabParamList = {
  Home: undefined;
  Favorites: undefined;
};

// ============================================
// STACK NAVIGATOR — anidado en pestaña Home
// ============================================
export type HomeStackParamList = {
  HomeList: undefined;
  // Al usar Item directamente, garantizas que HomeScreen y DetailScreen 
  // manejen exactamente los mismos campos sin discrepancias
  HomeDetail: Item; 
};