// src/data/mockData.ts
// Datos de prueba con modelos e información real para la app de Patinetas Eléctricas.

import type { Item } from '../types';

// ============================================
// LISTA PRINCIPAL DE ELEMENTOS
// ============================================
// Catálogo de patinetas eléctricas disponibles con datos reales.

export const ITEMS: Item[] = [
  {
    id: '1',
    name: 'Segway Ninebot Max G30',
    description: 'La patineta de alquiler más confiable. Cuenta con tracción trasera, neumáticos de 10 pulgadas antipinchazos y excelente absorción de impactos.',
    batteryLevel: 95,
    maxSpeed: '25 km/h',
    pricePerMinute: 450,
    status: 'disponible',
    location: 'Parque de la 93 - Cl. 93 #13-20',
    autonomy: '65 km',
  },
  {
    id: '2',
    name: 'Xiaomi Electric Scooter 4 Pro',
    description: 'Chasis de aluminio de grado aeroespacial con mayor tamaño general, freno de disco de doble pastilla en la rueda trasera y sistema E-ABS.',
    batteryLevel: 82,
    maxSpeed: '25 km/h',
    pricePerMinute: 400,
    status: 'disponible',
    location: 'Zona T - Cl. 82 #12-18',
    autonomy: '55 km',
  },
  {
    id: '3',
    name: 'NIU KQi3 Pro',
    description: 'Manillar más ancho (542 mm) y plataforma espaciosa para mayor comodidad. Luces LED halo icónicas y frenado regenerativo inteligente.',
    batteryLevel: 100,
    maxSpeed: '28 km/h',
    pricePerMinute: 480,
    status: 'disponible',
    location: 'Plaza de Lourdes - Cra. 13 #63-20',
    autonomy: '50 km',
  },
  {
    id: '4',
    name: 'Dualtron Mini Special',
    description: 'Patineta de alto rendimiento con motor de 1450W pico, suspensión cuádruple y luces RGB personalizables en el mástil y plataforma.',
    batteryLevel: 45,
    maxSpeed: '32 km/h',
    pricePerMinute: 650,
    status: 'mantenimiento',
    location: 'Taller Central - Av. Suba #100-15',
    autonomy: '40 km',
  },
  {
    id: '5',
    name: 'Inokim Quick 4 Super',
    description: 'Diseño galardonado con sistema de plegado patentado de alta resistencia. Pantalla central integrada que muestra telemetría en tiempo real.',
    batteryLevel: 68,
    maxSpeed: '25 km/h',
    pricePerMinute: 420,
    status: 'disponible',
    location: 'Centro Internacional - Cra. 7 #28-10',
    autonomy: '58 km',
  },
  {
    id: '6',
    name: 'Kaabo Mantis 8 Dual',
    description: 'Motor doble de 800W cada uno, frenos hidráulicos y suspensión de brazo oscilante ideal para afrontar pendientes inclinadas sin pérdida de potencia.',
    batteryLevel: 30,
    maxSpeed: '30 km/h',
    pricePerMinute: 550,
    status: 'en_uso',
    location: 'Sector Unicentro - Av. 15 #124-30',
    autonomy: '45 km',
  },
  {
    id: '7',
    name: 'Cecotec Bongo Serie Z Power',
    description: 'Tracción trasera deportiva con potencia máxima de 1100W y ruedas tubeless de 10.5 pulgadas para adaptarse a terrenos irregulares.',
    batteryLevel: 88,
    maxSpeed: '25 km/h',
    pricePerMinute: 390,
    status: 'disponible',
    location: 'Parque Virrey - Cra. 15 #87-10',
    autonomy: '45 km',
  },
  {
    id: '8',
    name: 'Vsett 8+ Dual Motor',
    description: 'Doble motor compacto con llave de encendido NFC de seguridad, suspensión de resorte ajustable y luces de señalización de giro integradas.',
    batteryLevel: 15,
    maxSpeed: '30 km/h',
    pricePerMinute: 500,
    status: 'mantenimiento',
    location: 'Estación de Carga - Cl. 170 #15-05',
    autonomy: '50 km',
  },
];

// ============================================
// LISTA DE FAVORITOS
// ============================================
// Subconjunto de patinetas preferidas con datos reales para la pestaña Favorites.

export const FAVORITES: Item[] = [
  ITEMS[0], // Segway Ninebot Max G30
  ITEMS[1], // Xiaomi Electric Scooter 4 Pro
  ITEMS[2], // NIU KQi3 Pro
];