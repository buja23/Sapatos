import { Search, MessageCircle, User, ShoppingCart, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoNav from '../assets/LogoNav.jpg'; 
import { useState, useEffect } from 'react';
import SupportModal from './SupportModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  
  // Estado para controlar o accordion de Sapatos no mobile
  const [isMobileShoesOpen, setIsMobileShoesOpen] = useState(false);

  // Bloqueia a rolagem do BODY quando menus abrem
  useEffect(() => {
    if (isMenuOpen || isSupportOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isSupportOpen]);

  // Estrutura de Dados do Menu (Centralizada para facilitar manutenção)
  const shoesSubmenu = [
    {
      title: "Geral",
      items: ["Chinelo", "Mocassim", "Mule", "Papete", "Rasteira", "Sapatilha", "Scarpin", "Tênis"]
    },
    {
      title: "Sandálias",
      items: ["Salto Fino", "Salto Grosso", "Meia Pata", "Flatform", "Anabela"]
    },
    {
      title: "Botas",
      items: ["Cano Alto", "Cano Curto", "Coturno", "Country"]
    }
  ];

  return (
    <>
      <header className="bg-[#D2B572] text-white shadow-md relative z-50 font-sans">
        
        {/* ======================================================== */}
        {/* HEADER MOBILE (Barra Superior) */}
        {/* ======================================================== */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 relative z-30 bg-[#D2B572]">
          <div className="flex items-center gap-3 w-1/4">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors active:scale-95"
              aria-label="Abrir menu"
            >
              <Menu className="w-7 h-7" />
            </button>
            <Search className="w-5 h-5 text-white/90" />
          </div>

          <div className="flex-1 flex justify-center w-1/2">
            <Link to="/" className="block">
              <img src={logoNav} alt="Sapato de Madame" className="h-12 w-auto object-contain" />
            </Link>
          </div>

          <div className="flex justify-end w-1/4">
            <button className="relative p-1">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-0.5 -right-0.5 bg-white text-[#D2B572] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">0</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HEADER DESKTOP */}
        {/* ======================================================== */}
        <div className="hidden lg:flex max-w-[1600px] mx-auto px-12 items-center justify-between gap-8 py-4">
          
          <div className="flex-shrink-0 w-[300px] flex items-center">
            <Link to="/">
              <img src={logoNav} alt="Sapato de Madame" className="h-24 w-auto object-contain hover:opacity-95 transition-opacity" />
            </Link>
          </div>

          <div className="flex-1 max-w-3xl px-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Olá, o que procura ?" 
                className="w-full py-3 px-6 pr-12 rounded-sm bg-white text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#997617] shadow-sm text-sm tracking-wide"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>

          <div className="flex items-center gap-8 flex-shrink-0">
            <button onClick={() => setIsSupportOpen(true)} className="flex flex-col items-center gap-1 hover:text-[#997617] transition-colors group">
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

        {/* ======================================================== */}
        {/* NAV INFERIOR DESKTOP */}
        {/* ======================================================== */}
        <div className="hidden lg:block border-t border-white/20 relative z-40 bg-[#D2B572] mt-2">
          <div className="max-w-[1600px] mx-auto">
            <nav className="flex justify-center px-12">
              <ul className="flex gap-12 text-xs uppercase tracking-[0.15em] font-medium text-white/90">
                <li className="py-4"><Link to="/category/lancamentos" className="hover:text-[#997617] transition-colors hover:scale-105 block">Lançamentos</Link></li>
                
                {/* Mega Menu Sapatos */}
                <li className="group py-4">
                  <Link to="/category/sapatos" className="flex items-center gap-1 hover:text-[#997617] transition-colors cursor-pointer">
                    Sapatos
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full w-full bg-white text-slate-600 shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="max-w-[1000px] mx-auto py-10 px-12 grid grid-cols-3 gap-12 text-left">
                      {shoesSubmenu.map((section, idx) => (
                        <div key={idx} className="col-span-1">
                          <h3 className="font-bold text-[#D2B572] uppercase tracking-widest text-xs mb-4 border-b border-gray-100 pb-2">{section.title}</h3>
                          <ul className="space-y-3">
                            {section.items.map((item) => (
                              <li key={item}>
                                <Link to={`/category/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-[#BC858E] hover:translate-x-1 transition-all block">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="py-4"><Link to="/category/bolsas" className="hover:text-[#997617] transition-colors hover:scale-105 block">Bolsas</Link></li>
                <li className="py-4"><Link to="/category/acessorios" className="hover:text-[#997617] transition-colors hover:scale-105 block">Acessórios</Link></li>
                <li className="py-4"><Link to="/category/best-sellers" className="hover:text-[#997617] transition-colors hover:scale-105 block">Best Sellers</Link></li>
                <li className="py-4"><Link to="/category/outlet" className="text-red-100 hover:text-white font-bold transition-colors hover:scale-105 block">Outlet</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MENU MOBILE (DRAWER SÊNIOR) */}
        {/* ======================================================== */}
        
        {/* Backdrop Escuro */}
        <div 
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden backdrop-blur-sm ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Painel Lateral */}
        <div 
          className={`fixed top-0 left-0 h-[100dvh] w-[85%] max-w-[340px] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden shadow-2xl flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Topo do Menu */}
          <div className="bg-[#D2B572] p-5 flex items-center justify-between text-white shrink-0 shadow-md z-10">
              <span className="font-serif text-xl italic font-bold tracking-wide">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <X className="w-6 h-6" />
              </button>
          </div>
          
          {/* Conteúdo Rolável (Scroll) */}
          <div className="flex-1 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-200">
              
              {/* Barra de Busca Mobile */}
              <div className="p-5 pb-2">
                <div className="relative">
                    <input type="text" placeholder="Buscar produtos..." className="w-full bg-slate-50 text-slate-800 text-sm py-3 px-4 pl-10 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#D2B572] focus:border-[#D2B572] transition-all"/>
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Lista de Links */}
              <div className="py-2">
                
                {/* 1. Lançamentos */}
                <Link to="/category/lancamentos" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-6 py-4 text-slate-800 hover:text-[#D2B572] border-b border-slate-50 text-sm font-bold uppercase tracking-wide transition-colors">
                    Lançamentos
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>

                {/* 2. Sapatos (Accordion Expansível) */}
                <div className="border-b border-slate-50">
                  <button 
                    onClick={() => setIsMobileShoesOpen(!isMobileShoesOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 text-slate-800 hover:text-[#D2B572] text-sm font-bold uppercase tracking-wide transition-colors bg-white"
                  >
                    Sapatos
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isMobileShoesOpen ? 'rotate-180 text-[#D2B572]' : ''}`} />
                  </button>
                  
                  {/* Sub-itens de Sapatos */}
                  <div className={`overflow-hidden transition-all duration-300 bg-slate-50/50 ${isMobileShoesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                     <div className="px-6 py-4 space-y-6">
                       {shoesSubmenu.map((section) => (
                          <div key={section.title}>
                            <p className="text-[10px] font-bold text-[#D2B572] uppercase mb-2 tracking-widest border-b border-slate-200/50 pb-1 w-fit">{section.title}</p>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                              {section.items.map(item => (
                                <Link 
                                  key={item}
                                  to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-[13px] text-slate-600 hover:text-[#BC858E] font-medium block leading-tight"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                       ))}
                       <Link to="/category/sapatos" onClick={() => setIsMenuOpen(false)} className="block text-center text-xs font-bold text-slate-900 underline mt-4 pt-2 border-t border-slate-200">
                         Ver todos os Sapatos
                       </Link>
                     </div>
                  </div>
                </div>

                {/* 3. Bolsas */}
                <Link to="/category/bolsas" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-6 py-4 text-slate-800 hover:text-[#D2B572] border-b border-slate-50 text-sm font-bold uppercase tracking-wide transition-colors">
                    Bolsas
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>

                {/* 4. Acessórios */}
                <Link to="/category/acessorios" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-6 py-4 text-slate-800 hover:text-[#D2B572] border-b border-slate-50 text-sm font-bold uppercase tracking-wide transition-colors">
                    Acessórios
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>

                {/* 5. Best Sellers */}
                <Link to="/category/best-sellers" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-6 py-4 text-slate-800 hover:text-[#D2B572] border-b border-slate-50 text-sm font-bold uppercase tracking-wide transition-colors">
                    Best Sellers
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>

                {/* 6. Outlet */}
                <Link to="/category/outlet" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-6 py-4 text-red-500 hover:text-red-600 border-b border-slate-50 text-sm font-bold uppercase tracking-wide transition-colors bg-red-50/10">
                    Outlet
                    <ChevronRight className="w-4 h-4 text-red-300" />
                </Link>

              </div>

              {/* Área do Usuário (Rodapé do Menu) */}
              <div className="mt-6 px-6 pb-12 space-y-4">
                  <Link to="/account" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D2B572] shadow-sm">
                        <User className="w-5 h-5"/>
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wide">Minha Conta</span>
                  </Link>
                  
                  <button 
                    onClick={() => { setIsMenuOpen(false); setIsSupportOpen(true); }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#D2B572]/10 text-[#997617] hover:bg-[#D2B572]/20 transition-colors w-full text-left"
                  >
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#D2B572] shadow-sm">
                        <MessageCircle className="w-5 h-5"/>
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wide">Atendimento</span>
                  </button>
              </div>
          </div>
        </div>

      </header>

      {/* Modal de Suporte */}
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </>
  );
}