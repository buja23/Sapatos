import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustBar from '../components/TrustBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Capa Nova (Clean com Modelo) */}
      <Hero />
      <TrustBar/>
      
      {/* Nova Vitrine de Produtos (Estilo Boutique) */}
      <FeaturedProducts />
      
      {/* TrustSection foi removida daqui para limpar o visual */}
      
    </div>
  );
}