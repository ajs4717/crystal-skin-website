import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  Calendar, 
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleNext = () => {
    setActiveCaseIndex((prev) => (prev + 1) % BEFORE_AFTER_CASES.length);
    setSliderPos(50);
  };

  const handlePrev = () => {
    setActiveCaseIndex((prev) => (prev - 1 + BEFORE_AFTER_CASES.length) % BEFORE_AFTER_CASES.length);
    setSliderPos(50);
  };

  const handlePointerMove = useCallback(
    (clientX: number) => {
      if (!sliderContainerRef.current) return;
      const rect = sliderContainerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handlePointerMove(e.clientX);
    }
  };

  // Natural case imagery mappings
  const getCaseImages = (caseId: string) => {
    switch (caseId) {
      case 'case-hand-pigmentation':
        return {
          before: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
          after: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
          beforeFilter: '',
          afterFilter: ''
        };
      case 'case-hair-density':
        return {
          before: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
          after: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80',
          beforeFilter: '',
          afterFilter: ''
        };
      case 'case-facial-clarity':
      default:
        return {
          before: 'https://images.unsplash.com/photo-1512290903061-68b449195cf4?auto=format&fit=crop&w=1000&q=80',
          after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
          beforeFilter: '',
          afterFilter: ''
        };
    }
  };

  const images = getCaseImages(currentCase.id);

  return (
    <section id="before-after" className="py-20 bg-[#071727] text-white relative overflow-hidden">
      {/* Background aesthetic frosted glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Clinical Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Before & After
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Real treatment progressions and clinical milestones documented at Dr. Misha’s Crystal Skin Clinic, Yerawada.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-lg shadow-teal-500/25 scale-105'
                  : 'bg-white/5 backdrop-blur-sm text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Comparison Showcase Card with Frosted Dark Glass */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Image Container */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-teal-300 uppercase tracking-wider">{currentCase.treatmentName}</span>
                  <span className="text-slate-500">•</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] border border-white/10 font-medium">{currentCase.sessions}</span>
                </div>
                
                {/* View toggle */}
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setViewMode('slider')}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                      viewMode === 'slider' ? 'bg-teal-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Slider
                  </button>
                  <button
                    onClick={() => setViewMode('side-by-side')}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                      viewMode === 'side-by-side' ? 'bg-teal-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Side by Side
                  </button>
                </div>
              </div>

              {/* Slider View Mode */}
              {viewMode === 'slider' ? (
                <div
                  ref={sliderContainerRef}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  className="relative h-[340px] sm:h-[420px] w-full rounded-2xl overflow-hidden select-none border border-white/20 shadow-2xl group cursor-ew-resize bg-slate-950"
                >
                  {/* AFTER Image (Full Canvas) */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={images.after}
                      alt={`After ${currentCase.treatmentName}`}
                      className={`w-full h-full object-cover object-center ${images.afterFilter}`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* After Tag */}
                    <div className="absolute top-4 right-4 bg-teal-500 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg border border-teal-300/50 z-10 tracking-wider">
                      AFTER
                    </div>
                  </div>

                  {/* BEFORE Image (Exact Registration using clipPath) */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <img
                      src={images.before}
                      alt={`Before ${currentCase.treatmentName}`}
                      className={`w-full h-full object-cover object-center ${images.beforeFilter}`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Before Tag */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg border border-white/20 z-10 tracking-wider">
                      BEFORE
                    </div>
                  </div>

                  {/* Divider Line & Interactive Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.8)] pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-teal-800 flex items-center justify-center shadow-2xl border-2 border-teal-400 group-hover:scale-110 transition-transform">
                      <SlidersHorizontal className="w-4 h-4 text-teal-700" />
                    </div>
                  </div>

                  {/* Native Touch & Mouse Range Overlay */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                    aria-label="Before and after slider position"
                  />

                  {/* Instructions badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-slate-300 text-[11px] font-medium px-4 py-1.5 rounded-full pointer-events-none z-10 border border-white/15 shadow-md whitespace-nowrap">
                    Drag slider horizontally to compare
                  </div>
                </div>
              ) : (
                /* Side-by-side mode */
                <div className="grid grid-cols-2 gap-3 h-[340px] sm:h-[420px]">
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950">
                    <img
                      src={images.before}
                      alt={`Before ${currentCase.treatmentName}`}
                      className={`w-full h-full object-cover object-center ${images.beforeFilter}`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-black px-2.5 py-1 rounded-md border border-white/15 shadow-md">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-teal-500/50 bg-slate-950">
                    <img
                      src={images.after}
                      alt={`After ${currentCase.treatmentName}`}
                      className={`w-full h-full object-cover object-center ${images.afterFilter}`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80';
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-teal-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md shadow-md">
                      AFTER
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation controls */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors border border-white/10 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Case</span>
                </button>

                <div className="text-xs text-slate-400 font-semibold tracking-wide">
                  Case {activeCaseIndex + 1} of {BEFORE_AFTER_CASES.length}
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors border border-white/10 cursor-pointer"
                >
                  <span>Next Case</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Case Details & Consultation CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1 block">
                  Patient Case Study
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {currentCase.title}
                </h3>

                <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="text-slate-400 font-semibold mb-1 text-xs uppercase tracking-wider">Primary Concern:</div>
                    <div className="text-slate-200">{currentCase.concern}</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="text-teal-400 font-semibold mb-1 text-xs uppercase tracking-wider">Clinical Observation:</div>
                    <div className="text-slate-200 leading-relaxed">{currentCase.afterDesc}</div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Protocol Completed: {currentCase.sessions}</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenBooking(currentCase.treatmentName)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-teal-500/25 transition-all mb-4 cursor-pointer hover:scale-[1.01]"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Important Medical Disclaimer */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-200/90 leading-relaxed font-medium">
                    Individual results may vary. Treatment suitability and expected outcomes should be discussed during a professional consultation.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
