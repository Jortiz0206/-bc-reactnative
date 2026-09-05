// src/types/index.ts
// Interfaces del dominio del proyecto: Patinetas Eléctricas (E-Scooters).

// ============================================================
// MODELO PRINCIPAL — Scooter (Patineta Eléctrica)
// ============================================================
export interface Scooter {
  id: string | number;
  name: string;          // Ej: "Segway Ninebot Max G30"
  location?: string;     // Ej: "Parque de la 93"
  pricePerMin?: number;  // Ej: 450
  battery?: number;      // Ej: 85 (%)
  speed?: string;        // Ej: "30 km/h"
  autonomy?: string;     // Ej: "40 km"
  urlimg?: string;       // URL de la imagen de la patineta
  description?: string; // Descripción técnica o condiciones
}

// ============================================================
// PAYLOAD DE CREACIÓN
// ============================================================
// Datos enviados en la mutación POST para registrar una nueva patineta.
// Omite el atributo `id` porque es asignado automáticamente por el servidor.
export type CreateScooterPayload = Omit<Scooter, 'id'>;

// ============================================================
// ALIASES DE COMPATIBILIDAD CON EL STARTER
// ============================================================
export type Item = Scooter;
export type CreateItemPayload = CreateScooterPayload;