// Pantalla de detalle — recibe los datos de la patineta seleccionada vía params.

import React from 'react';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '@/theme';
import type { HomeStackParamList } from '@/navigation/types';

// Tipo del route hook para leer los params tipados de esta pantalla
type DetailScreenRouteProp = RouteProp<HomeStackParamList, 'HomeDetail'>;

export function DetailScreen() {
  // useRoute devuelve los params pasados desde HomeScreen
  const route = useRoute<DetailScreenRouteProp>();
  const {
    id,
    name,
    description,
    batteryLevel,
    maxSpeed,
    pricePerMinute,
    status,
    location,
    autonomy,
    urlimg,
  } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Imagen destacada de la patineta */}
      {urlimg ? (
        <Image
          source={{ uri: urlimg }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text style={styles.placeholderIcon}>🛴</Text>
        </View>
      )}

      {/* Título de la patineta */}
      <Text style={styles.name}>{name}</Text>

      {/* Badge con el ID */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>ID: {id}</Text>
      </View>

      {/* Detalles del dominio de patinetas eléctricas */}
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Descripción</Text>
        <Text style={styles.fieldValue}>{description}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Nivel de Batería</Text>
        <Text style={styles.fieldValue}>⚡ {batteryLevel}%</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Velocidad Máxima</Text>
        <Text style={styles.fieldValue}>{maxSpeed}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Autonomía</Text>
        <Text style={styles.fieldValue}>{autonomy}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Tarifa por Minuto</Text>
        <Text style={styles.fieldValue}>${pricePerMinute} COP</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Estado Actual</Text>
        <Text style={styles.fieldValue}>{status.replace('_', ' ')}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Ubicación</Text>
        <Text style={styles.fieldValue}>📍 {location}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.base,
    gap: SPACING.md,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.surfaceAlt,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 48,
  },
  name: {
    fontSize: TYPOGRAPHY.size.xl,
    fontWeight: TYPOGRAPHY.weight.bold,
    color: COLORS.textPrimary,
    marginTop: SPACING.xs,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accentDim,
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    marginBottom: SPACING.xs,
  },
  badgeText: {
    fontSize: TYPOGRAPHY.size.xs,
    fontWeight: TYPOGRAPHY.weight.medium,
    color: COLORS.accent,
  },
  field: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.base,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  fieldLabel: {
    fontSize: TYPOGRAPHY.size.sm,
    fontWeight: TYPOGRAPHY.weight.medium,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  fieldValue: {
    fontSize: TYPOGRAPHY.size.base,
    color: COLORS.textPrimary,
  },
});