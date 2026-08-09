import React, { useState } from 'react';
import { ExternalLink, Play, Pause, FileText, Music, Info, Volume2, VolumeX } from 'lucide-react';
import { MAIN_TRACK } from '../data/epkData';

interface DemoSectionProps {
  onOpenLyrics: () => void;
  onOpenProducerModal: () => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  onOpenLyrics,
  onOpenProducerModal
}) => {
  const [isPlayingSimulated, setIsPlayingSimulated] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playerTab, setPlayerTab] = useState<'soundcloud' | 'custom'>('soundcloud');

  return (
    <section className="demo-section py-20 bg-[#0c0d10] border-b border-neutral-800/80 relative" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index */}
        <div className="section-index text-xs font-mono tracking-widest text-[#ff5500] uppercase font-bold mb-10 pb-3 border-b border-neutral-800 flex items-center justify-between">
          <span>02 / DEMO</span>
          <span className="text-neutral-500 font-normal">AUDIO OFICIAL & FICHA TÉCNICA</span>
        </div>

        {/* Demo Grid */}
        <div className="demo-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Demo Copy (5 cols) */}
          <div className="demo-copy lg:col-span-5 space-y-6">
            <p className="eyebrow light inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff5500]">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
              Escucha directa
            </p>

            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
              Fuego En El<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-amber-400">
                Conurbano
              </span>
            </h2>

            <p className="text-neutral-300 text-base font-light leading-relaxed">
              {MAIN_TRACK.description}
            </p>

            {/* Track Tech Specs */}
            <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-neutral-800/80">
                <span className="flex items-center gap-1.5 font-bold text-neutral-200">
                  <Music className="w-3.5 h-3.5 text-[#ff5500]" />
                  FICHA DE PRODUCCIÓN
                </span>
                <span className="text-[#ff5500]">{MAIN_TRACK.subtitle}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-black/40 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">TEMPO</span>
                  <span className="text-white font-bold">{MAIN_TRACK.bpm} BPM</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">TONALIDAD</span>
                  <span className="text-white font-bold">{MAIN_TRACK.key}</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">DURACIÓN</span>
                  <span className="text-white font-bold">{MAIN_TRACK.duration}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenLyrics}
                className="px-4 py-2.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                id="demo-lyrics-btn"
              >
                <FileText className="w-4 h-4 text-[#ff5500]" />
                Ver Letra y Acordes
              </button>

              <button
                onClick={onOpenProducerModal}
                className="px-4 py-2.5 rounded bg-neutral-900 hover:bg-[#ff5500] hover:text-black border border-neutral-800 text-neutral-300 font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                id="demo-producer-note-btn"
              >
                <Info className="w-4 h-4" />
                Comentarios de Producción
              </button>
            </div>

            {/* SoundCloud Direct External Link */}
            <a
              className="text-link inline-flex items-center gap-2 text-xs font-mono text-[#ff5500] hover:text-amber-400 transition-colors pt-2 underline underline-offset-4"
              href={MAIN_TRACK.soundcloudUrl}
              target="_blank"
              rel="noreferrer"
              id="demo-soundcloud-external-link"
            >
              Abrir en SoundCloud ↗
            </a>
          </div>

          {/* Player Card (7 cols) */}
          <div className="player-card lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 shadow-2xl space-y-4 relative">
            
            {/* Player Tab Switcher */}
            <div className="player-heading flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#ff5500] text-black font-extrabold">DEMO 01</span>
                <span className="text-neutral-300 font-bold uppercase tracking-wider">{MAIN_TRACK.artist}</span>
              </div>

              <div className="flex items-center gap-1 bg-black/60 p-1 rounded-md border border-neutral-800">
                <button
                  onClick={() => setPlayerTab('soundcloud')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                    playerTab === 'soundcloud'
                      ? 'bg-neutral-800 text-[#ff5500] font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  SoundCloud Widget
                </button>
                <button
                  onClick={() => setPlayerTab('custom')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                    playerTab === 'custom'
                      ? 'bg-neutral-800 text-[#ff5500] font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Wave Player
                </button>
              </div>
            </div>

            {/* Tab 1: SoundCloud Official iFrame */}
            {playerTab === 'soundcloud' && (
              <div className="rounded-xl overflow-hidden bg-black/80 border border-neutral-800 min-h-[300px] flex items-center justify-center">
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay; encrypted-media"
                  src={MAIN_TRACK.soundcloudEmbedUrl}
                  title="SoundCloud: Fuego En El Conurbano - Sebastián Zoth"
                  className="w-full rounded-xl"
                />
              </div>
            )}

            {/* Tab 2: Interactive Custom Visualizer Waveform Player */}
            {playerTab === 'custom' && (
              <div className="p-6 rounded-xl bg-gradient-to-b from-neutral-950 to-[#0e0f14] border border-neutral-800 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={MAIN_TRACK.coverImage}
                    alt="Cover"
                    className="w-20 h-20 rounded-lg object-cover border border-neutral-700 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#ff5500] tracking-wider font-bold">
                      REPRODUCCIÓN EN DIRECTO
                    </span>
                    <h3 className="text-lg font-display font-bold text-white">
                      Fuego En El Conurbano
                    </h3>
                    <p className="text-xs font-mono text-neutral-400">
                      Sebastián Zoth · Rock Argentino / Pop Alt
                    </p>
                  </div>
                </div>

                {/* Animated Waveform Bars */}
                <div className="space-y-2">
                  <div className="h-16 flex items-end justify-between gap-1 px-2 py-1 bg-black/60 rounded-lg border border-neutral-800">
                    {Array.from({ length: 36 }).map((_, i) => {
                      // Generate varying bar heights
                      const heightPercent = isPlayingSimulated
                        ? Math.floor(Math.sin(i * 0.4 + Date.now() * 0.005) * 40 + 50)
                        : Math.floor(Math.sin(i * 0.5) * 20 + 30);
                      return (
                        <div
                          key={i}
                          className="w-full rounded-t transition-all duration-150"
                          style={{
                            height: `${Math.max(12, heightPercent)}%`,
                            backgroundColor:
                              i < 18 ? '#ff5500' : isPlayingSimulated ? '#f97316' : '#3f3f46',
                            opacity: isPlayingSimulated ? 0.9 : 0.5,
                          }}
                        />
                      );
                    })}
                  </div>

                  <div className="flex justify-between text-[11px] font-mono text-neutral-500">
                    <span>1:24</span>
                    <span className="text-[#ff5500]">EN VIVO</span>
                    <span>3:42</span>
                  </div>
                </div>

                {/* Player Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setIsPlayingSimulated(!isPlayingSimulated)}
                    className="px-6 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#ff6611] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg transition-transform active:scale-95"
                  >
                    {isPlayingSimulated ? (
                      <>
                        <Pause className="w-4 h-4 fill-black" />
                        Pausar
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-black" />
                        Reproducir
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2.5 rounded-full bg-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* SoundCloud Credit Footer */}
            <div className="soundcloud-credit flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <a
                  href="https://soundcloud.com/sebastian-zoth-oficial"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff5500] transition-colors"
                >
                  Sebastian Zoth Oficial
                </a>
                <span>·</span>
                <a
                  href={MAIN_TRACK.soundcloudUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff5500] transition-colors font-semibold text-neutral-300"
                >
                  Fuego En El Conurbano
                </a>
              </div>

              <a
                href={MAIN_TRACK.soundcloudUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[#ff5500] hover:underline"
              >
                SoundCloud <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
