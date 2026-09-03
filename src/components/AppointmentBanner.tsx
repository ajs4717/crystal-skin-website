import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, MessageSquare, Sparkles, Phone, Star, ShieldCheck } from 'lucide-react';

interface AppointmentBannerProps {
  onOpenBooking: () => void;
}

export const AppointmentBanner: React.FC<AppointmentBannerProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Dr. Misha’s Crystal Skin, I would like to schedule a clinical consultation for skin / hair.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/20 backdrop-blur-xl">
          
          {/* Subtle Frosted Aesthetic Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Rating Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold mb-6 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9★ Rated Skin & Hair Clinic in Yerawada</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Ready to Take the Next Step for Your Skin & Hair?
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 max-w-2xl">
              Book a consultation to discuss your concerns and explore treatment options suited to your individual needs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                id="banner-book-appointment-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-lg shadow-teal-400/20 hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={handleWhatsApp}
                id="banner-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold text-white bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-400/40 rounded-xl shadow-md transition-all cursor-pointer backdrop-blur-xs hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Micro clinical note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              <span>Strictly confidential consultations & individualized assessment</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
