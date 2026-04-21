// Inicializar mapa en San Miguel
var map = L.map('map').setView([13.4833, -88.1833], 13);

// Cargar mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Datos de ejemplo (vos los llenás)
var tiendas = [
  {
    nombre: "Super Selectos",
    lat: 13.48,
    lng: -88.18,
    huevos: 3.50
  },
  {
    nombre: "Despensa Familiar",
    lat: 13.49,
    lng: -88.19,
    huevos: 3.20
  }
];

// Agregar marcadores
tiendas.forEach(tienda => {
  L.marker([tienda.lat, tienda.lng])
    .addTo(map)
    .bindPopup(`
      <b>${tienda.nombre}</b><br>
      🥚 Huevos: $${tienda.huevos}
    `);
});
