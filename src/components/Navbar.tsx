import { Search, MessageCircle, User, ShoppingCart, Menu, X, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoNav from '../assets/LogoNav.jpg';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloqueia a rolagem quando o menu mobile abre
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-[#D2B572] text-white shadow-md relative z-50 font-sans">
      
      {/* ==================================================================================== */}
      {/* 1. VERSÃO MOBILE (Visível apenas no celular) */}
      {/* ==================================================================================== */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4 relative z-30">
        
        {/* Esquerda: Menu + Lupa */}
        <div className="flex items-center gap-3 w-1/4">
          <button onClick={() => setIsMenuOpen(true)} className="p-1 -ml-2 active:scale-95 transition-transform">
            <Menu className="w-7 h-7" />
          </button>
          <Search className="w-5 h-5 text-white/90" />
        </div>

        {/* Centro: Logo (AUMENTADA PARA h-14) */}
        <div className="flex-1 flex justify-center w-1/2">
          <Link to="/" className="block">
            {/* Mudei de h-10 para h-14. Como está cortada, vai ficar ótima. */}
            <img 
              src={logoNav} 
              alt="Sapato de Madame" 
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Direita: Carrinho */}
        <div className="flex justify-end w-1/4">
          <button className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-[#D2B572] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">0</span>
          </button>
        </div>
      </div>

      {/* ==================================================================================== */}
      {/* 2. VERSÃO DESKTOP (Visível apenas no PC - INTACTA) */}
      {/* ==================================================================================== */}
      <div className="hidden lg:flex max-w-[1600px] mx-auto px-12 items-center justify-between gap-8 py-4">
        
        {/* Logo Container */}
        <div className="flex-shrink-0 w-[380px] flex items-center">
          <Link to="/">
            <img 
              src={logoNav} 
              alt="Sapato de Madame" 
              className="h-24 w-auto object-contain hover:opacity-95 transition-opacity" 
            />
          </Link>
        </div>

        {/* Busca */}
        <div className="flex-1 max-w-4xl px-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="O que você está buscando?" 
              className="w-full py-3.5 px-6 pr-12 rounded-sm bg-white text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#997617] shadow-sm text-sm tracking-wide"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-8 flex-shrink-0">
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

      {/* ==================================================================================== */}
      {/* 3. MENUS (Inferior e Lateral) */}
      {/* ==================================================================================== */}
      
      {/* Menu Desktop */}
      <div className="hidden lg:block border-t border-white/20 relative z-30 bg-[#D2B572] mt-2">
        <div className="max-w-[1600px] mx-auto">
          <nav className="flex justify-between px-12 py-4 gap-6 text-xs uppercase tracking-[0.15em] font-medium text-white/90">
            {['Home', 'Blusas', 'Camisas', 'Shorts', 'Saias', 'Calças', 'Casacos', 'Conjuntos', 'Outlet', 'Vestidos', 'Acessórios'].map((item) => (
              <Link key={item} to={`/category/${item.toLowerCase()}`} className="hover:text-[#997617] transition-colors hover:scale-105 transform duration-200">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Mobile (Drawer) */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden shadow-2xl flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="bg-[#D2B572] p-5 flex items-center justify-between text-white shrink-0">
            <span className="font-serif text-xl italic font-bold">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/20 rounded-full">
                <X className="w-6 h-6" />
            </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-6">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full bg-slate-100 text-slate-800 text-sm py-3 px-4 pl-10 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#D2B572]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <nav className="flex flex-col">
                {['Home', 'Blusas', 'Camisas', 'Shorts', 'Saias', 'Calças', 'Casacos', 'Conjuntos', 'Outlet', 'Vestidos', 'Acessórios'].map((item) => (
                    <Link 
                        key={item} 
                        to={`/category/${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-3.5 text-slate-700 hover:text-[#D2B572] border-b border-slate-100 text-sm uppercase tracking-wide font-medium"
                    >
                        {item}
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                    </Link>
                ))}
            </nav>

            <div className="space-y-4 pt-2 pb-8">
                <Link to="/account" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-slate-600 hover:text-[#D2B572]">
                    <User className="w-5 h-5 text-[#D2B572]"/>
                    <span className="text-sm font-bold uppercase tracking-wide">Minha Conta</span>
                </Link>
                <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-slate-600 hover:text-[#D2B572]">
                    <Heart className="w-5 h-5 text-[#D2B572]"/>
                    <span className="text-sm font-bold uppercase tracking-wide">Favoritos</span>
                </Link>
                <button className="flex items-center gap-3 text-slate-600 hover:text-[#D2B572]">
                    <MessageCircle className="w-5 h-5 text-[#D2B572]"/>
                    <span className="text-sm font-bold uppercase tracking-wide">Atendimento</span>
                </button>
            </div>
        </div>
      </div>

    </header>
  );
}