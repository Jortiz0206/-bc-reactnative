import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Pressable,
  ListRenderItem,
  Alert,
} from 'react-native';
import { Scooter } from '../types';
import { MOCK_SCOOTERS } from '../data/mockData';
import { ScooterCard } from '../components/ScooterCard';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

export function HomeScreen(): React.JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 900);
  }, []);

  const filteredScooters = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return MOCK_SCOOTERS;

    return MOCK_SCOOTERS.filter(
      (scooter) =>
        scooter.brand.toLowerCase().includes(cleanQuery) ||
        scooter.model.toLowerCase().includes(cleanQuery) ||
        scooter.status.toLowerCase().includes(cleanQuery) ||
        scooter.locationName.toLowerCase().includes(cleanQuery),
    );
  }, [query]);

  const featuredScooter = MOCK_SCOOTERS[0];

  const handleScooterPress = useCallback((scooter: Scooter) => {
    Alert.alert(
      'Reserva solicitada',
      `${scooter.brand} ${scooter.model}\nEstado: ${scooter.status}\nUbicación: ${scooter.locationName}`,
      [{ text: 'Entendido', style: 'default' }],
    );
  }, []);

  const renderHeader = useCallback(
    () => (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Patinetas Joha</Text>
        <Text style={styles.headerSubtitle}>Movilidad urbana premium</Text>

        <View style={styles.heroCard}>
          <View style={styles.heroInfo}>
            <Text style={styles.heroTag}>Destacada hoy</Text>
            <Text style={styles.heroTitle}>{featuredScooter.brand}</Text>
            <Text style={styles.heroText}>{featuredScooter.model}</Text>
          </View>

          <View style={styles.heroStatBox}>
            <Text style={styles.heroStatValue}>{featuredScooter.batteryLevel}%</Text>
            <Text style={styles.heroStatLabel}>Batería</Text>
          </View>
        </View>

        <Text style={styles.resultsText}>
          {filteredScooters.length} {filteredScooters.length === 1 ? 'patineta disponible' : 'patinetas disponibles'}
        </Text>
      </View>
    ),
    [featuredScooter.brand, featuredScooter.batteryLevel, featuredScooter.model, filteredScooters.length],
  );

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No encontramos patinetas para "{query}"</Text>
        <Text style={styles.emptySubText}>
          Prueba con marca, modelo, estado o ubicación.
        </Text>
      </View>
    ),
    [query],
  );

  const renderItem: ListRenderItem<Scooter> = useCallback(
    ({ item }) => <ScooterCard scooter={item} onPress={handleScooterPress} />,
    [handleScooterPress],
  );

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);
  const keyExtractor = useCallback((item: Scooter) => item.id, []);

  return (
    <KeyboardAvoidingView
      style={styles.kvContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por marca, modelo o zona..."
              placeholderTextColor={COLORS.textMuted}
              value={query}
              onChangeText={setQuery}
              keyboardType="default"
              returnKeyType="search"
              autoCorrect={false}
            />
            {query.length > 0 && (
              <Pressable style={styles.clearButton} onPress={() => setQuery('')}>
                <Text style={styles.clearButtonText}>✕</Text>
              </Pressable>
            )}
          </View>
        </View>

        <FlatList
          data={filteredScooters}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={renderEmpty}
          ItemSeparatorComponent={renderSeparator}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  kvContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inner: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.base,
  },
  clearButton: {
    padding: SPACING.xs,
  },
  clearButtonText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.size.base,
    fontWeight: 'bold',
  },
  headerContainer: {
    paddingHorizontal: SPACING.base,
    paddingTop: SPACING.base,
    paddingBottom: SPACING.sm,
  },
  headerTitle: {
    fontSize: TYPOGRAPHY.size.xl,
    fontWeight: TYPOGRAPHY.weight.bold,
    color: COLORS.textPrimary,
  },
  headerSubtitle: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  heroCard: {
    marginTop: SPACING.base,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  heroInfo: {
    flex: 1,
  },
  heroTag: {
    fontSize: TYPOGRAPHY.size.xs,
    fontWeight: TYPOGRAPHY.weight.bold,
    color: COLORS.accent,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: TYPOGRAPHY.weight.bold,
    color: COLORS.textPrimary,
  },
  heroText: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  heroStatBox: {
    backgroundColor: COLORS.accentDim,
    borderRadius: 12,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
  },
  heroStatValue: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: TYPOGRAPHY.weight.bold,
    color: COLORS.accent,
  },
  heroStatLabel: {
    fontSize: TYPOGRAPHY.size.xs,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  resultsText: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.base,
  },
  listContent: {
    paddingTop: SPACING.xs,
    paddingBottom: SPACING.xl,
    flexGrow: 1,
  },
  separator: {
    height: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingHorizontal: SPACING.xxl,
  },
  emptyText: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  emptySubText: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});