// src/hooks/useItems.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../services/api';
import type { Item } from '../types';

export const ITEMS_QUERY_KEY = ['items'];

// 1. Hook para obtener el listado de patinetas
export function useItems() {
  return useQuery({
    queryKey: ITEMS_QUERY_KEY,
    queryFn: async (): Promise<Item[]> => {
      const { data } = await apiClient.get('/posts');
      return data.slice(0, 8).map((post: any, index: number) => ({
        id: String(post.id),
        name: post.title.length < 25 ? post.title : `E-Scooter Urban Pro #${post.id}`,
        location: `Punto de Alquiler #${(index % 4) + 1}`,
        pricePerMin: 400 + index * 30,
        battery: Math.max(40, 100 - index * 6),
        speed: '30 km/h',
        autonomy: '40 km',
        urlimg: 'https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?w=500',
        description: post.body ?? 'Patineta eléctrica disponible para alquiler urbano.',
      }));
    },
  });
}

// 2. Hook para obtener el detalle por ID
export function useItemById(id: string | number) {
  return useQuery({
    queryKey: ['items', String(id)],
    queryFn: async (): Promise<Item> => {
      const { data } = await apiClient.get(`/posts/${id}`);
      return {
        id: String(data.id),
        name: `E-Scooter Urban Pro #${data.id}`,
        location: 'Zona de Cobertura Principal',
        pricePerMin: 500,
        battery: 90,
        speed: '32 km/h',
        autonomy: '40 km',
        urlimg: 'https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?w=500',
        description: data.body ?? 'Vehículo eléctrico de alta eficiencia para movilidad sostenible.',
      };
    },
    enabled: !!id,
  });
}

// 3. Hook de creación con persistencia en la caché de React Query
export function useCreateItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newItem: Omit<Item, 'id'>) => {
      try {
        const { data } = await apiClient.post('/posts', newItem);
        return {
          ...newItem,
          id: String(data.id ?? Date.now()),
        } as Item;
      } catch (error) {
        // Si la API falla, creamos el objeto localmente para no romper la UX
        return {
          ...newItem,
          id: String(Date.now()),
        } as Item;
      }
    },
    onSuccess: (newScooter) => {
      // Forzamos la inyección de la nueva patineta al inicio de la lista en memoria
      queryClient.setQueryData<Item[]>(ITEMS_QUERY_KEY, (oldItems) => {
        if (!oldItems) return [newScooter];
        return [newScooter, ...oldItems];
      });
    },
  });
}