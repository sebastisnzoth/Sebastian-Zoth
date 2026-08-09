import React, { useState } from 'react';
import { Play, Pause, FileText, Sparkles, Disc, Sliders } from 'lucide-react';
import { DEMO_CATALOG } from '../data/epkData';
import { Track } from '../types';

interface MusicCatalogProps {
  onSelectTrackForLyrics: (track: Track) => void;
  onOpenProducerModal: () => void;
}

export const MusicCatalog: React.FC<MusicCatalogProps> = ({
  onSelectTrackForLyrics,
  onOpenProducerModal
}) => {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);

  const togglePlayTrack = (trackId: string) => {
    if (activeTrackId === trackId) {
      setActiveTrackId(null);
    } else {
      setActiveTrackId(trackId);
    }
  };

  return (
    <section className="py-16 bg-[#0a0b0e] border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-neutral-800">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff5500] font-bold flex items-center gap-1.5 mb-1">
              <Disc className="w-3.5 h-3.5" />
              CATÁLOGO DE DEMOS
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Repertorio en Preproducción 2026
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 max-w-md">
            Muestras adicionales de composición para trabajo en estudio con productores.
          </p>
        </div>

        {/* Tracks List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_CATALOG.map((track, idx) => {
            const isSelected = activeTrackId === track.id;
            return (
              <div
                key={track.id}
                className={`p-5 rounded-xl border transition-all space-y-4 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 border-[#ff5500] shadow-[0_0_20px_rgba(255,85,0,0.15)]'
                    : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-neutral-800 text-[#ff5500] font-bold">
                      0{idx + 1}
                    </span>
                    <span>{track.bpm} BPM · {track.key}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-[#ff5500]">
                      {track.title}
                    </h3>
                    <p className="text-xs font-mono text-[#ff5500]/80 mt-0.5">
                      {track.genre}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-3">
                    {track.description}
                  </p>

                  {/* Producer Note Badge */}
                  {track.producerNotes && (
                    <div className="p-2.5 rounded bg-black/50 border border-neutral-800 text-[11px] font-mono text-neutral-400 space-y-1">
                      <span className="text-[#ff5500] font-bold block flex items-center gap-1 text-[10px]">
                        <Sliders className="w-3 h-3" /> NOTA DE PREPRODUCCIÓN:
                      </span>
                      <p className="italic">{track.producerNotes}</p>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => togglePlayTrack(track.id)}
                    className={`px-3 py-1.5 rounded font-mono text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#ff5500] text-black font-bold'
                        : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-black" />
                        Pausar
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Escuchar
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectTrackForLyrics(track)}
                    className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-mono flex items-center gap-1 cursor-pointer"
                    title="Ver letra y estructura"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span className="hidden sm:inline">Letra</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
