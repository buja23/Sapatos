import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO ESQUERDO: Texto e Identidade */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6 relative">
            <h2 className="text-5xl lg:text-7xl font-['Playfair_Display'] text-[#997617] leading-tight">
              <span className="block text-4xl lg:text-5xl text-slate-400 font-light mb-2">COLEÇÃO</span>
              OUTONO <span className="italic font-serif text-[#BC858E]">&</span> INVERNO
            </h2>

            <div className="w-24 h-[1px] bg-slate-300 mx-auto lg:mx-0 my-6"></div>

            <div className="py-4">
              <p className="font-['Pinyon_Script'] text-6xl lg:text-8xl text-[#BC858E] transform -rotate-2">
                Sapato de Madame
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8 text-slate-500 uppercase tracking-[0.2em] text-sm">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#997617]">
                <path d="M12 3a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z"/>
                <path d="M3 8h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
              </svg>
              <span>Estoque Limitado</span>
            </div>
            
            <div className="pt-6">
                 <Link to="/category/lancamentos" className="inline-block border-b-2 border-[#997617] text-[#997617] pb-1 font-bold hover:text-[#BC858E] hover:border-[#BC858E] transition-colors uppercase tracking-widest text-xs">
                    Ver Lançamentos
                 </Link>
            </div>
          </div>

          {/* LADO DIREITO: Imagens Arredondadas */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end gap-6 h-[500px] lg:h-[600px]">
            {/* Imagem 1 */}
            <div className="relative w-1/2 h-[85%] self-end rounded-[3rem] overflow-hidden shadow-xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop" 
                alt="Modelo Sapato" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Imagem 2 */}
            <div className="relative w-1/2 h-full rounded-[3rem] overflow-hidden shadow-xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop" 
                alt="Modelo Roupa" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}