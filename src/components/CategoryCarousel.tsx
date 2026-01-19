import { Link } from 'react-router-dom';
import { useRef, useState, MouseEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Lista Original
  const baseCategories = [
    { name: 'Lançamentos', slug: 'lancamentos', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sapatos', slug: 'sapatos', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Bolsas', slug: 'bolsas', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop' },
    { name: 'Vestidos', slug: 'vestidos', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sandálias', slug: 'sandalias', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop' },
    { name: 'Tênis', slug: 'tenis', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Botas', slug: 'botas', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Acessórios', slug: 'acessorios', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Outlet', slug: 'outlet', image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=400&auto=format&fit=crop' },
    { name: 'Blusas', slug: 'blusas', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop' },
    { name: 'Conjuntos', slug: 'conjuntos', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop' },
    { name: 'Scarpins', slug: 'scarpins', image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Mocassins', slug: 'mocassins', image: 'https://images.unsplash.com/photo-1533052824683-9e4a3057404e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Rasteiras', slug: 'rasteiras', image: 'https://images.unsplash.com/photo-1600054800747-be294a6a0d26?q=80&w=400&auto=format&fit=crop' },
    { name: 'Inverno', slug: 'inverno', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Verão', slug: 'verao', image: 'https://images.unsplash.com/photo-1524041255072-7da0525d6b34?q=80&w=400&auto=format&fit=crop' },
  ];

  // TRUQUE DO INFINITO: Multiplicamos a lista por 4 para criar um loop visual longo
  const categories = [...baseCategories, ...baseCategories, ...baseCategories, ...baseCategories];

  // --- Função das Setas ---
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Distância que a seta rola
      const currentScroll = carouselRef.current.scrollLeft;
      
      if (direction === 'left') {
        carouselRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
        });
      } else {
        // Se chegar perto do fim, volta pro começo (loop visual)
        if (currentScroll + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth - 50) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carouselRef.current.scrollTo({
                left: currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
      }
    }
  };

  // --- Lógica de Arrastar (Mouse) ---
  const handleMouseDown = (e: MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftState(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section className="bg-white py-10 border-b border-gray-50 select-none relative group">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 relative">
        
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-8 px-2">
          <h3 className="font-serif text-xl lg:text-2xl text-slate-800">
            Navegue por <span className="italic text-[#BC858E]">Categorias</span>
          </h3>
          <Link to="/category/all" className="text-[10px] font-bold uppercase tracking-widest text-[#BC858E] hover:text-slate-800 transition-colors border-b border-[#BC858E] pb-0.5">
            Ver todas
          </Link>
        </div>

        {/* SETA ESQUERDA (Só aparece no Hover ou Mobile) */}
        <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-[60%] -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-[#BC858E] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
        >
            <ChevronLeft size={24} />
        </button>

        {/* Carrossel */}
        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 lg:gap-10 overflow-x-auto pb-4 px-2 cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ scrollBehavior: 'auto' }} 
        >
          {categories.map((cat, index) => (
            <Link 
              // Usamos index na key para permitir itens duplicados sem erro
              key={`${cat.slug}-${index}`} 
              to={`/category/${cat.slug}`}
              onClick={(e) => {
                 if(isDragging) e.preventDefault();
              }}
              draggable={false}
              className="flex flex-col items-center gap-3 min-w-[90px] lg:min-w-[120px] group flex-shrink-0"
            >
              {/* Círculo */}
              <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full p-[3px] border border-transparent group-hover:border-[#BC858E] transition-all duration-300">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  draggable={false}
                  className="w-full h-full object-cover rounded-full shadow-sm group-hover:shadow-md transition-transform duration-500 group-hover:scale-95 pointer-events-none"
                />
              </div>
              
              {/* Nome */}
              <span className="text-xs lg:text-sm font-medium text-slate-600 uppercase tracking-wide group-hover:text-[#BC858E] transition-colors text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* SETA DIREITA */}
        <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-[60%] -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-[#BC858E] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
        >
            <ChevronRight size={24} />
        </button>

      </div>
    </section>
  );
}