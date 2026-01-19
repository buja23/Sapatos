import { useRef, useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function NewArrivals() {
  const { products } = useStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 1. DADOS: Pegamos os lançamentos (IDs > 4)
  const originalArrivals = products.slice(4);

  // 2. INFINITO: Triplicamos a lista
  const infiniteProducts = [...originalArrivals, ...originalArrivals, ...originalArrivals];

  // Função de Scroll Manual (Setas - Desktop)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -340 : 340;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // 3. LÓGICA DE LOOP INFINITO (Teletransporte)
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Teletransporte imperceptível
    if (container.scrollLeft >= maxScroll - 100) {
      container.scrollLeft = container.scrollWidth / 3; 
    }
    
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 3; 
    }
  };

  // Inicializa o scroll no meio
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, [products]);

  return (
    <section className="bg-white py-12 lg:py-20 border-t border-[#D2B572]/10 relative group/section overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-12">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 lg:mb-12 gap-4 px-2 lg:px-0">
          <div>
            <span className="text-[#997617] font-bold tracking-[0.2em] text-[10px] lg:text-xs uppercase mb-2 block">
              Coleção Outono/Inverno
            </span>
            <h2 className="text-2xl md:text-5xl font-['Playfair_Display'] text-slate-900 leading-tight">
              Lançamentos <span className="italic font-['Pinyon_Script'] text-3xl md:text-6xl text-[#BC858E] block md:inline lg:ml-2">Exclusivos</span>
            </h2>
          </div>
          
          {/* SETAS (Apenas Desktop) */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-[#D2B572]/30 hover:border-[#D2B572] text-[#997617] hover:bg-[#D2B572] hover:text-white transition-all bg-white shadow-sm active:scale-95 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-[#D2B572]/30 hover:border-[#D2B572] text-[#997617] hover:bg-[#D2B572] hover:text-white transition-all bg-white shadow-sm active:scale-95 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CARROSSEL */}
        {/* Mobile: Margens negativas para encostar na borda da tela */}
        <div className="relative -mx-4 lg:-mx-4"> 
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="
              flex gap-4 lg:gap-8 
              overflow-x-auto 
              pb-8 pt-4 
              px-4 lg:px-4
              scrollbar-hide 
              snap-x snap-mandatory 
              scroll-smooth
            "
          >
            {infiniteProducts.map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                // Mobile: w-[85vw] (mostra 85% do card, deixando uma beirada do próximo visível para incentivar scroll)
                // Desktop: min-w-[340px] fixo
                className="min-w-[75vw] sm:min-w-[320px] lg:min-w-[340px] snap-center lg:snap-start first:pl-2"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Gradientes Laterais (Só Desktop) - No mobile atrapalha a visão */}
          <div className="hidden lg:block absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div className="hidden lg:block absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        </div>

        {/* Indicador de "Arraste" para Mobile (Opcional, mas ajuda na usabilidade) */}
        <div className="lg:hidden flex justify-center text-[#D2B572]/50 text-[10px] uppercase tracking-widest mt-[-20px] animate-pulse">
           &larr; Deslize para ver mais &rarr;
        </div>

      </div>
    </section>
  );
}