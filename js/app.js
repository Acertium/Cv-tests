// ─── CATÁLOGOS ─────────────────────────────────────────────────────────────────

const LIBRO_META = {
   1: { label:'T-1',  sub:'Constitución: estructura y reforma' },
   2: { label:'T-2',  sub:'Organización política del Estado' },
   3: { label:'T-3',  sub:'Poder legislativo: Cortes Generales' },
   4: { label:'T-4',  sub:'Poder ejecutivo: El Gobierno' },
   5: { label:'T-5',  sub:'Poder judicial y Tribunal Constitucional' },
   6: { label:'T-6',  sub:'Organización territorial del Estado' },
   7: { label:'T-7',  sub:'Derechos y deberes fundamentales' },
   8: { label:'T-8',  sub:'Estatuto de Autonomía C. Valenciana' },
   9: { label:'T-9',  sub:'Fuentes del derecho: jerarquía y leyes' },
  10: { label:'T-10', sub:'La Unión Europea' },
  11: { label:'T-11', sub:'Infracciones penales. Penas y sanciones' },
  12: { label:'T-12', sub:'Homicidio, lesiones y detenciones ilegales' },
  13: { label:'T-13', sub:'Delitos contra la libertad e indemnidad sexual' },
  14: { label:'T-14', sub:'Delitos contra el patrimonio' },
  15: { label:'T-15', sub:'Delitos contra la Seguridad Vial' },
  16: { label:'T-16', sub:'Violencia doméstica y de género' },
  17: { label:'T-17', sub:'Delitos contra la Administración Pública' },
  18: { label:'T-18', sub:'Derechos fundamentales y atentados a la autoridad' },
  19: { label:'T-19', sub:'LECrim I: Policía Judicial y atestado' },
  20: { label:'T-20', sub:'LECrim II: Detención y habeas corpus' },
  21: { label:'T-21', sub:'Procedimiento administrativo' },
  22: { label:'T-22', sub:'Policía administrativa: competencias municipales' },
  23: { label:'T-23', sub:'El municipio: concepto y órganos' },
  24: { label:'T-24', sub:'Órganos colegiados del gobierno municipal' },
  25: { label:'T-25', sub:'Competencias municipales y ordenanzas' },
  26: { label:'T-26', sub:'La función pública local' },
  27: { label:'T-27', sub:'Ley de Seguridad Ciudadana. Protección de datos' },
  28: { label:'T-28', sub:'LO 2/1986 de Fuerzas y Cuerpos de Seguridad' },
  29: { label:'T-29', sub:'Policía Local CV (I): Ley 17/2017' },
  30: { label:'T-30', sub:'Policía Local CV (II): AVSRE' },
  31: { label:'T-31', sub:'Régimen disciplinario de la Policía Local' },
  32: { label:'T-32', sub:'Disposiciones generales en materia de tráfico' },
  33: { label:'T-33', sub:'Reglamento General de Conductores' },
  34: { label:'T-34', sub:'Reglamento General de Vehículos' },
  35: { label:'T-35', sub:'Transportes: clases y normativa' },
  36: { label:'T-36', sub:'Alcohol y drogas en la conducción' },
  37: { label:'T-37', sub:'Accidentes de tráfico: actuación policial' },
  38: { label:'T-38', sub:'Delitos de odio y trata de personas' },
  39: { label:'T-39', sub:'Igualdad efectiva de mujeres y hombres' },
  40: { label:'T-40', sub:'Menores infractores y delincuencia juvenil' },
};

const SERIE_OP = {
   1: { label:'T-1',  sub:'Constitución Española 1978: estructura, principios básicos, reforma', available: true },
   2: { label:'T-2',  sub:'Organización política del Estado. El Gobierno. Las Cortes Generales. El Poder Judicial.', available: true },
   3: { label:'T-3',  sub:'Poder legislativo: Las Cortes Generales. Congreso y Senado.', available: true },
   4: { label:'T-4',  sub:'Poder ejecutivo: El Gobierno. Composición y funciones.', available: true },
   5: { label:'T-5',  sub:'Poder judicial y Tribunal Constitucional: composición y atribuciones.', available: true },
   6: { label:'T-6',  sub:'Organización territorial: municipios, provincias y CCAA', available: true },
   7: { label:'T-7',  sub:'Derechos y deberes fundamentales. Defensor del Pueblo. Suspensión de derechos.', available: true },
   8: { label:'T-8',  sub:'Estatut d\'Autonomia de la Comunitat Valenciana. La Generalitat. Les Corts. Competències.', available: true },
   9: { label:'T-9',  sub:'Fuentes del Derecho. Reglamentos. Ordenanzas y bandos municipales.', available: true },
  10: { label:'T-10', sub:'La Unión Europea: instituciones, competencias y ordenamiento jurídico.', available: true },
  11: { label:'T-11', sub:'Concepto de infracción penal. El delito. Personas responsables. Causas que modifican la responsabilidad. Penas y sus clases. Medidas de seguridad.', available: true },
  12: { label:'T-12', sub:'Delitos de homicidio y sus formas. Delitos de lesiones. Delitos contra la libertad: detenciones ilegales y secuestros, amenazas, coacciones. Las torturas y otros delitos contra la integridad moral.', available: true },
  13: { label:'T-13', sub:'Delitos contra la libertad e indemnidad sexual: agresiones y abusos sexuales. El acoso sexual. Exhibicionismo y provocación sexual. Delitos relativos a la prostitución.', available: true },
  14: { label:'T-14', sub:'Delitos contra el patrimonio: hurtos, robos, extorsión, robo y hurto de vehículos. Delitos de daños.', available: true },
  15: { label:'T-15', sub:'Delitos contra la seguridad vial: conducción bajo la influencia de alcohol o drogas, velocidad excesiva, conducción temeraria, conducción sin permiso, negativa a pruebas, grave riesgo y omisión del deber de socorro.', available: true },
  16: { label:'T-16', sub:'Violencia doméstica y de género: infracciones penales y medidas para la protección de las víctimas. Fundamentos básicos de la LO 1/2004.', available: true },
  17: { label:'T-17', sub:'Delitos contra la Administración Pública: prevaricación, abandono de destino, desobediencia, denegación de auxilio, infidelidad documental, cohecho, tráfico de influencias, malversación, fraudes y negociaciones prohibidas.', available: true },
  18: { label:'T-18', sub:'Delitos relativos al ejercicio de los derechos fundamentales y libertades públicas. Delitos de funcionarios contra garantías constitucionales. Atentados a la autoridad, resistencia y desobediencia.', available: true },
  19: { label:'T-19', sub:'LECrim I: Policía Judicial y atestado', available: true },
  20: { label:'T-20', sub:'LECrim II: Detención y Habeas Corpus', available: true },
  21: { label:'T-21', sub:'Procedimiento administrativo. Ley 39/2015 y 40/2015.', available: true },
  22: { label:'T-22', sub:'Policía administrativa: control ambiental, urbanismo, vía pública y videocámaras.', available: true },
  23: { label:'T-23', sub:'El Municipio: organización territorial, gran población, Alcaldía, Tenientes de Alcaldía, Concejales.', available: true },
  24: { label:'T-24', sub:'Órganos colegiados del gobierno municipal. El Ayuntamiento Pleno. La Junta de Gobierno Local. Órganos consultivos y participativos.', available: true },
  25: { label:'T-25', sub:'Competencias municipales y ordenanzas.', available: true },
  26: { label:'T-26', sub:'La función pública local.', available: true },
  27: { label:'T-27', sub:'Ley de Seguridad Ciudadana. Protección de datos.', available: true },
  28: { label:'T-28', sub:'LO 2/1986 de Fuerzas y Cuerpos de Seguridad.', available: true },
  29: { label:'T-29', sub:'La Policía Local CV (I). Declaraciones internacionales. Ley 17/2017: estructura, organización y homogeneización. Deberes y derechos.', available: true },
  30: { label:'T-30', sub:'La Policía Local CV (II). AVSRE: definición, funciones y competencias. IVASPE: definición, funciones y competencias.', available: true },
  31: { label:'T-31', sub:'Régimen disciplinario del personal funcionario de Policía Local. Infracciones y sanciones. Procedimiento sancionador.', available: true },
  32: { label:'T-32', sub:'Ley de Seguridad Vial · RDL 6/2015', available: true },
  33: { label:'T-33', sub:'Reglamento General de Conductores · RD 818/2009', available: true },
  34: { label:'T-34', sub:'Reglamento General de Vehículos · RD 2822/1998', available: true },
  35: { label:'T-35', sub:'Transportes: clases, escolar, mercancías peligrosas', available: true },
  36: { label:'T-36', sub:'Bebidas alcohólicas y drogas en la conducción', available: true },
  37: { label:'T-37', sub:'Accidentes de tráfico: concepto, causas, actuación PL', available: true },
  38: { label:'T-38', sub:'Delitos de odio · Trata de personas', available: true },
  39: { label:'T-39', sub:'LO 3/2007 Igualdad efectiva mujeres y hombres', available: true },
  40: { label:'T-40', sub:'Menores infractores · Acoso escolar · Desprotección', available: true },
};

// ─── CARGA DE DATOS ────────────────────────────────────────────────────────────
const dataCache = {};

// Clave para los overrides de edición en localStorage
const EDIT_KEY       = (group, temaId, qn) => `fusion_edit_${group}_t${temaId}_q${qn}`;
const EDIT_INDEX_KEY = (group, temaId)      => `fusion_editindex_${group}_t${temaId}`;

// Claves para estadísticas de respuestas
const STAT_KEY   = (g, t, qn) => `fusion_stat_${g}_t${t}_q${qn}`;
const STAT_INDEX = (g, t)     => `fusion_statidx_${g}_t${t}`;

// Guarda un override de pregunta en localStorage y actualiza state.questions
function saveQuestionEdit(group, temaId, qn, edited) {
  try {
    localStorage.setItem(EDIT_KEY(group, temaId, qn), JSON.stringify(edited));
    // Actualizar índice de preguntas editadas del tema
    let idx = [];
    try { idx = JSON.parse(localStorage.getItem(EDIT_INDEX_KEY(group, temaId)) || '[]'); } catch(e){}
    if (!idx.includes(qn)) { idx.push(qn); localStorage.setItem(EDIT_INDEX_KEY(group, temaId), JSON.stringify(idx)); }
  } catch(e) { showToast('Error al guardar: localStorage no disponible', 3000); }
}

// Aplica los overrides guardados sobre un array de preguntas
function applyEdits(group, temaId, questions) {
  try {
    const idx = JSON.parse(localStorage.getItem(EDIT_INDEX_KEY(group, temaId)) || '[]');
    if (!idx.length) return questions;
    return questions.map(q => {
      if (idx.includes(q.n)) {
        const raw = localStorage.getItem(EDIT_KEY(group, temaId, q.n));
        if (raw) { try { return Object.assign({}, q, JSON.parse(raw)); } catch(e){} }
      }
      return q;
    });
  } catch(e) { return questions; }
}


function loadTheme(group, temaId) {
  const cacheKey = `${group}_${temaId}`;
  if (dataCache[cacheKey]) return Promise.resolve(dataCache[cacheKey]);

  const filePath = group === 'meta'
    ? `data/meta/t${String(temaId).padStart(2,'0')}.js`
    : `data/serie/t${temaId}.js`;

  const varName = group === 'meta'
    ? `Q${String(temaId).padStart(2,'0')}`
    : `Q${temaId}`;

  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = filePath;
    s.onload = () => {
      const raw = window[varName] || [];
      dataCache[cacheKey] = applyEdits(group, temaId, raw);
      // Guardar total para el progreso global en pantalla de inicio
      try { localStorage.setItem('fusion_total_' + group + '_t' + temaId, raw.length); } catch(e) {}
      // Limpiar el script tag para no acumular en el DOM
      try { document.head.removeChild(s); } catch(e) {}
      resolve(dataCache[cacheKey]);
    };
    s.onerror = () => {
      try { document.head.removeChild(s); } catch(e) {}
      reject(new Error('No se pudo cargar el tema'));
    };
    document.head.appendChild(s);
  });
}

// ─── ESTADO ────────────────────────────────────────────────────────────────────
let state = {
  group:     null,
  temaId:    null,
  questions: [],
  current:   0,
  answers:   {},
};

const SK = (g, t) => `fusion_${g}_t${t}`;

function saveState() {
  if (!state.temaId) return;
  try {
    localStorage.setItem(SK(state.group, state.temaId), JSON.stringify({ answers: state.answers }));
  } catch(e) {
    if (e.name === 'QuotaExceededError') showToast('⚠️ Almacenamiento lleno. Algunos datos pueden no guardarse.', 4000);
  }
}
function loadSaved(group, temaId) {
  try {
    const raw = localStorage.getItem(SK(group, temaId));
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { answers: {} };
}

// ─── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHeroEmpty();
  document.getElementById('card').innerHTML = '';
  document.getElementById('nav').innerHTML  = '';
  showToast('Selecciona un tema para comenzar', 2500);
  initSubbar();

  // Inyectar overlay del simulacro en el DOM
  const simEl = document.createElement('div');
  simEl.id = 'simOverlay';
  simEl.className = 'sim-overlay';
  simEl.innerHTML = `
    <div class="sim-sheet">
      <div class="sim-header">
        <span class="sim-title">🧩 Examen simulacro</span>
        <button class="sim-close" onclick="closeSim()">✕</button>
      </div>
      <div class="sim-body" id="simBody"></div>
      <div class="sim-footer" id="simFooter"></div>
    </div>`;
  document.body.appendChild(simEl);

  // Inyectar overlay del cajón de errores (reutiliza estilos sim-*)
  const cajonEl = document.createElement('div');
  cajonEl.id = 'cajonOverlay';
  cajonEl.className = 'sim-overlay';
  cajonEl.innerHTML = `
    <div class="sim-sheet">
      <div class="sim-header">
        <span class="sim-title" id="cajonTitle">📦 Cajón de errores</span>
        <button class="sim-close" onclick="closeCajon()">✕</button>
      </div>
      <div class="sim-body" id="cajonBody"></div>
      <div class="sim-footer" id="cajonFooter"></div>
    </div>`;
  document.body.appendChild(cajonEl);

  // Modo oscuro: aplicar preferencia guardada
  initDarkMode();

  // Logo MU → volver al índice
  const icon = document.querySelector('.topbar__icon');
  if (icon) {
    icon.style.cursor = 'pointer';
    icon.title = 'Volver al índice';
    icon.addEventListener('click', goHome);
  }
});

// ─── MODO OSCURO ───────────────────────────────────────────────────────────────
const DARK_KEY = 'fusion_dark';

function initDarkMode() {
  const dark = localStorage.getItem(DARK_KEY) === '1';
  if (dark) document.documentElement.classList.add('dark');
  // Inyectar botón en el topbar
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;
  // Crear switch deslizante
  const sw = document.createElement('label');
  sw.className = 'dark-switch';
  sw.title = 'Modo oscuro';
  sw.innerHTML = '<input type="checkbox" id="darkToggle"' + (dark ? ' checked' : '') + '><span class="dark-switch__track"></span>';
  sw.querySelector('input').addEventListener('change', toggleDark);
  // Insertar antes del botón picker
  const picker = document.getElementById('pickerBtn');
  if (picker) topbar.insertBefore(sw, picker);
  else topbar.appendChild(sw);
}

function toggleDark() {
  const chk = document.getElementById('darkToggle');
  const isDark = chk ? chk.checked : document.documentElement.classList.contains('dark');
  if (isDark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem(DARK_KEY, isDark ? '1' : '0');
}

// ─── MANUAL DE USUARIO ───────────────────────────────
function openManual() {
  const overlay = document.getElementById('manualOverlay');
  const frame   = document.getElementById('manualFrame');
  if (!overlay || !frame) return;
  // Cargar el manual solo la primera vez
  if (!frame.src || frame.src === window.location.href) {
    frame.src = 'manual.html';
  }
  overlay.classList.add('open');
  lockScroll();
}

function closeManual() {
  const overlay = document.getElementById('manualOverlay');
  if (overlay) overlay.classList.remove('open');
  unlockScroll();
}

function goHome() {
  // Cerrar cualquier overlay activo
  if (document.getElementById('examOverlay').classList.contains('open')) closeExam();
  if (document.getElementById('simOverlay').classList.contains('open'))  closeSim();
  const cajonOv = document.getElementById('cajonOverlay');
  if (cajonOv && cajonOv.classList.contains('open')) closeCajon();
  state.group     = null;
  state.temaId    = null;
  state.questions = [];
  state.current   = 0;
  state.answers   = {};
  renderHeroEmpty();
  document.getElementById('card').innerHTML = '';
  document.getElementById('nav').innerHTML  = '';
  updatePickerBtn();
}

// ─── PICKER ────────────────────────────────────────────────────────────────────
function openPicker() {
  renderPickerBody();
  document.getElementById('pickerOverlay').classList.add('open');
  lockScroll();
}
function closePicker() {
  document.getElementById('pickerOverlay').classList.remove('open');
  unlockScroll();
}
function handleOverlayClick(e) {
  if (e.target.id === 'pickerOverlay') closePicker();
}

function renderPickerBody() {
  const body = document.getElementById('pickerBody');

  // -- Libro Meta --
  const metaChips = Object.entries(LIBRO_META).map(([id, info]) => {
    const n = Number(id);
    const isActive = state.group === 'meta' && state.temaId === n;
    return `<button class="picker-chip${isActive ? ' picker-chip--active' : ''}"
      onclick="selectTema('meta', ${n})" title="${escHtml(info.sub)}">
      <span class="picker-chip__label">${info.label}</span>
      <span class="picker-chip__sub">${info.sub}</span>
    </button>`;
  }).join('');

  // -- Serie Oposiciones --
  const serieChips = Object.entries(SERIE_OP).map(([id, info]) => {
    const n = Number(id);
    const locked = !info.available;
    const isActive = state.group === 'serie' && state.temaId === n;
    return `<button class="picker-chip${isActive ? ' picker-chip--active' : ''}${locked ? ' picker-chip--locked' : ''}"
      ${locked ? 'disabled' : `onclick="selectTema('serie', ${n})"`} title="${escHtml(info.sub)}">
      <span class="picker-chip__label">${info.label}</span>
      <span class="picker-chip__sub">${locked ? 'Próximamente' : info.sub}</span>
    </button>`;
  }).join('');

  body.innerHTML = `
    <div class="picker-group">
      <div class="picker-group-label"><span>📗</span> Libro Meta</div>
      <div class="picker-grid">${metaChips}</div>
    </div>
    <div class="picker-divider"></div>
    <div class="picker-group">
      <div class="picker-group-label"><span>📘</span> Serie Oposiciones</div>
      <div class="picker-grid">${serieChips}</div>
    </div>`;
}

// ─── SELECCIÓN DE TEMA ─────────────────────────────────────────────────────────
async function selectTema(group, temaId) {
  closePicker();
  if (state.group === group && state.temaId === temaId) return;
  try {
    showToast('Cargando tema…', 99999);
    const qs = await loadTheme(group, temaId);
    hideToast();
    const saved = loadSaved(group, temaId);
    state = { group, temaId, questions: qs, current: 0, answers: saved.answers || {} };
    updatePickerBtn();
    renderHero();
    renderQuestion();
  } catch(e) {
    hideToast();
    showToast('Error al cargar el tema', 3000);
  }
}

function updatePickerBtn() {
  const btn = document.getElementById('pickerBtn');
  if (!btn) return;
  if (!state.temaId) { btn.title = 'Seleccionar tema'; return; }
  const catalog = state.group === 'meta' ? LIBRO_META : SERIE_OP;
  const info    = catalog[state.temaId];
  const grpName = state.group === 'meta' ? 'Libro Meta' : 'Serie Oposiciones';
  btn.title = `${info.label} · ${grpName}`;
}

// ─── SUBBAR: racha + simulacro + estadisticas ──────────────────────────────────
function initSubbar() {
  updateSubbarStreak();
  updateCajonBtn();
}

function updateSubbarStreak() {
  const s      = getStreak();
  const today  = todayStr();
  const yStr   = yesterdayStr();
  const alive  = s.lastDay === today || s.lastDay === yStr;
  const count  = alive ? s.count : 0;
  const active = s.lastDay === today;
  const flame  = document.getElementById('subbarFlame');
  const lbl    = document.getElementById('subbarStreakLabel');
  if (flame) flame.textContent = count > 0 ? '🔥' : '💤';
  if (lbl)   lbl.textContent   = count > 0 ? count + ' día' + (count > 1 ? 's' : '') : 'Empieza';
  const btn = document.getElementById('subbarStreak');
  if (btn) btn.classList.toggle('subbar__btn--warn', count > 0 && !active);
}

function openStreakModal() {
  const s      = getStreak();
  const today  = todayStr();
  const yStr   = yesterdayStr();
  const alive  = s.lastDay === today || s.lastDay === yStr;
  const count  = alive ? s.count : 0;
  const active = s.lastDay === today;
  const body   = document.getElementById('streakModalBody');
  if (!body) return;

  const estados = [
    { icon: '🔥', titulo: 'Racha activa — practicado hoy',   desc: 'Has respondido preguntas hoy. ¡Sigue así!' },
    { icon: '🔥⚠️', titulo: 'Racha en peligro',          desc: 'No has practicado hoy. Si no lo haces, perderás tu racha.' },
    { icon: '💤',    titulo: 'Sin racha',                   desc: 'No tienes racha activa. Responde cualquier pregunta para empezar.' },
  ];

  const estadoActual = count === 0 ? 2 : active ? 0 : 1;

  body.innerHTML =
    '<div class="streak-modal__current">'
    + '<span class="streak-modal__big-flame">' + (count > 0 ? '🔥' : '💤') + '</span>'
    + '<div>'
    + '<p class="streak-modal__count">' + (count > 0 ? count + ' día' + (count > 1 ? 's' : '') + ' de racha' : 'Sin racha activa') + '</p>'
    + '<p class="streak-modal__since">' + (s.lastDay ? 'Última sesión: ' + s.lastDay : 'Nunca has practicado') + '</p>'
    + '</div></div>'
    + '<hr class="streak-modal__sep">'
    + '<p class="streak-modal__section">Estados posibles</p>'
    + estados.map((e, i) =>
        '<div class="streak-modal__estado' + (i === estadoActual ? ' streak-modal__estado--active' : '') + '">'
        + '<span class="streak-modal__estado-icon">' + e.icon + '</span>'
        + '<div><p class="streak-modal__estado-title">' + e.titulo + '</p>'
        + '<p class="streak-modal__estado-desc">' + e.desc + '</p></div>'
        + '</div>'
      ).join('');

  document.getElementById('streakModalOverlay').classList.add('open');
  lockScroll();
}

function closeStreakModal() {
  document.getElementById('streakModalOverlay').classList.remove('open');
  unlockScroll();
}

function openGlobalStats() {
  const body = document.getElementById('globalStatsBody');
  if (!body) return;

  const cats = [
    { group:'meta',  catalog: LIBRO_META },
    { group:'serie', catalog: SERIE_OP   },
  ];
  let gSeen=0, gWrong=0, temasRows=[];

  cats.forEach(({group, catalog}) => {
    Object.entries(catalog).forEach(([id, info]) => {
      if (info.available === false) return;
      const tid   = Number(id);
      const tTot  = parseInt(localStorage.getItem('fusion_total_'+group+'_t'+tid)||'0');
      if (!tTot) return;
      const idx   = JSON.parse(localStorage.getItem(STAT_INDEX(group,tid))||'[]');
      const seen  = idx.length;
      if (!seen) return;
      let wrong = 0;
      idx.forEach(qn => {
        try { const s=JSON.parse(localStorage.getItem(STAT_KEY(group,tid,qn))||'{}'); wrong+=s.wrong||0; } catch(e){}
      });
      const pAci = Math.round((seen-wrong)/seen*100);
      const color = pAci>=70?'#16a34a':pAci>=50?'#d97706':'#dc2626';
      gSeen+=seen; gWrong+=wrong;
      temasRows.push('<div class="gstat-row">'
        +'<span class="gstat-label">'+info.label+'</span>'
        +'<span class="gstat-pct" style="color:'+color+'">'+pAci+'%</span>'
        +'<span class="gstat-prog">'+seen+'/'+tTot+' resp.</span>'
        +'</div>');
    });
  });

  if (temasRows.length === 0) {
    body.innerHTML = '<p class="gstat-empty">Aún no hay datos. ¡Empieza a practicar!</p>';
  } else {
    const pG = gSeen>0?Math.round((gSeen-gWrong)/gSeen*100):0;
    const colorG = pG>=70?'#16a34a':pG>=50?'#d97706':'#dc2626';
    body.innerHTML =
      '<div class="gstat-global">'
      +'<span class="gstat-global__pct" style="color:'+colorG+'">'+pG+'%</span>'
      +'<span class="gstat-global__label">Acierto global</span>'
      +'<span class="gstat-global__sub">'+gSeen+' resp. · '+gWrong+' fallos</span>'
      +'</div>'
      +'<div class="gstat-list">' + temasRows.join('') + '</div>'
      +'<button class="btn btn--export-modal" onclick="exportStats()">📄 Exportar informe PDF</button>';
  }

  document.getElementById('globalStatsOverlay').classList.add('open');
  lockScroll();
}

function closeGlobalStats() {
  document.getElementById('globalStatsOverlay').classList.remove('open');
  unlockScroll();
}

// ─── HERO ──────────────────────────────────────────────────────────────────────

// Genera los chips de un catálogo para la pantalla inicial
// ─── PROGRESO POR TEMA (para chips de inicio) ──────────────────────────────────
function getThemeProgress(group, temaId) {
  try {
    const total = parseInt(localStorage.getItem('fusion_total_' + group + '_t' + temaId) || '0');
    if (!total) return null;
    const idx = JSON.parse(localStorage.getItem(STAT_INDEX(group, temaId)) || '[]');
    const seen = idx.length;
    const pct  = Math.round(seen / total * 100);
    return { seen, total, pct };
  } catch(e) { return null; }
}

function buildHomeChips(group, catalog) {
  return Object.entries(catalog).map(([id, info]) => {
    const n = parseInt(id);
    const locked = info.available === false; // solo SERIE_OP tiene 'available'
    const isActive = state.group === group && state.temaId === n;
    const prog = locked ? null : getThemeProgress(group, n);
    const progHTML = prog && prog.total > 0
      ? `<span class="home-chip__prog"><span class="home-chip__prog-bar" style="width:${prog.pct}%"></span></span>`
      : '';
    return `<button class="home-chip${locked ? ' home-chip--locked' : ''}${isActive ? ' home-chip home-chip--active' : ''}"
      ${locked ? 'disabled' : `onclick="selectTema('${group}', ${n})"`}
      title="${escHtml(info.sub)}">
      <span class="home-chip__label">${info.label}</span>
      <span class="home-chip__sub">${locked ? 'Próximamente' : info.sub}</span>
      ${progHTML}
    </button>`;
  }).join('');
}

// ─── RACHA DIARIA ──────────────────────────────────────────────────────────────
const STREAK_KEY = 'fusion_streak';

function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function getStreak() {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { count: 0, lastDay: null };
    return JSON.parse(raw);
  } catch(e) { return { count: 0, lastDay: null }; }
}

function touchStreak() {
  try {
    const today = todayStr();
    const s = getStreak();
    if (s.lastDay === today) return; // ya contado hoy
    const yStr = yesterdayStr();
    const newCount = s.lastDay === yStr ? s.count + 1 : 1;
    localStorage.setItem(STREAK_KEY, JSON.stringify({ count: newCount, lastDay: today }));
    updateSubbarStreak();
  } catch(e) {}
}


function renderHeroEmpty() {
  const metaChips  = buildHomeChips('meta', LIBRO_META);
  const serieChips = buildHomeChips('serie', SERIE_OP);
  document.getElementById('hero').innerHTML = `
    <div class="home-wrap">
      <div class="home-title"><span>📗</span> Libro Meta</div>
      <div class="home-grid">${metaChips}</div>
      <div class="home-title"><span>📘</span> Serie Oposiciones</div>
      <div class="home-grid">${serieChips}</div>
    </div>`;
}

// ─── PANEL DE ESTADÍSTICAS DEL TEMA ────────────────────────────────────────────
function buildStatsPanel(group, temaId, questions) {
  try {
    const stats = questions.map(q => {
      try {
        const raw = localStorage.getItem(STAT_KEY(group, temaId, q.n));
        if (!raw) return { q, seen: 0, wrong: 0, rate: 0 };
        const s = JSON.parse(raw);
        return { q, seen: s.seen, wrong: s.wrong, rate: s.seen > 0 ? s.wrong / s.seen : 0 };
      } catch(e) { return { q, seen: 0, wrong: 0, rate: 0 }; }
    });
    const totalQ     = questions.length;
    const seenQ      = stats.filter(s => s.seen > 0).length;
    const pctSeen    = totalQ ? Math.round(seenQ / totalQ * 100) : 0;
    const totalSeen  = stats.reduce((a, s) => a + s.seen, 0);
    const totalWrong = stats.reduce((a, s) => a + s.wrong, 0);
    const pctAcierto = totalSeen > 0 ? Math.round((totalSeen - totalWrong) / totalSeen * 100) : null;
    if (seenQ === 0) return '';
    const top5 = stats.filter(s => s.seen > 0 && s.wrong > 0)
      .sort((a, b) => b.rate - a.rate).slice(0, 5);
    const colorA = pctAcierto === null ? '' :
      pctAcierto >= 70 ? 'stats-badge--ok' :
      pctAcierto >= 50 ? 'stats-badge--mid' : 'stats-badge--err';
    const badgeA = pctAcierto !== null
      ? '<span class="stats-badge ' + colorA + '">' + pctAcierto + '% acierto</span>' : '';
    const top5HTML = top5.length === 0
      ? '<p class="stats-empty">¡Sin errores registrados todavía!</p>'
      : top5.map(s => {
          const pct   = Math.round(s.rate * 100);
          const short = s.q.q.length > 80 ? s.q.q.slice(0, 80) + '…' : s.q.q;
          const idx   = state.questions.indexOf(s.q);
          return '<div class="stats-fail-item" onclick="goTo(' + idx + ')">' +
            '<span class="stats-fail-pct">' + pct + '%</span>' +
            '<span class="stats-fail-q">P.' + s.q.n + ' — ' + escHtml(short) + '</span></div>';
        }).join('');
    return '<div class="stats-panel">'
      + '<div class="stats-panel__header">'
      + '<span class="stats-panel__title">📊 Estadísticas</span>'
      + '<div class="stats-panel__badges">'
      + '<span class="stats-badge stats-badge--neutral">' + seenQ + '/' + totalQ + ' respondidas (' + pctSeen + '%)</span>'
      + badgeA + '</div></div>'
      + (top5.length > 0
        ? '<details class="stats-details">'
          + '<summary class="stats-details__summary">🔴 Preguntas más falladas</summary>'
          + '<div class="stats-details__body">' + top5HTML + '</div>'
          + '</details>'
        : '')
      + '</div>';
  } catch(e) { return ''; }
}

function renderHero() {
  const catalog = state.group === 'meta' ? LIBRO_META : SERIE_OP;
  const t  = catalog[state.temaId];
  const qs = state.questions;
  const answered = Object.keys(state.answers).length;
  const correct  = Object.entries(state.answers).filter(([i, ans]) => ans === qs[i]?.correct).length;
  const failed   = answered - correct;
  const pct      = qs.length ? Math.round(answered / qs.length * 100) : 0;
  const grpBadge = state.group === 'meta' ? '📗 Libro Meta' : '📘 Serie Oposiciones';

  // Nota del tema: solo cuando todas las preguntas estén respondidas
  const allAnswered = qs.length > 0 && answered === qs.length;
  const themeRaw    = allAnswered ? ((correct - failed * 0.25) / qs.length) * 10 : null;
  const themeScore  = themeRaw !== null ? Math.max(0, Math.round(themeRaw * 100) / 100) : null;
  const themePassed = themeScore !== null && themeScore >= 5;
  const themeStr    = themeScore !== null ? themeScore.toFixed(2).replace('.', ',') : '--,--';
  const themeClass  = !allAnswered ? 'theme-score--hidden' : (themePassed ? 'theme-score--pass' : 'theme-score--fail');

  document.getElementById('hero').innerHTML = `
    <div class="hero__top">
      <div class="hero__text">
        <h2 class="hero__title">${t.label}</h2>
        <p class="hero__sub">${t.sub}</p>
      </div>
      <button class="btn btn--pdf" onclick="generatePDF()" title="Soluciones PDF">📄 Soluciones</button>
    </div>
    <div class="hero__stats">
      <div class="stat"><span class="stat__n">${answered}</span><span class="stat__l">Contestadas</span></div>
      <div class="stat"><span class="stat__n stat__n--ok">${correct}</span><span class="stat__l">Acertadas</span></div>
      <div class="stat"><span class="stat__n stat__n--err">${failed}</span><span class="stat__l">Falladas</span></div>
      <div class="stat"><span class="stat__n">${qs.length}</span><span class="stat__l">Total</span></div>
      <div class="theme-score ${themeClass}">
        <span class="theme-score__n">${themeStr}</span>
        <span class="theme-score__l">Nota</span>
      </div>
    </div>
    <div class="progress">
      <div class="progress__bar" style="width:${pct}%"></div>
      <span class="progress__pct">${pct}%</span>
    </div>
    <div class="hero__actions">
      <button class="btn btn--reset" onclick="resetConfirm()">↺ Reiniciar tema</button>
      <button class="btn btn--exam" onclick="startExam()" title="Examen cronometrado: 10 preguntas aleatorias · 10 minutos">⏱</button>
      <button class="btn btn--weak" onclick="startWeakExam()" title="Repaso inteligente: más probabilidad a las preguntas más falladas">🎯</button>
      <button class="btn btn--favexam" onclick="startFavExam()" title="Repasar preguntas marcadas">❤️</button>
    </div>
    ${buildStatsPanel(state.group, state.temaId, state.questions)}`;
}

// ─── PREGUNTA ──────────────────────────────────────────────────────────────────
// ─── FAVORITOS ─────────────────────────────────────────────────────────────────
const FAV_KEY   = (g, t, qn) => 'fusion_fav_' + g + '_t' + t + '_q' + qn;
const FAV_INDEX = (g, t)     => 'fusion_favidx_' + g + '_t' + t;
function isFav(group, temaId, qn) {
  try { return localStorage.getItem(FAV_KEY(group, temaId, qn)) === '1'; } catch(e) { return false; }
}
function toggleFav(group, temaId, qn) {
  try {
    const key = FAV_KEY(group, temaId, qn);
    const was = localStorage.getItem(key) === '1';
    if (was) {
      localStorage.removeItem(key);
      let idx = JSON.parse(localStorage.getItem(FAV_INDEX(group, temaId)) || '[]');
      idx = idx.filter(n => n !== qn);
      localStorage.setItem(FAV_INDEX(group, temaId), JSON.stringify(idx));
      showToast('🤍 Marcador eliminado', 1500);
    } else {
      localStorage.setItem(key, '1');
      let idx = JSON.parse(localStorage.getItem(FAV_INDEX(group, temaId)) || '[]');
      if (!idx.includes(qn)) idx.push(qn);
      localStorage.setItem(FAV_INDEX(group, temaId), JSON.stringify(idx));
      showToast('❤️ Pregunta marcada', 1500);
    }
    renderQuestion();
  } catch(e) {}
}
function getFavQuestions(group, temaId, questions) {
  try {
    const idx = JSON.parse(localStorage.getItem(FAV_INDEX(group, temaId)) || '[]');
    return questions.filter(q => idx.includes(q.n));
  } catch(e) { return []; }
}

function renderQuestion() {
  const qs  = state.questions;
  const idx = state.current;
  const q   = qs[idx];
  if (!q) return;

  const answered = state.answers[idx];

  // Detectar si esta pregunta tiene ediciones guardadas
  const hasEdit = !!localStorage.getItem(EDIT_KEY(state.group, state.temaId, q.n));

  const favActive = isFav(state.group, state.temaId, q.n);
  document.getElementById('nav').innerHTML = `
    <button class="btn btn--nav" onclick="goTo(${idx-1})" ${idx===0?'disabled':''}>← Anterior</button>
    <button class="btn btn--index" onclick="toggleIndex()">⊞ ${idx+1}/${qs.length}</button>
    <button class="btn btn--nav" onclick="goTo(${idx+1})" ${idx===qs.length-1?'disabled':''}>Siguiente →</button>`;

  const opts = ['a','b','c','d'];
  let optHTML = opts.map(letter => {
    if (!q.o[letter]) return '';
    let cls = 'opt';
    if (answered) {
      if (letter === q.correct)    cls += ' opt--correct';
      else if (letter === answered) cls += ' opt--wrong';
      else                          cls += ' opt--dim';
    }
    return `<button class="opt ${cls}" onclick="answer('${letter}')" ${answered?'disabled':''}>
      <span class="opt__letter">${letter.toUpperCase()}</span>
      <span class="opt__text">${escHtml(q.o[letter])}</span>
    </button>`;
  }).join('');

  let feedHTML = '';
  if (answered && q.why) {
    const whyText = q.why[q.correct] || '';
    const isOk = answered === q.correct;
    feedHTML = `
      <div class="feedback feedback--${isOk ? 'ok' : 'err'}">
        <p class="feedback__verdict">${isOk ? '✓ Correcto' : '✗ Incorrecto — La respuesta correcta es la ' + q.correct.toUpperCase()}</p>
        <p class="feedback__why">${escHtml(whyText)}</p>
      </div>
`;
  }

  document.getElementById('card').innerHTML = `
    <div class="q__header">
      <p class="q__num">Pregunta ${q.n} de ${qs.length}</p>
      <div class="q__header-actions">
        <button class="btn--reset-q ${answered ? '' : 'btn--reset-q--hidden'}" onclick="resetQuestion(${idx})" title="Reiniciar esta pregunta">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
        <button class="btn--fav-inline ${favActive ? 'btn--fav-inline--on' : ''}" onclick="toggleFav('${state.group}',${state.temaId},${q.n})" title="${favActive ? 'Quitar marcador' : 'Marcar pregunta'}">${favActive ? '❤️' : '🤍'}</button>
        <button class="btn--edit${hasEdit ? ' btn--edit--modified' : ''}" onclick="openEditModal(${idx})" title="Editar pregunta">✏️${hasEdit ? ' <span class="edit-badge">Editada</span>' : ''}</button>
      </div>
    </div>
    <p class="q__text">${escHtml(q.q)}</p>
    <div class="opts">${optHTML}</div>
    ${feedHTML}`;
}

// ─── MODAL DE EDICIÓN ──────────────────────────────────────────────────────────
function openEditModal(idx) {
  const q = state.questions[idx];
  if (!q) return;

  // Construir filas de opciones
  const optRows = ['a','b','c','d'].map(l => `
    <div class="edit-row">
      <label class="edit-label">
        <input type="radio" name="edit-correct" value="${l}" ${q.correct===l?'checked':''}>
        <span class="edit-opt-badge edit-opt-badge--${l}">${l.toUpperCase()}</span>
        <span class="edit-opt-badge-hint">Correcta</span>
      </label>
      <textarea class="edit-textarea" id="edit-o-${l}" rows="2">${escHtml(q.o[l]||'')}</textarea>
    </div>`).join('');

  const modal = document.createElement('div');
  modal.id = 'editModal';
  modal.className = 'edit-overlay';
  modal.innerHTML = `
    <div class="edit-sheet">
      <div class="edit-header">
        <span class="edit-title">✏️ Editar pregunta ${q.n}</span>
        <button class="edit-close" onclick="closeEditModal()">✕</button>
      </div>
      <div class="edit-body">
        <div class="edit-section-label">Enunciado</div>
        <textarea class="edit-textarea edit-textarea--question" id="edit-q" rows="4">${escHtml(q.q)}</textarea>

        <div class="edit-section-label" style="margin-top:18px">Opciones <span class="edit-hint">(marca el radio de la correcta)</span></div>
        ${optRows}

        <div class="edit-section-label" style="margin-top:18px">Explicación (why)</div>
        <textarea class="edit-textarea" id="edit-why" rows="3">${escHtml((q.why&&q.why[q.correct])||'')}</textarea>

        <div class="edit-actions">
          <button class="edit-btn edit-btn--cancel" onclick="closeEditModal()">Cancelar</button>
          ${localStorage.getItem(EDIT_KEY(state.group, state.temaId, q.n))
            ? `<button class="edit-btn edit-btn--delete" onclick="deleteQuestionEdit(${idx})">🗑 Quitar edición</button>`
            : ''}
          <button class="edit-btn edit-btn--save" onclick="saveEditFromModal(${idx})">Guardar cambios</button>
        </div>
      </div>
    </div>`;

  modal.onclick = (e) => { if (e.target === modal) closeEditModal(); };
  document.body.appendChild(modal);
  lockScroll();
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeEditModal() {
  const m = document.getElementById('editModal');
  if (m) m.remove();
  unlockScroll();
}

function saveEditFromModal(idx) {
  const q = state.questions[idx];
  if (!q) return;

  const newQ    = document.getElementById('edit-q').value.trim();
  const newOA   = document.getElementById('edit-o-a').value.trim();
  const newOB   = document.getElementById('edit-o-b').value.trim();
  const newOC   = document.getElementById('edit-o-c').value.trim();
  const newOD   = document.getElementById('edit-o-d').value.trim();
  const newWhy  = document.getElementById('edit-why').value.trim();
  const correctSel = document.querySelector('input[name="edit-correct"]:checked');
  const newCorrect = correctSel ? correctSel.value : q.correct;

  if (!newQ) { showToast('El enunciado no puede estar vacío', 2000); return; }

  const edited = {
    q:       newQ,
    o:       { a: newOA, b: newOB, c: newOC, d: newOD },
    correct: newCorrect,
    why:     { [newCorrect]: newWhy }
  };

  // Guardar en localStorage
  saveQuestionEdit(state.group, state.temaId, q.n, edited);

  // Actualizar state.questions en memoria
  state.questions[idx] = Object.assign({}, q, edited);

  // Limpiar caché para que al recargar tema se lean los overrides
  const cacheKey = `${state.group}_${state.temaId}`;
  delete dataCache[cacheKey];

  closeEditModal();
  renderQuestion();
  showToast('✓ Pregunta guardada', 2000);
}

function deleteQuestionEdit(idx) {
  const q = state.questions[idx];
  if (!q) return;
  try {
    localStorage.removeItem(EDIT_KEY(state.group, state.temaId, q.n));
    let editIdx = JSON.parse(localStorage.getItem(EDIT_INDEX_KEY(state.group, state.temaId)) || '[]');
    editIdx = editIdx.filter(n => n !== q.n);
    localStorage.setItem(EDIT_INDEX_KEY(state.group, state.temaId), JSON.stringify(editIdx));
  } catch(e){}

  // Restaurar la pregunta original desde el archivo JS (sin override)
  const cacheKey = `${state.group}_${state.temaId}`;
  const varName  = state.group === 'meta'
    ? `Q${String(state.temaId).padStart(2,'0')}`
    : `Q${state.temaId}`;
  const originalArr = window[varName] || [];
  const originalQ   = originalArr.find(item => item.n === q.n);
  if (originalQ) state.questions[idx] = originalQ;

  // Limpiar caché para que próximas cargas no usen versión editada
  delete dataCache[cacheKey];

  closeEditModal();
  renderQuestion();
  showToast('Edición eliminada — pregunta restaurada', 2500);
}

// ─── RESPONDER ─────────────────────────────────────────────────────────────────
function answer(letter) {
  const idx = state.current;
  if (state.answers[idx] !== undefined) return;
  state.answers[idx] = letter;
  recordAnswer(state.group, state.temaId, state.questions[idx], letter);
  saveState();
  renderHero();
  renderQuestion();
}

// ─── NAVEGACIÓN ────────────────────────────────────────────────────────────────
function goTo(idx) {
  const qs = state.questions;
  if (idx < 0 || idx >= qs.length) return;
  state.current = idx;
  renderQuestion();
  document.getElementById('card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ─── ÍNDICE MODAL ──────────────────────────────────────────────────────────────
function toggleIndex() {
  const existing = document.getElementById('idx-modal');
  if (existing) { existing.remove(); return; }

  const qs = state.questions;
  const cells = qs.map((q, i) => {
    const ans = state.answers[i];
    let cls = 'idx-cell';
    if (ans) cls += (ans === q.correct ? ' idx-cell--ok' : ' idx-cell--err');
    return `<button class="${cls}" onclick="goTo(${i});document.getElementById('idx-modal').remove()">${q.n}</button>`;
  }).join('');

  const modal = document.createElement('div');
  modal.id = 'idx-modal';
  modal.className = 'idx-modal';
  modal.innerHTML = `
    <div class="idx-modal__inner">
      <div class="idx-modal__head">
        <span>Índice de preguntas</span>
        <button onclick="document.getElementById('idx-modal').remove()">✕</button>
      </div>
      <div class="idx-grid">${cells}</div>
    </div>`;
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  document.body.appendChild(modal);
}

// ─── RESET ─────────────────────────────────────────────────────────────────────
let resetTimer = null, resetStep = 0;

function resetQuestion(idx) {
  if (state.answers[idx] === undefined) return;
  delete state.answers[idx];
  saveState();
  renderHero();
  renderQuestion();
  showToast('Pregunta reiniciada', 1500);
}

function resetConfirm() {
  const btn = document.querySelector('.btn--reset');
  if (!btn) return;
  if (resetStep === 0) {
    resetStep = 1;
    btn.textContent = '¿Seguro? (confirmar)';
    btn.classList.add('btn--reset-warn');
    resetTimer = setTimeout(() => {
      resetStep = 0;
      btn.textContent = '↺ Reiniciar tema';
      btn.classList.remove('btn--reset-warn');
    }, 3000);
  } else {
    clearTimeout(resetTimer); resetStep = 0;
    state.answers = {}; state.current = 0;
    saveState(); renderHero(); renderQuestion();
    showToast('Tema reiniciado', 2000);
  }
}

// ─── PDF ───────────────────────────────────────────────────────────────────────
// ─── EXPORTAR ESTADÍSTICAS (PDF) ───────────────────────────────────────────────
function exportStats() {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { showToast('PDF no disponible', 2000); return; }

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const W   = 210;
  const mL  = 14, mR = 14;
  let y     = 20;

  const streak  = getStreak();
  const today   = todayStr();
  const yStr    = yesterdayStr();
  const alive   = streak.lastDay === today || streak.lastDay === yStr;
  const streakN = alive ? streak.count : 0;

  // Cabecera
  doc.setFillColor(26,26,26);
  doc.rect(0, 0, W, 18, 'F');
  doc.setTextColor(255,255,255);
  doc.setFontSize(13); doc.setFont('helvetica','bold');
  doc.text('Test Movilidad Urbana \u2014 Informe de Resultados', mL, 12);
  doc.setFontSize(8); doc.setFont('helvetica','normal');
  doc.text(new Date().toLocaleDateString('es-ES',{day:'2-digit',month:'long',year:'numeric'}), W-mR, 12, {align:'right'});
  doc.setTextColor(40,40,40);
  y = 26;

  // Racha
  doc.setFontSize(10); doc.setFont('helvetica','bold');
  doc.text('Racha de estudio: ' + (streakN > 0 ? streakN + ' dia' + (streakN>1?'s':'') + ' consecutivos' : 'Sin racha activa'), mL, y);
  y += 10;

  // Datos por tema
  const allRows = [];
  const cats = [
    { group:'meta',  catalog: LIBRO_META },
    { group:'serie', catalog: SERIE_OP   },
  ];
  let gSeen=0, gWrong=0, gTotal=0;

  cats.forEach(({group, catalog}) => {
    Object.entries(catalog).forEach(([id, info]) => {
      if (info.available === false) return;
      const tid   = Number(id);
      const tTot  = parseInt(localStorage.getItem('fusion_total_'+group+'_t'+tid)||'0');
      if (!tTot) return;
      const idx   = JSON.parse(localStorage.getItem(STAT_INDEX(group,tid))||'[]');
      const seen  = idx.length;
      if (!seen) return;
      let wrong = 0;
      idx.forEach(qn => {
        try { const s=JSON.parse(localStorage.getItem(STAT_KEY(group,tid,qn))||'{}'); wrong+=s.wrong||0; } catch(e){}
      });
      const pSeen = Math.round(seen/tTot*100);
      const pAci  = Math.round((seen-wrong)/seen*100);
      gSeen+=seen; gWrong+=wrong; gTotal+=tTot;
      allRows.push([info.label, seen+'/'+tTot+' ('+pSeen+'%)', pAci+'%', wrong>0?wrong+' fallos':'Sin fallos']);
    });
  });

  if (allRows.length === 0) {
    showToast('Aun no hay datos que exportar.', 3000);
    return;
  }
  const pctG = gSeen>0 ? Math.round((gSeen-gWrong)/gSeen*100) : 0;
  allRows.push(['GLOBAL', gSeen+' resp.', pctG+'%', gWrong+' fallos totales']);

  doc.autoTable({
    head:[['Tema','Progreso','Acierto','Fallos']],
    body: allRows, startY: y, theme:'grid',
    headStyles:{fillColor:[26,26,26],textColor:255,fontStyle:'bold'},
    bodyStyles:{fontSize:8},
    columnStyles:{0:{cellWidth:70},1:{halign:'center'},2:{halign:'center',fontStyle:'bold'},3:{halign:'center'}},
    alternateRowStyles:{fillColor:[245,244,240]},
    willDrawCell:(data)=>{
      if(data.row.index===allRows.length-1){data.cell.styles.fillColor=[220,220,220];data.cell.styles.fontStyle='bold';}
      if(data.column.index===2&&data.section==='body'&&data.row.index<allRows.length-1){
        const v=parseInt(data.cell.raw);
        if(!isNaN(v)) data.cell.styles.textColor=v>=70?[22,163,74]:v>=50?[161,98,7]:[220,38,38];
      }
    },
    margin:{left:mL,right:mR},
  });
  y = doc.lastAutoTable.finalY + 10;

  // Top 10 preguntas mas falladas
  const failList=[];
  cats.forEach(({group,catalog})=>{
    Object.entries(catalog).forEach(([id,info])=>{
      if(info.available===false) return;
      const tid=Number(id);
      const idx=JSON.parse(localStorage.getItem(STAT_INDEX(group,tid))||'[]');
      idx.forEach(qn=>{
        try{
          const s=JSON.parse(localStorage.getItem(STAT_KEY(group,tid,qn))||'{}');
          if(s.seen>0&&s.wrong>0) failList.push({label:info.label,qn,rate:s.wrong/s.seen,seen:s.seen,wrong:s.wrong});
        }catch(e){}
      });
    });
  });
  failList.sort((a,b)=>b.rate-a.rate);
  const top10=failList.slice(0,10);
  if(top10.length>0){
    if(y>240){doc.addPage();y=20;}
    doc.setFontSize(10);doc.setFont('helvetica','bold');doc.setTextColor(40);
    doc.text('Top 10 preguntas mas falladas',mL,y);y+=4;
    doc.autoTable({
      head:[['Tema','P.','Intentos','Fallos','Tasa']],
      body:top10.map(f=>[f.label,'P.'+f.qn,f.seen,f.wrong,Math.round(f.rate*100)+'%']),
      startY:y,theme:'grid',
      headStyles:{fillColor:[220,38,38],textColor:255,fontStyle:'bold'},
      bodyStyles:{fontSize:8},
      columnStyles:{0:{cellWidth:70},1:{halign:'center'},2:{halign:'center'},3:{halign:'center'},4:{halign:'center',fontStyle:'bold',textColor:[220,38,38]}},
      alternateRowStyles:{fillColor:[245,244,240]},
      margin:{left:mL,right:mR},
    });
  }

  // Pie de pagina
  const pages=doc.internal.getNumberOfPages();
  for(let i=1;i<=pages;i++){
    doc.setPage(i);
    doc.setFontSize(7);doc.setTextColor(160);
    doc.text('Pagina '+i+' de '+pages,W/2,290,{align:'center'});
  }
  doc.save('resultados_test_movilidad_urbana.pdf');
  showToast('PDF exportado', 2500);
}


function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const qs  = state.questions;
  const catalog = state.group === 'meta' ? LIBRO_META : SERIE_OP;
  const t   = catalog[state.temaId];
  const grp = state.group === 'meta' ? 'Libro Meta' : 'Serie Oposiciones';

  const pairs = qs.map(q => [`${q.n}`, q.correct.toUpperCase()]);
  const rows  = [];
  for (let i = 0; i < pairs.length; i += 8) rows.push(pairs.slice(i, i+8));
  const body = rows.map(row => {
    const cells = []; row.forEach(p => cells.push(p[0], p[1]));
    while (cells.length < 16) cells.push('', '');
    return cells;
  });

  doc.autoTable({
    head: [Array.from({length:8}, () => ['Nº','R']).flat()],
    body, startY: 22, theme: 'grid',
    headStyles: { fillColor:[74,74,74], textColor:255, fontStyle:'bold', halign:'center' },
    bodyStyles: { halign: 'center' },
    alternateRowStyles: { fillColor: [242,242,242] },
    margin: { top:22, left:10, right:10 },
    didDrawPage: () => {
      doc.setFontSize(11); doc.setTextColor(40);
      doc.text(`${grp} · ${t.label} – ${t.sub}`, 14, 14);
    }
  });

  doc.save(`soluciones_${grp.replace(' ','_')}_${t.label.replace('-','')}.pdf`);
}

// ─── TOAST ─────────────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg, ms) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('toast--show');
  clearTimeout(toastTimer);
  if (ms < 99000) toastTimer = setTimeout(hideToast, ms);
}
function hideToast() {
  document.getElementById('toast').classList.remove('toast--show');
}

// ─── UTILS ─────────────────────────────────────────────────────────────────────
function escHtml(s) {
  return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

// Bloqueo de scroll del body con contador de capas (exam + edit pueden coexistir)
// Guarda la posición Y para que iOS no salte al inicio al poner position:fixed
let _scrollLockCount = 0;
let _scrollY = 0;
function lockScroll() {
  if (_scrollLockCount === 0) {
    _scrollY = window.scrollY;
    document.body.style.top = `-${_scrollY}px`;
    document.body.classList.add('scroll-locked');
  }
  _scrollLockCount++;
}
function unlockScroll() {
  _scrollLockCount = Math.max(0, _scrollLockCount - 1);
  if (_scrollLockCount === 0) {
    document.body.classList.remove('scroll-locked');
    document.body.style.top = '';
    window.scrollTo(0, _scrollY);
  }
}
const EXAM = {
  questions:       [],
  answers:         {},
  current:         0,
  startTime:       null,
  timerInterval:   null,
  TOTAL_SECS:      600,
  failedQuestions: [],
  _isWeak:         false,
  _isRetry:        false,
  _isFav:          false,
  _isSim:          false,
  _isCajon:        false,
  _pendingAnswer:  null, // simulacro/cajón: opción tocada aún sin confirmar
};

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startExam() {
  if (!state.questions || state.questions.length === 0) return;
  EXAM.questions   = shuffleArray(state.questions).slice(0, Math.min(10, state.questions.length));
  EXAM.answers     = {};
  EXAM.current     = 0;
  EXAM.startTime   = Date.now();

  lockScroll();
  document.getElementById('examOverlay').classList.add('open');
  clearInterval(EXAM.timerInterval);
  EXAM.timerInterval = setInterval(examTick, 1000);
  renderExamQuestion();
}

function examTick() {
  const elapsed   = Math.floor((Date.now() - EXAM.startTime) / 1000);
  const remaining = EXAM.TOTAL_SECS - elapsed;
  const timerEl   = document.getElementById('examTimer');
  if (!timerEl) return;

  if (remaining > 0) {
    const m = String(Math.floor(remaining / 60)).padStart(2,'0');
    const s = String(remaining % 60).padStart(2,'0');
    timerEl.textContent = '\u23F1 ' + m + ':' + s;
    timerEl.className   = 'exam-timer' + (remaining <= 60 ? ' exam-timer--warn' : '');
  } else {
    const over = elapsed - EXAM.TOTAL_SECS;
    const m = String(Math.floor(over / 60)).padStart(2,'0');
    const s = String(over % 60).padStart(2,'0');
    timerEl.textContent = '\u23F1 \u2212' + m + ':' + s;
    timerEl.className   = 'exam-timer exam-timer--over';
  }
}

function renderExamQuestion() {
  const qs  = EXAM.questions;
  const idx = EXAM.current;
  const q   = qs[idx];
  if (!q) return;

  const dots = qs.map((_, i) => {
    let cls = 'exam-dot';
    if (i === idx)          cls += ' exam-dot--current';
    else if (EXAM.answers[i] !== undefined) cls += ' exam-dot--done';
    return '<span class="' + cls + '"></span>';
  }).join('');

  // En simulacro/cajón la opción resaltada = la provisional (EXAM._pendingAnswer) o, al volver atrás,
  // la ya confirmada (EXAM.answers[idx]); en ambos casos sin revelar si es correcta o incorrecta.
  const manualNav = EXAM._isSim || EXAM._isCajon;
  const chosen = manualNav
    ? (EXAM._pendingAnswer != null ? EXAM._pendingAnswer : EXAM.answers[idx])
    : null;

  const opts = ['a','b','c','d'].filter(l => q.o[l]).map(l =>
    '<button class="exam-opt' + (l === chosen ? ' exam-opt--chosen' : '') + '" onclick="examAnswer(\'' + l + '\')">' +
    '<span class="exam-opt__letter">' + l.toUpperCase() + '</span>' +
    '<span class="exam-opt__text">' + escHtml(q.o[l]) + '</span>' +
    '</button>'
  ).join('');

  // Solo en simulacro/cajón: botones Atrás / Siguiente bajo las opciones.
  let actionsHTML = '';
  if (manualNav) {
    const hasSelection = chosen != null;
    actionsHTML =
      '<div class="exam-sim-actions">' +
      '<button class="btn--sim-back" onclick="simBack()"' + (idx === 0 ? ' disabled' : '') + '>← Atrás</button>' +
      '<button class="btn--sim-next" onclick="simNext()"' + (hasSelection ? '' : ' disabled') + '>Siguiente →</button>' +
      '</div>';
  }

  const body = document.getElementById('examBody');
  body.innerHTML =
    '<div class="exam-progress-dots">' + dots + '</div>' +
    '<p class="q__num">Pregunta ' + (idx+1) + ' de ' + qs.length + '</p>' +
    '<p class="q__text">' + escHtml(q.q) + '</p>' +
    '<div class="opts">' + opts + '</div>' +
    actionsHTML;

  // Siempre al inicio del panel para que no haya restos visuales
  body.scrollTop = 0;
}

function examAnswer(letter) {
  const idx = EXAM.current;
  // Simulacro/cajón: marcar selección provisional (sin revelar correcta/incorrecta) sin avanzar.
  // Va antes del guard para permitir cambiar una respuesta ya confirmada al volver atrás.
  if (EXAM._isSim || EXAM._isCajon) {
    EXAM._pendingAnswer = letter;
    if (document.activeElement) document.activeElement.blur();
    renderExamQuestion();
    return;
  }
  if (EXAM.answers[idx] !== undefined) return;
  // Resto de modos: registrar y avanzar automáticamente como hasta ahora.
  commitExamAnswer(letter, true);
}

// Guarda la respuesta y avanza (o finaliza). record=false omite recordAnswer (revisita en simulacro).
function commitExamAnswer(letter, record) {
  const idx = EXAM.current;
  EXAM.answers[idx] = letter;
  if (record) {
    const _q = EXAM.questions[idx];
    const _grp = _q._group || state.group;
    const _tid = _q._temaId !== undefined ? _q._temaId : state.temaId;
    recordAnswer(_grp, _tid, _q, letter);
  }
  if (document.activeElement) document.activeElement.blur();
  if (idx + 1 < EXAM.questions.length) {
    EXAM.current++;
    renderExamQuestion();
  } else {
    finishExam();
  }
}

// Simulacro: navegar a la pregunta anterior, descartando cualquier selección provisional.
function simBack() {
  if (EXAM.current === 0) return;
  EXAM._pendingAnswer = null;
  EXAM.current--;
  renderExamQuestion();
}

// Simulacro: confirmar la selección y avanzar.
function simNext() {
  const idx = EXAM.current;
  // Selección efectiva: la provisional o, si no se tocó nada al volver atrás, la ya confirmada.
  const letter = EXAM._pendingAnswer != null ? EXAM._pendingAnswer : EXAM.answers[idx];
  if (letter == null) return; // nada seleccionado
  EXAM._pendingAnswer = null;
  // En simulacro NO se registran estadísticas aquí: se guardan al finalizar (finishExam),
  // permitiendo cambiar respuestas libremente con Atrás/Siguiente durante todo el examen.
  commitExamAnswer(letter, false);
}

function finishExam() {
  clearInterval(EXAM.timerInterval);
  const elapsed = Math.floor((Date.now() - EXAM.startTime) / 1000);
  const qs = EXAM.questions;
  const n  = qs.length;

  let correct = 0, fallos = 0;
  qs.forEach((q, i) => {
    if (EXAM.answers[i] === q.correct) correct++;
    else if (EXAM.answers[i] !== undefined) fallos++; // no respondidas no penalizan
  });
  const wrong      = fallos;
  const noResp     = n - correct - fallos;
  // Formula oficial: ((aciertos - fallos*0.25) / total) * 10
  const rawScore   = ((correct - fallos * 0.25) / n) * 10;
  const score      = Math.max(0, Math.round(rawScore * 100) / 100); // 2 decimales, minimo 0
  const scoreStr   = score.toFixed(2).replace('.', ',');             // formato espanol
  const passed     = score >= 5;
  const pct        = Math.round((correct / n) * 100);                // solo para la barra de revision
  const overtime   = elapsed - EXAM.TOTAL_SECS;

  const totalM = String(Math.floor(elapsed / 60)).padStart(2,'0');
  const totalS = String(elapsed % 60).padStart(2,'0');
  const timeStr = totalM + ':' + totalS;

  let overtimeHTML = '';
  if (overtime > 0) {
    const om = String(Math.floor(overtime / 60)).padStart(2,'0');
    const os = String(overtime % 60).padStart(2,'0');
    overtimeHTML = '<span class="exam-res__overtime">\u2212' + om + ':' + os + ' sobre el tiempo</span>';
  }

  const reviewHTML = qs.map((q, i) => {
    const given   = EXAM.answers[i];
    const isOk    = given === q.correct;
    const whyText = (q.why && q.why[q.correct]) || '';
    const givenLabel = given ? given.toUpperCase() : '\u2014';

    const optsHTML = (!isOk) ? ['a','b','c','d'].filter(l => q.o[l]).map(l => {
      const cls = l === q.correct ? 'correct' : (l === given ? 'wrong' : 'dim');
      return '<div class="exam-review-opt exam-review-opt--' + cls + '">' +
             '<span class="exam-review-opt__letter">' + l.toUpperCase() + '</span>' +
             '<span>' + escHtml(q.o[l]) + '</span></div>';
    }).join('') : '';

    return '<div class="exam-review-item exam-review-item--' + (isOk ? 'ok' : 'err') + '">' +
      '<div class="exam-review-item__header">' +
        '<span class="exam-review-item__icon">' + (isOk ? '\u2713' : '\u2717') + '</span>' +
        '<span class="exam-review-item__num">P.' + q.n + '</span>' +
        '<span class="exam-review-item__verdict">' +
          (isOk ? 'Correcta' : 'Tu resp.: <b>' + givenLabel + '</b> &nbsp;\u00B7&nbsp; Correcta: <b>' + q.correct.toUpperCase() + '</b>') +
        '</span>' +
      '</div>' +
      '<p class="exam-review-item__q">' + escHtml(q.q) + '</p>' +
      (optsHTML ? '<div class="exam-review-item__opts">' + optsHTML + '</div>' : '') +
      (whyText  ? '<p class="exam-review-item__why">\uD83D\uDCD6 ' + escHtml(whyText) + '</p>' : '') +
    '</div>';
  }).join('');

  // Guardar preguntas falladas para modo reintento
  EXAM.failedQuestions = qs.filter((q, i) => EXAM.answers[i] !== undefined && EXAM.answers[i] !== q.correct);

  // Simulacro: las estadísticas se registran AQUÍ (no durante el examen) con la respuesta
  // final de cada pregunta contestada, para que cambiar respuestas con Atrás/Siguiente cuente
  // solo el estado final. Las no contestadas no se registran.
  if (EXAM._isSim) {
    qs.forEach((q, i) => {
      const given = EXAM.answers[i];
      if (given === undefined) return;
      const grp = q._group || state.group;
      const tid = q._temaId !== undefined ? q._temaId : state.temaId;
      recordAnswer(grp, tid, q, given);
    });
  }

  // Anti-repetición: registrar las preguntas usadas en este simulacro (q.n por tema).
  if (EXAM._isSim) {
    try {
      const byTema = {};
      qs.forEach(q => {
        if (q._group == null || q._temaId == null) return;
        const k = q._group + '_t' + q._temaId;
        (byTema[k] = byTema[k] || { g: q._group, t: q._temaId, ns: [] }).ns.push(q.n);
      });
      Object.keys(byTema).forEach(k => {
        const { g, t, ns } = byTema[k];
        const key = 'fusion_sim_seen_' + g + '_t' + t;
        let prev = [];
        try { prev = JSON.parse(localStorage.getItem(key) || '[]'); if (!Array.isArray(prev)) prev = []; } catch(e) {}
        ns.forEach(n => { if (!prev.includes(n)) prev.push(n); });
        localStorage.setItem(key, JSON.stringify(prev));
      });
    } catch(e) {}
  }

  // Cajón de errores: en simulacro, cada pregunta fallada entra al cajón (o resetea aciertos a 0
  // si ya estaba). Solo cuentan las contestadas mal (las no respondidas no entran).
  if (EXAM._isSim) {
    const cajon = readCajon();
    qs.forEach((q, i) => {
      const given = EXAM.answers[i];
      if (given === undefined || given === q.correct) return;
      const grp = q._group || state.group;
      const tid = q._temaId !== undefined ? q._temaId : state.temaId;
      cajon[CAJON_ITEM_KEY(grp, tid, q.n)] = { group: grp, temaId: tid, qn: q.n, aciertos: 0 };
    });
    writeCajon(cajon);
  }

  // Repaso del cajón: acierto → aciertos+1; cualquier otro caso → reset a 0. Sale al llegar a 3.
  let cajonSalidas = 0;
  if (EXAM._isCajon) {
    const cajon = readCajon();
    qs.forEach((q, i) => {
      const grp = q._group || state.group;
      const tid = q._temaId !== undefined ? q._temaId : state.temaId;
      const k = CAJON_ITEM_KEY(grp, tid, q.n);
      const entry = cajon[k];
      if (!entry) return;
      entry.aciertos = (EXAM.answers[i] === q.correct) ? (entry.aciertos || 0) + 1 : 0;
      if (entry.aciertos >= 3) { delete cajon[k]; cajonSalidas++; }
    });
    writeCajon(cajon);
  }

  const cajonResultHTML = EXAM._isCajon
    ? '<div class="cajon-result">' + (cajonSalidas > 0
        ? '📦 ' + cajonSalidas + ' pregunta' + (cajonSalidas === 1 ? ' sale' : 's salen') + ' del cajón'
        : 'Aún no ha salido ninguna pregunta del cajón') + '</div>'
    : '';

  document.getElementById('examBody').innerHTML =
    '<div class="exam-results">' +
      '<div class="exam-res__score ' + (passed ? 'exam-res__score--pass' : 'exam-res__score--fail') + '">' +
        '<span class="exam-res__pct">' + scoreStr + '</span>' +
        '<span class="exam-res__label">' + (passed ? 'APROBADO' : 'SUSPENDIDO') + '</span>' +
        '<span class="exam-res__formula">(' + correct + ' - ' + fallos + ' \xd7 0,25) / ' + n + ' \xd7 10</span>' +
      '</div>' +
      '<div class="exam-res__stats">' +
        '<div class="exam-res__stat exam-res__stat--ok"><span class="exam-res__stat-n">' + correct + '</span><span class="exam-res__stat-l">Correctas</span></div>' +
        '<div class="exam-res__stat exam-res__stat--err"><span class="exam-res__stat-n">' + fallos + '</span><span class="exam-res__stat-l">Incorrectas</span></div>' +
        (noResp > 0 ? '<div class="exam-res__stat"><span class="exam-res__stat-n">' + noResp + '</span><span class="exam-res__stat-l">Sin resp.</span></div>' : '') +
        '<div class="exam-res__stat"><span class="exam-res__stat-n">' + n + '</span><span class="exam-res__stat-l">Total</span></div>' +
      '</div>' +
      '<div class="exam-res__time">\u23F1 Tiempo: <b>' + timeStr + '</b> ' + overtimeHTML + '</div>' +
      cajonResultHTML +
      '<div class="exam-review">' + reviewHTML + '</div>' +
      '<button class="btn btn--exam-again" onclick="startExam()">\u21BA Nuevo examen</button>' +
      (fallos > 0 && !EXAM._isCajon ? '<button class="btn btn--retry-errors" onclick="retryErrors()">\uD83D\uDD01 Repasar ' + fallos + ' error' + (fallos > 1 ? 'es' : '') + '</button>' : '') +
    '</div>';

  // Scroll al inicio para que se vea el % desde arriba
  document.getElementById('examBody').scrollTop = 0;
  // Fix: actualizar título según modo
  const titleEl2 = document.querySelector('.exam-title');
  if (titleEl2) titleEl2.textContent = EXAM._isCajon ? '📦 Repaso del cajón' : (EXAM._isSim ? '🧩 Simulacro' : (EXAM._isFav ? '❤️ Repaso de marcadas' : (EXAM._isRetry ? '🔁 Repaso de errores' : (EXAM._isWeak ? '🎯 Repaso · puntos débiles' : '⏱ Examen cronometrado'))));
  // Fix: botón 'Nuevo examen' no tiene sentido en modo débil
  if (EXAM._isWeak) {
    const btn = document.querySelector('.btn--exam-again');
    if (btn) btn.textContent = '↺ Nuevo repaso';
  }
  if (EXAM._isFav) {
    const btn = document.querySelector('.btn--exam-again');
    if (btn) btn.textContent = '❤️ Repetir marcadas';
  }
  if (EXAM._isSim) {
    const btn = document.querySelector('.btn--exam-again');
    if (btn) { btn.textContent = '🧩 Nuevo simulacro'; btn.onclick = () => { closeExam(); openSim(); }; }
  }
  if (EXAM._isCajon) {
    const btn = document.querySelector('.btn--exam-again');
    if (btn) { btn.textContent = '📦 Nuevo repaso del cajón'; btn.onclick = () => { closeExam(); openCajon(); }; }
  }
  // Refrescar el badge del cajón (puede haber cambiado al añadir/sacar preguntas)
  updateCajonBtn();
}

function startFavExam() {
  if (!state.questions || state.questions.length === 0) return;
  const favs = getFavQuestions(state.group, state.temaId, state.questions);
  if (favs.length === 0) {
    showToast('No hay preguntas marcadas en este tema. Usa 🤍 para marcarlas.', 3500);
    return;
  }
  EXAM.questions   = shuffleArray(favs.slice());
  EXAM.answers     = {};
  EXAM.current     = 0;
  EXAM.startTime   = Date.now();
  EXAM.TOTAL_SECS  = Math.max(favs.length * 90, 300);
  EXAM._isWeak     = false;
  EXAM._isRetry    = false;
  EXAM._isFav      = true;
  const titleEl = document.querySelector('.exam-title');
  if (titleEl) titleEl.textContent = '❤️ Repaso de marcadas';
  const timerEl = document.getElementById('examTimer');
  const mins = Math.floor(EXAM.TOTAL_SECS / 60);
  const secs = String(EXAM.TOTAL_SECS % 60).padStart(2, '0');
  if (timerEl) timerEl.textContent = mins + ':' + secs;
  lockScroll();
  document.getElementById('examOverlay').classList.add('open');
  clearInterval(EXAM.timerInterval);
  EXAM.timerInterval = setInterval(examTick, 1000);
  renderExamQuestion();
}

// ─── SIMULACRO ─────────────────────────────────────────────────────────────────
const SIM = { selected: new Set(), nQuestions: 20, minutes: 30 };

function openSim() {
  renderSimBody();
  document.getElementById('simOverlay').classList.add('open');
  lockScroll();
}
function closeSim() {
  document.getElementById('simOverlay').classList.remove('open');
  unlockScroll();
}

function toggleSimTema(group, temaId) {
  const key = group + '_' + temaId;
  if (SIM.selected.has(key)) SIM.selected.delete(key);
  else SIM.selected.add(key);
  renderSimBody();
}

function renderSimBody() {
  const metaChips = Object.entries(LIBRO_META).map(([id, info]) => {
    const n   = Number(id);
    const key = 'meta_' + n;
    const on  = SIM.selected.has(key);
    return '<button class="sim-chip' + (on ? ' sim-chip--on' : '') + '"'
      + ' onclick="toggleSimTema(\'meta\',' + n + ')">'
      + '<span class="sim-chip__label">' + info.label + '</span>'
      + '</button>';
  }).join('');

  const serieChips = Object.entries(SERIE_OP).map(([id, info]) => {
    const n      = Number(id);
    const locked = !info.available;
    const key    = 'serie_' + n;
    const on     = SIM.selected.has(key);
    if (locked) return '<button class="sim-chip sim-chip--locked" disabled>'
      + '<span class="sim-chip__label">' + info.label + '</span></button>';
    return '<button class="sim-chip' + (on ? ' sim-chip--on' : '') + '"'
      + ' onclick="toggleSimTema(\'serie\',' + n + ')">'
      + '<span class="sim-chip__label">' + info.label + '</span>'
      + '</button>';
  }).join('');

  const nOpts = [10, 20, 30, 50, 75, 100].map(v =>
    '<option value="' + v + '"' + (SIM.nQuestions === v ? ' selected' : '') + '>' + v + ' preguntas</option>'
  ).join('');
  const tOpts = [10, 15, 20, 30, 45, 60, 90, 120].map(v =>
    '<option value="' + v + '"' + (SIM.minutes === v ? ' selected' : '') + '>' + v + ' min</option>'
  ).join('');

  const nSel = SIM.selected.size;
  // Chips en el body (scrolleable)
  document.getElementById('simBody').innerHTML =
    '<p class="sim-section-label">\uD83D\uDCDA Libro Meta</p>'
    + '<div class="sim-chips">' + metaChips + '</div>'
    + '<p class="sim-section-label">\uD83D\uDCD8 Serie Oposiciones</p>'
    + '<div class="sim-chips">' + serieChips + '</div>';

  // Opciones y boton en el footer (fijo, fuera del scroll)
  const footer = document.getElementById('simFooter');
  if (footer) footer.innerHTML =
    '<div class="sim-options">'
    + '<label class="sim-opt-label">N\u00ba preguntas<select class="sim-select" onchange="SIM.nQuestions=Number(this.value)">' + nOpts + '</select></label>'
    + '<label class="sim-opt-label">Tiempo<select class="sim-select" onchange="SIM.minutes=Number(this.value)">' + tOpts + '</select></label>'
    + '</div>'
    + '<button class="btn btn--sim-launch" onclick="launchSim()" '
    + (nSel === 0 ? 'disabled' : '') + '>'
    + (nSel === 0 ? 'Selecciona al menos un tema' : '\u25B6 Iniciar con ' + nSel + ' tema' + (nSel > 1 ? 's' : ''))
    + '</button>';
}

async function launchSim() {
  if (SIM.selected.size === 0) return;
  document.getElementById('simBody').innerHTML = '<p class="sim-loading">Cargando temas\u2026</p>';

  // Cargar todos los temas seleccionados
  const promises = [];
  SIM.selected.forEach(key => {
    const [group, temaId] = key.split('_');
    promises.push(loadTheme(group, Number(temaId)).then(qs => qs));
  });

  // Cargar con metadatos de origen para que recordAnswer use el tema correcto
  const keyArr = Array.from(SIM.selected);
  let allQ = [];
  try {
    const results = await Promise.all(promises);
    results.forEach((qs, i) => {
      const [grp, tid] = keyArr[i].split('_');
      qs.forEach(q => allQ.push(Object.assign({}, q, { _group: grp, _temaId: Number(tid) })));
    });
  } catch(e) {
    showToast('Error al cargar algún tema', 3000);
    renderSimBody();
    return;
  }

  if (allQ.length === 0) {
    showToast('No se pudieron cargar las preguntas', 3000);
    renderSimBody();
    return;
  }

  // ─── Anti-repetición: rotar preguntas entre simulacros ────────────────────
  // Registro por tema de los q.n ya vistos en simulacros anteriores.
  const SEEN_KEY = (g, t) => 'fusion_sim_seen_' + g + '_t' + t;
  const readSeen = (g, t) => {
    try { const a = JSON.parse(localStorage.getItem(SEEN_KEY(g, t)) || '[]'); return Array.isArray(a) ? a : []; }
    catch(e) { return []; }
  };
  // Cache de vistos por tema; posición en el array = antigüedad (0 = más antiguo).
  const seenCache = {};
  const seenPos = (q) => {
    const k = q._group + '_t' + q._temaId;
    if (!(k in seenCache)) seenCache[k] = readSeen(q._group, q._temaId);
    return seenCache[k].indexOf(q.n); // -1 si no visto
  };

  let unseen = [];
  let seen   = [];
  allQ.forEach(q => { (seenPos(q) === -1 ? unseen : seen).push(q); });

  const pick = Math.min(SIM.nQuestions, allQ.length);

  // Si no queda ninguna sin ver para los temas seleccionados, reiniciar su registro.
  if (unseen.length === 0) {
    SIM.selected.forEach(key => {
      const [g, t] = key.split('_');
      try { localStorage.removeItem(SEEN_KEY(g, Number(t))); } catch(e) {}
    });
    showToast('Has completado todas las preguntas de estos temas. ¡Empezamos de nuevo!', 4000);
    unseen = allQ.slice();
    seen   = [];
  }

  // Rellenar primero con no vistas barajadas; completar con vistas (más antiguas primero).
  let final = shuffleArray(unseen).slice(0, pick);
  if (final.length < pick) {
    const seenOldestFirst = seen.slice().sort((a, b) => seenPos(a) - seenPos(b));
    final = final.concat(seenOldestFirst.slice(0, pick - final.length));
  }
  // Barajar la selección final para que el orden de presentación no sea predecible.
  final = shuffleArray(final);

  closeSim();

  // Reutilizar el motor del examen
  EXAM.questions   = final;
  EXAM.answers     = {};
  EXAM.current     = 0;
  EXAM.startTime   = Date.now();
  EXAM.TOTAL_SECS  = SIM.minutes * 60;
  EXAM._isWeak     = false;
  EXAM._isRetry    = false;
  EXAM._isFav      = false;
  EXAM._isSim      = true;
  EXAM._isCajon    = false;
  EXAM._pendingAnswer = null;

  const titleEl = document.querySelector('.exam-title');
  if (titleEl) titleEl.textContent = '\uD83E\uDDE9 Simulacro \u00B7 ' + pick + ' preguntas';
  const timerEl = document.getElementById('examTimer');
  if (timerEl) timerEl.textContent = String(SIM.minutes).padStart(2,'0') + ':00';

  lockScroll();
  document.getElementById('examOverlay').classList.add('open');
  clearInterval(EXAM.timerInterval);
  EXAM.timerInterval = setInterval(examTick, 1000);
  renderExamQuestion();
}

// ─── CAJÓN DE ERRORES DEL SIMULACRO ─────────────────────────────────────────────
// Clave fusion_cajon → { [group_temaId_qn]: { group, temaId, qn, aciertos } }
// Entra al fallar en simulacro; sale al acertar 3 veces seguidas en el repaso del cajón.
const CAJON_KEY = 'fusion_cajon';
const CAJON_ITEM_KEY = (g, t, qn) => g + '_' + t + '_q' + qn;
const CAJON = { nQuestions: 10 };

function readCajon() {
  try {
    const o = JSON.parse(localStorage.getItem(CAJON_KEY) || '{}');
    return (o && typeof o === 'object' && !Array.isArray(o)) ? o : {};
  } catch(e) { return {}; }
}
function writeCajon(obj) {
  try { localStorage.setItem(CAJON_KEY, JSON.stringify(obj)); } catch(e) {}
}
function cajonCount() { return Object.keys(readCajon()).length; }

// Badge del botón de la subbar (número de preguntas; atenuado si está vacío)
function updateCajonBtn() {
  const n = cajonCount();
  const badge = document.getElementById('cajonBadge');
  const btn   = document.getElementById('subbarCajon');
  if (badge) { badge.textContent = n > 0 ? n : ''; badge.style.display = n > 0 ? '' : 'none'; }
  if (btn) btn.classList.toggle('subbar__btn--empty', n === 0);
}

function openCajon() {
  renderCajonBody();
  document.getElementById('cajonOverlay').classList.add('open');
  lockScroll();
}
function closeCajon() {
  document.getElementById('cajonOverlay').classList.remove('open');
  unlockScroll();
}

function renderCajonBody() {
  const items = Object.values(readCajon());
  const N = items.length;

  const titleEl = document.getElementById('cajonTitle');
  if (titleEl) titleEl.textContent = '📦 Cajón de errores · ' + N + ' pregunta' + (N === 1 ? '' : 's');

  const body   = document.getElementById('cajonBody');
  const footer = document.getElementById('cajonFooter');

  if (N === 0) {
    body.innerHTML = '<p class="cajon-empty">El cajón está vacío. Los errores del simulacro aparecerán aquí.</p>';
    if (footer) footer.innerHTML = '';
    return;
  }

  body.innerHTML =
    '<p class="sim-section-label">📦 Preguntas falladas en simulacros</p>'
    + '<p class="cajon-info">Acierta una pregunta 3 veces seguidas en el repaso para sacarla del cajón.</p>';

  const nOpts = [5, 10, 20].map(v =>
    '<option value="' + v + '"' + (CAJON.nQuestions === v ? ' selected' : '') + '>' + v + ' preguntas</option>'
  ).join('') + '<option value="all"' + (CAJON.nQuestions === 'all' ? ' selected' : '') + '>Todas (' + N + ')</option>';

  if (footer) footer.innerHTML =
    '<div class="sim-options">'
    + '<label class="sim-opt-label">Nº preguntas<select class="sim-select" onchange="CAJON.nQuestions = this.value === \'all\' ? \'all\' : Number(this.value)">' + nOpts + '</select></label>'
    + '</div>'
    + '<button class="btn btn--sim-launch" onclick="launchCajon()">▶ Iniciar repaso</button>';
}

async function launchCajon() {
  const items = Object.values(readCajon());
  if (items.length === 0) return;
  document.getElementById('cajonBody').innerHTML = '<p class="sim-loading">Cargando preguntas…</p>';

  // Agrupar por tema para cargar cada tema una sola vez
  const temas = {};
  items.forEach(it => {
    const k = it.group + '_' + it.temaId;
    (temas[k] = temas[k] || { group: it.group, temaId: it.temaId, qns: [] }).qns.push(it.qn);
  });

  const keys = Object.keys(temas);
  let allQ = [];
  try {
    const results = await Promise.all(keys.map(k => loadTheme(temas[k].group, Number(temas[k].temaId))));
    results.forEach((qs, i) => {
      const { group, temaId, qns } = temas[keys[i]];
      qs.forEach(q => {
        if (qns.includes(q.n)) allQ.push(Object.assign({}, q, { _group: group, _temaId: Number(temaId) }));
      });
    });
  } catch(e) {
    showToast('Error al cargar las preguntas del cajón', 3000);
    renderCajonBody();
    return;
  }

  if (allQ.length === 0) {
    showToast('No se pudieron cargar las preguntas del cajón', 3000);
    renderCajonBody();
    return;
  }

  const count = CAJON.nQuestions === 'all' ? allQ.length : Math.min(CAJON.nQuestions, allQ.length);
  const final = shuffleArray(allQ).slice(0, count);

  closeCajon();

  // Reutilizar el motor del examen (navegación manual como el simulacro)
  EXAM.questions   = final;
  EXAM.answers     = {};
  EXAM.current     = 0;
  EXAM.startTime   = Date.now();
  EXAM.TOTAL_SECS  = Math.max(final.length * 60, 300);
  EXAM._isWeak     = false;
  EXAM._isRetry    = false;
  EXAM._isFav      = false;
  EXAM._isSim      = false;
  EXAM._isCajon    = true;
  EXAM._pendingAnswer = null;

  const titleEl = document.querySelector('.exam-title');
  if (titleEl) titleEl.textContent = '📦 Repaso del cajón';
  const timerEl = document.getElementById('examTimer');
  const mins = Math.floor(EXAM.TOTAL_SECS / 60);
  const secs = String(EXAM.TOTAL_SECS % 60).padStart(2, '0');
  if (timerEl) timerEl.textContent = mins + ':' + secs;

  lockScroll();
  document.getElementById('examOverlay').classList.add('open');
  clearInterval(EXAM.timerInterval);
  EXAM.timerInterval = setInterval(examTick, 1000);
  renderExamQuestion();
}

function retryErrors() {
  const failed = EXAM.failedQuestions;
  if (!failed || failed.length === 0) {
    showToast("\u00a1No hay errores que repasar!", 2000);
    return;
  }
  EXAM.questions   = shuffleArray(failed.slice());
  EXAM.answers     = {};
  EXAM.current     = 0;
  EXAM.startTime   = Date.now();
  EXAM.TOTAL_SECS  = Math.max(failed.length * 60, 300);
  EXAM._isWeak     = false;
  EXAM._isRetry    = true;
  const titleEl = document.querySelector(".exam-title");
  if (titleEl) titleEl.textContent = "\uD83D\uDD01 Repaso de errores";
  const timerEl = document.getElementById("examTimer");
  const mins = Math.floor(EXAM.TOTAL_SECS / 60);
  const secs = String(EXAM.TOTAL_SECS % 60).padStart(2,"0");
  if (timerEl) timerEl.textContent = mins + ":" + secs;
  clearInterval(EXAM.timerInterval);
  EXAM.timerInterval = setInterval(examTick, 1000);
  lockScroll();
  document.getElementById('examOverlay').classList.add('open');
  renderExamQuestion();
  document.getElementById('examBody').scrollTop = 0;
}

function closeExam() {
  clearInterval(EXAM.timerInterval);
  document.getElementById('examOverlay').classList.remove('open');
  unlockScroll();
  // Restaurar estado del motor
  EXAM.TOTAL_SECS = 600;
  EXAM._isWeak    = false;
  EXAM._isRetry   = false;
  EXAM._isFav     = false;
  EXAM._isSim     = false;
  EXAM._isCajon   = false;
  const titleEl = document.querySelector('.exam-title');
  if (titleEl) titleEl.textContent = '⏱ Examen cronometrado';
}

// ─── HISTORIAL DE FALLOS ───────────────────────────────────────────────────────
// Clave por pregunta: fusion_stat_{group}_t{temaId}_q{n}
// Valor: { seen: N, wrong: N, lastSeen: timestamp }

function recordAnswer(group, temaId, q, letter) {
  if (!q) return;
  touchStreak(); // actualizar racha diaria
  try {
    const key  = STAT_KEY(group, temaId, q.n);
    const raw  = localStorage.getItem(key);
    const stat = raw ? JSON.parse(raw) : { seen: 0, wrong: 0, lastSeen: 0 };
    stat.seen++;
    if (letter !== q.correct) stat.wrong++;
    stat.lastSeen = Date.now();
    localStorage.setItem(key, JSON.stringify(stat));
    // Actualizar índice del tema
    let idx = [];
    try { idx = JSON.parse(localStorage.getItem(STAT_INDEX(group, temaId)) || '[]'); } catch(e){}
    if (!idx.includes(q.n)) {
      idx.push(q.n);
      localStorage.setItem(STAT_INDEX(group, temaId), JSON.stringify(idx));
    }
  } catch(e) {}
}

// Devuelve las preguntas del tema actual ordenadas por tasa de fallo descendente
// Solo incluye preguntas respondidas al menos una vez y con al menos 1 fallo
function getWeakQuestions(group, temaId, questions, minSeen, limit) {
  try {
    // ─── Construir pool con peso para TODAS las preguntas ──────────────────────────
    // Peso = (tasa_fallo + BASE)^2
    //   - Nunca vista        → tasa 0,   peso BASE^2        (poca prob.)
    //   - Vista y sin fallos → tasa 0,   peso BASE^2        (poca prob.)
    //   - 50 % fallos        → peso (0.5+BASE)^2            (prob. media)
    //   - 100 % fallos       → peso (1+BASE)^2              (prob. máxima)
    // Así ninguna pregunta queda con prob. 0 → el examen siempre se renueva.
    const BASE = 0.15;
    const pool = [];

    questions.forEach(q => {
      let rate = 0;
      try {
        const raw = localStorage.getItem(STAT_KEY(group, temaId, q.n));
        if (raw) {
          const stat = JSON.parse(raw);
          if (stat.seen >= minSeen && stat.seen > 0) {
            rate = stat.wrong / stat.seen;   // 0–1
          }
        }
      } catch(e) {}
      const weight = Math.pow(rate + BASE, 2);
      pool.push({ q, weight });
    });

    if (pool.length === 0) return [];

    // ─── Muestreo ponderado sin reemplazo ──────────────────────────────────────────
    const selected = [];
    const available = pool.slice();   // copia para ir eliminando

    const pick = limit > available.length ? available.length : limit;

    for (let i = 0; i < pick; i++) {
      // Suma total de pesos del pool disponible
      const totalW = available.reduce((s, p) => s + p.weight, 0);
      let r = Math.random() * totalW;
      let chosen = available.length - 1;   // fallback al último
      for (let j = 0; j < available.length; j++) {
        r -= available[j].weight;
        if (r <= 0) { chosen = j; break; }
      }
      selected.push(available[chosen].q);
      available.splice(chosen, 1);   // quitar para no repetir
    }

    return selected;
  } catch(e) { return []; }
}

// ─── EXAMEN PUNTOS DÉBILES ─────────────────────────────────────────────────────
const WEAK_EXAM_QUESTIONS = 20;
const WEAK_EXAM_SECS      = 1200; // 20 minutos
const WEAK_MIN_SEEN       = 1;    // basta con haberla respondido 1 vez

function startWeakExam() {
  if (!state.questions || state.questions.length === 0) return;
  // Contar preguntas respondidas al menos 1 vez en este tema
  const seenCount = state.questions.filter(q => {
    try {
      const raw = localStorage.getItem(STAT_KEY(state.group, state.temaId, q.n));
      if (!raw) return false;
      const stat = JSON.parse(raw);
      return stat.seen >= 1;
    } catch(e) { return false; }
  }).length;
  // Mínimo requerido: 50 o el total de preguntas del tema si hay menos de 50
  const minRequired = Math.min(50, state.questions.length);
  if (seenCount < minRequired) {
    const faltan = minRequired - seenCount;
    showToast('Responde ' + faltan + ' pregunta' + (faltan > 1 ? 's' : '') + ' más para activar el repaso de puntos débiles (mínimo ' + minRequired + ').', 4000);
    return;
  }
  const weak = getWeakQuestions(
    state.group, state.temaId, state.questions,
    WEAK_MIN_SEEN, WEAK_EXAM_QUESTIONS
  );
  if (weak.length === 0) {
    showToast('Responde al menos una pregunta del tema para activar el repaso de puntos débiles.', 3500);
    return;
  }
  // Reutilizar el motor del examen cronometrado con las preguntas débiles
  // Mezclarlas para que no siempre salgan en el mismo orden
  EXAM.questions   = shuffleArray(weak);
  EXAM.answers     = {};
  EXAM.current     = 0;
  EXAM.startTime   = Date.now();
  EXAM.TOTAL_SECS  = WEAK_EXAM_SECS;
  EXAM._isWeak     = true;   // flag para restaurar TOTAL_SECS al acabar

  lockScroll();
  document.getElementById('examOverlay').classList.add('open');

  // Actualizar título del header para distinguirlo del examen normal
  const titleEl = document.querySelector('.exam-title');
  if (titleEl) titleEl.textContent = '🎯 Repaso · puntos débiles';
  const timerEl = document.getElementById('examTimer');
  if (timerEl) timerEl.textContent = '20:00';

  clearInterval(EXAM.timerInterval);
  EXAM.timerInterval = setInterval(examTick, 1000);
  renderExamQuestion();
}


