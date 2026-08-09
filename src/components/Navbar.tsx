import React, { useState } from 'react';
import { Download, Menu, X, Disc, PhoneCall, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/epkData';

interface NavbarProps {
  onOpenPressAssets: () => void;
  onOpenProducerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPressAssets,
  onOpenProducerModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-neutral-800/80 transition-all duration-300"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <a
            className="brand group flex items-center gap-2 text-xl font-bold tracking-tighter text-white hover:text-[#ff6038] transition-colors"
            href="#inicio"
            aria-label="Sebastián Zoth, inicio"
            id="nav-brand-link"
          >
            <span className="w-8 h-8 rounded-sm bg-[#ff6038] text-white font-mono font-extrabold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(255,96,56,0.4)] group-hover:scale-105 transition-transform">
              SZ
            </span>
            <span className="font-display text-base tracking-wider uppercase font-extrabold text-white">
              SEBASTIÁN <span className="text-[#ff6038] font-serif font-normal italic lowercase">Zoth</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-neutral-800">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
              PRESS KIT 2026
            </span>
            <span className="text-[11px] text-neutral-500">
              {ARTIST_INFO.location}
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-xs uppercase font-mono tracking-widest text-neutral-300 font-semibold">
          <a href="#inicio" className="hover:text-[#ff6038] transition-colors" id="nav-link-inicio">
            Inicio
          </a>
          <a href="#musica" className="hover:text-[#ff6038] transition-colors flex items-center gap-1" id="nav-link-musica">
            <Disc className="w-3.5 h-3.5 text-[#ff6038]" />
            Música
          </a>
          <a href="#shows" className="hover:text-[#ff6038] transition-colors" id="nav-link-shows">
            Shows
          </a>
          <a href="#historia" className="hover:text-[#ff6038] transition-colors" id="nav-link-historia">
            Sobre Mí
          </a>
          <a href="#galeria" className="hover:text-[#ff6038] transition-colors" id="nav-link-galeria">
            Galería
          </a>
          <a href="#prensa" className="hover:text-[#ff6038] transition-colors" id="nav-link-prensa">
            Prensa
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenPressAssets}
            className="px-3.5 py-2 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            title="Descargar Kit de Prensa"
            id="nav-press-assets-btn"
          >
            <Download className="w-3.5 h-3.5 text-[#ff6038]" />
            Dossier
          </button>
          <a
            href={ARTIST_INFO.whatsappBrasil}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded bg-[#ff6038] hover:bg-[#d94423] text-white transition-all shadow-[0_0_20px_rgba(255,96,56,0.35)] flex items-center gap-1.5 cursor-pointer"
            id="nav-[#ff6038]-btn"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Contratar Show
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={ARTIST_INFO.whatsappBrasil}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 text-[11px] font-mono font-bold uppercase rounded bg-[#ff6038] text-white flex items-center gap-1"
          >
            Contratar
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white cursor-pointer"
            aria-label="Abrir menú"
            id="nav-mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111216] border-b border-neutral-800 px-4 py-6 space-y-4 font-mono text-xs uppercase tracking-wider">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#ff6038] py-1.5 border-b border-neutral-900"
          >
            Inicio
          </a>
          <a
            href="#musica"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#ff6038] py-1.5 border-b border-neutral-900"
          >
            ♫ Música & Lanzamientos
          </a>
          <a
            href="#shows"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#ff6038] py-1.5 border-b border-neutral-900"
          >
            ▣ Shows & Fechas
          </a>
          <a
            href="#historia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#ff6038] py-1.5 border-b border-neutral-900"
          >
            Sobre Mí & Historia
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#ff6038] py-1.5 border-b border-neutral-900"
          >
            Galería de Fotos HD
          </a>
          <a
            href="#prensa"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-[#ff6038] py-1.5 border-b border-neutral-900"
          >
            Prensa & Contrataciones
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPressAssets();
              }}
              className="w-full py-2.5 text-center font-mono rounded bg-neutral-900 border border-neutral-800 text-neutral-200 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#ff6038]" />
              Descargar Dossier de Prensa
            </button>
            <a
              href={ARTIST_INFO.whatsappBrasil}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 text-center font-mono font-bold rounded bg-[#ff6038] text-white flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
