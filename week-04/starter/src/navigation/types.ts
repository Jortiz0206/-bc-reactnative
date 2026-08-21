// src/navigation/types.ts
import type { Item } from '../types';

// ============================================
// TAB NAVIGATOR — pantallas de nivel raíz
// ============================================
export type RootTabParamList = {
  Home: undefined;
  Saved: undefined;
};

// ============================================
// STACK NAVIGATOR — anidado en pestaña Home
// ============================================
export type HomeStackParamList = {
  HomeList: undefined;
  HomeDetail: { name: string; item: Item };
};