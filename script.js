// 1. Inicializar mapa
var map = L.map('map').setView([13.481, -88.179], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// 2. Datos de los comercios (Asegúrate de incluir todos los que quieres)
var inventario = [
  { nombre: "Walmart", lat: 13.4682, lng: -88.1714, precio: 5.00 },
  { nombre: "Maxidespensa", lat: 13.4765, lng: -88.1820, precio: 4.00 },
  { nombre: "Selectos Roosevelt", lat: 13.4735, lng: -88.1765, precio: 4.50 },
  { nombre: "Selectos Terminal", lat: 13.4815, lng: -88.1840, precio: 4.55 },
  { nombre: "Selectos Oriente", lat: 13.4885, lng: -88.1630, precio: 4.60 }
];

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
