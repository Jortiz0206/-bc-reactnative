# 📱 Mi Tienda de Reparaciones de Celulares - Semana 01

Aplicación móvil desarrollada con **React Native** y **Expo** para la gestión básica de órdenes de servicio, clientes y estado de reparaciones de dispositivos móviles.

Este proyecto fue construido durante la **Semana 01** del bootcamp, enfocándose en el uso de componentes core de React Native (`View`, `Text`, `Image`, `ScrollView`, `Pressable`, `SafeAreaView`, `StatusBar`), maquetación con **Flexbox**, tipado estricto con **TypeScript** y renderizado eficiente de listas.

---

## 🚀 Características

- **Header Personalizado:** Muestra el título del dominio y el subtítulo de la tienda.
- **Lista con Scroll Vertical:** Utiliza `ScrollView` para navegar dinámicamente entre las órdenes de servicio.
- **Tarjetas Reutilizables (`RepairCard`):** Muestra información clave de cada reparación (modelo del dispositivo, cliente, costo, estado e imagen de referencia).
- **Interactividad:** Feedback visual al presionar cada tarjeta mediante un cambio ligero de opacidad (`cardPressed`) y una mensaje en consola que despliega la información detallada de la orden.
- **Tipado Estricto:** Entidades estructuradas (`Repair`) mediante TypeScript sin el uso de `any`.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** React Native con Expo (SDK 53)
- **Lenguaje:** TypeScript
- **Estilos:** `StyleSheet.create` (Flexbox puro, sin `position: 'absolute'` ni librerías UI externas)
- **Gestor de Paquetes:** `pnpm`

---

## 📂 Estructura del Proyecto

```text
starter/
├── assets/                  # Iconos, splash screen y recursos gráficos
├── src/
│   ├── components/
│   │   └── RepairCard.tsx   # Componente reutilizable para cada tarjeta de reparación
│   ├── data/
│   │   └── mockData.ts      # Datos de prueba para el dominio
│   ├── screens/
│   │   └── HomeScreen.tsx   # Pantalla principal con Header y ScrollView
│   └── types/
│       └── index.ts         # Interfaces de TypeScript (Repair)
├── App.tsx                  # Punto de entrada principal
├── app.json                 # Configuración de Expo del proyecto
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto