import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { useState, useEffect } from 'react';
import { ShoppingBag, Truck, ShieldCheck, ArrowLeft, Star, Heart, Share2, CreditCard, ChevronDown, Ruler } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useStore();
  
  // Estados
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  
  // Encontra o produto
  const product = products.find((p) => p.id === Number(id));

  // Inicializa imagem
  useEffect(() => {
    if (product && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-slate-800">
        <h2 className="text-3xl font-serif font-bold mb-4 italic">Produto indisponível</h2>
        <Link to="/" className="text-[#BC858E] underline hover:text-slate-900 tracking-widest uppercase text-xs">Voltar para a loja</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Validação de Tamanho (Se o produto tiver grade de tamanhos)
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast.error('Por favor, selecione um tamanho.', {
        style: { border: '1px solid #BC858E', color: '#713f12' },
        iconTheme: { primary: '#BC858E', secondary: '#fff' },
      });
      return;
    }

    // Adiciona ao carrinho (com tamanho se houver)
    // Nota: Se o seu addToCart suportar tamanho, passe-o aqui. 
    // Por enquanto, usaremos a função padrão.
    addToCart(product.id);
    toast.success('Adicionado à sacola com sucesso!', {
        style: { border: '1px solid #D2B572', color: '#000' },
        iconTheme: { primary: '#D2B572', secondary: '#fff' },
    });
  };

  // Parcela (Simulação)
  const installmentValue = (product.priceSale / 10).toFixed(2).replace('.', ',');

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      
      {/* Navegação Topo */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6">
        <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#BC858E] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          
          {/* ========================================================= */}
          {/* COLUNA ESQUERDA: Galeria (Estilo Editorial) */}
          {/* ========================================================= */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 mb-10 lg:mb-0">
            
            {/* Thumbnails (Esquerda no Desktop, Baixo no Mobile) */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:w-24 lg:h-[700px] scrollbar-hide snap-x">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`
                    relative flex-shrink-0 w-20 h-24 lg:w-24 lg:h-32 
                    overflow-hidden border transition-all cursor-pointer snap-start
                    ${selectedImage === img ? 'border-[#BC858E] opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}
                  `}
                >
                  <img src={img} alt={`Vista ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Imagem Principal */}
            <div className="flex-1 relative group">
              <div className="w-full h-[500px] lg:h-[750px] bg-slate-50 overflow-hidden">
                <img
                  src={selectedImage || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Botão Favoritar */}
              <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur rounded-full hover:bg-[#BC858E] hover:text-white transition-all shadow-sm">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUNA DIREITA: Informações (Sticky) */}
          {/* ========================================================= */}
          <div className="lg:sticky lg:top-24 h-fit max-w-xl">
            
            {/* Cabeçalho */}
            <div className="mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#BC858E] font-bold text-[10px] tracking-[0.2em] uppercase">
                  Nova Coleção
                </span>
                <div className="flex items-center gap-1 text-[#D2B572]">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-xs text-slate-400 ml-1 font-medium text-black">(4.9)</span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-5xl font-serif text-slate-900 leading-none mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-end gap-3">
                <p className="text-3xl font-light text-slate-900">
                  R$ {product.priceSale.toFixed(2).replace('.', ',')}
                </p>
                {product.priceOriginal > product.priceSale && (
                  <p className="text-sm text-slate-400 line-through mb-1.5">
                    R$ {product.priceOriginal.toFixed(2).replace('.', ',')}
                  </p>
                )}
              </div>
              
              <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                <CreditCard className="w-3 h-3" />
                <span>10x de <strong>R$ {installmentValue}</strong> sem juros</span>
              </div>
            </div>

            {/* Seletor de Tamanhos (Se houver) */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Tamanho</span>
                  <button className="flex items-center gap-1 text-xs text-[#BC858E] underline decoration-[#BC858E]/50 hover:decoration-[#BC858E]">
                    <Ruler className="w-3 h-3" /> Guia de Medidas
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        w-12 h-12 flex items-center justify-center text-sm font-medium border transition-all
                        ${selectedSize === size 
                          ? 'bg-slate-900 text-white border-slate-900' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-900'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ações de Compra */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-slate-900 text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#BC858E] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-4 h-4" />
                Adicionar à Sacola
              </button>
              
              <p className="text-[10px] text-green-700 font-medium flex items-center justify-center gap-2 bg-green-50 py-2 rounded">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Disponível para envio imediato
              </p>
            </div>

            {/* Acordeões (Informações) */}
            <div className="border-t border-gray-100">
              
              {/* Descrição */}
              <div className="border-b border-gray-100">
                <button 
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="w-full py-4 flex justify-between items-center text-left hover:text-[#BC858E] transition-colors"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Descrição</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isDescriptionOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {product.description || "Confeccionado com materiais nobres, este produto une o design clássico à modernidade. Acabamento impecável, palmilha confort e solado resistente."}
                  </p>
                </div>
              </div>

              {/* Detalhes de Envio */}
              <div className="border-b border-gray-100">
                <button className="w-full py-4 flex justify-between items-center text-left group">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#BC858E] transition-colors">Envio e Devoluções</span>
                  <Truck className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Segurança */}
              <div className="border-b border-gray-100">
                <button className="w-full py-4 flex justify-between items-center text-left group">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#BC858E] transition-colors">Compra Segura</span>
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Botão Sticky Mobile (Aparece só no celular) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 lg:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button
            onClick={handleAddToCart}
            className="w-full bg-slate-900 text-white py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#BC858E] transition-colors"
        >
            Comprar • R$ {product.priceSale.toFixed(2).replace('.', ',')}
        </button>
      </div>

    </div>
  );
}