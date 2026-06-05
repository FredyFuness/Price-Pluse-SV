# PricePulse SV

Aplicación web para comparar precios de productos en tiendas de San Miguel, El Salvador. Permite buscar un producto y ver en qué tienda está más barato mediante un mapa interactivo con sistema semáforo.

## Tiendas incluidas

- Walmart
- Super Selectos
- Despensa de Don Juan
- PriceSmart
- Super Josué

## Tecnologías

- HTML, CSS, JavaScript (vanilla)
- [Leaflet.js](https://leafletjs.com/) — mapas interactivos
- [Firebase Authentication](https://firebase.google.com/) — login con Google (opcional)

---

## Cómo correr el proyecto

El proyecto es **100% frontend estático** (sin backend ni instalación de dependencias). Solo necesitas servir los archivos con un servidor HTTP local.

### Opción 1 — Live Server (VS Code) ✅ Recomendado

1. Abre la carpeta del proyecto en VS Code
2. Instala la extensión **Live Server** (si no la tienes)
3. Click derecho sobre `index.html` → **Open with Live Server**
4. Se abre automáticamente en `http://127.0.0.1:5500`

### Opción 2 — npx serve (Node.js)

```bash
# Requiere Node.js instalado
npx serve .
```

Luego abre el enlace que aparece en la terminal (ej. `http://localhost:3000`).

### Opción 3 — Python

```bash
# Python 3
python -m http.server 8000
```

Abre `http://localhost:8000` en el navegador.

> **Importante:** No abras `index.html` directamente con doble clic (protocolo `file://`). Firebase Authentication requiere un servidor HTTP para funcionar correctamente.

---

## Estructura del proyecto

```
Price-Pluse-SV/
├── index.html      # Pantalla principal (mapa + comparador)
├── login.html      # Pantalla de autenticación con Google
├── script.js       # Lógica del mapa, datos de productos y búsqueda
└── README.md
```

## Funcionalidades

- **Comparar precios** — busca un producto y el mapa muestra en verde la tienda más barata, amarillo la intermedia y rojo la más cara
- **Búsqueda** — barra con autocompletado + chips de categoría (Canasta Básica, Lácteos, Higiene, Electrónica)
- **Panel comparativo** — tabla ordenada con medallas 🥇🥈🥉, diferencia de precio y enlace a Google Maps
- **Login con Google** — opcional; no se requiere para buscar precios
- **Guía de inversión** — información sobre opciones de ahorro e inversión en El Salvador

## Categorías de productos

| Categoría | Ejemplos |
|---|---|
| Canasta Básica | Arroz, frijoles, aceite, azúcar, sal, tortillas, pan |
| Lácteos y Frescos | Leche, huevos, queso, crema, pollo, carne |
| Higiene | Shampoo, jabón, pasta dental, papel higiénico, detergente |
| Electrónica del Hogar | Focos LED, pilas, extensiones, ventilador, cargador |
