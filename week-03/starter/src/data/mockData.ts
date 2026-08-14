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
    urlimg: 'https://th.bing.com/th/id/OIP.rjIjCjdLBj3GxKgKvaU71QHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
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
    urlimg: 'https://th.bing.com/th/id/OIP.4STHEvATcpz3wRi9XsAxpAHaHh?w=183&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
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
    urlimg: 'data:image/webp;base64,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',
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
    urlimg: 'https://th.bing.com/th?q=Patinetas+El%c3%a9ctricas+Blanco+Y+Negro&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=es-XL&cc=CO&setlang=es&adlt=strict&t=1&mw=247',
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
    urlimg: 'https://th.bing.com/th/id/OIP.yvpBfCMrEm0vywFCgx9fWAHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3',
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
    urlimg: 'https://th.bing.com/th/id/OIP.YODfmWGE2Y9F-I1KrhMHlQHaHa?w=179&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
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
    urlimg: 'https://th.bing.com/th/id/OIP.TECW_rRtVzBgUCF3J2susQHaHa?w=218&h=218&c=7&r=0&o=7&pid=1.7&rm=3',
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
    urlimg: 'https://th.bing.com/th/id/OIP.RdyTWMBuJLHhiI3fx6N1DAHaJk?w=143&h=184&c=7&r=0&o=7&pid=1.7&rm=3',
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