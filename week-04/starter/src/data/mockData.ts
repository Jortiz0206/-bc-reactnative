// src/data/mockData.ts
// Datos de prueba con modelos e información real para la app de Patinetas Eléctricas.

type Item = {
  id: string;
  name: string;
  description: string;
  batteryLevel: number;
  maxSpeed: string;
  pricePerMinute: number;
  status: 'disponible' | 'mantenimiento' | 'en_uso';
  location: string;
  autonomy: string;
  urlimg: string;
};

// ============================================
// LISTA PRINCIPAL DE ELEMENTOS
// ============================================
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_uFiP7HNXGTl-Zy8d2ha_M72GLt88LiACWNF-ppxsQ&s=10',
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjDZ4B9h9JaEA4542vohlBtEl2vxYbCxtUKEqmPO5zA&s=10',
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqkGZlAuO-MQJJWkaNNiFLoQjUG3aXwFEbyVR1ZmSAQ&s=10',
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWKUMTCSwnSzFF8cBCzim9U0nHOizOnrBSYmM544Hvw&s=10',
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEleXpyMft0YP0FhvVfjZ-6-1I0X8iyvVWKymsjvybSw&s=10',
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1otrKSdZv9xkgI900hiPw3LcMZ95WTRLwlipUB7ZcQ&s=10',
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZm4_HtwEwScRoWl6WJ_44tcAwJFciY2KCaNZ_AFPaA&s=10',
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
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosl1CP2p0tnp7-DrgAPydf987TU0rNPHElJfD0EhxHA&s',
  },
];

// ============================================
// LISTA DE FAVORITOS
// ============================================
export const FAVORITES: Item[] = [
  ITEMS[0],
  ITEMS[1],
  ITEMS[2],
];