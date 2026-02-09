import { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface ProductFiltersProps {
  categorySlug: string; // ex: "sapatos", "bolsas"
  onFilterChange: (filters: any) => void;
  className?: string;
  closeMobile?: () => void;
}

export default function ProductFilters({ categorySlug, onFilterChange, className, closeMobile }: ProductFiltersProps) {
  
  // Lógica: Se não for bolsa/acessorio, é calçado (mostra tamanho)
  const isFootwear = !['bolsas', 'acessorios', 'cintos', 'carteiras'].includes(categorySlug);

  // Estados dos Filtros
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Estados dos Acordeões (Aberto/Fechado)
  const [openSections, setOpenSections] = useState({
    price: true,
    size: true,
    color: true,
    category: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Envia filtros para o pai
  useEffect(() => {
    onFilterChange({
      maxPrice: priceRange,
      sizes: selectedSizes,
      colors: selectedColors,
      subcategories: selectedCategories
    });
  }, [priceRange, selectedSizes, selectedColors, selectedCategories]);

  // Opções (Isso poderia vir do banco de dados)
  const sizes = [33, 34, 35, 36, 37, 38, 39, 40];
  
  const colors = [
    { name: 'Preto', hex: '#000000', border: false },
    { name: 'Branco', hex: '#FFFFFF', border: true },
    { name: 'Nude', hex: '#E5D0B1', border: false },
    { name: 'Dourado', hex: '#D4AF37', border: false },
    { name: 'Prata', hex: '#C0C0C0', border: false },
    { name: 'Vermelho', hex: '#EF4444', border: false },
    { name: 'Caramelo', hex: '#B87333', border: false },
    { name: 'Azul', hex: '#1D4ED8', border: false },
  ];

  const categoriesList = [
    { id: 'scarpin', label: 'Scarpin' },
    { id: 'sandalias', label: 'Sandálias' },
    { id: 'tenis', label: 'Tênis' },
    { id: 'botas', label: 'Botas' },
    { id: 'mule', label: 'Mule' },
  ];

  // Funções de Toggle
  const toggleSize = (size: number) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const toggleColor = (name: string) => {
    setSelectedColors(prev => prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]);
  };

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
  };

  return (
    <div className={`bg-white h-full overflow-y-auto ${className} font-sans`}>
      
      {/* Header Mobile */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
        <span className="font-bold text-lg font-serif italic text-slate-800">Filtros</span>
        <button onClick={closeMobile} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
      </div>

      <div className="px-5 py-2">
        
        {/* 1. CATEGORIA (Subcategorias) */}
        <div className="border-b border-gray-100 py-5">
          <button onClick={() => toggleSection('category')} className="w-full flex justify-between items-center mb-2 group">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#BC858E]">Categoria</h3>
            {openSections.category ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          
          {openSections.category && (
            <div className="space-y-2 mt-3 animate-fade-in">
              {categoriesList.map((cat) => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedCategories.includes(cat.id) ? 'bg-slate-900 border-slate-900' : 'border-gray-300 bg-white group-hover:border-[#BC858E]'}`}>
                    {selectedCategories.includes(cat.id) && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={selectedCategories.includes(cat.id)} onChange={() => toggleCategory(cat.id)} />
                  <span className={`text-sm ${selectedCategories.includes(cat.id) ? 'font-bold text-slate-900' : 'text-slate-600 group-hover:text-[#BC858E]'}`}>
                    {cat.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* 2. PREÇO */}
        <div className="border-b border-gray-100 py-5">
          <button onClick={() => toggleSection('price')} className="w-full flex justify-between items-center mb-2 group">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#BC858E]">Preço</h3>
            {openSections.price ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>

          {openSections.price && (
            <div className="mt-4 animate-fade-in">
              <input 
                type="range" min="0" max="1000" step="50" value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
                <span>R$ 0</span>
                <span>R$ {priceRange}</span>
              </div>
            </div>
          )}
        </div>

        {/* 3. TAMANHO (Só para Calçados) */}
        {isFootwear && (
          <div className="border-b border-gray-100 py-5">
            <button onClick={() => toggleSection('size')} className="w-full flex justify-between items-center mb-2 group">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#BC858E]">Tamanho</h3>
              {openSections.size ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.size && (
              <div className="grid grid-cols-4 gap-2 mt-3 animate-fade-in">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`
                      h-9 flex items-center justify-center text-xs font-medium border transition-all
                      ${selectedSizes.includes(size) 
                        ? 'bg-slate-900 text-white border-slate-900' 
                        : 'bg-white text-slate-600 border-gray-200 hover:border-slate-900'}
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 4. CORES */}
        <div className="py-5">
          <button onClick={() => toggleSection('color')} className="w-full flex justify-between items-center mb-2 group">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#BC858E]">Cor</h3>
            {openSections.color ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>

          {openSections.color && (
            <div className="flex flex-wrap gap-3 mt-3 animate-fade-in">
              {colors.map((color) => {
                const isSelected = selectedColors.includes(color.name);
                return (
                  <button
                    key={color.name}
                    onClick={() => toggleColor(color.name)}
                    className={`
                      w-6 h-6 rounded-full flex items-center justify-center transition-all hover:scale-110 relative
                      ${isSelected ? 'ring-1 ring-offset-2 ring-slate-900' : ''}
                      ${color.border ? 'border border-gray-200' : ''}
                    `}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {isSelected && color.name === 'Branco' && <Check className="w-3 h-3 text-black" />}
                    {isSelected && color.name !== 'Branco' && <Check className="w-3 h-3 text-white" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}