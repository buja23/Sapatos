import { Star, CheckCircle } from 'lucide-react';

export default function GoogleReviews() {
  // DADOS ESTÁTICOS (MOCK) - Edite aqui os textos que quiser mostrar
  const reviews = [
    {
      id: 1,
      name: "Ana Clara Souza",
      date: "Há 2 dias",
      text: "Simplesmente apaixonada pela minha sandália! O acabamento é impecável e muito confortável. Chegou antes do prazo.",
      stars: 5,
      verified: true
    },
    {
      id: 2,
      name: "Fernanda Lima",
      date: "Há 1 semana",
      text: "Primeira compra de muitas. O atendimento pelo WhatsApp foi super atencioso e me ajudaram a escolher o tamanho certo.",
      stars: 5,
      verified: true
    },
    {
      id: 3,
      name: "Beatriz M.",
      date: "Há 3 semanas",
      text: "A qualidade surpreende. Parece sapato de grife internacional. A embalagem também é um luxo à parte.",
      stars: 5,
      verified: true
    },
    {
      id: 4,
      name: "Juliana Costa",
      date: "Há 1 mês",
      text: "Comprei para um casamento e aguentei a festa toda sem dor no pé. Recomendo demais!",
      stars: 5,
      verified: true
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-16 border-t border-gray-100 font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho com Logo Google */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-slate-700 text-xl tracking-tight">Google</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-[#F4B400] text-[#F4B400]" />
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            Nossas clientes avaliam com <span className="font-bold text-slate-900">5.0/5</span>
          </p>
        </div>

        {/* Grid de Avaliações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              
              {/* Topo do Card */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#F4B400] text-[#F4B400]" />
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 font-medium">{review.date}</span>
              </div>

              {/* Texto */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4 min-h-[80px]">
                "{review.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full bg-[#F0F0F0] text-slate-500 font-bold flex items-center justify-center text-xs shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    {review.name}
                    {review.verified && (
                      <CheckCircle size={12} className="text-blue-500 fill-blue-50" />
                    )}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">Cliente Verificado</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}