// src/services/api.ts
import axios from 'axios';

// ============================================================
// BASE URL
// ============================================================
// Casteo seguro para evitar que TypeScript reclame por la falta de @types/node
const envApiUrl = typeof process !== 'undefined' ? process.env?.EXPO_PUBLIC_API_URL : undefined;

const API_BASE_URL = envApiUrl ?? 'https://jsonplaceholder.typicode.com';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ============================================================
// INTERCEPTOR DE RESPUESTA
// ============================================================
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (__DEV__) {
      console.error(
        '[API Error]',
        error.response?.status,
        error.config?.url,
        error.message
      );
    }
    return Promise.reject(error);
  }
);