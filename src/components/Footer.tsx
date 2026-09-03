import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Calendar, 
  Star, 
  ShieldCheck, 
  ArrowUp,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950/95 backdrop-blur-xl text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-white/10 relative overflow-hidden">
      {/* Frosted ambient background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Clinic Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Premier Skin, Hair & Laser Clinic in Yerawada, Pune. Committed to evidence-based dermatology, tailored aesthetic protocols, and patient-first care.
            </p>

            {/* Google Rating Badge in Footer with Frosted Glass */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.9 / 5</span>
              <span className="text-[11px] text-slate-400">(133 Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-teal-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-teal-300 transition-colors">
                  About Clinic
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleNavClick(e, '#treatments')} className="hover:text-teal-300 transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#before-after" onClick={(e) => handleNavClick(e, '#before-after')} className="hover:text-teal-300 transition-colors">
                  Before & After
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')} className="hover:text-teal-300 transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-teal-300 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#treatments" onClick={(e) => handleNavClick(e, '#treatments')} className="hover:text-white transition-colors">
                  • Skin Treatments (Peelings, Pigmentation, Facials)
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleNavClick(e, '#treatments')} className="hover:text-white transition-colors">
                  • Hair Treatments (Transplants, Mesotherapy)
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleNavClick(e, '#treatments')} className="hover:text-white transition-colors">
                  • Laser Hair Removal & Laser Skin Therapy
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleNavClick(e, '#treatments')} className="hover:text-white transition-colors">
                  • Dermal Fillers & CoolSculpting Treatments
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleNavClick(e, '#treatments')} className="hover:text-white transition-colors">
                  • Minor Dermatologic Surgery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">
              Yerawada Clinic
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>
                  Ganga Complex, First Floor, Opp. Poona Business Bay, Yerawada, Pune 411006
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-teal-500/20 cursor-pointer"
                >
                  Book an Appointment
                </button>
                <a
                  href="https://wa.me/919309893465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp: +91 93098 93465</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & medical note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Misha’s Crystal Skin Clinic. All rights reserved.
            <div className="text-[11px] text-slate-500 mt-0.5">
              Individual results may vary. Consultations required for clinical recommendations.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors p-2 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
