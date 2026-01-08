import { useStore } from '../context/StoreContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const { products } = useStore();
  
  // Pegamos os 4 primeiros produtos para serem os "Destaques da Capa"
  const displayedProducts = products.slice(0, 4);

  return (
    <section className="bg-white py-20 lg:py-28 relative">
      
      {/* Elemento decorativo sutil (Marca d'água de fundo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="text-[150px] lg:text-[250px] font-['Playfair_Display'] whitespace-nowrap text-[#997617]">
          Exclusive
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ================= CABEÇALHO EDITORIAL ================= */}
        {/* Estilo inspirado na imagem 'image_4a6b69.png' que você enviou */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#997617] font-bold tracking-[0.3em] text-[10px] lg:text-xs uppercase bg-white px-4 relative z-10">
            Curadoria da Estação
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-['Playfair_Display'] text-slate-900 leading-tight">
            Coleção <span className="text-[#D2B572]">Outono</span> 
            <span className="mx-3 font-['Pinyon_Script'] text-5xl lg:text-7xl text-[#BC858E] font-normal align-middle">
              &
            </span> 
            <span className="text-[#D2B572]">Inverno</span>
          </h2>

          <p className="text-slate-400 text-sm lg:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Peças selecionadas para mulheres que caminham com elegância. 
            Do escritório ao happy hour com sofisticação italiana.
          </p>
          
          <div className="w-16 h-[1px] bg-[#D2B572] mx-auto mt-6"></div>
        </div>

        {/* ================= GRID DE PRODUTOS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {displayedProducts.map((product) => (
            <div key={product.id} className="animate-fade-in-up">
              {/* Aqui usamos o Componente Padronizado */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* ================= BOTÃO VER TODOS ================= */}
        <div className="mt-20 text-center">
          <Link 
            to="/category/all" 
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#1a1a1a]/10 text-[#1a1a1a] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            Ver Toda a Coleção
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}