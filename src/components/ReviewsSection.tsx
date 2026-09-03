import React, { useState } from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  ArrowUpRight, 
  ShieldCheck, 
  Quote,
  ChevronDown
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 4);

  const googleMapsReviewsUrl = `https://www.google.com/maps/search/?api=1&query=Dr+Misha+Crystal+Skin+Clinic+Yerawada+Pune`;

  return (
    <section id="reviews" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Frosted ambient background elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Google Review Stats */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Loved by Our Patients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Real feedback from individuals who trusted Dr. Misha’s Crystal Skin for their dermatological and aesthetic journey.
          </p>

          {/* Large Google Rating Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/90 backdrop-blur-md border border-white rounded-3xl p-6 sm:px-10 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-950 font-heading">
                4.9
              </div>
              <div className="text-left">
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-600 font-semibold mt-1">
                  Based on <strong>133 Google Reviews</strong>
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-slate-200" />

            <div className="text-xs text-slate-500 text-center sm:text-left">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Verified Google Business Profile</span>
              </div>
              <div className="text-slate-500 mt-0.5">Dr. Misha’s Crystal Skin • Yerawada, Pune</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.verified && (
                          <CheckCircle2 className="w-4 h-4 text-teal-600 inline" title="Verified Google Review" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {rev.date}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              </div>

              {/* Treatment tag footer */}
              {rev.treatment && (
                <div className="mt-5 pt-3.5 border-t border-slate-100/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-md">
                    {rev.treatment}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Google Review
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button: View Google Reviews */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-900/20 hover:scale-[1.02]"
          >
            <span>View Google Reviews</span>
            <ArrowUpRight className="w-4 h-4 text-teal-300" />
          </a>
        </div>

      </div>
    </section>
  );
};
