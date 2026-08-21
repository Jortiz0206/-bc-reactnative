// src/types/index.ts

export interface Item {
  id: string;
  name: string;
  description: string;
  batteryLevel: number;
  maxSpeed: string;
  pricePerMinute: number;
  status: 'disponible' | 'en_uso' | 'mantenimiento';
  location: string;
  autonomy: string;
  urlimg: string;
}