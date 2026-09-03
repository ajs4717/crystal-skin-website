import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Calendar,
  PhoneCall
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: 'Personalized Consultation',
      description: 'Every skin and scalp is distinct. We conduct thorough evaluations to understand root concerns before recommending any treatment path.',
      icon: HeartHandshake,
    },
    {
      title: 'Modern Treatment Options',
      description: 'State-of-the-art dermatological lasers, medical peelings, and clinical aesthetic procedures tailored for optimal safety and efficacy.',
      icon: Sparkles,
    },
    {
      title: 'Patient Comfort & Safety',
      description: 'A serene, highly sanitized clinical environment designed for complete privacy, hygienic safety, and a comfortable treatment experience.',
      icon: ShieldCheck,
    },
    {
      title: 'Professional Ethical Approach',
      description: 'Honest guidance without unrealistic promises. We focus on sustainable skin health and natural-looking enhancements.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Frosted ambient background glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Image in Frosted Container */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/50 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Misha's Crystal Skin Clinic Interior Yerawada Pune"
                  className="w-full h-[460px] object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
              </div>

              {/* Floating clinic frosted badge card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white/90 backdrop-blur-xl text-slate-900 p-5 rounded-2xl shadow-xl max-w-xs border border-white/90">
                <div className="text-xs uppercase tracking-wider text-teal-700 font-bold mb-1">
                  Yerawada • Pune
                </div>
                <div className="text-sm font-bold leading-snug text-blue-950">
                  Ganga Complex, 1st Floor
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Opposite Poona Business Bay
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="mb-4">
              <Logo size="md" />
            </div>

            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-white px-3 py-1 rounded-full shadow-xs mb-3 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Skin | Hair | Laser Clinic
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight mb-6">
              About Dr. Misha’s Crystal Skin
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Located in the vibrant medical and commercial hub of Yerawada, Pune, <strong>Dr. Misha’s Crystal Skin</strong> is dedicated to delivering professional, personalized skin, hair, and aesthetic care within a welcoming clinical setting.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              We believe that true aesthetic confidence begins with healthy, balanced skin and hair. Our clinic emphasizes detailed diagnostics, patient education, and advanced technology to design customized treatment protocols suited to individual lifestyles and skin sensitivities.
            </p>

            {/* 4 Pillars Grid with Frosted Glass */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs hover:shadow-md transition-all">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-blue-950">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/20 transition-all text-center flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => {
                  const text = encodeURIComponent("Hello Dr. Misha’s Crystal Skin Clinic, I would like to enquire about consultation and treatment options.");
                  window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
                }}
                className="px-5 py-3.5 rounded-xl bg-white/90 border border-teal-200 hover:bg-teal-50/50 text-teal-800 font-semibold text-xs transition-colors text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-teal-600" />
                <span>WhatsApp Us</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
