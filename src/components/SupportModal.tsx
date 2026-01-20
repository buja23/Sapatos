import { X, MessageCircle, Package, RefreshCw, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const options = [
    {
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      title: "WhatsApp",
      description: "Fale com uma vendedora agora",
      action: () => window.open("https://wa.me/5511999999999", "_blank"),
      color: "hover:border-[#25D366]/50 hover:bg-[#25D366]/5"
    },
    {
      icon: <Package className="w-6 h-6 text-[#D2B572]" />,
      title: "Meus Pedidos",
      description: "Rastreie sua compra",
      link: "/account",
      color: "hover:border-[#D2B572]/50 hover:bg-[#D2B572]/5"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-slate-600" />,
      title: "Trocas e Devoluções",
      description: "Como devolver um produto",
      action: () => alert("Redirecionar para página de trocas"), // Substitua pelo Link quando tiver a página
      color: "hover:border-slate-400/50 hover:bg-slate-100"
    },
    {
      icon: <Mail className="w-6 h-6 text-slate-600" />,
      title: "E-mail",
      description: "contato@sapatodemadame.com.br",
      action: () => window.location.href = "mailto:contato@sapatodemadame.com.br",
      color: "hover:border-slate-400/50 hover:bg-slate-100"
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden relative animate-scale-up">
        
        {/* Cabeçalho */}
        <div className="bg-[#D2B572] p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="font-serif text-2xl font-bold mb-1">Central de Ajuda</h2>
          <p className="text-white/90 text-sm font-light">Como podemos te ajudar hoje?</p>
        </div>

        {/* Opções */}
        <div className="p-6 grid gap-3">
          {options.map((opt, idx) => {
            const Content = () => (
              <>
                <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {opt.icon}
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-bold text-slate-700 text-sm">{opt.title}</h3>
                  <p className="text-xs text-slate-400">{opt.description}</p>
                </div>
                <div className="text-slate-300">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </>
            );

            const className = `flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm transition-all cursor-pointer group ${opt.color}`;

            if (opt.link) {
              return (
                <Link key={idx} to={opt.link} className={className} onClick={onClose}>
                  <Content />
                </Link>
              );
            }

            return (
              <button key={idx} onClick={() => { opt.action?.(); onClose(); }} className={className}>
                <Content />
              </button>
            );
          })}
        </div>

        {/* Rodapé */}
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-400">
            Atendimento: Seg à Sex das 09h às 18h
          </p>
        </div>

      </div>
    </div>
  );
}