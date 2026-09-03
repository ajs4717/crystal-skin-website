import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Star,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Simplified Top Bar */}
      <div className="bg-[#0a2540] text-slate-200 text-xs py-1.5 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-teal-400 font-medium text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Yerawada, Pune • Opp. Poona Business Bay</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-amber-400/10 px-2 py-0.5 rounded text-amber-300 text-[11px] font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.9★ (133 Reviews)</span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300 text-[11px]">
              <Clock className="w-3 h-3 text-teal-400" />
              <span>Mon–Sat: 10 AM – 8 PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation with Frosted Glass */}
      <nav 
        className={`w-full transition-all duration-300 z-50 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
            : 'bg-white/85 backdrop-blur-md py-3.5 border-b border-slate-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group cursor-pointer"
            id="nav-brand-logo"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-blue-900 hover:font-semibold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919309893465"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-teal-700 bg-white hover:bg-teal-50/50 border border-teal-200 rounded-full shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
              title="Chat with clinic on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="nav-book-appointment-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 rounded-full shadow-md shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu & Quick CTA */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-full shadow-sm cursor-pointer"
            >
              Book Appt
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-medium text-slate-700 hover:text-teal-700 py-2 border-b border-slate-100"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-900 text-white font-semibold text-sm shadow-md shadow-blue-900/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Book an Appointment</span>
                </button>

                <a
                  href="https://wa.me/919309893465"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm hover:bg-emerald-700 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
