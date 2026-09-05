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
  Detail: {
    id?: string;
    name?: string;
    item?: Item;
  };
  Create: undefined;
};

// Alias de compatibilidad si algún componente importa RootStackParamList
export type RootStackParamList = HomeStackParamList;