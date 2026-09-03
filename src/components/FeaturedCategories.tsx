import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface FeaturedCategoriesProps {
  onSelectCategory: (category: 'skin' | 'hair' | 'aesthetic') => void;
  onOpenBooking: (treatmentName?: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onSelectCategory,
  onOpenBooking,
}) => {
  const categories = [
    {
      id: 'skin' as const,
      title: 'Skin Rejuvenation',
      tagline: 'Glow • Clarity • Renewal',
      description:
        'Improve the appearance and feel of your skin with professionally selected treatments based on your individual concerns.',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      highlights: ['Deep Peelings & Blemishes', 'Pigmentation & Melasma', 'Medi-Facials & Skin Tightening'],
      gradient: 'from-teal-900/90 via-teal-950/60 to-transparent',
      accentColor: 'text-teal-400',
      btnText: 'Explore Skin Treatments',
    },
    {
      id: 'hair' as const,
      title: 'Hair & Scalp Care',
      tagline: 'Density • Strength • Restoration',
      description:
        'Explore personalized options for hair and scalp concerns with professional consultation.',
      image:
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      highlights: ['Follicular Hair Transplants', 'Mesotherapy for Hair Fall', 'Laser Hair Removal'],
      gradient: 'from-[#0a2540]/95 via-[#0e3b68]/60 to-transparent',
      accentColor: 'text-blue-300',
      btnText: 'Explore Hair Treatments',
    },
    {
      id: 'aesthetic' as const,
      title: 'Laser & Aesthetic Treatments',
      tagline: 'Precision • Sculpting • Definition',
      description:
        'Modern aesthetic treatments designed around your individual goals and skin needs.',
      image:
        'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dermal Fillers', 'CoolSculpting Treatments', 'Laser Skin Therapy'],
      gradient: 'from-slate-950/90 via-slate-900/60 to-transparent',
      accentColor: 'text-teal-300',
      btnText: 'Explore Aesthetic Treatments',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 relative overflow-hidden">
      {/* Frosted ambient glow */}
      <div className="absolute -top-10 right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-white/80 backdrop-blur-xs border border-white px-3.5 py-1.5 rounded-full shadow-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Clinical Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight">
              Featured Treatment Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Comprehensive dermatological and aesthetic care customized for your unique concerns.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-teal-600 transition-colors"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Major Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-3xl overflow-hidden bg-white/75 backdrop-blur-md border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={cat.image}
                  alt={`${cat.title} - Dr. Misha's Crystal Skin Pune`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`} />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur-md text-blue-950 border border-white/80 px-3 py-1 rounded-full shadow-xs">
                    {cat.tagline}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {cat.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const el = document.querySelector('#treatments');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs font-bold text-blue-900 hover:text-teal-600 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{cat.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(cat.title)}
                    className="p-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 transition-colors"
                    title={`Book consultation for ${cat.title}`}
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
