// ============================================================
// COMPONENT: ItemCard
// ============================================================
// Tarjeta reutilizable para mostrar un elemento del dominio.
// Este componente se renderiza por cada item en HomeScreen.
// ============================================================

import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Repair } from '../types';

interface RepairCardProps {
  repair: Repair;
  onPress: (repair: Repair) => void;
}

export function RepairCard({ repair, onPress }: RepairCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress(repair)}
    >
      <Image
        source={{ uri: repair.imageUri }}
        style={styles.cardImage}
        resizeMode="cover"
      />

      <View style={styles.cardBody}>
        {/* Cabecera de la tarjeta: Dispositivo y Estado */}
        <View style={styles.headerRow}>
          <Text style={styles.deviceModel}>{repair.deviceModel}</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{repair.status}</Text>
          </View>
        </View>

        {/* Cliente */}
        <Text style={styles.customerText}>Cliente: {repair.customerName}</Text>

        {/* Detalle de Falla y Repuesto */}
        <View style={styles.detailBox}>
          <Text style={styles.detailTitle}>Reporte de Falla:</Text>
          <Text style={styles.detailText}>{repair.issueDescription}</Text>
          <Text style={styles.detailTitle}>Repuesto Requerido:</Text>
          <Text style={styles.detailText}>{repair.partNeeded}</Text>
        </View>

        {/* Pie de la tarjeta: Costo y Acción */}
        <View style={styles.footerRow}>
          <Text style={styles.costText}>${repair.cost} COP</Text>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Ver Detalle</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#30363d',
  },
  cardPressed: {
    opacity: 0.8,
    backgroundColor: '#1f242c',
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardBody: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  deviceModel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  statusBadge: {
    backgroundColor: '#21262d',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#388bfd',
  },
  statusText: {
    color: '#58a6ff',
    fontSize: 12,
    fontWeight: '600',
  },
  customerText: {
    fontSize: 14,
    color: '#8b949e',
    marginBottom: 12,
  },
  detailBox: {
    backgroundColor: '#0d1117',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  detailTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8b949e',
    marginTop: 2,
  },
  detailText: {
    fontSize: 13,
    color: '#c9d1d9',
    marginBottom: 4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#21262d',
  },
  costText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ea043',
  },
  actionButton: {
    backgroundColor: '#238636',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});