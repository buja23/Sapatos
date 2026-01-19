import { useStore } from '../context/StoreContext';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const { products } = useStore();
  // Exibindo apenas 4 ou 8 produtos para não poluir
  const displayedProducts = products.slice(0, 8);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-3">
            Destaques da Semana
          </h2>
          <div className="w-12 h-[2px] bg-[#BC858E] mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-12">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}