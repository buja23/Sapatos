import { useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useState, useEffect, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>(); 
  const { products } = useStore();
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  
  const [activeFilters, setActiveFilters] = useState({
    maxPrice: 1000,
    sizes: [] as number[],
    colors: [] as string[]
  });

  // --- O CORAÇÃO DO SISTEMA ---
  const filteredProducts = useMemo(() => {
    if (!slug) return [];

    // Limpa o termo da URL (ex: "sandalia-salto-fino" -> "sandalia salto fino")
    const searchTerm = slug.replace(/-/g, ' ').toLowerCase();

    return products.filter(product => {
      // 1. FILTRO DE CATEGORIA/SUBCATEGORIA (Busca Inteligente)
      // Verifica se o termo está na categoria principal OU nas subcategorias OU no nome
      const categoryMatch = 
         product.category.toLowerCase().includes(searchTerm) ||
         product.subcategory.some(sub => sub.replace(/-/g, ' ').includes(searchTerm)) ||
         product.name.toLowerCase().includes(searchTerm);

      if (!categoryMatch) return false;

      // 2. FILTRO DE PREÇO
      if (product.priceSale > activeFilters.maxPrice) return false;

      // 3. FILTRO DE TAMANHO
      if (activeFilters.sizes.length > 0) {
        if (!product.sizes) return false; // Se não tem tamanho e filtrou por tamanho, esconde
        const hasSize = product.sizes.some(s => activeFilters.sizes.includes(s));
        if (!hasSize) return false;
      }

      // 4. FILTRO DE COR
      if (activeFilters.colors.length > 0) {
        const hasColor = product.colors.some(c => activeFilters.colors.includes(c));
        if (!hasColor) return false;
      }
      
      return true;

    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceSale - b.priceSale;
      if (sortBy === 'price-desc') return b.priceSale - a.priceSale;
      return 0;
    });
  }, [products, slug, activeFilters, sortBy]);

  const pageTitle = slug 
    ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) 
    : 'Categoria';

  // Bloqueia scroll no mobile
  useEffect(() => {
    document.body.style.overflow = isMobileFiltersOpen ? 'hidden' : 'unset';
  }, [isMobileFiltersOpen]);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FDFBF7] py-8 lg:py-12 border-b border-[#D2B572]/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">
            Coleção / {pageTitle}
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl text-slate-900 italic">
            {pageTitle}
          </h1>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filtros (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <ProductFilters 
                categorySlug={slug || ''} 
                onFilterChange={setActiveFilters} 
              />
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <div className="flex-1">
            
            {/* Barra de Topo */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4 sticky top-[60px] lg:static bg-white z-20">
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 border border-slate-200 px-4 py-2.5"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtrar
              </button>

              <span className="text-xs text-slate-500 hidden sm:block">
                {filteredProducts.length} Produtos encontrados
              </span>

              <div className="relative group">
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#BC858E]">
                  Ordenar <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
                  <div className="bg-white border border-gray-100 shadow-xl w-48 py-2 flex flex-col rounded-sm">
                    <button onClick={() => setSortBy('relevance')} className="text-left px-4 py-2 text-sm hover:bg-gray-50 text-slate-600">Relevância</button>
                    <button onClick={() => setSortBy('price-asc')} className="text-left px-4 py-2 text-sm hover:bg-gray-50 text-slate-600">Menor Preço</button>
                    <button onClick={() => setSortBy('price-desc')} className="text-left px-4 py-2 text-sm hover:bg-gray-50 text-slate-600">Maior Preço</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-serif text-slate-800 mb-2">Ops! Nenhum produto encontrado.</h3>
                <p className="text-sm text-slate-500">Tente ajustar os filtros ou escolher outra categoria.</p>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      <div className={`fixed inset-y-0 right-0 w-[85%] max-w-[320px] bg-white z-[60] transform transition-transform duration-300 ease-out lg:hidden shadow-2xl ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ProductFilters 
          categorySlug={slug || ''} 
          onFilterChange={setActiveFilters} 
          closeMobile={() => setIsMobileFiltersOpen(false)}
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100">
           <button 
             onClick={() => setIsMobileFiltersOpen(false)}
             className="w-full bg-slate-900 text-white py-3 uppercase font-bold text-sm tracking-widest shadow-lg"
           >
             Ver Resultados
           </button>
        </div>
      </div>
      
      {/* Overlay Mobile */}
      {isMobileFiltersOpen && (
        <div 
            className="fixed inset-0 bg-black/60 z-[55] lg:hidden"
            onClick={() => setIsMobileFiltersOpen(false)}
        />
      )}

    </div>
  );
}