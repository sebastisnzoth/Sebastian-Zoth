import React from 'react';
import { ARTIST_INFO } from '../data/epkData';
import { Youtube, Instagram, Music, PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08080a] py-12 border-t border-neutral-900 text-xs font-mono text-neutral-400" id="prensa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-neutral-800/80 items-center">
          <div>
            <span className="font-display font-extrabold text-white text-lg tracking-wider block">
              SEBASTIÁN ZOTH
            </span>
            <p className="text-neutral-300 font-sans text-xs mt-1">
              Rock Argentino · Pop Alternativo · EPK & Booking 2026
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://soundcloud.com/sebastian-zoth-oficial"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 text-neutral-300 hover:text-[#ff6038] hover:bg-black transition-colors"
              title="SoundCloud"
            >
              <Music className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 text-neutral-300 hover:text-red-500 hover:bg-black transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 text-neutral-300 hover:text-pink-500 hover:bg-black transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* WhatsApp Contacts */}
          <div className="flex flex-col md:items-end gap-1 text-xs">
            <a
              href={ARTIST_INFO.whatsappBrasil}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff6038] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-green-500" />
              Brasil: +55 48 99675-2532
            </a>
            <a
              href={ARTIST_INFO.whatsappArgentina}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff6038] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
              Argentina: +54 11 7102-3089
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <span className="font-bold text-neutral-300 tracking-wider">
            © 2026 {ARTIST_INFO.name}. Todos los derechos reservados.
          </span>
          <span className="text-neutral-400 tracking-widest">
            {ARTIST_INFO.location}
          </span>
          <span className="text-[#ff6038] font-semibold tracking-wider">
            PRESS KIT OFICIAL
          </span>
        </div>

      </div>
    </footer>
  );
};
