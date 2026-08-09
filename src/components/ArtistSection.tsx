import React from 'react';
import { Download, Sparkles, MapPin, Music2 } from 'lucide-react';
import { ARTIST_INFO } from '../data/epkData';

interface ArtistSectionProps {
  onOpenPressAssets: () => void;
}

export const ArtistSection: React.FC<ArtistSectionProps> = ({ onOpenPressAssets }) => {
  return (
    <section className="artist-section py-20 bg-[#0a0b0e] border-b border-neutral-800/80 relative" id="artista">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index */}
        <div className="section-index dark-index text-xs font-mono tracking-widest text-[#ff5500] uppercase font-bold mb-8 pb-3 border-b border-neutral-800/80 flex items-center justify-between">
          <span>01 / EL ARTISTA</span>
          <span className="text-neutral-500 font-normal">SINOPSIS Y VISIÓN</span>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols) - Heading & Press Portrait */}
          <div className="lg:col-span-5 space-y-6">
            <p className="eyebrow dark inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff5500]">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              Identidad
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Canciones con barrio,<br />
              <span className="text-neutral-300 font-normal italic">melodía y presente.</span>
            </h2>

            {/* Artist Press Image Frame */}
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-xl aspect-[3/4] max-w-md">
              <img
                src={ARTIST_INFO.pressPhotoUrl}
                alt="Sebastián Zoth - Músico y Compositor Argentino"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-white text-sm">SEBASTIÁN ZOTH</h3>
                  <p className="text-xs font-mono text-neutral-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#ff5500]" />
                    {ARTIST_INFO.location}
                  </p>
                </div>
                <button
                  onClick={onOpenPressAssets}
                  className="p-2 rounded bg-neutral-800 hover:bg-[#ff5500] hover:text-black text-neutral-300 transition-colors text-xs font-mono flex items-center gap-1 cursor-pointer"
                  title="Descargar Foto de Prensa"
                  id="artist-photo-download-btn"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) - Bio & Identity Tags */}
          <div className="lg:col-span-7 space-y-8 lg:pt-8">
            <div className="artist-bio space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
              <p className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                {ARTIST_INFO.bioParagraph1}
              </p>

              <p className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                {ARTIST_INFO.bioParagraph2}
              </p>

              {/* Quote Card */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-neutral-900 to-[#12131a] border-l-4 border-[#ff5500] space-y-2">
                <p className="italic text-white text-base font-serif">
                  &ldquo;La canción es un refugiado del tiempo. Busco que cada compás tenga el peso de la calle y la frescura de un nuevo comienzo.&rdquo;
                </p>
                <p className="text-xs font-mono text-[#ff5500] font-semibold">
                  — Sebastián Zoth
                </p>
              </div>

              {/* Identity Tags */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                  Ejes de Identidad
                </h4>
                <div className="identity-tags flex flex-wrap gap-2.5" aria-label="Claves del proyecto">
                  {ARTIST_INFO.identityTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-md bg-neutral-900/90 border border-neutral-700/80 text-xs font-mono font-bold tracking-wider text-neutral-200 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Extra Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-900 font-mono text-xs">
                <div className="p-3 rounded bg-neutral-900/60 border border-neutral-800">
                  <span className="text-neutral-500 block">ORIGEN</span>
                  <strong className="text-white text-sm font-display">Buenos Aires</strong>
                </div>
                <div className="p-3 rounded bg-neutral-900/60 border border-neutral-800">
                  <span className="text-neutral-500 block">FORMATO</span>
                  <strong className="text-white text-sm font-display">Solista / Banda</strong>
                </div>
                <div className="p-3 rounded bg-neutral-900/60 border border-neutral-800 col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 block">ESTADO 2026</span>
                  <strong className="text-[#ff5500] text-sm font-display">Preproducción EP</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
