// ============================================================
// MOCK DATA — src/data/mockData.ts
// ============================================================
// Datos de ejemplo adaptados al dominio: Patinetas Eléctricas (Scooters)
// ============================================================

import { Scooter } from '../types';

export const MOCK_SCOOTERS: Scooter[] = [
  {
    id: '1',
    brand: 'Patinetas Joha',
    model: 'Mi Electric Scooter Pro 2',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FiSNw4DEZJlaHrNWCFYDfWobuPT5OAUjrt7i-aK7WRiK_I-GScnUNALV&s=10',
    batteryLevel: 85,
    maxSpeed: 25,
    rangeKm: 45,
    pricePerHour: 15000,
    status: 'Disponible',
    serialNumber: 'PJ-1024',
    locationName: 'Estación Central - Zona Norte',
  },
  {
    id: '2',
    brand: 'Segway Ninebot',
    model: 'KickScooter MAX G30',
    imageUri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkjlZVYvPScDjhRXIFBE0ChbprE7uOcaTB5qzS0-al-83Wm--zWDL-giK9QyoD2Vs1IcoBeW_ixGn4xqU7dknBK9CpuYlIJ8R5MBkiD4zTNH0_f9eLj3eg6YGfCNeFwpXiH_YY_R4&usqp=CAc',
    batteryLevel: 40,
    maxSpeed: 30,
    rangeKm: 65,
    pricePerHour: 18000,
    status: 'En Uso',
    serialNumber: 'PJ-2048',
    locationName: 'Parque de la 93',
  },
  {
    id: '3',
    brand: 'Dualtron',
    model: 'Mini Special',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNC2eJZaHldOitA7_GQu3QBEyhCuCTeuOZzhLRyY78Ww&s=10',
    batteryLevel: 15,
    maxSpeed: 45,
    rangeKm: 40,
    pricePerHour: 25000,
    status: 'Cargando',
    serialNumber: 'PJ-3056',
    locationName: 'Taller / Base Sur',
  },
  {
    id: '4',
    brand: 'NIU',
    model: 'KQi3 Pro',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mHVcUK3wBdXwzFukE4fJlM9-K0IpKMtVDgbGchXhvQ&s=10',
    batteryLevel: 95,
    maxSpeed: 32,
    rangeKm: 50,
    pricePerHour: 16000,
    status: 'Disponible',
    serialNumber: 'PJ-4098',
    locationName: 'Zona Financiera',
  },
];
