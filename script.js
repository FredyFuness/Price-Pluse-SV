// ==========================================
// 1. CONFIGURACIÓN DEL MENÚ INTERACTIVO (D3.js)
// ==========================================

const width = window.innerWidth;
const height = window.innerHeight * 0.7;

const nodes = [
  { id: "ahorro", label: "Mapa de Ahorro", color: "#10b981", size: 80, icon: "🛒" },
  { id: "finanzas", label: "Tips Financieros", color: "#6366f1", size: 80, icon: "📈" }
];

const svg = d3.select("#interactive-menu")
    .attr("width", width)
    .attr("height", height);

const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(50))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(d => d.size + 10))
    .on("tick", ticked);

const nodeGroups = svg.selectAll(".node")
    .data(nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
    .on("click", (event, d) => showSection(d.id));

nodeGroups.append("circle")
    .attr("class", "node-circle")
    .attr("r", d => d.size)
    .attr("fill", d => d.color);

nodeGroups.append("text")
    .attr("class", "node-label")
    .attr("dy", 5)
    .text(d => d.icon + " " + d.label);

function ticked() {
    nodeGroups.attr("transform", d => `translate(${d.x},${d.y})`);
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
}
function dragged(event, d) {
    d.fx = event.x; d.fy = event.y;
}
function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null; d.fy = null;
}

// ==========================================
// 2. CONFIGURACIÓN DEL MAPA (LEAFLET)
// ==========================================

var map = L.map('map').setView([13.481, -88.179], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

var inventario = [
  { nombre: "Walmart", lat: 13.4682, lng: -88.1714, precio: 5.00 },
  { nombre: "Maxidespensa", lat: 13.4765, lng: -88.1820, precio: 4.00 },
  { nombre: "Selectos Roosevelt", lat: 13.4735, lng: -88.1765, precio: 4.50 },
  { nombre: "Selectos Terminal", lat: 13.4815, lng: -88.1840, precio: 4.55 },
  { nombre: "Selectos Oriente", lat: 13.4885, lng: -88.1630, precio: 4.60 }
];

var precios = inventario.map(t => t.precio);
var minP = Math.min(...precios);
var maxP = Math.max(...precios);

inventario.forEach(tienda => {
  var colorClass = "price-mid"; 
  if (tienda.precio === minP) colorClass = "price-low"; 
  if (tienda.precio === maxP) colorClass = "price-high"; 

  var marker = L.circleMarker([tienda.lat, tienda.lng], {
    radius: 8,
    fillColor: tienda.precio === minP ? "#10b981" : (tienda.precio === maxP ? "#ef4444" : "#f59e0b"),
    color: "#fff",
    weight: 2,
    fillOpacity: 1
  }).addTo(map);

  marker.bindTooltip(
    `<div class="custom-tooltip ${colorClass}">
        <b>${tienda.nombre}</b><br>
        <span>$${tienda.precio.toFixed(2)}</span>
     </div>`, 
    { permanent: true, direction: 'top', className: 'transparent-tooltip' }
  ).openTooltip();
});
