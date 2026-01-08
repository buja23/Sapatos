// import { createClient } from '@supabase/supabase-js';

// MODO DEMONSTRAÇÃO: Supabase desativado para rodar apenas o Frontend.
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey  = import.meta.env.VITE_SUPABASE_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Faltam as variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY');
// }

// export const supabase = createClient(supabaseUrl, supabaseKey);

// Mock para evitar erros de importação
export const supabase = {
  from: () => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: [], error: null }),
    update: () => ({ data: [], error: null }),
    delete: () => ({ data: [], error: null }),
    eq: () => ({ data: [], error: null }),
  }),
  auth: {
    getSession: async () => ({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signOut: async () => {},
    signInWithPassword: async () => ({ data: { user: { id: 'demo-user' } }, error: null }),
  },
  rpc: async () => ({ data: null, error: null }),
} as any;