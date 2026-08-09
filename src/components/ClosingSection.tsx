import React from 'react';
import { ExternalLink, Radio, Disc, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/epkData';

interface ClosingSectionProps {
  onOpenPressAssets: () => void;
  onOpenProducerModal: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  onOpenPressAssets,
  onOpenProducerModal,
}) => {
  return (
    <section className="closing-section py-20 bg-gradient-to-b from-[#090a0d] to-[#0c0d10] border-b border-neutral-800 relative text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Eyebrow */}
        <p className="eyebrow inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff5500]">
          <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
          Sebastián Zoth
        </p>

        {/* H2 Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
          Raíz argentina.<br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-orange-400 to-amber-300 font-serif not-italic">
            Producción hacia adelante.
          </em>
        </h2>

        {/* Closing Row */}
        <div className="closing-row pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-neutral-800/80">
          <p className="text-xs font-mono text-neutral-400 tracking-widest uppercase flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#ff5500]" />
            {ARTIST_INFO.location}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              className="button primary px-6 py-3 rounded font-mono font-bold text-xs uppercase tracking-wider bg-[#ff5500] hover:bg-[#ff6611] text-black transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)] flex items-center gap-2 cursor-pointer"
              href={ARTIST_INFO.soundcloudOfficialUrl}
              target="_blank"
              rel="noreferrer"
              id="closing-soundcloud-link"
            >
              SoundCloud oficial
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenPressAssets}
              className="px-5 py-3 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              Descargar Kit de Prensa
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
