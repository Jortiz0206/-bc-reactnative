// ============================================================
// TYPES — src/types/index.ts
// ============================================================
// Define aquí la interfaz del elemento de tu dominio asignado.
// Este type se usará en mockData.ts, ItemCard.tsx y HomeScreen.tsx
// ============================================================

// TODO: Renombra esta interfaz con el nombre de tu elemento
// Ejemplos: Book, Medication, Member, Dish, Movie, Destination
export interface Repair {
  id: string;
  customerName: string;   // Entidad: customers
  deviceModel: string;    // Entidad: devices
  imageUri: string;       // Imagen del dispositivo o reparación
  issueDescription: string; // Falla o reporte de la reparación (Entidad: repairs)
  partNeeded: string;     // Repuesto requerido (Entidad: parts)
  cost: number;           // Costo estimado/final
  status: string;   // Estado 'Pendiente' | 'En Proceso' | 'Completado'
}
