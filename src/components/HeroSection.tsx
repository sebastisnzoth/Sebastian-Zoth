import React from 'react';
import { Play, Download, Radio, Flame, Sparkles, PhoneCall } from 'lucide-react';
import { ARTIST_INFO, MAIN_TRACK } from '../data/epkData';

interface HeroSectionProps {
  onOpenPressAssets: () => void;
  onOpenProducerModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPressAssets,
  onOpenProducerModal
}) => {
  return (
    <section
      className="hero relative min-h-[640px] py-16 md:py-24 border-b border-neutral-800/80 bg-gradient-to-b from-[#0a0a0c] via-[#120f12] to-[#0d0d0f] overflow-hidden"
      id="inicio"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6038]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#ff6038] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#ff6038] -ml-4" />
              <span className="font-bold text-[#ff6038]">SEBASTIÁN ZOTH</span> · Cantautor / Rock Argentino
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.92] text-white uppercase">
              Música propia.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6038] via-amber-500 to-orange-400">
                Energía real.
              </span><br />
              Alma rock.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
              {ARTIST_INFO.introText}
            </p>

            {/* Artist Quote */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border-l-4 border-[#ff6038] text-sm sm:text-base italic text-neutral-200 max-w-xl font-serif">
              &ldquo;{ARTIST_INFO.quote}&rdquo;
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                className="px-6 py-3.5 rounded font-mono font-extrabold text-xs uppercase tracking-wider bg-[#ff6038] hover:bg-[#d94423] text-white transition-all shadow-[0_0_25px_rgba(255,96,56,0.4)] flex items-center gap-2.5 cursor-pointer"
                href="#musica"
                id="hero-listen-btn"
              >
                <Play className="w-4 h-4 fill-white" />
                Escuchar música ▶
              </a>

              <a
                className="px-6 py-3.5 rounded font-mono font-bold text-xs uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 transition-all flex items-center gap-2 cursor-pointer"
                href={ARTIST_INFO.whatsappBrasil}
                target="_blank"
                rel="noreferrer"
                id="hero-hire-btn"
              >
                <PhoneCall className="w-4 h-4 text-[#ff6038]" />
                Contratar Show
              </a>

              <button
                onClick={onOpenPressAssets}
                className="px-5 py-3.5 rounded font-mono font-semibold text-xs uppercase tracking-wider bg-black/60 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 transition-all flex items-center gap-2 cursor-pointer"
                id="hero-presskit-btn"
              >
                <Download className="w-4 h-4 text-[#ff6038]" />
                Ver Press Kit
              </button>
            </div>

            {/* Location Tag */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-neutral-400 border-t border-neutral-900">
              <span className="flex items-center gap-1.5 font-semibold text-neutral-200">
                <Radio className="w-3.5 h-3.5 text-[#ff6038]" />
                {ARTIST_INFO.location}
              </span>
              <span>·</span>
              <span className="text-neutral-400">Prensa Oficial & Shows 2026</span>
            </div>

          </div>

          {/* Artist Photo Frame (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md group">
              {/* Subtle back glowing frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#ff6038] to-amber-600 opacity-30 group-hover:opacity-70 blur-xl transition-all duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-700/80 shadow-2xl aspect-[3/4]">
                <img
                  src={ARTIST_INFO.pressPhotoUrl}
                  alt="Sebastián Zoth - Músico y Compositor Argentino"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-neutral-700 text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-[#ff6038] fill-[#ff6038]" />
                  GIRA 2026
                </div>

                {/* Bottom Card Meta */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-[#ff6038] font-bold uppercase tracking-widest">
                      NUEVO LANZAMIENTO
                    </span>
                    <h3 className="text-base font-display font-bold text-white uppercase">
                      GIRA / FUEGO EN EL CONURBANO
                    </h3>
                  </div>
                  <a
                    href="#musica"
                    className="p-2.5 rounded-full bg-[#ff6038] text-white hover:bg-white hover:text-black transition-colors shadow-md"
                    aria-label="Escuchar canción"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Quick Navigation Sidebar */}
      <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 flex-col font-mono text-[10px] uppercase font-black text-center shadow-2xl">
        <a
          href="#musica"
          className="w-16 py-3 bg-[#ff6038] text-white hover:bg-[#d94423] transition-colors border-b border-white/20 flex flex-col items-center gap-1"
          title="Escuchar Música"
        >
          <span className="text-base">♫</span>
          <span>Escuchá</span>
        </a>
        <a
          href="#shows"
          className="w-16 py-3 bg-neutral-900 text-white hover:bg-[#ff6038] transition-colors border-b border-white/10 flex flex-col items-center gap-1"
          title="Próximos Shows"
        >
          <span className="text-base">▣</span>
          <span>Fechas</span>
        </a>
        <button
          onClick={onOpenPressAssets}
          className="w-16 py-3 bg-black text-neutral-300 hover:bg-[#ff6038] hover:text-white transition-colors flex flex-col items-center gap-1 cursor-pointer"
          title="Descargar Press Kit"
        >
          <span className="text-base">⇩</span>
          <span>Dossier</span>
        </button>
      </div>
    </section>
  );
};
