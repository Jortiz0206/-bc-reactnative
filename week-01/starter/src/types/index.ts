// ============================================================
// TYPES — src/types/index.ts
// ============================================================
// Define aquí la interfaz del elemento de tu dominio asignado.
// Este type se usará en mockData.ts, ScooterCard.tsx y HomeScreen.tsx
// ============================================================

export interface Scooter {
  id: string;
  brand: string;
  model: string;
  imageUri: string;
  batteryLevel: number;
  maxSpeed: number;
  rangeKm: number;
  pricePerHour: number;
  status: string;
  serialNumber: string;
  locationName: string;
}
