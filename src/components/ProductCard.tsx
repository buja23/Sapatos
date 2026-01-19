import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product, useStore } from '../context/StoreContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product.id);
    toast.success('Adicionado à sacola!');
  };

  // Calculando parcela fictícia (ex: 6x)
  const installmentValue = (product.priceSale / 6).toFixed(2).replace('.', ',');

  return (
    <div className="group relative w-full">
      
      {/* 1. IMAGEM (Com Hover Zoom) */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F8F8] mb-4">
        {/* Tags (Novo/Desconto) */}
        {product.priceOriginal > product.priceSale && (
          <span className="absolute top-2 right-2 bg-[#BC858E] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest z-10">
            -{Math.round(((product.priceOriginal - product.priceSale) / product.priceOriginal) * 100)}%
          </span>
        )}

        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
          />
        </Link>

        {/* Botoes de Ação (Aparecem no Hover) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-white/90 backdrop-blur text-slate-800 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#BC858E] hover:text-white transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} /> Comprar
          </button>
          <button
            className="w-10 bg-white/90 backdrop-blur text-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors shadow-sm"
            title="Espiar"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      {/* 2. INFORMAÇÕES (Estilo Clean) */}
      <div className="text-left">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-sm text-slate-600 hover:text-[#BC858E] transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-baseline gap-2 mb-1">
          {product.priceOriginal > product.priceSale && (
            <span className="text-xs text-slate-300 line-through">
              R$ {product.priceOriginal.toFixed(2).replace('.', ',')}
            </span>
          )}
          <span className="text-base font-bold text-slate-800">
            R$ {product.priceSale.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Parcelamento (Toque de Loja Profissional) */}
        <p className="text-[11px] text-slate-400 font-medium">
          ou 6x de R$ {installmentValue}
        </p>
      </div>

    </div>
  );
}