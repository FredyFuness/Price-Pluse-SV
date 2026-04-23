// ==========================================
// 1. Configuración Inicial del Mapa
// ==========================================

// Inicializar mapa centrado en San Miguel, El Salvador
// Coordenadas aproximadas del centro de la ciudad
// 1. Inicializar mapa
var map = L.map('map').setView([13.481, -88.179], 14);

// Cargar la capa base del mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
  maxZoom: 19
}).addTo(map);


// ==========================================
// 2. Base de Datos de Ejemplo (Locales y Precios)
// ==========================================
// Datos aproximados de ubicaciones y precios para la comparativa.
// Mantenemos siempre a Maxidespensa y agregamos Walmart y Selectos.

var inventarioHuevo = [
  {
    nombre: "Walmart San Miguel",
    cadena: "Walmart",
    lat: 13.4682, // Ubicación real aproximada (Carretera Ruta Militar)
    lng: -88.1714,
    precioHuevo: 5.00 // PRECIO ALTO (Ejemplo)
  },
  {
    nombre: "Maxidespensa San Miguel",
    cadena: "Maxidespensa",
    lat: 13.4765, // Ubicación real aproximada (Calle El Guayabal)
    lng: -88.1820,
    precioHuevo: 4.00 // PRECIO BAJO (Ejemplo)
  },
  {
    nombre: "Super Selectos Roosevelt",
    cadena: "Selectos",
    lat: 13.4735, // Ubicación real aproximada (Avenida Roosevelt)
    lng: -88.1765,
    precioHuevo: 4.50 // PRECIO MEDIO (Ejemplo)
  },
  {
    nombre: "Super Selectos Terminal",
    cadena: "Selectos",
    lat: 13.4815, // Ubicación real aproximada (Cerca de Terminal de Buses)
    lng: -88.1840,
    precioHuevo: 4.50 // PRECIO MEDIO (Ejemplo)
  },
  {
    nombre: "Super Selectos Puerta de Oriente",
    cadena: "Selectos",
    lat: 13.4885, // Ubicación real aproximada (Salida a La Unión)
    lng: -88.1630,
    precioHuevo: 4.60 // PRECIO MEDIO-ALTO (Ejemplo)
  }
// 2. Datos de los comercios (Asegúrate de incluir todos los que quieres)
var inventario = [
  { nombre: "Walmart", lat: 13.4682, lng: -88.1714, precio: 5.00 },
  { nombre: "Maxidespensa", lat: 13.4765, lng: -88.1820, precio: 4.00 },
  { nombre: "Selectos Roosevelt", lat: 13.4735, lng: -88.1765, precio: 4.50 },
  { nombre: "Selectos Terminal", lat: 13.4815, lng: -88.1840, precio: 4.55 },
  { nombre: "Selectos Oriente", lat: 13.4885, lng: -88.1630, precio: 4.60 }
];


// ==========================================
// 3. Lógica de Comparativa de Precios
// ==========================================

// Obtener todos los precios en un array simple para calcular el min/max
var preciosArray = inventarioHuevo.map(tienda => tienda.precioHuevo);

// Calcular el precio mínimo (más barato) y máximo (más caro)
var precioMinimo = Math.min(...preciosArray);
var precioMaximo = Math.max(...preciosArray);

// Función que asigna el color del semáforo basado en el precio
function obtenerColorSemaforo(precio) {
  if (precio === precioMinimo) {
    return 'point-green'; // El más barato
  } else if (precio === precioMaximo) {
    return 'point-red';   // El más caro
  } else {
    return 'point-yellow'; // Precio medio
  }
}


// ==========================================
// 4. Dibujar Etiquetas Visibles en el Mapa
// ==========================================

// Recorrer la base de datos y crear una etiqueta visible para cada local
inventarioHuevo.forEach(function(tienda) {
  
  // A. Obtener el color correspondiente para esta tienda
  var colorClase = obtenerColorSemaforo(tienda.precioHuevo);

  // B. Crear el HTML personalizado para la etiqueta (DivIcon)
  // Este HTML coincide con los estilos CSS definidos en el index.html
  var htmlEtiqueta = `
    <div class="price-tag-container">
      <div class="price-tag-label">
        <span class="shop-name">${tienda.nombre}</span>
        <span class="product-price">$${tienda.precioHuevo.toFixed(2)}</span>
      </div>
      <div class="price-tag-point ${colorClase}"></div>
    </div>
  `;

  // C. Crear el icono personalizado de Leaflet
  var iconoPersonalizado = L.divIcon({
    html: htmlEtiqueta,
    className: '', // Limpiamos las clases por defecto de Leaflet
    iconSize: [0, 0], // El tamaño lo maneja el CSS
    iconAnchor: [0, 0] // El anclaje lo maneja el CSS con transform
  });

  // D. Agregar el marcador con el icono personalizado al mapa
  L.marker([tienda.lat, tienda.lng], { icon: iconoPersonalizado })
    .addTo(map);
// 3. Lógica de colores (Semáforo)
var precios = inventario.map(t => t.precio);
var minP = Math.min(...precios);
var maxP = Math.max(...precios);

inventario.forEach(tienda => {
  // Determinar clase de color
  var colorClass = "price-mid"; // Amarillo por defecto
  if (tienda.precio === minP) colorClass = "price-low"; // Verde
  if (tienda.precio === maxP) colorClass = "price-high"; // Rojo

  // Crear marcador
  var marker = L.circleMarker([tienda.lat, tienda.lng], {
    radius: 8,
    fillColor: tienda.precio === minP ? "#10b981" : (tienda.precio === maxP ? "#ef4444" : "#f59e0b"),
    color: "#fff",
    weight: 2,
    fillOpacity: 1
  }).addTo(map);

  // Agregar etiqueta PERMANENTE
  marker.bindTooltip(
    `<div class="custom-tooltip ${colorClass}">
        <b>${tienda.nombre}</b><br>
        <span>Huevos: $${tienda.precio.toFixed(2)}</span>
     </div>`, 
    { 
      permanent: true, 
      direction: 'top',
      className: 'transparent-tooltip' 
    }
  ).openTooltip();
});
