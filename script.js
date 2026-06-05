// ==========================================
// DATOS — TIENDAS Y PRODUCTOS
// ==========================================

const tiendas = [
  { id: "walmart",    nombre: "Walmart",           lat: 13.4511, lng: -88.1596 },
  { id: "selectos",   nombre: "Super Selectos",    lat: 13.4793, lng: -88.1779 },
  { id: "despensa",   nombre: "Despensa Don Juan", lat: 13.4825, lng: -88.1803 },
  { id: "pricesmart", nombre: "PriceSmart",        lat: 13.4740, lng: -88.1970 },
  { id: "josue",      nombre: "Comercial Josué",   lat: 13.4803, lng: -88.1786 }
];

const productos = [
  // ── CANASTA BÁSICA ──────────────────────────────────────────────────
  { id:"arroz",      nombre:"Arroz (5 lb)",         categoria:"Canasta Básica",
    precios:{ walmart:2.50, selectos:2.75, despensa:2.40, pricesmart:2.20, josue:2.60 } },
  { id:"frijoles",   nombre:"Frijoles (2 lb)",       categoria:"Canasta Básica",
    precios:{ walmart:1.80, selectos:1.95, despensa:1.75, pricesmart:1.60, josue:1.90 } },
  { id:"aceite",     nombre:"Aceite (900 ml)",       categoria:"Canasta Básica",
    precios:{ walmart:3.25, selectos:3.50, despensa:3.10, pricesmart:2.99, josue:3.35 } },
  { id:"azucar",     nombre:"Azúcar (2 lb)",         categoria:"Canasta Básica",
    precios:{ walmart:1.20, selectos:1.30, despensa:1.15, pricesmart:1.05, josue:1.25 } },
  { id:"sal",        nombre:"Sal (1 kg)",            categoria:"Canasta Básica",
    precios:{ walmart:0.65, selectos:0.70, despensa:0.60, pricesmart:0.55, josue:0.68 } },
  { id:"tortillas",  nombre:"Tortillas (12 und)",    categoria:"Canasta Básica",
    precios:{ walmart:1.50, selectos:1.45, despensa:1.40, pricesmart:null, josue:1.35 } },
  { id:"pan",        nombre:"Pan francés (10 und)",  categoria:"Canasta Básica",
    precios:{ walmart:0.80, selectos:0.85, despensa:0.75, pricesmart:null, josue:0.70 } },
  { id:"pasta",      nombre:"Pasta (400 g)",         categoria:"Canasta Básica",
    precios:{ walmart:0.95, selectos:1.05, despensa:0.90, pricesmart:0.85, josue:1.00 } },

  // ── LÁCTEOS Y FRESCOS ───────────────────────────────────────────────
  { id:"leche",      nombre:"Leche (1 litro)",       categoria:"Lácteos y Frescos",
    precios:{ walmart:1.10, selectos:1.20, despensa:1.05, pricesmart:0.99, josue:1.15 } },
  { id:"huevos",     nombre:"Huevos (12 und)",       categoria:"Lácteos y Frescos",
    precios:{ walmart:2.80, selectos:2.95, despensa:2.70, pricesmart:2.55, josue:2.85 } },
  { id:"queso",      nombre:"Queso duro (1 lb)",     categoria:"Lácteos y Frescos",
    precios:{ walmart:3.50, selectos:3.75, despensa:3.40, pricesmart:3.20, josue:3.60 } },
  { id:"crema",      nombre:"Crema (500 ml)",        categoria:"Lácteos y Frescos",
    precios:{ walmart:1.75, selectos:1.90, despensa:1.65, pricesmart:1.55, josue:1.80 } },
  { id:"pollo",      nombre:"Pollo entero (1 lb)",   categoria:"Lácteos y Frescos",
    precios:{ walmart:1.45, selectos:1.55, despensa:1.40, pricesmart:1.35, josue:1.50 } },
  { id:"carne",      nombre:"Carne molida (1 lb)",   categoria:"Lácteos y Frescos",
    precios:{ walmart:4.25, selectos:4.50, despensa:4.10, pricesmart:3.95, josue:4.30 } },

  // ── HIGIENE ─────────────────────────────────────────────────────────
  { id:"shampoo",    nombre:"Shampoo (400 ml)",      categoria:"Higiene",
    precios:{ walmart:3.99, selectos:4.25, despensa:3.85, pricesmart:3.50, josue:4.10 } },
  { id:"jabon",      nombre:"Jabón corporal (3 und)",categoria:"Higiene",
    precios:{ walmart:2.10, selectos:2.30, despensa:2.00, pricesmart:1.85, josue:2.20 } },
  { id:"pasta_dental",nombre:"Pasta dental (100 ml)",categoria:"Higiene",
    precios:{ walmart:1.50, selectos:1.65, despensa:1.45, pricesmart:1.35, josue:1.55 } },
  { id:"papel",      nombre:"Papel higiénico (4 rol)",categoria:"Higiene",
    precios:{ walmart:2.25, selectos:2.40, despensa:2.15, pricesmart:1.99, josue:2.30 } },
  { id:"desodorante",nombre:"Desodorante (150 ml)",  categoria:"Higiene",
    precios:{ walmart:3.50, selectos:3.75, despensa:3.35, pricesmart:3.10, josue:3.60 } },
  { id:"detergente", nombre:"Detergente (1 kg)",     categoria:"Higiene",
    precios:{ walmart:3.20, selectos:3.45, despensa:3.10, pricesmart:2.90, josue:3.30 } },

  // ── ELECTRÓNICA DEL HOGAR ───────────────────────────────────────────
  { id:"foco",       nombre:"Foco LED (10W)",        categoria:"Electrónica del Hogar",
    precios:{ walmart:2.99, selectos:3.25, despensa:null, pricesmart:2.75, josue:3.10 } },
  { id:"pila_aa",    nombre:"Pilas AA (4 und)",      categoria:"Electrónica del Hogar",
    precios:{ walmart:2.50, selectos:2.75, despensa:null, pricesmart:2.25, josue:2.60 } },
  { id:"extension",  nombre:"Extension eléctrica (2m)",categoria:"Electrónica del Hogar",
    precios:{ walmart:5.99, selectos:6.50, despensa:null, pricesmart:5.50, josue:6.25 } },
  { id:"ventilador", nombre:"Ventilador de mesa",    categoria:"Electrónica del Hogar",
    precios:{ walmart:18.99, selectos:19.50, despensa:null, pricesmart:17.50, josue:19.99 } },
  { id:"cargador",   nombre:"Cargador USB (5W)",     categoria:"Electrónica del Hogar",
    precios:{ walmart:4.99, selectos:5.25, despensa:null, pricesmart:4.50, josue:5.10 } },
];

const categorias = ["Canasta Básica", "Lácteos y Frescos", "Higiene", "Electrónica del Hogar"];

// ==========================================
// MAPA
// ==========================================

var map = L.map('map', { zoomControl: false }).setView([13.478, -88.178], 14);
L.control.zoom({ position: 'bottomright' }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Marcadores: uno por tienda
var marcadores = {};

tiendas.forEach(t => {
  var marker = L.circleMarker([t.lat, t.lng], estiloNeutro()).addTo(map);
  marker.bindTooltip(
    `<div class="custom-tooltip price-neutral"><b>${t.nombre}</b><br><span>—</span></div>`,
    { permanent: true, direction: 'top', className: 'transparent-tooltip', offset: [0, -5] }
  ).openTooltip();
  marcadores[t.id] = marker;
});

function estiloNeutro() {
  return { radius: 8, fillColor: "#9ca3af", color: "#ffffff", weight: 2, fillOpacity: 1 };
}

// ==========================================
// LÓGICA PRINCIPAL
// ==========================================

var productoActual = null;

function mostrarProducto(productoId) {
  const prod = productos.find(p => p.id === productoId);
  if (!prod) return;
  productoActual = prod;

  // Precios disponibles
  const preciosValidos = tiendas.filter(t => prod.precios[t.id] !== null && prod.precios[t.id] !== undefined);
  const vals = preciosValidos.map(t => prod.precios[t.id]);
  const minP = Math.min(...vals);
  const maxP = Math.max(...vals);

  // Actualizar marcadores
  tiendas.forEach(t => {
    const precio = prod.precios[t.id];
    const marker = marcadores[t.id];

    if (precio == null) {
      marker.setStyle(estiloNeutro());
      marker.setTooltipContent(
        `<div class="custom-tooltip price-neutral"><b>${t.nombre}</b><br><span>No disponible</span></div>`
      );
      return;
    }

    let color, cls;
    if (precio === minP)      { color = "#10b981"; cls = "price-low"; }
    else if (precio === maxP) { color = "#ef4444"; cls = "price-high"; }
    else                      { color = "#f59e0b"; cls = "price-mid"; }

    marker.setStyle({ radius: 10, fillColor: color, color: "#ffffff", weight: 2.5, fillOpacity: 1 });
    marker.setTooltipContent(
      `<div class="custom-tooltip ${cls}"><b>${t.nombre}</b><br><span>$${precio.toFixed(2)}</span></div>`
    );
  });

  // Renderizar panel comparativo
  renderizarPanel(prod, minP, maxP);
}

function renderizarPanel(prod, minP, maxP) {
  const panel = document.getElementById('compare-panel');
  const tiendasOrdenadas = tiendas
    .filter(t => prod.precios[t.id] != null)
    .sort((a, b) => prod.precios[a.id] - prod.precios[b.id]);

  const ahorro = (maxP - minP).toFixed(2);
  const tiendaBarata = tiendasOrdenadas[0];
  const tiendaCara   = tiendasOrdenadas[tiendasOrdenadas.length - 1];

  const medalias = ["🥇","🥈","🥉"];

  const filas = tiendasOrdenadas.map((t, i) => {
    const precio = prod.precios[t.id];
    const diff   = (precio - minP).toFixed(2);
    const esMenor = precio === minP;
    const gmap   = `https://www.google.com/maps/dir/?api=1&destination=${t.lat},${t.lng}`;
    return `
      <tr class="${esMenor ? 'row-best' : ''}">
        <td>${medalias[i] || ""} ${t.nombre}</td>
        <td class="td-price">$${precio.toFixed(2)}</td>
        <td class="td-diff">${diff > 0 ? '+$'+diff : '✓ Mejor precio'}</td>
        <td><a href="${gmap}" target="_blank" class="btn-map-link">📍</a></td>
      </tr>`;
  }).join('');

  const noDisp = tiendas.filter(t => prod.precios[t.id] == null)
    .map(t => t.nombre).join(', ');

  panel.innerHTML = `
    <div class="panel-header">
      <span class="panel-tag">${prod.categoria}</span>
      <h3>${prod.nombre}</h3>
      <p class="savings-msg">💰 Ahorra <strong>$${ahorro}</strong> comprando en <strong>${tiendaBarata.nombre}</strong> vs ${tiendaCara.nombre}</p>
    </div>
    <div class="table-wrap">
      <table class="compare-table">
        <thead><tr><th>Tienda</th><th>Precio</th><th>vs. Mejor</th><th></th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
    </div>
    ${noDisp ? `<p class="no-disp">Sin datos: ${noDisp}</p>` : ''}
  `;
  panel.style.display = 'block';
}

// ==========================================
// BÚSQUEDA Y FILTROS (llamado desde index.html)
// ==========================================

function initBusqueda() {
  const input       = document.getElementById('search-input');
  const suggestions = document.getElementById('suggestions');
  const chips       = document.querySelectorAll('.cat-chip');

  let categoriaActiva = null;

  // Chips de categoría
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (categoriaActiva === chip.dataset.cat) {
        categoriaActiva = null;
        chip.classList.remove('active');
      } else {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        categoriaActiva = chip.dataset.cat;
      }
      input.value = '';
      mostrarSugerencias('', categoriaActiva, suggestions);
    });
  });

  // Input
  input.addEventListener('input', () => {
    mostrarSugerencias(input.value, categoriaActiva, suggestions);
  });

  input.addEventListener('focus', () => {
    mostrarSugerencias(input.value, categoriaActiva, suggestions);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-box')) {
      suggestions.style.display = 'none';
    }
  });
}

function mostrarSugerencias(query, categoria, suggestions) {
  const q = query.trim().toLowerCase();

  let lista = productos;
  if (categoria) lista = lista.filter(p => p.categoria === categoria);
  if (q)         lista = lista.filter(p => p.nombre.toLowerCase().includes(q));

  if (lista.length === 0) {
    suggestions.style.display = 'none';
    return;
  }

  suggestions.innerHTML = lista.map(p => `
    <div class="suggestion-item" onclick="seleccionarProducto('${p.id}')">
      <span class="sug-nombre">${p.nombre}</span>
      <span class="sug-cat">${p.categoria}</span>
    </div>
  `).join('');
  suggestions.style.display = 'block';
}

function seleccionarProducto(id) {
  const prod = productos.find(p => p.id === id);
  if (!prod) return;

  document.getElementById('search-input').value = prod.nombre;
  document.getElementById('suggestions').style.display = 'none';
  mostrarProducto(id);

  // En móvil scroll hacia abajo al panel
  setTimeout(() => {
    document.getElementById('compare-panel').scrollIntoView({ behavior:'smooth', block:'nearest' });
  }, 200);
}
