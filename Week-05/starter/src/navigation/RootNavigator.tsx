// src/navigation/RootNavigator.tsx
// Stack Navigator adaptado al dominio de Patinetas Eléctricas

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';

import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { COLORS } from '../theme';
import type { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const headerStyle = { backgroundColor: COLORS.surface } as const;
const headerTitleStyle = { color: COLORS.textPrimary ?? '#FFFFFF', fontWeight: '600' as const };

export function RootNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTintColor: COLORS.accent,
        contentStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen
        name="HomeList"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: '🛵 E-Scooters',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Create')}
              hitSlop={8}
              style={{ paddingHorizontal: 8 }}
            >
              <Text style={{ color: COLORS.accent, fontSize: 26, fontWeight: '400' }}>
                +
              </Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params?.name ?? 'Detalle del Vehículo',
        })}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          title: 'Registrar Patineta',
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}