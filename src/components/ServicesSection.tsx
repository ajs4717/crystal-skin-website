import React, { useState } from 'react';
import { SERVICES, CLINIC_INFO } from '../data/clinicData';
import { ServiceCategory, ServiceItem } from '../types';
import { 
  Sparkles, 
  SunMedium, 
  Layers, 
  Smile, 
  Zap, 
  ShieldCheck, 
  Hourglass, 
  UserCheck, 
  Activity, 
  Flame, 
  Droplet, 
  Disc, 
  Scissors,
  MessageSquare,
  Calendar,
  Clock,
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (category: ServiceCategory) => void;
  onOpenBooking: (serviceName?: string) => void;
  onSelectServiceDetail: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenBooking,
  onSelectServiceDetail,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapper helper
  const renderIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className={className} />;
      case 'SunMedium': return <SunMedium className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Smile': return <Smile className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Hourglass': return <Hourglass className={className} />;
      case 'UserCheck': return <UserCheck className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Droplet': return <Droplet className={className} />;
      case 'Disc': return <Disc className={className} />;
      case 'Scissors': return <Scissors className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const categories: { id: ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Treatments', count: SERVICES.length },
    { id: 'skin', label: 'Skin Treatments', count: SERVICES.filter(s => s.category === 'skin').length },
    { id: 'hair', label: 'Hair Treatments', count: SERVICES.filter(s => s.category === 'hair').length },
    { id: 'aesthetic', label: 'Aesthetic Treatments', count: SERVICES.filter(s => s.category === 'aesthetic').length },
    { id: 'dermatology', label: 'Dermatology', count: SERVICES.filter(s => s.category === 'dermatology').length },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.category === activeCategory);

  const handleWhatsAppEnquiry = (serviceName: string) => {
    const text = encodeURIComponent(`Hello Dr. Misha’s Crystal Skin, I would like to enquire about ${serviceName} treatment options.`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };  return (
    <section id="treatments" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Frosted ambient background elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white text-teal-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Treatments & Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Our Treatments
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Comprehensive solutions for your skin, hair and aesthetic concerns.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Category Tabs with Frosted Glass */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/20 scale-[1.02]'
                  : 'bg-white/70 backdrop-blur-xs border border-white/80 text-slate-600 hover:bg-white hover:text-slate-900 shadow-xs'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                activeCategory === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid with Frosted Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white/75 backdrop-blur-md rounded-2xl border border-white/80 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={`${service.name} - Dr. Misha's Crystal Skin Pune`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-md text-blue-950 px-2.5 py-1 rounded-md shadow-xs border border-white/80">
                    {service.category.toUpperCase()}
                  </span>
                </div>

                {service.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-600 text-white px-2.5 py-0.5 rounded-md shadow-xs">
                      Popular
                    </span>
                  </div>
                )}

                {/* Duration indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                  <Clock className="w-3.5 h-3.5 text-teal-300" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-teal-50 text-teal-700">
                      {renderIcon(service.iconName, 'w-4 h-4')}
                    </div>
                    <h3 className="text-lg font-bold text-blue-950 group-hover:text-teal-700 transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Ideal For Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.idealFor.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setSelectedService(service);
                      onSelectServiceDetail(service);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-blue-900 transition-colors py-2 px-1"
                  >
                    <span>Learn More</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleWhatsAppEnquiry(service.name)}
                      className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-100 transition-colors"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service.name)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold shadow-md shadow-blue-900/10 transition-all hover:scale-[1.02]"
                    >
                      <Calendar className="w-3.5 h-3.5 text-teal-300" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Unsure which treatment is right for your concerns?</h4>
              <p className="text-xs text-slate-600">
                Book a personalized consultation at Dr. Misha’s Crystal Skin to evaluate your needs and explore suitable options.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('Personalized Assessment')}
            className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-900/20 cursor-pointer hover:scale-[1.02]"
          >
            Book an Appointment
          </button>
        </div>

      </div>

      {/* Service Detail Modal with Frosted Glass */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white/80 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-teal-50 text-teal-700">
                {renderIcon(selectedService.iconName, 'w-6 h-6')}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                  {selectedService.category.toUpperCase()} TREATMENT
                </span>
                <h3 className="text-xl font-bold text-slate-900">{selectedService.name}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {selectedService.detailedDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                Recommended For:
              </h4>
              <div className="space-y-1.5">
                {selectedService.idealFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-slate-50/80 rounded-xl mb-6 flex items-center justify-between text-xs font-semibold text-slate-700 border border-slate-100">
              <span>Approx. Session Duration:</span>
              <span className="text-teal-700 font-bold">{selectedService.duration}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  handleWhatsAppEnquiry(selectedService.name);
                  setSelectedService(null);
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquire</span>
              </button>

              <button
                onClick={() => {
                  const sName = selectedService.name;
                  setSelectedService(null);
                  onOpenBooking(sName);
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-md shadow-blue-900/20"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
