import React, { useState } from 'react';
import { Camera, Eye, Download, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/epkData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (img: GalleryImage, index: number) => {
    setSelectedImage(img);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    const nextIdx = (selectedIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(GALLERY_PHOTOS[nextIdx]);
  };

  const nextImage = () => {
    const nextIdx = (selectedIndex + 1) % GALLERY_PHOTOS.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(GALLERY_PHOTOS[nextIdx]);
  };

  return (
    <section className="py-20 bg-[#090a0d] border-b border-neutral-800/80 relative" id="galeria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6038] font-bold flex items-center gap-1.5 mb-2">
              <Camera className="w-4 h-4" />
              PRENSA & PRESELECCIÓN VISUAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Galería Fotográfica HD 2026
            </h2>
          </div>
          <p className="text-neutral-300 text-sm max-w-md font-light leading-relaxed">
            Fotografías oficiales de estudio, backstage y producción para uso en medios gráficos, afiches y prensa musical.
          </p>
        </div>

        {/* Gallery Grid (5 Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img, idx)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#ff6038] cursor-pointer shadow-xl transition-all duration-300 aspect-[3/4]"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-neutral-700 text-[10px] font-mono text-[#ff6038] font-bold uppercase tracking-widest">
                  {img.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4 text-[#ff6038]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800/80">
                <h3 className="font-display font-bold text-white text-base">
                  {img.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1 line-clamp-1">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-[#ff6038] transition-colors flex items-center justify-center cursor-pointer z-50"
            aria-label="Cerrar vista"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-[#ff6038] transition-colors flex items-center justify-center cursor-pointer z-50"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-[#ff6038] transition-colors flex items-center justify-center cursor-pointer z-50"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Frame */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl max-h-[75vh]">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Photo Info Bar */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 w-full max-w-xl flex items-center justify-between gap-4 font-mono">
              <div>
                <span className="text-[10px] text-[#ff6038] font-bold uppercase tracking-widest">
                  {selectedImage.category} · {selectedIndex + 1} DE {GALLERY_PHOTOS.length}
                </span>
                <h4 className="text-sm font-display font-bold text-white">
                  {selectedImage.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light">
                  {selectedImage.caption}
                </p>
              </div>

              <a
                href={selectedImage.url}
                download
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#ff6038] hover:bg-[#d94423] text-white text-xs font-bold flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Descargar HD
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
