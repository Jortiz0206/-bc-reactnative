// src/navigation/RootNavigator.tsx
// Configura la estructura completa de navegación:
//   Tab Navigator (raíz)
//     └── Home tab  → HomeStack (Stack Navigator anidado)
//           ├── HomeList  (lista de patinetas eléctricas)
//           └── HomeDetail (detalle de la patineta con params)
//     └── Favorites tab → FavoritesScreen

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { DetailScreen } from '../screens/DetailScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { COLORS } from '../theme';
import type { HomeStackParamList, RootTabParamList } from './types';

// Color rosa/magenta distintivo de nuestro proyecto
const ACCENT_COLOR = '#E91E63';

// ============================================
// STACK INTERNO — para la pestaña Home
// ============================================

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Navigator que gestiona la navegación dentro de la pestaña Home.
 * Es un componente que se usa dentro del Tab Navigator.
 * El headerShown: false en el Tab evita doble header.
 */
function HomeStackNavigator(): React.JSX.Element {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.surface || '#121212' },
        headerTintColor: COLORS.textPrimary || '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Pantalla inicial del Stack — catálogo de patinetas */}
      <HomeStack.Screen
        name="HomeList"
        component={HomeScreen}
        options={{ title: 'Patinetas Eléctricas' }}
      />
      {/* Pantalla de detalle — lee el nombre dinámicamente desde los params */}
      <HomeStack.Screen
        name="HomeDetail"
        component={DetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </HomeStack.Navigator>
  );
}

// ============================================
// TAB NAVIGATOR — raíz de la app
// ============================================

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Iconos interactivos con temática de movilidad eléctrica
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Home') {
            iconName = focused ? 'flash' : 'flash-outline';
          } else {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Acento en rosa/magenta para los elementos activos
        tabBarActiveTintColor: COLORS.accent || ACCENT_COLOR,
        tabBarInactiveTintColor: COLORS.textSecondary || '#888888',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.surface || '#121212',
          borderTopColor: COLORS.border || '#2C2C2C',
        },
      })}
    >
      {/* La pestaña Home usa el Stack interno */}
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarLabel: 'Patinetas' }}
      />
      {/* La pestaña Favorites incluye su propio header activo */}
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favoritos',
          headerShown: true,
          title: 'Patinetas Favoritas',
          headerStyle: { backgroundColor: COLORS.surface || '#121212' },
          headerTintColor: COLORS.textPrimary || '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Tab.Navigator>
  );
}