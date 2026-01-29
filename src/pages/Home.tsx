import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustBar from '../components/TrustBar';
import NewArrivals from '../components/NewArrivals';
import InstagramBar from '../components/InstagramBar';
import CategoryCarousel from '../components/CategoryCarousel';
import GoogleReviews from '../components/GoogleReviews';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

export default function Home() {
  const { products } = useStore();
  
  // Pega os 3 primeiros produtos (que agora são suas fotos reais)
  const testProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        
        {/* ======================================================== */}
        {/* ÁREA DE TESTE DESTACADA (APARECE SÓ AGORA) */}
        {/* ======================================================== */}
        <section className="bg-rose-50/50 py-12 border-b border-rose-100">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-8">
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase rounded">
                Ambiente de Teste
              </span>
              <h2 className="text-3xl font-serif text-slate-900 mt-3">
                Suas Fotos Reais
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Verifique iluminação, enquadramento e qualidade.
              </p>
            </div>

            {/* Grid dos produtos reais */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {testProducts.map((product) => (
                <div key={product.id} className="bg-white p-2 rounded-xl shadow-sm border border-rose-100">
                  <ProductCard product={product} />
                  <p className="text-center text-[10px] text-red-400 mt-2 font-mono">
                    
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ======================================================== */}

        <TrustBar />
        <CategoryCarousel />
        <NewArrivals />
        <FeaturedProducts />
        <GoogleReviews />
        <InstagramBar />
      </main>
    </div>
  );
}