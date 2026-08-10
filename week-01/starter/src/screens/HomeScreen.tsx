// ============================================================
// SCREEN: HomeScreen
// ============================================================
// Pantalla principal: header con el nombre del dominio
// y lista de tarjetas usando ScrollView.
// ============================================================

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Scooter } from '../types';
import { ScooterCard } from '../components/ScooterCard';
import { MOCK_SCOOTERS } from '../data/mockData';

export function HomeScreen(): React.JSX.Element {
  const DOMAIN_TITLE = 'Patinetas Joha';
  const DOMAIN_SUBTITLE = 'Alquiler y mantenimiento de patinetas eléctricas';

  function handleScooterPress(scooter: Scooter): void {
    Alert.alert(
      'Reserva solicitada',
      `${scooter.brand} ${scooter.model}\nEstado: ${scooter.status}\nUbicación: ${scooter.locationName}`,
      [{ text: 'Entendido', style: 'default' }],
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#e91e63" />

      {/* ============================================
          TODO: Implementar el Header de la app
          Debe mostrar: título del dominio y subtítulo
          Usa flexDirection: 'column' o 'row' según el diseño
          ============================================ */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{DOMAIN_TITLE}</Text>
        <Text style={styles.headerSubtitle}>{DOMAIN_SUBTITLE}</Text>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>Servicio premium</Text>
        </View>
      </View>

      {/* ============================================
          TODO: Implementar la lista de tarjetas
          Usa ScrollView para permitir scroll vertical
          Renderiza un ItemCard por cada elemento en MOCK_ITEMS
          ============================================ */}
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {MOCK_SCOOTERS.map((scooter) => (
          <ScooterCard
            key={scooter.id}
            scooter={scooter}
            onPress={handleScooterPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fdf7fa',
  },
  header: {
    paddingHorizontal: 18,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f4dce6',
    backgroundColor: '#fff7fa',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#b0004f',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#7d4b67',
    marginTop: 5,
    fontWeight: '600',
  },
  headerBadge: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#ffe7ef',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#f3c3d5',
  },
  headerBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#d81b60',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingTop: 18,
  },
});
