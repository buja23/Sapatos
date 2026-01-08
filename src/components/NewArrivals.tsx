import { useRef, useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function NewArrivals() {
  const { products } = useStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 1. DADOS: Pegamos os lançamentos (IDs > 4)
  const originalArrivals = products.slice(4);

  // 2. INFINITO: Triplicamos a lista para garantir um loop suave e longo
  // [Lista Original] + [Lista Clone 1] + [Lista Clone 2]
  const infiniteProducts = [...originalArrivals, ...originalArrivals, ...originalArrivals];

  // Função de Scroll Manual (Setas)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -340 : 340; // Largura do card + gap
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // 3. LÓGICA DE LOOP INFINITO (Teletransporte)
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    // Se chegou muito perto do fim (faltando 100px), volta para o meio (começo do clone 2)
    // Isso faz o usuário achar que a lista é infinita
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (container.scrollLeft >= maxScroll - 100) {
      // Pula para o início do primeiro clone (sem animação, instantâneo)
      // O valor exato depende da largura dos itens, mas 1/3 do total costuma funcionar bem
      container.scrollLeft = container.scrollWidth / 3; 
    }
    
    // Se tentou voltar antes do começo (scroll < 0 no mobile), joga pro meio também
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 3; 
    }
  };

  // Inicializa o scroll no meio para permitir rolar para os dois lados logo de cara
  useEffect(() => {
    if (scrollRef.current) {
      // Centraliza no segundo set de produtos
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, [products]);

  return (
    <section className="bg-white py-20 border-t border-[#D2B572]/10 relative group/section">
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-[#997617] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
              Coleção Outono/Inverno
            </span>
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-slate-900">
              Lançamentos <span className="italic font-['Pinyon_Script'] text-4xl md:text-6xl text-[#BC858E] ml-2">Exclusivos</span>
            </h2>
          </div>
          
          {/* SETAS */}
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
        <div className="relative -mx-6 lg:-mx-4 px-6 lg:px-4">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="
              flex gap-8 overflow-x-auto pb-12 pt-4
              scrollbar-hide snap-x snap-mandatory scroll-smooth
            "
          >
            {infiniteProducts.map((product, index) => (
              // Usamos index na key porque os IDs são repetidos (por causa do clone)
              <div 
                key={`${product.id}-${index}`} 
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Gradiente Fade nas laterais (Opcional, dá acabamento pro) */}
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent pointer-events-none hidden lg:block" />
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent pointer-events-none hidden lg:block" />
        </div>

      </div>
    </section>
  );
}