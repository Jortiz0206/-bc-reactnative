// src/screens/SavedScreen.tsx
import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  type ListRenderItem,
} from 'react-native';

import { useSavedStore } from '../stores/savedStore';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { Item } from '../types';

// ============================================================
// SUB-COMPONENTE: SavedItem
// ============================================================

interface SavedItemProps {
  item: Item;
  onRemove: () => void;
}

function SavedItem({ item, onRemove }: SavedItemProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      {/* Reemplazamos la letra por el componente Image configurado en modo "contain" */}
      <Image
        source={{ uri: item?.urlimg }}
        style={styles.thumbnail}
        resizeMode="contain"
      />

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item?.name ?? 'Patineta'}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={1}>
          {item?.description ?? ''}
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.removeButton, pressed && { opacity: 0.6 }]}
        onPress={onRemove}
        accessibilityLabel={`Quitar ${item?.name ?? 'elemento'} de guardados`}
      >
        <Text style={styles.removeButtonText}>✕</Text>
      </Pressable>
    </View>
  );
}

// ============================================================
// PANTALLA: SavedScreen
// ============================================================

export function SavedScreen(): React.JSX.Element {
  const items = useSavedStore((state) => state.items);
  const removeItem = useSavedStore((state) => state.removeItem);
  const clearAll = useSavedStore((state) => state.clearAll);

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <SavedItem item={item} onRemove={() => removeItem(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          items.length > 0 ? (
            <View style={styles.header}>
              <Text style={styles.sectionLabel}>
                {items.length} guardado{items.length !== 1 ? 's' : ''}
              </Text>
              <Pressable onPress={clearAll} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Limpiar todo</Text>
              </Pressable>
            </View>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>☆</Text>
            <Text style={styles.emptyTitle}>Sin guardados aún</Text>
            <Text style={styles.emptySubtitle}>
              Ve a la lista principal y guarda tus ítems favoritos.
            </Text>
          </View>
        }
      />
    </View>
  );
}

// ============================================================
// ESTILOS
// ============================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS?.background ?? '#0d1117',
  },
  list: {
    padding: SPACING?.md ?? 12,
    paddingBottom: SPACING?.xl ?? 24,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING?.sm ?? 8,
  },
  sectionLabel: {
    ...(TYPOGRAPHY as any)?.label,
    color: COLORS?.textSecondary ?? '#888888',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  clearButton: {
    padding: SPACING?.xs ?? 4,
  },
  clearButtonText: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS?.error ?? '#f85149',
  },
  separator: {
    height: SPACING?.sm ?? 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: (COLORS as any)?.card ?? COLORS?.surface ?? '#161b22',
    borderRadius: RADIUS?.md ?? 12,
    padding: SPACING?.md ?? 12,
    borderWidth: 1,
    borderColor: COLORS?.border ?? '#2C2C2C',
    gap: SPACING?.md ?? 12,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: RADIUS?.sm ?? 6,
    backgroundColor: COLORS?.surface ?? '#21262d',
  },
  cardContent: {
    flex: 1,
    gap: SPACING?.xs ?? 4,
  },
  cardTitle: {
    ...(TYPOGRAPHY as any)?.body,
    color: COLORS?.textPrimary ?? '#FFFFFF',
    fontWeight: '600',
  },
  cardDescription: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS?.textSecondary ?? '#888888',
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: RADIUS?.full ?? 9999,
    backgroundColor: COLORS?.surface ?? '#21262d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS?.error ?? '#f85149',
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING?.xxl ?? 32,
    gap: SPACING?.md ?? 12,
  },
  emptyIcon: {
    fontSize: 52,
    color: COLORS?.textMuted ?? '#484f58',
  },
  emptyTitle: {
    ...(TYPOGRAPHY as any)?.h3,
    color: COLORS?.textSecondary ?? '#888888',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptySubtitle: {
    ...(TYPOGRAPHY as any)?.body,
    color: COLORS?.textMuted ?? '#484f58',
    textAlign: 'center',
    paddingHorizontal: SPACING?.lg ?? 20,
  },
});