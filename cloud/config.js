// Configuración pública del cliente Supabase para la app de estudio.
// La anon key es PÚBLICA por diseño (va en el cliente); la seguridad la
// da la RLS de la tabla (candada a vuestros UID). NUNCA poner aquí service_role.
window.ESTUDIO_CONFIG = {
  SUPABASE_URL: 'https://vdeuywagomkxbtpvuovm.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZXV5d2Fnb21reGJ0cHZ1b3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2MjE2NDUsImV4cCI6MjA5NTE5NzY0NX0.N3TlD8nYq5TXuIR29X87FKSTpqGCMla-266Gp1NMd3E',
  TABLE: 'estudio_progreso',
  REQUIRE_AUTH: true, // login obligatorio (gate a pantalla completa). false = opcional
};
