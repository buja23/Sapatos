import { Truck, CreditCard, ShieldCheck, MessageCircle } from 'lucide-react';

export default function TrustBar() {
  const benefits = [
    {
      icon: <Truck strokeWidth={1.5} className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Frete Grátis",
      subtitle: "Acima de R$ 399"
    },
    {
      icon: <CreditCard strokeWidth={1.5} className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "10x Sem Juros",
      subtitle: "Ou 5% OFF no PIX"
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Compra Segura",
      subtitle: "Dados protegidos"
    },
    {
      icon: <MessageCircle strokeWidth={1.5} className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Suporte VIP",
      subtitle: "Fale conosco"
    }
  ];

  return (
    <div className="bg-[#FDFBF7] py-8 lg:py-10 border-t border-[#BC858E]/10 border-b border-[#BC858E]/10">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-12">
        
        {/* GRID RESPONSIVO:
           - Mobile: grid-cols-2 (2 por linha, economiza altura)
           - Desktop: grid-cols-4 (Tudo em uma linha)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 lg:gap-0">
          
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5 px-2 group
                ${index !== benefits.length - 1 ? 'lg:border-r lg:border-[#BC858E]/20' : ''} 
              `}
            >
              {/* Ícone (Rose) - Centralizado no Mobile */}
              <div className="text-[#BC858E] group-hover:scale-110 transition-transform duration-300 mb-1 lg:mb-0">
                {item.icon}
              </div>
              
              {/* Textos - Centralizados no Mobile, Esquerda no Desktop */}
              <div className="text-center lg:text-left">
                <h3 className="font-['Playfair_Display'] font-bold text-slate-800 text-sm lg:text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-[10px] lg:text-xs text-slate-500 font-light tracking-wide uppercase">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}