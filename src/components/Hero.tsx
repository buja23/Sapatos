import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Dados dos Slides (Você pode trocar as imagens depois)
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Nova Coleção 2026",
    title: "Essência",
    highlight: "Feminina",
    description: "Descubra sapatos que unem o conforto do dia a dia com a elegância que você merece.",
    buttonText: "Ver Lançamentos",
    link: "/category/novidades",
    color: "text-[#BC858E]" // Rose
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Design Italiano",
    title: "Passos de",
    highlight: "Luxo",
    description: "Acabamentos impecáveis e materiais nobres para quem não abre mão da exclusividade.",
    buttonText: "Ver Sapatos",
    link: "/category/sapatos",
    color: "text-[#D2B572]" // Dourado
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Outlet Premium",
    title: "Oportunidade",
    highlight: "Única",
    description: "As últimas peças das coleções passadas com descontos especiais de até 50%.",
    buttonText: "Acessar Outlet",
    link: "/category/outlet",
    color: "text-slate-800" // Escuro
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-play: Muda o slide a cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[500px] lg:h-[650px] bg-[#FDFBF7] overflow-hidden group">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Imagem de Fundo (Com efeito Zoom Lento) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${index === current ? 'scale-110' : 'scale-100'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          
          {/* Overlay Gradiente (Para o texto aparecer bem) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent"></div>

          {/* Conteúdo do Texto */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
              <div className={`max-w-xl space-y-6 transition-all duration-1000 delay-300 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Tag */}
                <span className="inline-block py-1 px-3 border border-slate-800 text-slate-800 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {slide.subtitle}
                </span>

                {/* Título Principal */}
                <h1 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-none drop-shadow-sm">
                  {slide.title} <br/>
                  <span className={`italic font-light ${slide.color}`}>{slide.highlight}</span>
                </h1>

                {/* Descrição */}
                <p className="text-slate-600 text-lg font-light leading-relaxed max-w-md">
                  {slide.description}
                </p>

                {/* Botões */}
                <div className="pt-4 flex gap-4">
                  <Link 
                    to={slide.link} 
                    className={`px-8 py-4 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${index === 0 ? 'bg-[#BC858E] hover:bg-[#a4727a]' : 'bg-slate-900 hover:bg-slate-700'}`}
                  >
                    {slide.buttonText}
                  </Link>
                  <Link 
                    to="/category/sapatos" 
                    className="px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-800 border border-slate-800/20 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#BC858E] hover:border-[#BC858E] transition-all"
                  >
                    Shop All
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Setas de Navegação (Aparecem no Hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bolinhas (Dots) Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${current === idx ? 'w-8 h-2 bg-[#BC858E]' : 'w-2 h-2 bg-slate-400/50 hover:bg-slate-600'}`}
          />
        ))}
      </div>

    </section>
  );
}