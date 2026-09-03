import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Calendar, 
  MessageSquare, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Clock, 
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Dr. Misha’s Crystal Skin, I would like to book a consultation for skin/hair treatment.");
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#F8FAFC] pt-8 pb-16 lg:py-20">
      {/* Frosted Ambient Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            
            {/* Frosted Rating Tag */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-white px-3.5 py-1.5 rounded-full shadow-xs mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-amber-500 font-bold tracking-wider">★★★★★</span>
              <span className="text-xs font-semibold text-slate-700">4.9/5 (133 Google Reviews)</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-teal-700 font-medium">Yerawada, Pune</span>
            </motion.div>

            {/* Main Headline with Serif Accent */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 tracking-tight leading-[1.12] mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Your Skin. Your Confidence. <br />
              <span className="text-teal-600 italic font-serif">
                Our Expertise.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-normal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Advanced skin, hair and laser treatments designed to help you look and feel your best — with personalized care in Yerawada, Pune.
            </motion.p>

            {/* Action CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={onOpenBooking}
                id="hero-book-appointment-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 ml-0.5 opacity-80" />
              </button>

              <button
                onClick={handleWhatsApp}
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-teal-800 bg-white hover:bg-teal-50/60 border-2 border-teal-200/80 rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </button>
            </motion.div>

            {/* Trust Badge Bar */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 p-3.5 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xs"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Dr. Misha’s Crystal Skin</div>
                  <div className="text-slate-500">Ganga Complex, Opp. Poona Business Bay</div>
                </div>
              </div>

              <div className="hidden sm:block h-7 w-px bg-slate-200" />

              <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-50/80 px-3 py-1 rounded-lg border border-teal-100/60">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Skin • Hair • Laser</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Frosted Visual Showcase */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Ambient Glow Orbs */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-200/50 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-6 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl pointer-events-none" />

              {/* Frosted Glass Outer Card */}
              <div className="bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-[36px] shadow-xl border border-white relative z-10 w-full max-w-sm sm:w-84">
                
                {/* Clinical Image Container */}
                <div className="aspect-[4/5] bg-slate-100 rounded-[28px] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=85"
                    alt="Dr. Misha's Crystal Skin Clinic Yerawada Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-black/10" />

                  {/* Frosted Overlay Inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Skin • Hair • Laser Clinic</span>
                    </div>
                    <div className="text-[11px] text-slate-200 mt-0.5">Yerawada, Pune • 411006</div>
                  </div>
                </div>

                {/* Bottom Card Meta */}
                <div className="mt-4 flex flex-col space-y-0.5 text-left px-1">
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Personalized Clinical Care
                  </span>
                  <span className="text-xs text-slate-600">
                    Comprehensive Dermatology & Aesthetics
                  </span>
                </div>
              </div>

              {/* Floating Trust Pill */}
              <motion.div 
                className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md border border-slate-100 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 z-20"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-7 h-7 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 font-bold text-xs">
                  ★
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900">4.9 / 5 Rating</div>
                  <div className="text-[10px] text-slate-500">133 Google Reviews</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

