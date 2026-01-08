import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca e Conceito */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center rounded-sm">
                  <span className="font-serif text-black font-bold text-xl">P</span>
               </div>
               <h3 className="font-['Playfair_Display'] text-2xl font-bold tracking-widest text-white">
                 PRUDEN
               </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Redefinindo o caminhar com elegância. Sapatos artesanais feitos para quem valoriza design, conforto e exclusividade.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Coleções */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white tracking-wider">Explorar</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/search?category=lancamentos" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Lançamentos</Link></li>
              <li><Link to="/search?category=masculino" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Masculino</Link></li>
              <li><Link to="/search?category=feminino" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Feminino</Link></li>
              <li><Link to="/search?category=acessorios" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">Acessórios</Link></li>
              <li><Link to="/search?category=outlet" className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs font-bold text-[#D4AF37]">Outlet</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white tracking-wider">Concierge</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#D4AF37]" /> 
                <span>(18) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#D4AF37]" /> 
                <span>sac@pruden.store</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[#D4AF37]" /> 
                <span>Presidente Prudente, SP<br/>Boutique Jardins</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white tracking-wider">Insider</h4>
            <p className="text-gray-400 text-sm mb-4">Cadastre-se para acesso antecipado aos novos drops.</p>
            <div className="flex flex-col gap-3 mb-6">
              <input 
                type="email" 
                placeholder="Seu e-mail exclusivo" 
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="bg-[#D4AF37] text-black font-bold py-3 px-4 rounded-sm hover:bg-[#B5952F] transition-colors text-xs uppercase tracking-widest">
                Assinar Newsletter
              </button>
            </div>
            
            <div className="pt-2">
              <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <CreditCard className="h-6 w-6 text-white"/>
                <div className="bg-white px-2 py-1 rounded text-black text-[10px] font-bold">PIX</div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="font-light tracking-wide">© 2026 PRUDEN FOOTWEAR. Todos os direitos reservados.</p>
          <div className="flex gap-8 uppercase tracking-widest">
            <Link to="#" className="hover:text-[#D4AF37] transition-colors">Privacidade</Link>
            <Link to="#" className="hover:text-[#D4AF37] transition-colors">Termos</Link>
            <Link to="#" className="hover:text-[#D4AF37] transition-colors">Trocas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}