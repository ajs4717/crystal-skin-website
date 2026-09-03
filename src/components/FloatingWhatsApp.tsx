import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageSquare, Phone, Calendar } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Dr. Misha’s Crystal Skin, I would like to enquire about treatments and consultations.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button (hidden on small mobile screens where bottom bar is active) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <button
          onClick={handleWhatsApp}
          id="floating-desktop-whatsapp"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full shadow-2xl hover:shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/80"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-300 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-300" />
          </div>
          <span>Chat on WhatsApp</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom CTA Bar (Mobile-first requirement: Call | WhatsApp | Book Appointment) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-t border-white/80 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          
          {/* Call button */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/80 backdrop-blur-xs border border-white active:bg-white text-slate-800 text-[11px] font-bold transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-teal-700 mb-0.5" />
            <span>Call</span>
          </a>

          {/* WhatsApp button */}
          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-[11px] font-bold shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </button>

          {/* Book Appointment button */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-900 active:bg-blue-800 text-white text-[11px] font-bold shadow-xs transition-colors"
          >
            <Calendar className="w-4 h-4 text-teal-300 mb-0.5" />
            <span>Book Appt</span>
          </button>

        </div>
      </div>
    </>
  );
};
