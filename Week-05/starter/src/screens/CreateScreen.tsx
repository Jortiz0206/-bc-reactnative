// src/screens/CreateScreen.tsx
// Pantalla modal para registrar una nueva patineta eléctrica.
// Conecta useCreateItem (useMutation) y retorna a la lista al completar.

import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useCreateItem } from '../hooks/useItems';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { HomeStackParamList } from '../navigation/types';

type CreateNavProp = NativeStackNavigationProp<HomeStackParamList, 'Create'>;

// ============================================================
// PANTALLA: CreateScreen
// ============================================================

export function CreateScreen(): React.JSX.Element {
  const navigation = useNavigation<CreateNavProp>();

  // Campos específicos del dominio: Patinetas Eléctricas
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [pricePerMin, setPricePerMin] = useState('');
  const [battery, setBattery] = useState('');
  const [description, setDescription] = useState('');

  // Hook de mutación TanStack Query
  const { mutate: createItem, isPending } = useCreateItem();

  function handleSubmit(): void {
    if (!name.trim()) return;

    createItem(
      {
        name: name.trim(),
        location: location.trim() || 'Zona Central',
        pricePerMin: pricePerMin ? Number(pricePerMin) : 450,
        battery: battery ? Number(battery) : 100,
        speed: '30 km/h',
        autonomy: '40 km',
        urlimg: 'https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?w=500',
        description: description.trim() || 'Patineta eléctrica disponible para alquiler urbano.',
      },
      {
        // Al completarse la mutación con éxito, regresamos a la pantalla anterior
        onSuccess: () => navigation.goBack(),
      }
    );
  }

  const canSubmit = name.trim().length > 0 && !isPending;

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.sectionLabel}>Datos de la Nueva Patineta</Text>

        {/* Nombre de la Patineta */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>
            Nombre de la Patineta{' '}
            <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ej: Segway Ninebot Max G30"
            placeholderTextColor={COLORS.textMuted}
            returnKeyType="next"
          />
        </View>

        {/* Ubicación / Punto de Alquiler */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Ubicación</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Ej: Parque de la 93"
            placeholderTextColor={COLORS.textMuted}
            returnKeyType="next"
          />
        </View>

        {/* Precio por minuto */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Precio por Minuto ($)</Text>
          <TextInput
            style={styles.input}
            value={pricePerMin}
            onChangeText={setPricePerMin}
            placeholder="Ej: 450"
            placeholderTextColor={COLORS.textMuted}
            keyboardType="numeric"
            returnKeyType="next"
          />
        </View>

        {/* Batería inicial */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Batería (%)</Text>
          <TextInput
            style={styles.input}
            value={battery}
            onChangeText={setBattery}
            placeholder="Ej: 100"
            placeholderTextColor={COLORS.textMuted}
            keyboardType="numeric"
            returnKeyType="next"
          />
        </View>

        {/* Descripción */}
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Descripción</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            value={description}
            onChangeText={setDescription}
            placeholder="Detalles técnicos o condiciones de uso…"
            placeholderTextColor={COLORS.textMuted}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Botón de envío */}
        <Pressable
          style={[styles.button, !canSubmit && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!canSubmit}
        >
          {isPending ? (
            <ActivityIndicator size="small" color={COLORS.background} />
          ) : (
            <Text style={styles.buttonText}>Registrar Patineta</Text>
          )}
        </Pressable>

        {/* Botón cancelar */}
        <Pressable style={styles.cancel} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ============================================================
// ESTILOS
// ============================================================

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1 },
  content: { padding: SPACING.lg, gap: SPACING.md, paddingBottom: SPACING.xxl },
  sectionLabel: {
    ...(TYPOGRAPHY as any)?.label,
    color: COLORS.textSecondary ?? '#f472b6',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  field: { gap: SPACING.xs },
  fieldLabel: {
    ...(TYPOGRAPHY as any)?.body,
    fontWeight: '600',
    color: COLORS.textPrimary ?? '#FFFFFF',
  },
  required: { color: COLORS.error },
  input: {
    backgroundColor: (COLORS as any)?.card ?? COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    padding: SPACING.sm,
    ...(TYPOGRAPHY as any)?.body,
    color: COLORS.textPrimary ?? '#FFFFFF',
  },
  multiline: { minHeight: 96, paddingTop: SPACING.sm },
  button: {
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS.sm,
    padding: SPACING.md,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  buttonDisabled: { opacity: 0.45 },
  buttonText: {
    ...(TYPOGRAPHY as any)?.body,
    fontWeight: '700',
    color: COLORS.background,
  },
  cancel: { alignItems: 'center', padding: SPACING.sm },
  cancelText: {
    ...(TYPOGRAPHY as any)?.body,
    color: COLORS.textMuted,
  },
});