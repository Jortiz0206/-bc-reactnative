import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Scooter } from '../types';

interface ScooterCardProps {
  scooter: Scooter;
  onPress?: (scooter: Scooter) => void;
}

export function ScooterCard({ scooter, onPress }: ScooterCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={() => onPress?.(scooter)}
      accessibilityRole="button"
      accessibilityLabel={`${scooter.brand} ${scooter.model}`}
    >
      <Image source={{ uri: scooter.imageUri }} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.titleBlock}>
            <Text style={styles.modelText}>{scooter.model}</Text>
            <Text style={styles.brandText}>{scooter.brand}</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{scooter.status}</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaPill}>
            <Text style={styles.metaIcon}>⚡</Text>
            <Text style={styles.metaValue}>{scooter.maxSpeed} km/h</Text>
          </View>
          <View style={styles.metaPill}>
            <Text style={styles.metaIcon}>🔋</Text>
            <Text style={styles.metaValue}>{scooter.rangeKm} km</Text>
          </View>
        </View>

        <View style={styles.footerRow}>
          <View>
            <Text style={styles.priceLabel}>Desde</Text>
            <Text style={styles.priceText}>${scooter.pricePerHour.toLocaleString()} COP/h</Text>
          </View>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Reservar</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f3d6e3',
    shadowColor: '#d81b60',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  cardPressed: {
    opacity: 0.96,
    transform: [{ scale: 0.995 }],
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#fcecf4',
  },
  content: {
    padding: 14,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  titleBlock: {
    flex: 1,
    marginRight: 8,
  },
  modelText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222222',
  },
  brandText: {
    fontSize: 12,
    color: '#7a6e74',
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: '#ffe7ef',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#d81b60',
    textTransform: 'uppercase',
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff7fa',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  metaIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  metaValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5e3b4d',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f3e7eb',
    paddingTop: 8,
  },
  priceLabel: {
    fontSize: 10,
    color: '#9e9e9e',
    fontWeight: '500',
  },
  priceText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#d81b60',
  },
  actionButton: {
    backgroundColor: '#d81b60',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
});