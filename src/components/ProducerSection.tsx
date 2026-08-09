import React from 'react';
import { Sliders, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PRODUCER_PILLARS } from '../data/epkData';

interface ProducerSectionProps {
  onOpenProducerModal: () => void;
}

export const ProducerSection: React.FC<ProducerSectionProps> = ({ onOpenProducerModal }) => {
  return (
    <section
      className="producer-section py-20 bg-[#090a0d] border-b border-neutral-800/80 relative overflow-hidden"
      id="productores"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index */}
        <div className="section-index dark-index text-xs font-mono tracking-widest text-[#ff5500] uppercase font-bold mb-10 pb-3 border-b border-neutral-800 flex items-center justify-between">
          <span>03 / PRÓXIMA ETAPA</span>
          <span className="text-neutral-500 font-normal">VISIÓN PARA PRODUCTORES</span>
        </div>

        {/* Producer Head */}
        <div className="producer-head max-w-3xl space-y-4 mb-12">
          <p className="eyebrow dark inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff5500]">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            Para productores
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Busco un productor<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#ff5500] to-orange-600">
              para construir una obra.
            </span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            El objetivo es convertir el repertorio actual en una identidad sonora coherente, emocional y reconocible, con criterio de canción y producción contemporánea.
          </p>
        </div>

        {/* Producer List Articles (4 Pillars) */}
        <div className="producer-list grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PRODUCER_PILLARS.map((pillar) => (
            <article
              key={pillar.number}
              className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#ff5500]/60 transition-all duration-300 group flex items-start gap-5 shadow-lg"
            >
              <span className="font-mono text-2xl font-black text-[#ff5500] group-hover:scale-110 transition-transform">
                {pillar.number}
              </span>

              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#ff5500] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Producer Callout Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#12131b] to-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5500] font-bold flex items-center justify-center md:justify-start gap-1.5">
              <Sliders className="w-4 h-4" />
              CONVOCATORIA ABIERTA
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              ¿Sos productor musical o sello independiente?
            </h3>
            <p className="text-xs font-mono text-neutral-400">
              Hablemos directamente sobre maquetas, tiempos de estudio, presupuestos e ideas de sonido.
            </p>
          </div>

          <button
            onClick={onOpenProducerModal}
            className="px-6 py-3.5 rounded-lg bg-[#ff5500] hover:bg-[#ff6611] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)] transition-all whitespace-nowrap"
            id="producer-contact-action-btn"
          >
            <Send className="w-4 h-4" />
            Enviar propuesta / Contacto
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
