// ==========================================
// CONFIGURACIÓN DEL MAPA COMPARATIVO (LEAFLET)
// ==========================================

// Inicializar mapa centrado en San Miguel
var map = L.map('map', {
    zoomControl: false // Opcional: quita los botones de zoom para un look más limpio
}).setView([13.481, -88.179], 14);

// Agregar control de zoom en otra posición
L.control.zoom({ position: 'bottomright' }).addTo(map);

// Cargar capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Base de Datos de Ejemplo
var inventario = [
  { nombre: "Walmart", lat: 13.4682, lng: -88.1714, precio: 5.00 },
  { nombre: "Maxidespensa", lat: 13.4765, lng: -88.1820, precio: 4.00 },
  { nombre: "Selectos Roosevelt", lat: 13.4735, lng: -88.1765, precio: 4.50 },
  { nombre: "Selectos Terminal", lat: 13.4815, lng: -88.1840, precio: 4.55 },
  { nombre: "Selectos Oriente", lat: 13.4885, lng: -88.1630, precio: 4.60 }
];

// Lógica de Comparativa (Semáforo)
var precios = inventario.map(t => t.precio);
var minP = Math.min(...precios);
var maxP = Math.max(...precios);

inventario.forEach(tienda => {
  // Asignar clase de color según el precio
  var colorClass = "price-mid"; 
  if (tienda.precio === minP) colorClass = "price-low"; 
  if (tienda.precio === maxP) colorClass = "price-high"; 

  // Crear punto físico en el mapa
  var marker = L.circleMarker([tienda.lat, tienda.lng], {
    radius: 6,
    fillColor: tienda.precio === minP ? "#10b981" : (tienda.precio === maxP ? "#ef4444" : "#f59e0b"),
    color: "#ffffff",
    weight: 2,
    fillOpacity: 1
  }).addTo(map);

  // Agregar etiqueta de texto permanente
  marker.bindTooltip(
    `<div class="custom-tooltip ${colorClass}">
        <b>${tienda.nombre}</b><br>
        <span>$${tienda.precio.toFixed(2)}</span>
     </div>`, 
    { 
      permanent: true, 
      direction: 'top', 
      className: 'transparent-tooltip',
      offset: [0, -5] // Ajusta la altura del texto sobre el punto
    }
  ).openTooltip();
});
