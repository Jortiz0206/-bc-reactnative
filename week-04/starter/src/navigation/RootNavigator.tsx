// src/navigation/RootNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SavedScreen } from '../screens/SavedScreen'; // Importamos la pantalla real con Zustand
import { useSavedStore } from '../stores/savedStore';
import { COLORS } from '../theme';
import type { HomeStackParamList, RootTabParamList } from './types';

const ACCENT_COLOR = '#E91E63';

// ============================================
// STACK INTERNO — pestaña Home
// ============================================
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator(): React.JSX.Element {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: (COLORS as any)?.surface || '#121212' },
        headerTintColor: (COLORS as any)?.textPrimary || '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <HomeStack.Screen
        name="HomeList"
        component={HomeScreen}
        options={{ title: 'Patinetas Eléctricas' }}
      />
      <HomeStack.Screen
        name="HomeDetail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params?.name ?? route.params?.item?.name ?? 'Detalle',
        })}
      />
    </HomeStack.Navigator>
  );
}

// ============================================
// TAB NAVIGATOR — raíz de la app
// ============================================
const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootNavigator(): React.JSX.Element {
  // Lectura del conteo dinámico desde Zustand
  const savedCount = useSavedStore((state) => state.items.length);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Home') {
            iconName = focused ? 'flash' : 'flash-outline';
          } else {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: (COLORS as any)?.accent || ACCENT_COLOR,
        tabBarInactiveTintColor: (COLORS as any)?.textSecondary || '#888888',
        tabBarStyle: {
          backgroundColor: (COLORS as any)?.surface || '#121212',
          borderTopColor: (COLORS as any)?.border || '#2C2C2C',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarLabel: 'Patinetas' }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Guardados',
          headerShown: true,
          title: 'Patinetas Guardadas',
          headerStyle: { backgroundColor: (COLORS as any)?.surface || '#121212' },
          headerTintColor: (COLORS as any)?.textPrimary || '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarBadge: savedCount > 0 ? savedCount : undefined,
        }}
      />
    </Tab.Navigator>
  );
}