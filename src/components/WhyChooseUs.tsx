import React from 'react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import { 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Frosted background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white text-teal-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Patients Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Why Choose Dr. Misha’s Crystal Skin
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Dedicated to clinical integrity, personalized care, and empowering your natural confidence.
          </p>
        </div>

        {/* 4 Frosted Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white/70 backdrop-blur-md rounded-3xl p-7 border border-white/80 hover:border-teal-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100/80 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300 shadow-xs">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 group-hover:text-teal-600 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-blue-950 mb-2.5 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center gap-2 text-xs font-semibold text-teal-700">
                <Check className="w-4 h-4 text-teal-600" />
                <span>Clinical Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer hover:scale-[1.02]"
          >
            <span>Book Your Consultation Today</span>
            <ArrowRight className="w-4 h-4 text-teal-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
