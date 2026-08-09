import React, { useState } from 'react';
import { X, Download, FileText, Image as ImageIcon, FileCode, Check, Copy } from 'lucide-react';
import { PRESS_ASSETS, ARTIST_INFO } from '../data/epkData';

interface PressAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PressAssetsModal: React.FC<PressAssetsModalProps> = ({ isOpen, onClose }) => {
  const [copiedBio, setCopiedBio] = useState(false);

  if (!isOpen) return null;

  const handleCopyBio = () => {
    const text = `${ARTIST_INFO.name} - PRESS RELEASE 2026\nGénero: ${ARTIST_INFO.genre}\nUbicación: ${ARTIST_INFO.location}\nSoundCloud: ${ARTIST_INFO.soundcloudOfficialUrl}\n\n${ARTIST_INFO.bioParagraph1}\n\n${ARTIST_INFO.bioParagraph2}`;
    navigator.clipboard.writeText(text);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
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
          <span className="text-xs font-mono text-[#ff5500] uppercase font-bold flex items-center gap-1.5">
            <Download className="w-4 h-4" />
            DOSSIER & RECURSOS DE PRENSA
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Material Oficial de Difusión 2026
          </h3>
          <p className="text-xs font-mono text-neutral-400">
            Imágenes de alta resolución, artes de tapa y fichas técnicas para periodistas y programadores.
          </p>
        </div>

        {/* Assets List */}
        <div className="space-y-3">
          {PRESS_ASSETS.map((asset) => (
            <div
              key={asset.id}
              className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-black/60 border border-neutral-800 text-[#ff5500]">
                  {asset.type === 'image' ? (
                    <ImageIcon className="w-5 h-5" />
                  ) : asset.type === 'document' ? (
                    <FileText className="w-5 h-5" />
                  ) : (
                    <FileCode className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white">
                    {asset.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    {asset.description}
                  </p>
                  <span className="text-[10px] font-mono text-[#ff5500] mt-1 block">
                    TAMAÑO: {asset.size}
                  </span>
                </div>
              </div>

              <a
                href={asset.url}
                download
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-neutral-800 hover:bg-[#ff5500] hover:text-black text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer self-start sm:self-center shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                Descargar
              </a>
            </div>
          ))}
        </div>

        {/* Quick Bio Copy Box */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-neutral-300">
            <span className="font-bold uppercase text-[#ff5500] flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> RESUMEN DE PRENSA (COPIAR DIRECTO)
            </span>
            <button
              onClick={handleCopyBio}
              className="px-3 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copiedBio ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#ff5500]" />
                  Copiar Bio
                </>
              )}
            </button>
          </div>
          <p className="text-neutral-400 font-sans leading-relaxed text-xs italic">
            &quot;{ARTIST_INFO.bioParagraph1}&quot;
          </p>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs font-bold cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
