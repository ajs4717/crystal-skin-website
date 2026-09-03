import React from 'react';
import { Star, UserCheck, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustCards = [
    {
      id: 'rating',
      title: '4.9★ Google Rating',
      subtitle: '133 Google Reviews',
      description: 'Consistently highly rated by patients across Pune for attentive consultations and visible clinical results.',
      icon: Star,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      badge: 'Patient Loved'
    },
    {
      id: 'personalized',
      title: 'Personalized Treatments',
      subtitle: 'Care Tailored To You',
      description: 'Care tailored to your skin and hair goals with individualized diagnostic assessments.',
      icon: UserCheck,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-200',
      badge: 'Individualized'
    },
    {
      id: 'advanced',
      title: 'Advanced Treatments',
      subtitle: 'Clinical Procedures',
      description: 'Modern aesthetic and dermatological procedures using US-FDA compliant technologies.',
      icon: Sparkles,
      iconBg: 'bg-blue-50 text-[#0c3b69] border-blue-200',
      badge: 'Modern Tech'
    },
    {
      id: 'location',
      title: 'Convenient Location',
      subtitle: 'Yerawada, Pune – 411006',
      description: 'Ganga Complex, 1st Floor, conveniently located right opposite Poona Business Bay.',
      icon: MapPin,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      badge: 'Easy Access'
    }
  ];

  return (
    <section className="py-16 bg-slate-50/50 border-y border-slate-200/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-white/70 backdrop-blur-sm border border-white px-3 py-1 rounded-full shadow-xs mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
              Clinical Standards & Patient Confidence
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight">
            Trusted Care. Personalized Results.
          </h2>
          <div className="w-12 h-1 bg-teal-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* 4 Frosted Glass Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-white/70 hover:bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/80 hover:border-teal-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${card.iconBg} transition-transform group-hover:scale-110 shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-white/80 border border-slate-100 px-2.5 py-1 rounded-full shadow-xs">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-950 mb-1 group-hover:text-teal-700 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-teal-600 mb-2">
                    {card.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-900 transition-colors">
                  <span>Dr. Misha’s Crystal Skin</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-teal-600" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
