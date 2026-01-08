import { Instagram } from 'lucide-react';

export default function InstagramBar() {
  return (
    // Borda superior ROSE suave
    <section className="bg-[#FDFBF7] py-20 border-t border-[#BC858E]/20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center justify-center"
        >
          {/* Círculo do Ícone: Borda ROSE e Fundo ROSE no Hover */}
          <div className="w-16 h-16 rounded-full border border-[#BC858E]/40 flex items-center justify-center bg-white shadow-sm mb-6 group-hover:bg-[#BC858E] group-hover:border-[#BC858E] group-hover:scale-110 transition-all duration-300">
            <Instagram className="w-7 h-7 text-[#BC858E] group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Texto de Chamada em ROSE */}
          <span className="text-[#BC858E] font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">
            Acompanhe nossas novidades
          </span>

          {/* Nome do Instagram: Muda para ROSE no Hover */}
          <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] text-slate-900 group-hover:text-[#BC858E] transition-colors duration-300">
            @sapatodemadame
          </h2>

          {/* Linha decorativa ROSE que cresce */}
          <div className="w-0 group-hover:w-full h-[1px] bg-[#BC858E] mt-4 transition-all duration-500 ease-out opacity-50"></div>
        </a>

      </div>
    </section>
  );
}