import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product, useStore } from '../context/StoreContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita abrir o link do produto ao clicar no botão
    e.stopPropagation();
    addToCart(product.id);
    toast.success('Adicionado à sacola com requinte! 👜');
  };

  return (
    <div className="group relative w-full">
      
      {/* IMAGEM (Aspecto 3:4 - Vertical Fashion) */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#FDFBF7] mb-5">
        
        {/* Badge de Novo (Lógica simples: se for um dos últimos IDs ou tiver flag) */}
        {product.id > 4 && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#997617] text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-20 shadow-sm">
            Novo
          </span>
        )}

        <Link to={`/product/${product.id}`} className="block w-full h-full">
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300 bg-[#F5F5F5]">
              <span className="text-xs uppercase tracking-widest">Sem Imagem</span>
            </div>
          )}
        </Link>

        {/* BOTÕES DE AÇÃO (Slide Up no Hover) */}
        <div className="absolute inset-x-4 bottom-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 flex flex-col gap-2">
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#1a1a1a] text-white py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#D2B572] hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Adicionar
          </button>
          
          <div className="flex gap-2">
            <Link 
              to={`/product/${product.id}`}
              className="flex-1 bg-white text-slate-900 py-3 text-xs uppercase tracking-[0.15em] hover:bg-slate-100 transition-colors shadow-lg flex items-center justify-center"
              title="Ver Detalhes"
            >
              <Eye className="w-4 h-4" />
            </Link>
            <button 
              className="flex-1 bg-white text-slate-900 py-3 text-xs uppercase tracking-[0.15em] hover:text-[#BC858E] transition-colors shadow-lg flex items-center justify-center"
              title="Favoritar"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overlay Escuro Suave */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none z-10" />
      </div>

      {/* INFORMAÇÕES */}
      <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-['Playfair_Display'] text-xl text-slate-900 mb-1 hover:text-[#D2B572] transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-3">
          Sapato de Madame
        </p>

        <div className="flex items-center justify-center gap-3 text-sm">
          <span className="font-bold text-[#997617]">
            R$ {product.priceSale.toFixed(2).replace('.', ',')}
          </span>
          {product.priceOriginal > product.priceSale && (
            <span className="text-slate-300 line-through text-xs decoration-slate-300">
              R$ {product.priceOriginal.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}