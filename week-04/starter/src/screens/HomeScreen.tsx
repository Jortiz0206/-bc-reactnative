// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ITEMS } from '../data/mockData';
import { COLORS, SPACING, RADIUS } from '../theme';
import type { HomeStackParamList } from '../navigation/types';

type NavProp = NativeStackNavigationProp<HomeStackParamList, 'HomeList'>;

export function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('HomeDetail', { name: item.name, item })}
          >
            <Image source={{ uri: item.urlimg }} style={styles.image} resizeMode="contain"  />
            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtext}>📍 {item.location}</Text>
              <Text style={styles.price}>${item.pricePerMinute} / min</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background ?? '#0d1117' },
  listContent: { padding: SPACING.base ?? 16 },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface ?? '#161b22',
    borderRadius: RADIUS.md ?? 12,
    marginBottom: SPACING.md ?? 12,
    padding: SPACING.md ?? 12,
    alignItems: 'center',
  },
  image: { width: 70, height: 70, borderRadius: RADIUS.sm ?? 6, backgroundColor: '#21262d' },
  info: { marginLeft: SPACING.md ?? 12, flex: 1 },
  title: { color: COLORS.textPrimary ?? '#fff', fontSize: 16, fontWeight: 'bold' },
  subtext: { color: COLORS.textSecondary ?? '#888', marginTop: 4, fontSize: 13 },
  price: { color: COLORS.accent ?? '#2f81f7', marginTop: 4, fontWeight: '600' },
});