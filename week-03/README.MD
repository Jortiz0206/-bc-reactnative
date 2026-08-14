# 🛵 App de Patinetas Eléctricas — Semana 3: Navegación Avanzada

Aplicación móvil desarrollada en **React Native (Expo)** con **TypeScript**, implementando una arquitectura de navegación híbrida (Tab + Stack Navigator) mediante **React Navigation 7** y un diseño en modo oscuro personalizado para la gestión de patinetas eléctricas.

---

## 📋 Características Implementadas

* **Navegación Tab + Stack:** 
  * Pestaña `Home`: contiene un Stack Navigator interno para navegar de la lista principal (`HomeList`) al detalle de la patineta (`HomeDetail`).
  * Pestaña `Favorites`: pantalla secundaria para consultar la lista de patinetas guardadas.
* **Tipado Estricto (TypeScript):** Definición centralizada de parámetros en `src/navigation/types.ts` y tipos del dominio en `src/types/index.ts` (`RootTabParamList`, `HomeStackParamList` e `Item`), garantizando autocompletado y seguridad en tiempo de compilación.
* **Diseño y Tema Personalizado:** Estilos centralizados en `src/theme/index.ts` en modo oscuro (*Dark Theme*) con acentos magenta/rosa (`#E91E63`).
* **Dominio Especificado (Patinetas Eléctricas):** Manejo de datos reales del dominio como nivel de batería, velocidad máxima, ubicación, estado (`disponible`, `en_uso`, `mantenimiento`) y tarifa por minuto.

## 📂 Estructura del Proyecto

```text
src/
├── data/
│   └── mockData.ts          # Datos de prueba con formato de patinetas eléctricas
├── navigation/
│   ├── RootNavigator.tsx    # Configuración de Tab y Stack Navigators
│   └── types.ts             # Tipado estricto de parámetros de navegación
├── screens/
│   ├── DetailScreen.tsx     # Vista detallada de la patineta seleccionada
│   ├── FavoritesScreen.tsx  # Colección de patinetas guardadas
│   └── HomeScreen.tsx       # Catálogo principal con lista de flota
├── theme/
│   └── index.ts             # Dark Theme (#0d1117) + Acento Rosa (#E91E63)
└── types/
    └── index.ts             # Modelo de datos principal (Item / Scooter)
App.tsx                      # Punto de entrada con proveedores globales

## ⚙️ Pasos para Ejecutarlo Localmente

1. **Abre la terminal en la carpeta del proyecto:**
   ```bash
   cd week-03/starter



## Iniciar el servidor de desarrollo

pnpm start

👩‍💻 Desarrollado por
Hecho con ❤️ por Johanna (Faloon Johanna Ortiz)

📚 Estudiante de Análisis y Desarrollo de Software