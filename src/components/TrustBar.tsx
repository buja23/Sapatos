import { Truck, CreditCard, ShieldCheck, Phone } from 'lucide-react';

export default function TrustBar() {
  const benefits = [
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Enviamos para todo Brasil",
      subtitle: "Via Correios PAC ou SEDEX"
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "Parcele suas compras",
      subtitle: "Até 10x sem juros ou Pix com 5% OFF"
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Loja 100% Segura",
      subtitle: "Seus dados sempre protegidos"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Dúvidas?",
      subtitle: "Chame no WhatsApp agora"
    }
  ];

  return (
    <div className="bg-[#FDFBF7] py-12 border-t border-[#DABC70]/20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-center gap-4 px-4 hover:transform hover:translate-x-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center text-[#997617] bg-white shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-700 uppercase text-xs tracking-wide">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}