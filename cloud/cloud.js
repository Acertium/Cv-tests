/* App de estudio — capa de sincronización con Supabase.
   localStorage sigue siendo el almacén primario (respaldo). Esta capa lo
   espeja a public.estudio_progreso cuando hay sesión iniciada.
   Solo anon key. Solo claves fusion_* de progreso (dark y total excluidas). */
(function () {
  'use strict';
  var CFG = window.ESTUDIO_CONFIG || {};
  if (!window.supabase || !CFG.SUPABASE_URL || !CFG.SUPABASE_ANON_KEY) {
    console.warn('[cloud] Falta supabase-js o config; la app sigue solo-local.');
    return;
  }
  var sb = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY);
  var TABLE = CFG.TABLE || 'estudio_progreso';

  // ── Qué claves se sincronizan ───────────────────────────────────────
  // Todo fusion_* EXCEPTO preferencia de tema y caché regenerable.
  function shouldSync(k) {
    if (typeof k !== 'string' || k.indexOf('fusion_') !== 0) return false;
    if (k === 'fusion_dark') return false;              // solo local
    if (k.indexOf('fusion_total_') === 0) return false; // caché regenerable
    return true; // answers, stat, statidx, fav, favidx, edit, editindex, streak
  }

  // ── Envolver localStorage (instalado YA, antes de app.js) ───────────
  var LS = window.localStorage;
  var rawSet = LS.setItem.bind(LS);
  var rawRemove = LS.removeItem.bind(LS);
  var session = null;          // sesión Supabase (o null)
  var dirty = new Set();       // claves a subir
  var removed = new Set();     // claves a borrar
  var flushTimer = null;
  var applyingRemote = false;  // evita re-encolar durante el pull

  LS.setItem = function (k, val) {
    rawSet(k, val);
    if (!applyingRemote && shouldSync(k)) { dirty.add(k); removed.delete(k); schedule(); }
  };
  LS.removeItem = function (k) {
    rawRemove(k);
    if (!applyingRemote && shouldSync(k)) { removed.add(k); dirty.delete(k); schedule(); }
  };

  function schedule() {
    if (!session) return;            // sin sesión: solo local, no se sube
    if (flushTimer) return;
    flushTimer = setTimeout(flush, 1500); // debounce
  }

  function toJSON(str) { try { return JSON.parse(str); } catch (e) { return str; } }

  async function flush() {
    flushTimer = null;
    if (!session) return;
    var uid = session.user.id;
    var ups = [];
    dirty.forEach(function (k) {
      var raw = LS.getItem(k);
      if (raw != null) ups.push({ user_id: uid, k: k, v: toJSON(raw), updated_at: new Date().toISOString() });
    });
    var dels = Array.from(removed);
    dirty.clear(); removed.clear();
    try {
      if (ups.length) await sb.from(TABLE).upsert(ups, { onConflict: 'user_id,k' });
      if (dels.length) await sb.from(TABLE).delete().eq('user_id', uid).in('k', dels);
    } catch (e) { console.warn('[cloud] flush error', e); }
  }

  // ── Pull + merge al iniciar sesión ──────────────────────────────────
  // LWW por dispositivo: la nube (que agrega todos los dispositivos) gana
  // para claves presentes en ambos; las locales que no están en la nube se
  // suben. Suficiente para un único usuario en un dispositivo a la vez.
  async function pullAndMerge() {
    var uid = session.user.id;
    var cloudKeys = new Set();
    try {
      var res = await sb.from(TABLE).select('k,v').eq('user_id', uid);
      if (res.error) throw res.error;
      applyingRemote = true;
      (res.data || []).forEach(function (row) {
        cloudKeys.add(row.k);
        rawSet(row.k, typeof row.v === 'string' ? row.v : JSON.stringify(row.v));
      });
      applyingRemote = false;
    } catch (e) { applyingRemote = false; console.warn('[cloud] pull error', e); return; }

    // Subir claves locales que la nube aún no tiene
    for (var i = 0; i < LS.length; i++) {
      var k = LS.key(i);
      if (shouldSync(k) && !cloudKeys.has(k)) dirty.add(k);
    }
    if (dirty.size) { schedule(); }
    // Refrescar indicadores ya pintados (racha en la subbar), si existen
    if (typeof window.updateSubbarStreak === 'function') { try { window.updateSubbarStreak(); } catch (e) {} }
    setStatus('☁️ Sincronizado');
  }

  // ── UI mínima de login (inyectada por JS, sin tocar index.html) ─────
  function injectUI() {
    var btn = document.createElement('button');
    btn.id = 'cloudBtn';
    btn.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:9999;padding:8px 12px;border-radius:999px;border:none;background:#1f6feb;color:#fff;font:600 13px/1 system-ui;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.25)';
    btn.textContent = '☁️ Conectar';
    btn.onclick = function () { session ? signOut() : openLogin(); };
    document.body.appendChild(btn);

    var ov = document.createElement('div');
    ov.id = 'cloudLogin';
    ov.style.cssText = 'display:none;position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.45);align-items:center;justify-content:center';
    ov.innerHTML =
      '<div style="background:#fff;color:#111;padding:20px;border-radius:14px;width:min(340px,90vw);font-family:system-ui">' +
      '<h3 style="margin:0 0 12px">Iniciar sesión</h3>' +
      '<input id="cloudEmail" type="email" placeholder="email" autocomplete="username" style="width:100%;margin:0 0 8px;padding:10px;border:1px solid #ccc;border-radius:8px">' +
      '<input id="cloudPass" type="password" placeholder="contraseña" autocomplete="current-password" style="width:100%;margin:0 0 12px;padding:10px;border:1px solid #ccc;border-radius:8px">' +
      '<div id="cloudErr" style="color:#c00;font-size:13px;min-height:18px;margin-bottom:8px"></div>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end">' +
      '<button id="cloudCancel" style="padding:9px 14px;border:1px solid #ccc;background:#fff;border-radius:8px;cursor:pointer">Cancelar</button>' +
      '<button id="cloudDo" style="padding:9px 14px;border:none;background:#1f6feb;color:#fff;border-radius:8px;cursor:pointer">Entrar</button>' +
      '</div></div>';
    document.body.appendChild(ov);
    ov.querySelector('#cloudCancel').onclick = function () { ov.style.display = 'none'; };
    ov.querySelector('#cloudDo').onclick = doLogin;
  }
  function openLogin() { document.getElementById('cloudLogin').style.display = 'flex'; }
  function setStatus(t) { var b = document.getElementById('cloudBtn'); if (b) b.textContent = t; }

  async function doLogin() {
    var email = document.getElementById('cloudEmail').value.trim();
    var pass = document.getElementById('cloudPass').value;
    var err = document.getElementById('cloudErr'); err.textContent = '';
    var r = await sb.auth.signInWithPassword({ email: email, password: pass });
    if (r.error) { err.textContent = r.error.message; return; }
    document.getElementById('cloudLogin').style.display = 'none';
  }
  async function signOut() { await sb.auth.signOut(); }

  // ── Ciclo de sesión ─────────────────────────────────────────────────
  sb.auth.onAuthStateChange(function (_evt, s) {
    session = s;
    if (session) { setStatus('☁️ …'); pullAndMerge(); }
    else { setStatus('☁️ Conectar'); }
  });

  function boot() {
    injectUI();
    sb.auth.getSession().then(function (r) {
      session = r.data.session;
      if (session) { setStatus('☁️ …'); pullAndMerge(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
