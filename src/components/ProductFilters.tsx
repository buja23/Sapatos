import { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductFiltersProps {
  categorySlug: string;
  onFilterChange: (filters: any) => void;
  className?: string;
  closeMobile?: () => void;
}

export default function ProductFilters({ categorySlug, onFilterChange, className, closeMobile }: ProductFiltersProps) {
  const isFootwear = !['bolsas', 'acessorios'].includes(categorySlug);

  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedToeShapes, setSelectedToeShapes] = useState<string[]>([]);

  const [openSections, setOpenSections] = useState({
    size: true,
    color: true,
    toe: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    onFilterChange({
      sizes: selectedSizes,
      colors: selectedColors,
      toeShapes: selectedToeShapes
    });
  }, [selectedSizes, selectedColors, selectedToeShapes]);

  const toggleFilter = (list: any[], setList: Function, value: any) => {
    setList(list.includes(value) ? list.filter(item => item !== value) : [...list, value]);
  };

  const colorsList = ['Azul', 'Bege', 'Bronze', 'Caramelo', 'Dourado', 'Marrom', 'Metal', 'Nude', 'Off-White', 'Preto', 'Whisky'];
  const toeShapes = ['Fino', 'Quadrado', 'Redondo'];

  const accordionVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "circOut" } },
    collapsed: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "circIn" } }
  };

  return (
    <div className={`bg-white h-full overflow-y-auto ${className} font-sans pb-20 lg:pb-0 scrollbar-hide`}>
      <div className="lg:hidden flex items-center justify-between p-6 border-b border-gray-100">
        <span className="font-serif text-2xl italic text-slate-900">Filtros</span>
        <button onClick={closeMobile} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
          <X className="w-6 h-6 text-slate-400" />
        </button>
      </div>

      <div className="px-6 py-2">
        {/* SEÇÃO DE CORES */}
        <div className="border-b border-gray-100 py-6">
          <button onClick={() => toggleSection('color')} className="w-full flex justify-between items-center group text-left">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-[#BC858E] transition-colors">Cor</h3>
            <motion.div animate={{ rotate: openSections.color ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </motion.div>
          </button>
          
          <AnimatePresence initial={false}>
            {openSections.color && (
              <motion.div 
                variants={accordionVariants}
                initial="collapsed" animate="open" exit="collapsed"
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-5">
                  {colorsList.map((color, index) => (
                    <motion.label 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      key={color} 
                      className="flex items-center gap-3 py-1 cursor-pointer group/item"
                    >
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer sr-only" checked={selectedColors.includes(color)} onChange={() => toggleFilter(selectedColors, setSelectedColors, color)} />
                        <div className={`w-4 h-4 border transition-all duration-300 ${selectedColors.includes(color) ? 'bg-slate-900 border-slate-900' : 'border-gray-200 group-hover/item:border-[#BC858E]'}`} />
                        {selectedColors.includes(color) && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </div>
                      <span className={`text-[13px] transition-colors ${selectedColors.includes(color) ? 'text-slate-900 font-medium' : 'text-slate-500 group-hover/item:text-[#BC858E]'}`}>
                        {color}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SEÇÃO DE TAMANHO */}
        {isFootwear && (
          <div className="border-b border-gray-100 py-6">
            <button onClick={() => toggleSection('size')} className="w-full flex justify-between items-center group text-left">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-[#BC858E]">Tamanho</h3>
              <motion.div animate={{ rotate: openSections.size ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openSections.size && (
                <motion.div variants={accordionVariants} initial="collapsed" animate="open" exit="collapsed" className="overflow-hidden">
                  <div className="grid grid-cols-4 gap-2 mt-5">
                    {[34, 35, 36, 37, 38, 39, 40].map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleFilter(selectedSizes, setSelectedSizes, size)}
                        className={`h-10 text-[13px] border transition-all duration-300 ${selectedSizes.includes(size) ? 'bg-slate-900 border-slate-900 text-white' : 'border-gray-100 text-slate-500 hover:border-[#BC858E] hover:text-[#BC858E]'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* SEÇÃO DE BICO */}
        {isFootwear && (
          <div className="py-6">
            <button onClick={() => toggleSection('toe')} className="w-full flex justify-between items-center group text-left">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-[#BC858E]">Bico</h3>
              <motion.div animate={{ rotate: openSections.toe ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openSections.toe && (
                <motion.div variants={accordionVariants} initial="collapsed" animate="open" exit="collapsed" className="overflow-hidden">
                  <div className="flex flex-col gap-3 mt-5">
                    {toeShapes.map((shape) => (
                      <button
                        key={shape}
                        onClick={() => toggleFilter(selectedToeShapes, setSelectedToeShapes, shape)}
                        className="group/toe flex items-center justify-between w-full text-left"
                      >
                        <span className={`text-[13px] transition-all ${selectedToeShapes.includes(shape) ? 'text-slate-900 font-bold translate-x-1' : 'text-slate-500 group-hover/toe:text-[#BC858E]'}`}>
                          {shape}
                        </span>
                        {selectedToeShapes.includes(shape) && (
                          <motion.div layoutId="active-dot" className="w-1 h-1 bg-slate-900 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}