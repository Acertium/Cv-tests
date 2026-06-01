/* App de estudio — capa de sincronización con Supabase.
   localStorage sigue siendo el almacén primario (respaldo). Esta capa lo
   espeja a public.estudio_progreso cuando hay sesión iniciada.
   Solo anon key. Solo claves fusion_* de progreso (dark y total excluidas).
   Login OBLIGATORIO (gate a pantalla completa) si CFG.REQUIRE_AUTH !== false. */
(function () {
  'use strict';
  var CFG = window.ESTUDIO_CONFIG || {};
  if (!window.supabase || !CFG.SUPABASE_URL || !CFG.SUPABASE_ANON_KEY) {
    console.warn('[cloud] Falta supabase-js o config; la app sigue solo-local.');
    return;
  }
  var sb = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY);
  var TABLE = CFG.TABLE || 'estudio_progreso';
  var requireAuth = CFG.REQUIRE_AUTH !== false; // login obligatorio por defecto

  // ── Qué claves se sincronizan ───────────────────────────────────────
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
  var session = null;
  var dirty = new Set();
  var removed = new Set();
  var flushTimer = null;
  var applyingRemote = false;

  LS.setItem = function (k, val) {
    rawSet(k, val);
    if (!applyingRemote && shouldSync(k)) { dirty.add(k); removed.delete(k); schedule(); }
  };
  LS.removeItem = function (k) {
    rawRemove(k);
    if (!applyingRemote && shouldSync(k)) { removed.add(k); dirty.delete(k); schedule(); }
  };

  function schedule() {
    if (!session) return;
    if (flushTimer) return;
    flushTimer = setTimeout(flush, 1500);
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

  // ── Pull + merge al iniciar sesión (SIN CAMBIOS de lógica) ──────────
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

    for (var i = 0; i < LS.length; i++) {
      var k = LS.key(i);
      if (shouldSync(k) && !cloudKeys.has(k)) dirty.add(k);
    }
    if (dirty.size) { schedule(); }
    if (typeof window.updateSubbarStreak === 'function') { try { window.updateSubbarStreak(); } catch (e) {} }
    if (typeof window.showToast === 'function') { try { window.showToast('☁️ Sincronizado', 2000); } catch (e) {} }
  }

  // ── UI: gate de login (a pantalla completa si requireAuth) ──────────
  var gateEl = null, btnEl = null, closeBtn = null;

  function injectUI() {
    gateEl = document.createElement('div');
    gateEl.id = 'cloudGate';
    gateEl.style.cssText = 'display:none;position:fixed;inset:0;z-index:2147483647;background:#0f172a;align-items:center;justify-content:center;padding:16px;font-family:system-ui,-apple-system,sans-serif';
    gateEl.innerHTML =
      '<div style="position:relative;background:#fff;color:#111;padding:24px;border-radius:16px;width:min(360px,92vw);box-shadow:0 12px 40px rgba(0,0,0,.4)">' +
      '<button id="cloudClose" title="Cerrar" style="display:none;position:absolute;top:10px;right:12px;border:none;background:transparent;font-size:18px;cursor:pointer;color:#888">✕</button>' +
      '<div style="font-size:34px;text-align:center;margin-bottom:6px">🔒</div>' +
      '<h2 style="margin:0 0 4px;text-align:center;font-size:20px">Test Movilidad Urbana</h2>' +
      '<p style="margin:0 0 16px;text-align:center;color:#666;font-size:13px">Inicia sesión para acceder.</p>' +
      '<input id="cloudEmail" type="email" placeholder="email" autocomplete="username" style="width:100%;box-sizing:border-box;margin:0 0 8px;padding:11px;border:1px solid #ccc;border-radius:8px">' +
      '<input id="cloudPass" type="password" placeholder="contraseña" autocomplete="current-password" style="width:100%;box-sizing:border-box;margin:0 0 12px;padding:11px;border:1px solid #ccc;border-radius:8px">' +
      '<div id="cloudErr" style="color:#c00;font-size:13px;min-height:18px;margin-bottom:8px"></div>' +
      '<button id="cloudDo" style="width:100%;padding:11px;border:none;background:#1f6feb;color:#fff;border-radius:8px;font-weight:600;cursor:pointer">Entrar</button>' +
      '</div>';
    document.body.appendChild(gateEl);
    closeBtn = gateEl.querySelector('#cloudClose');
    closeBtn.onclick = function () { if (!requireAuth) gateEl.style.display = 'none'; };
    gateEl.querySelector('#cloudDo').onclick = doLogin;
    gateEl.querySelector('#cloudPass').addEventListener('keydown', function (e) { if (e.key === 'Enter') doLogin(); });

    btnEl = document.createElement('button');
    btnEl.id = 'cloudBtn';
    btnEl.style.cssText = 'display:none;position:fixed;right:12px;bottom:12px;z-index:9999;padding:8px 12px;border-radius:999px;border:none;background:#1f6feb;color:#fff;font:600 13px/1 system-ui;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.25)';
    btnEl.onclick = function () { session ? signOut() : (gateEl.style.display = 'flex'); };
    document.body.appendChild(btnEl);
  }

  // Aplica el estado visual según haya sesión y si el login es obligatorio.
  function applyAuthState() {
    if (!gateEl) return;
    if (session) {
      gateEl.style.display = 'none';
      btnEl.style.display = '';
      btnEl.textContent = '☁️ Cerrar sesión';
      document.body.style.overflow = '';
    } else if (requireAuth) {
      // BLOQUEO TOTAL: gate a pantalla completa, sin escape ni botón flotante.
      closeBtn.style.display = 'none';
      gateEl.style.display = 'flex';
      btnEl.style.display = 'none';
      document.body.style.overflow = 'hidden';
    } else {
      // Modo opcional (reversible): gate cerrable + botón "Conectar".
      closeBtn.style.display = '';
      gateEl.style.display = 'none';
      btnEl.style.display = '';
      btnEl.textContent = '☁️ Conectar';
      document.body.style.overflow = '';
    }
  }

  async function doLogin() {
    var email = (gateEl.querySelector('#cloudEmail').value || '').trim();
    var pass = gateEl.querySelector('#cloudPass').value;
    var err = gateEl.querySelector('#cloudErr'); err.textContent = '';
    var r = await sb.auth.signInWithPassword({ email: email, password: pass });
    if (r.error) { err.textContent = r.error.message; return; }
    // El desbloqueo lo hace onAuthStateChange → applyAuthState().
  }
  async function signOut() { await sb.auth.signOut(); }

  // ── Ciclo de sesión ─────────────────────────────────────────────────
  sb.auth.onAuthStateChange(function (_evt, s) {
    session = s;
    applyAuthState();
    if (session) pullAndMerge();
  });

  function boot() {
    injectUI();
    applyAuthState();           // bloquea de entrada si no hay sesión y requireAuth
    sb.auth.getSession().then(function (r) {
      session = r.data.session;
      applyAuthState();
      if (session) pullAndMerge();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
