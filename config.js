// Configuración pública de la web app (todas son claves "anon"/publishable: pueden estar en GitHub Pages).
// NUNCA pongas aquí una service_role key.
window.CENTRO_CONFIG = {
  // Cierre de caja (repo jwmedicalca-rgb/cierre-caja, mismo valor que su config.js)
  cierre: {
    url: 'https://sufhdhdzfgfbtbgnizru.supabase.co',
    anonKey: 'sb_publishable__1_3MNfS66N6fPymHVWnZw_qVhgOyu-',
  },
  // Patrimonio (proyecto FiveNance, la misma clave pública que usa la app de Patrimonio)
  patrimonio: {
    url: 'https://isrvenwebojpuqvbfffp.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzcnZlbndlYm9qcHVxdmJmZmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDkwMDksImV4cCI6MjA5OTYyNTAwOX0.C2453daC4rHnzeKHHWpDqK68qYOJgVAnbPBcrUEtIYI',
  },
  // Centro de mando (el Supabase nuevo: Settings → API → Project URL y anon/publishable key)
  centro: {
    url: '',      // ← cuando crees el Supabase del centro, pon aquí su URL
    anonKey: '',  // ← y su anon/publishable key
  },
  // Qué proyectos de Patrimonio pertenecen a cada empresa (igual que PATRIMONIO_EMPRESAS del bot)
  empresas: 'uniformes=Uniformes Caracas,Uniformes|racks=Racks',
  cuentasEmpresas: '',
  // WhatsApp al que van los recordatorios por defecto
  telefonoDueno: '',
};
