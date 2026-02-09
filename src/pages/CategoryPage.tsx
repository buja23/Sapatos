import { useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'; // Novo
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>(); 
  const { products } = useStore();
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  
  const [activeFilters, setActiveFilters] = useState({
    sizes: [] as number[],
    colors: [] as string[],
    toeShapes: [] as string[]
  });

  const filteredProducts = useMemo(() => {
    if (!slug) return [];
    const searchTerm = slug.replace(/-/g, ' ').toLowerCase();

    return products.filter(product => {
      const categoryMatch = 
         product.category.toLowerCase().includes(searchTerm) ||
         product.subcategory.some(sub => sub.replace(/-/g, ' ').includes(searchTerm)) ||
         product.name.toLowerCase().includes(searchTerm);

      if (!categoryMatch) return false;
      if (activeFilters.sizes.length > 0) {
        if (!product.sizes || !product.sizes.some(s => activeFilters.sizes.includes(s))) return false;
      }
      if (activeFilters.colors.length > 0) {
        if (!product.colors.some(c => activeFilters.colors.includes(c))) return false;
      }
      if (activeFilters.toeShapes.length > 0) {
        if (!product.toeShape || !activeFilters.toeShapes.includes(product.toeShape)) return false;
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

  useEffect(() => {
    document.body.style.overflow = isMobileFiltersOpen ? 'hidden' : 'unset';
  }, [isMobileFiltersOpen]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header da Categoria com Animação de Fade-in */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#FDFBF7] py-8 lg:py-12 border-b border-[#D2B572]/10"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">Coleção / {pageTitle}</p>
          <h1 className="font-serif text-3xl lg:text-5xl text-slate-900 italic">{pageTitle}</h1>
        </div>
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <ProductFilters categorySlug={slug || ''} onFilterChange={setActiveFilters} />
            </div>
          </aside>

          <div className="flex-1">
            {/* Toolbar Superior */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4 bg-white z-20">
              <button 
                onClick={() => setIsMobileFiltersOpen(true)} 
                className="lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 border border-slate-200 px-4 py-2.5 hover:bg-slate-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filtrar
              </button>

              <span className="text-xs text-slate-500 hidden sm:block font-medium">
                {filteredProducts.length} Produtos encontrados
              </span>

              {/* Ordenação Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#BC858E] transition-colors">
                  Ordenar <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30">
                  <div className="bg-white border border-gray-100 shadow-xl w-48 py-2 flex flex-col rounded-sm overflow-hidden">
                    {['relevance', 'price-asc', 'price-desc'].map((option) => (
                      <button 
                        key={option}
                        onClick={() => setSortBy(option)} 
                        className={`text-left px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-50 transition-colors ${sortBy === option ? 'text-[#BC858E] font-bold' : 'text-slate-600'}`}
                      >
                        {option === 'relevance' ? 'Relevância' : option === 'price-asc' ? 'Menor Preço' : 'Maior Preço'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Grid de Produtos com Animação de Layout (Nível Sênior) */}
            <LayoutGroup>
              <motion.div 
                layout
                className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-12"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <motion.div
                        layout
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full text-center py-24 bg-[#FDFBF7] rounded-sm border border-dashed border-gray-200"
                    >
                      <h3 className="text-xl font-serif text-slate-800 mb-2 italic">Nenhum par encontrado</h3>
                      <p className="text-sm text-slate-500">Tente remover alguns filtros para ver mais opções.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          </div>
        </div>
      </div>

      {/* Drawer Mobile Animado */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/60 z-[55] lg:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-[320px] bg-white z-[60] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex-1 overflow-y-auto">
                <ProductFilters 
                  categorySlug={slug || ''} 
                  onFilterChange={setActiveFilters} 
                  closeMobile={() => setIsMobileFiltersOpen(false)} 
                />
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)} 
                  className="w-full bg-slate-900 text-white py-4 uppercase font-bold text-[11px] tracking-[0.2em] hover:bg-slate-800 transition-colors"
                >
                  Ver Resultados
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}