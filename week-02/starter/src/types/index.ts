// ============================================
// TYPES — Semana 02
// Define aquí la interfaz del dominio de patinetas eléctricas
// ============================================

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