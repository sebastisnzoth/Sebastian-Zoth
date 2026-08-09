import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sliders, Mail, User, Building, MessageSquare } from 'lucide-react';
import { ARTIST_INFO, DEMO_CATALOG } from '../data/epkData';
import { ProducerInquiry } from '../types';

interface ProducerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProducerModal: React.FC<ProducerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ProducerInquiry>({
    name: '',
    email: '',
    role: 'Productor Musical',
    organization: '',
    message: '',
    preferredTrack: 'Fuego En El Conurbano',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0e0f14] border border-neutral-800 rounded-2xl w-full max-w-xl p-6 sm:p-8 space-y-6 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-2 border-b border-neutral-800 pb-4">
              <span className="text-xs font-mono text-[#ff5500] uppercase font-bold flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                PRODUCTORES & PRENSA
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                Contacto Directo con Sebastián Zoth
              </h3>
              <p className="text-xs font-mono text-neutral-400">
                Escribe tu propuesta artística, sugerencia de arreglos o consulta de contratación.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-400 uppercase tracking-wider block">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Gustavo Santaolalla"
                      className="w-full pl-9 pr-3 py-2.5 rounded bg-neutral-950 border border-neutral-800 focus:border-[#ff5500] text-neutral-200 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-neutral-400 uppercase tracking-wider block">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="productor@estudio.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded bg-neutral-950 border border-neutral-800 focus:border-[#ff5500] text-neutral-200 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-400 uppercase tracking-wider block">
                    Rol / Actividad
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-neutral-950 border border-neutral-800 focus:border-[#ff5500] text-neutral-200 outline-none transition-colors"
                  >
                    <option value="Productor Musical">Productor Musical</option>
                    <option value="Ingeniero de Mezcla">Ingeniero de Mezcla / Master</option>
                    <option value="Sello / Discográfica">Sello / Discográfica</option>
                    <option value="Prensa / Medio de comunicación">Prensa / Periodista</option>
                    <option value="Booking / Shows">Booking / Programador de Shows</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-neutral-400 uppercase tracking-wider block">
                    Sello / Estudio / Medio
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Ej. Estudio El Pie / Prensa Rock"
                      className="w-full pl-9 pr-3 py-2.5 rounded bg-neutral-950 border border-neutral-800 focus:border-[#ff5500] text-neutral-200 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-400 uppercase tracking-wider block">
                  Track o Demo de Interés
                </label>
                <select
                  value={formData.preferredTrack}
                  onChange={(e) => setFormData({ ...formData, preferredTrack: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-neutral-950 border border-neutral-800 focus:border-[#ff5500] text-neutral-200 outline-none transition-colors"
                >
                  {DEMO_CATALOG.map((track) => (
                    <option key={track.id} value={track.title}>
                      {track.title} ({track.subtitle})
                    </option>
                  ))}
                  <option value="Todo el repertorio">Todo el repertorio / Futuro EP</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-400 uppercase tracking-wider block">
                  Mensaje / Propuesta de Preproducción *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalla tu propuesta sonora, disponibilidad de estudio, referencias o comentarios..."
                  className="w-full p-3 rounded bg-neutral-950 border border-neutral-800 focus:border-[#ff5500] text-neutral-200 outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] text-neutral-500">
                  Respuesta directa a {ARTIST_INFO.pressEmail}
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 rounded bg-[#ff5500] hover:bg-[#ff6611] text-black font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-lg"
                  id="submit-proposal-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  Enviar Propuesta
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4 font-mono">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              ¡Propuesta Enviada!
            </h3>

            <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
              Gracias, <strong className="text-[#ff5500]">{formData.name}</strong>. Tu mensaje sobre &quot;{formData.preferredTrack}&quot; ha sido registrado con éxito. Sebastián Zoth se pondrá en contacto pronto a través de <span className="text-white font-bold">{formData.email}</span>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono font-bold cursor-pointer"
              >
                Volver al Press Kit
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
