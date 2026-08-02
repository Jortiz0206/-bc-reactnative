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
import { Repair } from '../types';
import { RepairCard } from '../components/RepairCard';
import { MOCK_REPAIRS } from '../data/mockData';

export function HomeScreen(): React.JSX.Element {
  // TODO: Personaliza el título con el nombre de tu dominio
  // Ejemplos: 'Mi Biblioteca', 'Farmacia Central', 'GymApp', 'Menú del Día'
  const DOMAIN_TITLE = 'Mi Tienda de Reparaciones de Celulares';
  const DOMAIN_SUBTITLE = 'Gestión de Órdenes y Reparaciones';

  /**
   * Handles item card press.
   * For now, just logs the item name. In week-03 we'll add navigation.
   */
  function handleRepairPress(repair: Repair): void {
    // TODO: Mostrar un alert o log con el nombre del item
    console.log('Reparación seleccionada:', repair.deviceModel);
    console.log('Orden de Servicio',`Cliente: ${repair.customerName}\nDispositivo: ${repair.deviceModel}\nEstado: ${repair.status}\nCosto: $${repair.cost} COP`);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1117" />

      {/* ============================================
          TODO: Implementar el Header de la app
          Debe mostrar: título del dominio y subtítulo
          Usa flexDirection: 'column' o 'row' según el diseño
          ============================================ */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{DOMAIN_TITLE}</Text>
        <Text style={styles.headerSubtitle}>{DOMAIN_SUBTITLE}</Text>
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
        {MOCK_REPAIRS.map((repair) => (
          <RepairCard
            key={repair.id}
            repair={repair}
            onPress={handleRepairPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
    backgroundColor: '#161b22',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#58a6ff',
    marginTop: 4,
    fontWeight: '500',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});
