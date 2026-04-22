// Inicializar mapa en San Miguel
var map = L.map('map').setView([13.4833, -88.1833], 14);

// Cargar capas del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Datos de Supermercados en San Miguel
var tiendas = [
  { nombre: "Walmart San Miguel", lat: 13.4682, lng: -88.1714, huevos: 3.45 },
  { nombre: "Super Selectos Terminal", lat: 13.4815, lng: -88.1840, huevos: 3.55 },
  { nombre: "Super Selectos Roosevelt", lat: 13.4735, lng: -88.1765, huevos: 3.55 },
  { nombre: "Super Selectos El Encuentro", lat: 13.4930, lng: -88.2010, huevos: 3.60 },
  { nombre: "Super Selectos Puerta de Oriente", lat: 13.4885, lng: -88.1630, huevos: 3.55 }
];

// Agregar los marcadores al mapa
tiendas.forEach(tienda => {
  L.marker([tienda.lat, tienda.lng])
    .addTo(map)
    .bindPopup(`
      <div style="text-align: center;">
        <strong style="color: #2563eb;">${tienda.nombre}</strong><br>
        <span style="font-size: 1.2em;">🥚 Huevos: $${tienda.huevos.toFixed(2)}</span><br>
        <small>Precios actualizados hoy</small>
      </div>
    `);
});
