// src/screens/DetailScreen.tsx
// Pantalla de detalle estilizada con tema Rosa Neón y filtrado dinámico de imágenes HD.

import React from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRoute, type RouteProp } from '@react-navigation/native';

import { useItemById } from '../hooks/useItems';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { HomeStackParamList } from '../navigation/types';

type DetailRouteProp = RouteProp<HomeStackParamList, 'Detail'>;

// ============================================================
// GALERÍA DE PATINETAS HD Y FILTRADO DE IMÁGENES MOCK
// ============================================================
const SCOOTER_IMAGES: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?w=800',
  '2': 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800',
  '3': 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800',
  '4': 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800',
  default: 'https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?w=800',
};

function getScooterImage(id: string, customUrl?: string): string {
  // Ignora imágenes de robots/mocks de APIs genéricas para asegurar fotos de patinetas reales
  if (
    customUrl &&
    !customUrl.includes('robohash') &&
    !customUrl.includes('placeholder') &&
    !customUrl.includes('bender')
  ) {
    return customUrl;
  }
  // Retorna una foto real asignada según el ID o un módulo incremental
  const indexKey = String((Math.abs(Number(id)) % 4) + 1);
  return SCOOTER_IMAGES[id] ?? SCOOTER_IMAGES[indexKey] ?? SCOOTER_IMAGES.default;
}

// ============================================================
// SUB-COMPONENTE: SpecCard (Tarjeta de Especificaciones)
// ============================================================
function SpecCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string | number;
}): React.JSX.Element {
  return (
    <View style={styles.specCard}>
      <Text style={styles.specIcon}>{icon}</Text>
      <Text style={styles.specLabel}>{label}</Text>
      <Text style={styles.specValue}>{value}</Text>
    </View>
  );
}

// ============================================================
// PANTALLA: DetailScreen
// ============================================================
export function DetailScreen(): React.JSX.Element {
  const route = useRoute<DetailRouteProp>();
  const navItem = route.params?.item;
  const id = String(navItem?.id ?? route.params?.id ?? '1');
  const fallbackName = navItem?.name ?? route.params?.name ?? 'E-Scooter Urban Pro';

  const { data: fetchedItem, isLoading, isError, refetch } = useItemById(id);
  const item = fetchedItem ?? navItem;

  // Filtrado de la imagen para asegurar una patineta HD
  const imageUrl = getScooterImage(id, item?.urlimg);

  // ── 1. Estado de Carga Initial ──────────────────────────────
  if (isLoading && !item) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.accent} />
        <Text style={styles.loadingText}>Cargando detalles de tu scooter...</Text>
      </View>
    );
  }

  // ── 2. Estado de Error ──────────────────────────────────────
  if (isError && !item) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>❌ No pudimos obtener la información del vehículo</Text>
        <Pressable style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Visual de Impacto (Hero Header) */}
      <View style={styles.heroWrapper}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.badgeTag}>
          <Text style={styles.badgeText}>✨ Batería {item?.battery ?? 100}%</Text>
        </View>
      </View>

      {/* Información Principal y Precio */}
      <View style={styles.headerCard}>
        <Text style={styles.title}>{item?.name ?? fallbackName}</Text>
        <Text style={styles.location}>📍 {item?.location ?? 'Punto de Alquiler Central'}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceNumber}>${item?.pricePerMin ?? 450}</Text>
          <Text style={styles.priceUnit}> / min</Text>
        </View>
      </View>

      {/* Grid de Especificaciones Técnicas */}
      <Text style={styles.sectionTitle}>ESPECIFICACIONES TÉCNICAS</Text>
      <View style={styles.gridContainer}>
        <SpecCard icon="🔋" label="Batería" value={`${item?.battery ?? 100}%`} />
        <SpecCard icon="⚡" label="Velocidad" value={item?.speed ?? '30 km/h'} />
        <SpecCard icon="🛵" label="Autonomía" value={item?.autonomy ?? '40 km'} />
        <SpecCard icon="🆔" label="ID Vehículo" value={`#${id}`} />
      </View>

      {/* Bloque de Descripción */}
      <View style={styles.descriptionCard}>
        <Text style={styles.sectionTitle}>DESCRIPCIÓN</Text>
        <Text style={styles.descriptionText}>
          {item?.description && !item.description.includes('fuga et accusamus')
            ? item.description
            : 'Patineta eléctrica de alto rendimiento diseñada para la movilidad urbana rápida, segura y sostenible.'}
        </Text>
      </View>

      {/* Accionamiento Principal */}
      <Pressable style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Reservar Scooter Ahora</Text>
      </Pressable>
    </ScrollView>
  );
}

// ============================================================
// ESTILOS DE LA PANTALLA
// ============================================================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, gap: SPACING.md, paddingBottom: SPACING.xxl },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  loadingText: { ...(TYPOGRAPHY as any)?.body, color: COLORS.accent },
  heroWrapper: {
    width: '100%',
    height: 240,
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: COLORS.accent,
    position: 'relative',
    backgroundColor: COLORS.surface,
  },
  heroImage: { width: '100%', height: '100%' },
  badgeTag: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(13, 17, 23, 0.85)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  badgeText: { fontSize: 12, fontWeight: '700', color: COLORS.accent },
  headerCard: {
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 4,
  },
  title: {
    ...(TYPOGRAPHY as any)?.h2,
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center',
  },
  location: {
    ...(TYPOGRAPHY as any)?.body,
    color: '#f472b6',
    marginBottom: 6,
  },
  priceContainer: { flexDirection: 'row', alignItems: 'baseline' },
  priceNumber: { fontSize: 28, fontWeight: '800', color: COLORS.accent },
  priceUnit: { fontSize: 14, color: COLORS.textMuted },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#f472b6',
    letterSpacing: 1.2,
    marginTop: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    justifyContent: 'space-between',
  },
  specCard: {
    width: '48%',
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    gap: 2,
  },
  specIcon: { fontSize: 22, marginBottom: 2 },
  specLabel: { fontSize: 12, color: COLORS.textMuted },
  specValue: { fontSize: 15, fontWeight: '700', color: '#FFFFFF' },
  descriptionCard: {
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.xs,
  },
  descriptionText: {
    ...(TYPOGRAPHY as any)?.body,
    color: '#E2E8F0',
    lineHeight: 22,
  },
  actionButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    marginTop: SPACING.xs,
  },
  actionButtonText: {
    color: COLORS.background,
    fontWeight: '800',
    fontSize: 16,
  },
  errorText: { color: COLORS.error, textAlign: 'center' },
  retryButton: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.sm,
  },
  retryButtonText: { color: COLORS.background, fontWeight: '700' },
});