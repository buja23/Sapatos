import { Search, MessageCircle, User, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoNav from '../assets/LogoNav.png';

export default function Header() {
  return (
    <header className="bg-[#D2B572] text-white shadow-md relative z-20 py-4">
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* ==================== AQUI ESTÁ A MUDANÇA ==================== */}
        {/* 1. Aumentei a largura do container para w-[380px] para caber o zoom */}
        <div className="flex-shrink-0 order-1 w-[280px] lg:w-[380px] flex items-center">
          <Link to="/">
            {/* 2. LOGO COM ZOOM MÁXIMO:
               - h-32 lg:h-36: Altura base maior.
               - scale-[2.2]: Zoom de 2.2x (Vai ficar gigante).
               - origin-left: Cresce da esquerda para a direita.
               - -ml-6: Ajuste fino para colar na margem esquerda.
            */}
            <img 
              src={logoNav} 
              alt="Sapato de Madame" 
              className="h-32 lg:h-36 w-auto object-contain transform scale-[2.2] origin-left -ml-6 hover:opacity-95 transition-opacity" 
            />
          </Link>
        </div>
        {/* ============================================================= */}

        {/* 2. BUSCA */}
        <div className="w-full lg:flex-1 max-w-4xl order-3 lg:order-2 px-4 lg:px-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="O que você está buscando?" 
              className="w-full py-3.5 px-6 pr-12 rounded-sm bg-white text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#997617] shadow-sm text-sm tracking-wide"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>

        {/* 3. ÍCONES */}
        <div className="flex items-center gap-8 order-2 lg:order-3 flex-shrink-0">
          <button className="flex flex-col items-center gap-1 hover:text-[#997617] transition-colors group">
            <MessageCircle className="w-6 h-6 stroke-1" />
            <span className="text-[10px] uppercase tracking-widest opacity-90 group-hover:opacity-100 font-medium">Atendimento</span>
          </button>
          <Link to="/account" className="flex flex-col items-center gap-1 hover:text-[#997617] transition-colors group">
            <User className="w-6 h-6 stroke-1" />
            <span className="text-[10px] uppercase tracking-widest opacity-90 group-hover:opacity-100 font-medium">Minha Conta</span>
          </Link>
          <button className="flex flex-col items-center gap-1 hover:text-[#997617] transition-colors relative group">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 stroke-1" />
              <span className="absolute -top-1.5 -right-1.5 bg-white text-[#D2B572] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">0</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest opacity-90 group-hover:opacity-100 font-medium">Meu Carrinho</span>
          </button>
        </div>
      </div>

      <div className="border-t border-white/20 relative z-30 bg-[#D2B572] mt-2">
        <div className="max-w-[1600px] mx-auto">
          <nav className="flex flex-wrap justify-center lg:justify-between px-6 lg:px-12 py-4 gap-6 text-xs uppercase tracking-[0.15em] font-medium text-white/90">
            {['Home', 'Blusas', 'Camisas', 'Shorts', 'Saias', 'Calças', 'Casacos', 'Conjuntos', 'Outlet', 'Vestidos', 'Acessórios'].map((item) => (
              <Link key={item} to={`/category/${item.toLowerCase()}`} className="hover:text-[#997617] transition-colors hover:scale-105 transform duration-200">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}