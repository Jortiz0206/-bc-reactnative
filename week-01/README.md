Aquí tienes el README.md adaptado exactamente con la misma estructura y formato para el proyecto de Patinetas Eléctricas:

🛵 Patinetas Eléctricas - Semana 01
Aplicación móvil desarrollada con React Native y Expo para la gestión básica de alquiler, usuarios y estado de patinetas eléctricas.

Este proyecto fue construido durante la Semana 01 del bootcamp, enfocándose en el uso de componentes core de React Native (View, Text, Image, ScrollView, Pressable, SafeAreaView, StatusBar), maquetación con Flexbox, tipado estricto con TypeScript y renderizado eficiente de listas.

🚀 Características
Header Personalizado: Muestra el título del dominio y el subtítulo de la aplicación.

Lista con Scroll Vertical: Utiliza ScrollView para navegar dinámicamente entre el catálogo o flota de patinetas disponibles.

Tarjetas Reutilizables (ScooterCard): Muestra información clave de cada patineta (modelo del vehículo, nivel de batería, estado de disponibilidad, tarifa e imagen de referencia).

Interactividad: Feedback visual al presionar cada tarjeta mediante un cambio ligero de opacidad (cardPressed) y un mensaje en consola que despliega la información detallada del vehículo.

Tipado Estricto: Entidades estructuradas (Scooter) mediante TypeScript sin el uso de any.

🛠️ Tecnologías Utilizadas
Framework: React Native con Expo (SDK 53)

Lenguaje: TypeScript

Estilos: StyleSheet.create (Flexbox puro, sin position: 'absolute' ni librerías UI externas)

Gestor de Paquetes: pnpm

📂 Estructura del Proyecto
Plaintext


starter/
├── assets/                  # Iconos, splash screen y recursos gráficos
├── src/
│   ├── components/
│   │   └── ScooterCard.tsx   # Componente reutilizable para cada tarjeta de patineta
│   ├── data/
│   │   └── mockData.ts      # Datos de prueba para el dominio
│   ├── screens/
│   │   └── HomeScreen.tsx   # Pantalla principal con Header y ScrollView
│   └── types/
│       └── index.ts         # Interfaces de TypeScript (Scooter)
├── App.tsx                  # Punto de entrada principal
├── app.json                 # Configuración de Expo del proyecto
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto