// ============================================================
// MOCK DATA — src/data/mockData.ts
// ============================================================
// Datos de ejemplo para tu dominio asignado.
// Reemplaza estos datos con información coherente a tu dominio.
// ============================================================

import { Repair } from '../types';

// TODO: Reemplaza los valores por datos reales de tu dominio
// Usa imágenes representativas — puedes usar URLs de picsum.photos
// o incluir imágenes locales en assets/

export const MOCK_REPAIRS: Repair[] = [
  {
    id: '1',
    customerName: 'Carlos Gómez',
    deviceModel: 'iPhone 13 Pro',
    imageUri: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=400',
    issueDescription: 'Pantalla con líneas y touch no responde',
    partNeeded: 'Display OLED Super Retina',
    cost: 120000,
    status: 'En Proceso',
  },
  {
    id: '2',
    customerName: 'Ana Martínez',
    deviceModel: 'Samsung Galaxy S22',
    imageUri: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400',
    issueDescription: 'Batería inflada, no retiene carga',
    partNeeded: 'Batería 3700mAh Original',
    cost: 65000,
    status: 'Pendiente',
  },
  {
    id: '3',
    customerName: 'Luis Rodríguez',
    deviceModel: 'Xiaomi Redmi Note 11',
    imageUri: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400',
    issueDescription: 'Cristal de cámara trasera roto',
    partNeeded: 'Módulo de lente de cámara',
    cost: 35000,
    status: 'Completado',
  },
  {
    id: '4',
    customerName: 'Sofia López',
    deviceModel: 'Google Pixel 7',
    imageUri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400',
    issueDescription: 'Puerto de carga sulfatado / no detecta cable',
    partNeeded: 'Pin de carga Flex USB-C',
    cost: 50000,
    status: 'En Proceso',
  },
];