import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Navigation,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

interface ContactSectionProps {
  preselectedTreatment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedTreatment = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: preselectedTreatment || 'General Skin/Hair Consultation',
    preferredDate: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dr. Misha’s Crystal Skin Clinic,\n\nI would like to request an appointment:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Treatment: ${formData.treatment}\n- Preferred Date: ${formData.preferredDate || 'Earliest Available'}\n- Message: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const openGoogleDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=Ganga+Complex+opposite+poona+business+bay+Yerawada+Pune+411006`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Frosted ambient background elements */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white text-teal-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Clinic Location & Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Visit Our Yerawada Clinic
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Conveniently located in Ganga Complex, opposite Poona Business Bay. Book an appointment or consult our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clinic Contact Details & Map (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Address Card with Frosted Glass */}
            <div className="bg-white/75 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-950">{CLINIC_INFO.name}</h3>
                  <div className="text-xs font-semibold text-teal-700">{CLINIC_INFO.tagline}</div>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">{CLINIC_INFO.fullAddress.line1}</strong>
                    <span>{CLINIC_INFO.fullAddress.line2}</span><br />
                    <span>{CLINIC_INFO.fullAddress.locality}, {CLINIC_INFO.fullAddress.city}, {CLINIC_INFO.fullAddress.state} – <strong className="text-slate-800">{CLINIC_INFO.fullAddress.pincode}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100/80">
                  <Clock className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">{CLINIC_INFO.openingHours.days}:</span>{' '}
                    <span>{CLINIC_INFO.openingHours.hours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100/80 grid grid-cols-2 gap-3">
                <button
                  onClick={openGoogleDirections}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/80 backdrop-blur-xs border border-white hover:bg-white text-slate-800 text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-600" />
                  <span>Get Directions</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition-colors border border-teal-100"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map with Frosted Container */}
            <div className="bg-white/75 backdrop-blur-md rounded-3xl overflow-hidden border border-white/80 shadow-sm h-72 sm:h-80 relative">
              <iframe
                title="Dr. Misha's Crystal Skin Clinic Location in Yerawada Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.355152864195!2d73.8837774!3d18.5579979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c129e9d6d5ef%3A0x6b8f72a492523996!2sPoona%20Business%20Bay!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Map Floating Pin Overlay */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/90 text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span>Opp. Poona Business Bay, Yerawada</span>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Request Form with Frosted Glass (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xl">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1 block">
                  Online Consultation Request
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the details below to schedule your personalized consultation.
                </p>
              </div>

              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="p-6 rounded-2xl bg-teal-50/80 backdrop-blur-md border border-teal-200 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-teal-600 text-white mx-auto flex items-center justify-center mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Appointment Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our clinical team at Dr. Misha’s Crystal Skin will reach out to you shortly on <strong className="text-slate-900">{formData.phone}</strong> to confirm your slot.
                  </p>

                  <div className="p-3 bg-white/90 backdrop-blur-xs rounded-xl border border-teal-100 text-xs text-left mb-6 space-y-1">
                    <div><span className="text-slate-500">Selected Treatment:</span> <strong className="text-slate-800">{formData.treatment}</strong></div>
                    <div><span className="text-slate-500">Preferred Date:</span> <strong className="text-slate-800">{formData.preferredDate || 'Earliest available'}</strong></div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          treatment: 'General Skin/Hair Consultation',
                          preferredDate: '',
                          message: '',
                        });
                      }}
                      className="py-3 px-4 rounded-xl bg-white/80 backdrop-blur-xs border border-white hover:bg-white text-slate-700 font-semibold text-xs transition-colors shadow-xs"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-none transition-all bg-white/60 backdrop-blur-xs focus:bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-none transition-all bg-white/60 backdrop-blur-xs focus:bg-white"
                    />
                  </div>

                  {/* Treatment Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Treatment Interested In
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-none transition-all bg-white/60 backdrop-blur-xs focus:bg-white text-slate-800"
                    >
                      <option value="General Skin/Hair Consultation">General Skin / Hair Consultation</option>
                      <optgroup label="Skin Treatments">
                        <option value="Deep Peelings">Deep Peelings</option>
                        <option value="Pigmentation Solutions">Pigmentation Solutions</option>
                        <option value="Microdermabrasion">Microdermabrasion</option>
                        <option value="Facials">Clinical Facials</option>
                        <option value="Laser Skin Therapy">Laser Skin Therapy</option>
                        <option value="Skin Tightening">Skin Tightening</option>
                        <option value="Anti-Aging Solutions">Anti-Aging Solutions</option>
                      </optgroup>
                      <optgroup label="Hair Treatments">
                        <option value="Hair Transplants">Hair Transplants</option>
                        <option value="Mesotherapy">Mesotherapy for Hair</option>
                        <option value="Laser Hair Removal">Laser Hair Removal</option>
                      </optgroup>
                      <optgroup label="Aesthetic Treatments">
                        <option value="Dermal Fillers">Dermal Fillers</option>
                        <option value="CoolSculpting Treatments">CoolSculpting Treatments</option>
                      </optgroup>
                      <optgroup label="Dermatology">
                        <option value="Dermatologic Surgery">Dermatologic Surgery</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-none transition-all bg-white/60 backdrop-blur-xs focus:bg-white text-slate-800"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Specific Concerns or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your skin/hair goals or concerns..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-sm outline-none transition-all bg-white/60 backdrop-blur-xs focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-request-appointment-btn"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-teal-300" />
                        <span>Request Appointment</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Your information is strictly private and kept medical confidential.</span>
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
