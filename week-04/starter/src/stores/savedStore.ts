// src/stores/savedStore.ts
// Store Zustand para gestionar los ítems guardados/favoritos.

import { create } from 'zustand';
import type { Item } from '../types';

// ============================================================
// INTERFACE DEL STORE
// ============================================================

interface SavedStore {
  // Lista de patinetas guardadas/favoritas
  items: Item[];

  // Agrega una patineta a la lista evitando duplicados
  addItem: (item: Item) => void;

  // Elimina una patineta por su ID
  removeItem: (id: string) => void;

  // Vacía toda la lista de favoritos
  clearAll: () => void;

  // Verifica si una patineta específica ya está guardada
  isItemSaved: (id: string) => boolean;
}

// ============================================================
// CREAR EL STORE
// ============================================================

export const useSavedStore = create<SavedStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    const alreadySaved = get().items.some((i) => i.id === item.id);
    if (alreadySaved) return;

    set((state) => ({
      items: [item, ...state.items],
    }));
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  clearAll: () => {
    set({ items: [] });
  },

  isItemSaved: (id) => {
    return get().items.some((i) => i.id === id);
  },
}));