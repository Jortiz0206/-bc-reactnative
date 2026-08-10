🛵 Patinetas Eléctricas - Semana 02
Aplicación móvil desarrollada con React Native y Expo para la gestión dinámica, filtrado y búsqueda en tiempo real de la flota de patinetas eléctricas.

Este proyecto fue construido durante la Semana 02 del bootcamp, enfocándose en la optimización de listas con FlatList, el manejo de estado con el hook useState, la captura de texto mediante TextInput y la implementación de filtros interactivos para explorar los vehículos según su estado de disponibilidad.

🚀 Características
Optimización de Listas con FlatList: Sustitución de ScrollView por FlatList para renderizar de manera eficiente listas de datos dinámicas con mejor rendimiento de memoria.

Búsqueda en Tiempo Real: Barra de búsqueda interactiva (TextInput) que permite filtrar las patinetas por modelo o código de ubicación.

Filtros Interactivos: Botones de selección rápida (Pressable) para filtrar vehículos por estado (Disponibles, En uso, En mantenimiento o Todas).

Vista de Detalle con Modal: Ventana emergente (Modal) para mostrar la información completa del vehículo seleccionado (autonomía en km, ubicación y tarifa por minuto).

Manejo de Estado Dinámico: Control de búsquedas, filtros activos y selección de tarjetas utilizando useState.

Tipado Estricto: Interfaces de TypeScript extendidas (Scooter, ScooterStatus, FilterType) sin uso de any.

🛠️ Tecnologías Utilizadas
Framework: React Native con Expo (SDK 53)

Lenguaje: TypeScript

Componentes Intermedios: FlatList, TextInput, Modal, Pressable, ActivityIndicator

Estilos: StyleSheet.create (Flexbox puro y diseño adaptativo)

Gestor de Paquetes: pnpm

📂 Estructura del Proyecto
Plaintext


starter/
├── assets/                  # Iconos, splash screen y recursos gráficos
├── src/
│   ├── components/
│   │   ├── ScooterCard.tsx   # Tarjeta optimizada para renderizado en FlatList
│   │   ├── SearchBar.tsx     # Componente TextInput para filtrar la lista
│   │   ├── FilterTabs.tsx    # Botones de categoría para filtrar por estado
│   │   └── DetailModal.tsx   # Modal con la información detallada de la patineta
│   ├── data/
│   │   └── mockData.ts      # Listado amplio de datos de prueba
│   ├── screens/
│   │   └── HomeScreen.tsx   # Pantalla principal con estados, filtros y FlatList
│   └── types/
│       └── index.ts         # Interfaces de TypeScript (Scooter, ScooterStatus)
├── App.tsx                  # Punto de entrada principal
├── app.json                 # Configuración de Expo del proyecto
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto