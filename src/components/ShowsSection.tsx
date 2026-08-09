import React from 'react';
import { Calendar, Building2, Crown, Music2, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { SHOW_DATES, ARTIST_INFO } from '../data/epkData';

export const ShowsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0e0f14] border-b border-neutral-800/80 relative" id="shows">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6038] font-bold flex items-center gap-1.5 mb-2">
              <Calendar className="w-4 h-4" />
              CONTRATACIONES & FECHAS 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Próximos Shows & Disponibilidad
            </h2>
          </div>
          <p className="text-neutral-300 text-sm max-w-md font-light leading-relaxed">
            Propuesta versátil para eventos corporativos, hoteles de alta gama, celebraciones privadas y festivales en Argentina y Brasil.
          </p>
        </div>

        {/* Shows / Booking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHOW_DATES.map((show) => {
            const isLive = show.type === 'LIVE';
            const isVip = show.type === 'VIP';

            return (
              <div
                key={show.id}
                className="group relative rounded-2xl p-6 sm:p-8 bg-neutral-900/90 border border-neutral-800 hover:border-[#ff6038] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-[0_0_30px_rgba(255,96,56,0.15)]"
              >
                <div className="space-y-4">
                  
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-md text-[11px] font-mono font-extrabold uppercase tracking-widest flex items-center gap-1.5 ${
                        isLive
                          ? 'bg-[#ff6038] text-white'
                          : isVip
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                      }`}
                    >
                      {isLive && <Building2 className="w-3.5 h-3.5" />}
                      {isVip && <Crown className="w-3.5 h-3.5" />}
                      {!isLive && !isVip && <Music2 className="w-3.5 h-3.5" />}
                      {show.type} {show.year}
                    </span>

                    <span className="text-xs font-mono text-neutral-400">DISPONIBLE</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#ff6038] transition-colors">
                      {show.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      {show.subtitle}
                    </p>
                  </div>

                  {/* Format Detail */}
                  <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 text-xs font-mono text-neutral-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6038] shrink-0" />
                    <span>{show.format}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-neutral-400 font-light pt-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6038]" />
                      Sonido e iluminación profesional adaptable
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6038]" />
                      Repertorio propio + clásicos de rock rioplatense
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6038]" />
                      Facturación y contratación directa en AR & BR
                    </li>
                  </ul>

                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/5548996752532?text=${encodeURIComponent(show.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-neutral-800 group-hover:bg-[#ff6038] text-white group-hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                  id={`show-btn-${show.id}`}
                >
                  <PhoneCall className="w-4 h-4" />
                  {show.ctaText}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-display font-bold text-white">
              ¿Tenés una fecha o festival en mente?
            </h4>
            <p className="text-xs font-mono text-neutral-400">
              Coordinamos requerimientos técnicos y traslados directamente con la producción.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={ARTIST_INFO.whatsappBrasil}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-green-600 hover:bg-green-500 text-white font-mono text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              WhatsApp Brasil (+55)
            </a>
            <a
              href={ARTIST_INFO.whatsappArgentina}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              WhatsApp Argentina (+54)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
