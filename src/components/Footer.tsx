import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // Borda superior agora é ROSE suave
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-[#BC858E]/20 mt-auto font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          {/* Coluna 1: Marca & Conceito */}
          <div className="space-y-6">
            <Link to="/" className="block group">
               {/* Logotipo: O "de" agora é ROSE */}
               <h3 className="text-3xl font-['Playfair_Display'] text-white leading-none">
                 Sapato <span className="font-['Pinyon_Script'] text-[#BC858E] font-normal text-4xl mx-1">de</span> Madame
               </h3>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
              Redefinindo o caminhar com elegância italiana. Peças exclusivas para mulheres que deixam sua marca por onde passam.
            </p>
            
            {/* Redes Sociais com Hover ROSE */}
            <div className="flex space-x-5 pt-4">
              <a href="#" className="text-white/60 hover:text-[#BC858E] transition-colors hover:scale-110 transform duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#BC858E] transition-colors hover:scale-110 transform duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#BC858E] transition-colors hover:scale-110 transform duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Boutique */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg text-white mb-8 tracking-wide">Boutique</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              {/* O efeito de linha e texto agora é ROSE */}
              <li><Link to="/category/lancamentos" className="hover:text-[#BC858E] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#BC858E] transition-all"></span>Lançamentos</Link></li>
              <li><Link to="/category/sapatos" className="hover:text-[#BC858E] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#BC858E] transition-all"></span>Sapatos</Link></li>
              <li><Link to="/category/bolsas" className="hover:text-[#BC858E] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#BC858E] transition-all"></span>Bolsas</Link></li>
              <li><Link to="/category/acessorios" className="hover:text-[#BC858E] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#BC858E] transition-all"></span>Acessórios</Link></li>
              <li><Link to="/category/outlet" className="hover:text-[#BC858E] transition-colors flex items-center gap-2 group text-[#BC858E]"><span className="w-0 group-hover:w-2 h-[1px] bg-[#BC858E] transition-all"></span>Outlet Premium</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento VIP */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg text-white mb-8 tracking-wide">Atendimento VIP</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li className="flex items-start gap-4 group cursor-pointer hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[#BC858E] mt-1" /> 
                <span>(18) 99999-9999<br/><span className="text-xs opacity-50">Seg. à Sex. 9h às 18h</span></span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-[#BC858E]" /> 
                <span>sac@sapatodemadame.com</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-[#BC858E] mt-1" /> 
                <span>Presidente Prudente, SP<br/><span className="text-xs opacity-50">Jardins Bongiovani</span></span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg text-white mb-8 tracking-wide">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6 font-light">
              Cadastre-se para receber convites de pré-venda e ofertas exclusivas.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                {/* Input com borda de foco ROSE */}
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BC858E] transition-colors peer"
                />
              </div>
              {/* Botão ROSE */}
              <button className="w-full bg-[#BC858E] text-white font-bold py-3.5 px-4 rounded-sm hover:bg-[#a4727a] transition-colors text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 group">
                Inscrever-se
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="pt-8 flex items-center gap-3 opacity-60">
               <CreditCard className="h-5 w-5 text-white/50"/>
               <span className="text-xs text-white/50 font-medium tracking-wide">PIX • VISA • MASTER</span>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
          <p>© 2026 Sapato de Madame. Todos os direitos reservados.</p>
          <div className="flex gap-6 lg:gap-8 tracking-widest uppercase">
            <Link to="#" className="hover:text-[#BC858E] transition-colors">Privacidade</Link>
            <Link to="#" className="hover:text-[#BC858E] transition-colors">Termos</Link>
            <Link to="#" className="hover:text-[#BC858E] transition-colors">Trocas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}