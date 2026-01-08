import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { User, Session } from '@supabase/supabase-js';
// import { supabase } from '../lib/supabase';

// Tipos simplificados para o Mock
interface User {
  id: string;
  email?: string;
  user_metadata?: { role?: string; full_name?: string };
}

interface AuthContextType {
  user: User | null;
  session: any | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInMock: () => void; // Função extra para forçar login na demo
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula verificação de sessão rápida
    setLoading(false);
  }, []);

  const signOut = async () => {
    setUser(null);
  };

  const signInMock = () => {
    setUser({
      id: 'demo-123',
      email: 'cliente@prudenshoes.com',
      user_metadata: { full_name: 'Cliente Demo' }
    });
  };

  return (
    <AuthContext.Provider value={{ user, session: null, loading, signOut, signInMock }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}