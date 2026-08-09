import React, { useState } from 'react';
import { X, Copy, Check, Music2, Sliders } from 'lucide-react';
import { Track } from '../types';

interface LyricsModalProps {
  track: Track | null;
  onClose: () => void;
}

export const LyricsModal: React.FC<LyricsModalProps> = ({ track, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showChords, setShowChords] = useState(true);

  if (!track) return null;

  const handleCopyLyrics = () => {
    const fullText = `SEBASTIÁN ZOTH - ${track.title.toUpperCase()}\n\nVERSO:\n${track.lyrics.verse.join('\n')}\n\nESTRIBILLO:\n${track.lyrics.chorus.join('\n')}${track.lyrics.bridge ? `\n\nPUENTE:\n${track.lyrics.bridge.join('\n')}` : ''}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0e0f14] border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff5500] uppercase font-bold">
            <Music2 className="w-4 h-4" />
            LETRA & ESTRUCTURA
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {track.title}
          </h3>
          <p className="text-xs font-mono text-neutral-400">
            {track.artist} · {track.genre} · {track.bpm} BPM · Tonalidad: {track.key}
          </p>
        </div>

        {/* Chords banner toggle */}
        {track.chords && (
          <div className="p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs font-mono">
            <div>
              <span className="text-neutral-500 uppercase block text-[10px]">ACORDES PRINCIPALES</span>
              <span className="text-amber-400 font-bold">{track.chords}</span>
            </div>
            <button
              onClick={() => setShowChords(!showChords)}
              className="text-[11px] px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 cursor-pointer"
            >
              {showChords ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
        )}

        {/* Lyrics Content */}
        <div className="space-y-6 font-sans text-neutral-200 leading-relaxed text-sm sm:text-base">
          {/* Verse */}
          <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-900 space-y-2">
            <span className="text-xs font-mono text-[#ff5500] uppercase tracking-widest font-bold block">
              [ VERSO ]
            </span>
            {track.lyrics.verse.map((line, idx) => (
              <p key={idx} className="font-light">{line}</p>
            ))}
          </div>

          {/* Chorus */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-[#14151f] border-l-4 border-[#ff5500] space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">
              [ ESTRIBILLO ]
            </span>
            {track.lyrics.chorus.map((line, idx) => (
              <p key={idx} className="font-medium text-white">{line}</p>
            ))}
          </div>

          {/* Bridge */}
          {track.lyrics.bridge && (
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-900 space-y-2">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold block">
                [ PUENTE ]
              </span>
              {track.lyrics.bridge.map((line, idx) => (
                <p key={idx} className="italic text-neutral-300">{line}</p>
              ))}
            </div>
          )}
        </div>

        {/* Producer Note if available */}
        {track.producerNotes && (
          <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 text-xs font-mono space-y-1">
            <span className="text-[#ff5500] font-bold flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" /> NOTA DE DIRECCIÓN ARTÍSTICA
            </span>
            <p className="text-neutral-400 leading-relaxed">{track.producerNotes}</p>
          </div>
        )}

        {/* Footer actions */}
        <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
          <button
            onClick={handleCopyLyrics}
            className="px-4 py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs flex items-center gap-2 cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                ¡Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#ff5500]" />
                Copiar Letra
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#ff5500] text-black font-mono text-xs font-bold cursor-pointer hover:bg-[#ff6611]"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
