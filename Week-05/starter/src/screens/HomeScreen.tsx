// src/screens/HomeScreen.tsx
// Pantalla principal: lista de patinetas eléctricas cargadas desde la API con TanStack Query v5.

import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ListRenderItem,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useItems } from '../hooks/useItems';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { Item } from '../types';
import type { HomeStackParamList } from '../navigation/types';

type HomeNavProp = NativeStackNavigationProp<HomeStackParamList>;

// ============================================================
// SUB-COMPONENTE: ItemCard (Tarjeta de Patineta)
// ============================================================

interface ItemCardProps {
  item: Item;
  onPress: () => void;
}

function ItemCard({ item, onPress }: ItemCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.7 }]}
      onPress={onPress}
      testID={`item-card-${item.id}`}
    >
      <View style={styles.cardAvatar}>
        <Image
          source={{ uri: item.urlimg }}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.cardLocation} numberOfLines={1}>
          📍 {item.location ?? 'Punto de Alquiler'}
        </Text>
        <View style={styles.badgeRow}>
          <Text style={styles.cardPrice}>${item.pricePerMin ?? 450} / min</Text>
          <Text style={styles.cardBattery}>🔋 {item.battery ?? 100}%</Text>
        </View>
      </View>

      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

// ============================================================
// PANTALLA: HomeScreen
// ============================================================

export function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<HomeNavProp>();

  // Consumo real de la API con TanStack Query
  const { data, isLoading, isError, isFetching, refetch, error } = useItems();

  // ── 1. Estado de Carga Inicial (First Fetch) ──────────────
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.accent} />
        <Text style={styles.loadingText}>Cargando patinetas...</Text>
      </View>
    );
  }

  // ── 2. Estado de Error de Red ──────────────────────────────
  if (isError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>❌ No se pudo cargar la lista de patinetas</Text>
        <Text style={styles.errorDetail}>{(error as Error)?.message ?? 'Error de conexión'}</Text>
        <Pressable style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <ItemCard
      item={item}
      onPress={() =>
        (navigation as any).navigate('Detail', {
          item,
          id: String(item.id),
          name: String(item.name),
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data ?? []}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        
        // ── 3. Pull-to-refresh ───────────────────────────────
        onRefresh={refetch}
        refreshing={isFetching && !isLoading}
        
        // ── 4. Estado de Lista Vacía (Empty State) ───────────
        ListEmptyComponent={
          <View style={styles.centered}>
            <Text style={styles.emptyText}>No hay patinetas disponibles en este momento.</Text>
          </View>
        }
        ListHeaderComponent={
          data && data.length > 0 ? (
            <Text style={styles.countLabel}>
              {data.length} patineta{data.length !== 1 ? 's' : ''} disponible{data.length !== 1 ? 's' : ''}
            </Text>
          ) : null
        }
      />
    </View>
  );
}

// ============================================================
// ESTILOS
// ============================================================

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { padding: SPACING.md, paddingBottom: SPACING.xl },
  separator: { height: SPACING.sm },
  countLabel: {
    ...(TYPOGRAPHY as any)?.label,
    color: COLORS.textSecondary ?? '#f472b6',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: SPACING.sm,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: (COLORS as any)?.card ?? COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.md,
  },
  cardAvatar: {
    width: 60,
    height: 60,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: { flex: 1, gap: SPACING.xs },
  cardTitle: {
    ...(TYPOGRAPHY as any)?.body,
    fontWeight: '600',
    color: COLORS.textPrimary ?? '#FFFFFF',
  },
  cardLocation: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS.textSecondary ?? '#f472b6',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginTop: 2,
  },
  cardPrice: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS.accent,
    fontWeight: 'bold',
  },
  cardBattery: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS.textMuted,
  },
  chevron: {
    ...(TYPOGRAPHY as any)?.h2,
    color: COLORS.textMuted,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    padding: SPACING.lg,
  },
  loadingText: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS.textSecondary ?? '#f472b6',
  },
  errorText: {
    ...(TYPOGRAPHY as any)?.h3,
    color: COLORS.error,
    textAlign: 'center',
  },
  errorDetail: {
    ...(TYPOGRAPHY as any)?.caption,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  retryButtonText: {
    ...(TYPOGRAPHY as any)?.body,
    color: COLORS.background,
    fontWeight: '600',
  },
  emptyText: {
    ...(TYPOGRAPHY as any)?.body,
    color: COLORS.textSecondary ?? '#f472b6',
    textAlign: 'center',
  },
});