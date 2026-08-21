// src/screens/DetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSavedStore } from '../stores/savedStore';
import { COLORS, SPACING, RADIUS } from '../theme';
import type { Item } from '../types';

export function DetailScreen(): React.JSX.Element {
  const route = useRoute<any>();
  const navigation = useNavigation();

  // Extraemos el item directamente de los parámetros de la ruta
  const item: Item | undefined = route.params?.item;

  // Estado global de Zustand
  const items = useSavedStore((state) => state.items);
  const addItem = useSavedStore((state) => state.addItem);
  const removeItem = useSavedStore((state) => state.removeItem);

  // Verificamos si la patineta ya está en guardados
  const isSaved = items.some((i) => i.id === item?.id);

  if (!item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No se encontró la información de la patineta.</Text>
      </View>
    );
  }

  const handleToggleSave = () => {
    if (isSaved) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: item.urlimg }} style={styles.image} resizeMode="contain" />
      
      <View style={styles.detailsBox}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.location}>📍 {item.location}</Text>
        <Text style={styles.price}>${item.pricePerMinute} / min</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBadge}>
            <Text style={styles.statLabel}>Batería</Text>
            <Text style={styles.statValue}>{item.batteryLevel}%</Text>
          </View>
          <View style={styles.statBadge}>
            <Text style={styles.statLabel}>Velocidad</Text>
            <Text style={styles.statValue}>{item.maxSpeed}</Text>
          </View>
          <View style={styles.statBadge}>
            <Text style={styles.statLabel}>Autonomía</Text>
            <Text style={styles.statValue}>{item.autonomy}</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.saveButton,
            isSaved && styles.saveButtonActive,
            pressed && { opacity: 0.8 },
          ]}
          onPress={handleToggleSave}
        >
          <Text style={styles.saveButtonText}>
            {isSaved ? '★ Guardado' : '☆ Guardar Patineta'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: (COLORS as any)?.background ?? '#0d1117' },
  content: { paddingBottom: 30 },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d1117' },
  errorText: { color: '#fff', fontSize: 16 },
  image: { width: '100%', height: 250, backgroundColor: '#161b22' },
  detailsBox: { padding: (SPACING as any)?.base ?? 16 },
  title: { color: (COLORS as any)?.textPrimary ?? '#fff', fontSize: 22, fontWeight: 'bold' },
  location: { color: (COLORS as any)?.textSecondary ?? '#888', marginTop: 4, fontSize: 14 },
  price: { color: (COLORS as any)?.accent ?? '#2f81f7', fontSize: 18, fontWeight: 'bold', marginVertical: 8 },
  description: { color: (COLORS as any)?.textSecondary ?? '#ccc', fontSize: 15, lineHeight: 22, marginBottom: 16 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBadge: {
    backgroundColor: (COLORS as any)?.surface ?? '#161b22',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  statLabel: { color: '#888', fontSize: 12 },
  statValue: { color: '#fff', fontWeight: 'bold', marginTop: 2 },
  saveButton: {
    backgroundColor: (COLORS as any)?.accent ?? '#2f81f7',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonActive: {
    backgroundColor: '#238636',
  },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});