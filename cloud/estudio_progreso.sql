-- =====================================================================
-- App de estudio personal (separada de Acertium) — tabla de progreso.
-- Vive en el MISMO proyecto Supabase pero NO modifica ninguna tabla de
-- Acertium: solo AÑADE esta tabla. Modelo clave-valor (espeja localStorage).
--
-- CANDADO: RLS restringida a una LISTA BLANCA de UIDs (los dueños de la app):
--   - cbe1d835-6ce5-4fbb-9b39-a60ee8c0e5f8  (jonathanalcaraz1990@gmail.com)
--   - 1e5ddc9b-1b54-4a5d-a23e-3c2ebc6c9bb5  (cristian_gonzaso@hotmail.com)
--   - 415bf7ac-e5ca-470f-b87c-25952b303e3c  (a.gutierrez.01012000@proton.me)
-- Cada usuario solo opera sobre SUS propias filas (auth.uid() = user_id),
-- así que sus progresos están separados (no compartidos). Ningún otro
-- usuario autenticado de Acertium puede leer/escribir aquí.
--
-- Idempotente: create if not exists + drop policy if exists.
-- =====================================================================

create table if not exists public.estudio_progreso (
  user_id    uuid        not null references auth.users(id) on delete cascade,
  k          text        not null,               -- clave fusion_*
  v          jsonb       not null,               -- valor parseado
  updated_at timestamptz not null default now(),
  primary key (user_id, k)
);

alter table public.estudio_progreso enable row level security;

drop policy if exists estudio_progreso_select_own on public.estudio_progreso;
drop policy if exists estudio_progreso_insert_own on public.estudio_progreso;
drop policy if exists estudio_progreso_update_own on public.estudio_progreso;
drop policy if exists estudio_progreso_delete_own on public.estudio_progreso;

create policy estudio_progreso_select_own on public.estudio_progreso
  for select using (
    auth.uid() = user_id
    and auth.uid() in (
      'cbe1d835-6ce5-4fbb-9b39-a60ee8c0e5f8'::uuid,
      '1e5ddc9b-1b54-4a5d-a23e-3c2ebc6c9bb5'::uuid,
      '415bf7ac-e5ca-470f-b87c-25952b303e3c'::uuid
    )
  );

create policy estudio_progreso_insert_own on public.estudio_progreso
  for insert with check (
    auth.uid() = user_id
    and auth.uid() in (
      'cbe1d835-6ce5-4fbb-9b39-a60ee8c0e5f8'::uuid,
      '1e5ddc9b-1b54-4a5d-a23e-3c2ebc6c9bb5'::uuid,
      '415bf7ac-e5ca-470f-b87c-25952b303e3c'::uuid
    )
  );

create policy estudio_progreso_update_own on public.estudio_progreso
  for update using (
    auth.uid() = user_id
    and auth.uid() in (
      'cbe1d835-6ce5-4fbb-9b39-a60ee8c0e5f8'::uuid,
      '1e5ddc9b-1b54-4a5d-a23e-3c2ebc6c9bb5'::uuid,
      '415bf7ac-e5ca-470f-b87c-25952b303e3c'::uuid
    )
  ) with check (
    auth.uid() = user_id
    and auth.uid() in (
      'cbe1d835-6ce5-4fbb-9b39-a60ee8c0e5f8'::uuid,
      '1e5ddc9b-1b54-4a5d-a23e-3c2ebc6c9bb5'::uuid,
      '415bf7ac-e5ca-470f-b87c-25952b303e3c'::uuid
    )
  );

create policy estudio_progreso_delete_own on public.estudio_progreso
  for delete using (
    auth.uid() = user_id
    and auth.uid() in (
      'cbe1d835-6ce5-4fbb-9b39-a60ee8c0e5f8'::uuid,
      '1e5ddc9b-1b54-4a5d-a23e-3c2ebc6c9bb5'::uuid,
      '415bf7ac-e5ca-470f-b87c-25952b303e3c'::uuid
    )
  );
