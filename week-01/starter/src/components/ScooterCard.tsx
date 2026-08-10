// ============================================================
// COMPONENT: ScooterCard
// ============================================================
// Tarjeta reutilizable para mostrar las Patinetas Eléctricas.
// Se renderiza por cada patineta en el catálogo principal (HomeScreen).
// ============================================================

import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Scooter } from '../types';

interface ScooterCardProps {
  scooter: Scooter;
  onPress: (scooter: Scooter) => void;
}

export function ScooterCard({ scooter, onPress }: ScooterCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress(scooter)}
    >
      {/* Imagen de la Patineta */}
      <Image
        source={{ uri: scooter.imageUri }}
        style={styles.cardImage}
        resizeMode="cover"
      />

      <View style={styles.cardBody}>
        {/* Cabecera: Modelo de Patineta y Badge de Estado */}
        <View style={styles.headerRow}>
          <Text style={styles.scooterModel}>{scooter.model}</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{scooter.status}</Text>
          </View>
        </View>

        {/* Marca y Serie */}
        <Text style={styles.brandText}>
          {scooter.brand} • S/N: {scooter.serialNumber}
        </Text>

        {/* Especificaciones Técnicas (Batería y Autonomía) */}
        <View style={styles.detailBox}>
          <View style={styles.specItem}>
            <Text style={styles.detailTitle}>🔋 Batería / Autonomía</Text>
            <Text style={styles.detailText}>{scooter.batteryLevel}% ({scooter.rangeKm} km aprox.)</Text>
          </View>

          <View style={styles.specItem}>
            <Text style={styles.detailTitle}>⚡ Velocidad Máx.</Text>
            <Text style={styles.detailText}>{scooter.maxSpeed} km/h</Text>
          </View>
        </View>

        {/* Pie de tarjeta: Precio de Alquiler y Botón de Acción */}
        <View style={styles.footerRow}>
          <View>
            <Text style={styles.priceLabel}>Tarifa / Hora</Text>
            <Text style={styles.costText}>${scooter.pricePerHour.toLocaleString()} COP</Text>
          </View>

          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Alquilar</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f2d2de',
    shadowColor: '#c2185b',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 6,
  },
  cardPressed: {
    opacity: 0.96,
    transform: [{ scale: 0.995 }],
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardBody: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  scooterModel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
    flex: 1,
  },
  statusBadge: {
    backgroundColor: '#ffe7ef',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: '#d81b60',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  brandText: {
    fontSize: 13,
    color: '#7a6e74',
    marginBottom: 12,
  },
  detailBox: {
    backgroundColor: '#fff7fa',
    padding: 12,
    borderRadius: 12,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specItem: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#888888',
    marginBottom: 2,
  },
  detailText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F5ECEF',
  },
  priceLabel: {
    fontSize: 10,
    color: '#9E9E9E',
    fontWeight: '500',
  },
  costText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#d81b60',
  },
  actionButton: {
    backgroundColor: '#d81b60',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});