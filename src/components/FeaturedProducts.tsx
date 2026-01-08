import { useStore } from '../context/StoreContext';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function FeaturedProducts() {
  const { products, addToCart } = useStore();
  const displayedProducts = products.slice(0, 4); // Mostrando apenas 4 para destaque premium

  const handleAddToCart = (productId: number) => {
    addToCart(productId);
    toast.success('Adicionado ao carrinho');
  };

  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
              Seleção Exclusiva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F0F] font-['Playfair_Display']">
              Produtos em Destaque
            </h2>
          </div>
          <Link to="/search" className="hidden md:block text-xs font-bold uppercase tracking-widest text-[#0F0F0F] hover:text-[#D4AF37] transition-colors border-b-2 border-transparent hover:border-[#D4AF37] pb-1">
            Ver Todos os Produtos
          </Link>
        </div>

        {/* Grid Premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group bg-white p-4 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out">
              
              {/* Imagem com Hover Zoom */}
              <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-[#F0F0F0]">
                <Link to={`/product/${product.id}`}>
                   {product.images?.[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">Sem Imagem</div>
                  )}
                  {/* Badge */}
                  <div className="absolute top-0 left-0 bg-[#0F0F0F] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
                    Novo
                  </div>
                </Link>

                {/* Botões Flutuantes (Aparecem no Hover) */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="flex-1 bg-[#0F0F0F] text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2"
                  >
                    Adicionar
                  </button>
                  <Link 
                    to={`/product/${product.id}`}
                    className="p-3 bg-white text-[#0F0F0F] hover:bg-gray-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Informações Minimalistas */}
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                  Sapato Social
                </p>
                <h3 className="text-lg font-serif font-bold text-[#0F0F0F] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  <Link to={`/product/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
                <div className="flex items-center gap-2">
                   <span className="text-sm font-bold text-[#0F0F0F]">
                    R$ {product.priceSale.toFixed(2).replace('.', ',')}
                  </span>
                  {product.priceOriginal > product.priceSale && (
                    <span className="text-xs text-gray-400 line-through">
                      R$ {product.priceOriginal.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <Link to="/search" className="inline-block px-8 py-3 border border-[#0F0F0F] text-[#0F0F0F] text-xs font-bold uppercase tracking-widest hover:bg-[#0F0F0F] hover:text-white transition-all">
            Ver Todos
          </Link>
        </div>

      </div>
    </section>
  );
}