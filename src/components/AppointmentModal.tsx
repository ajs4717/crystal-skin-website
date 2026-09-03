import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  Phone, 
  MapPin,
  ShieldCheck
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatment = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment || 'General Consultation',
    date: '',
    timeSlot: 'Morning (10 AM - 1 PM)',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dr. Misha’s Crystal Skin Clinic, I would like to book an appointment:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Treatment: ${formData.treatment}\n- Preferred Date: ${formData.date || 'Earliest available'}\n- Time Slot: ${formData.timeSlot}\n- Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white/90 backdrop-blur-2xl rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white relative max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100/80 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Confirmation State */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-teal-500 text-white mx-auto flex items-center justify-center mb-4 shadow-lg shadow-teal-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
              Confirmed Request
            </span>
            <h3 className="text-2xl font-bold text-blue-950 mb-2">
              Appointment Requested!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our clinical team at <strong>Dr. Misha’s Crystal Skin</strong> in Yerawada will contact you at <strong className="text-slate-900">{formData.phone}</strong> to confirm your slot for <strong className="text-slate-900">{formData.treatment}</strong>.
            </p>

            <div className="p-4 bg-white/80 backdrop-blur-xs rounded-2xl border border-slate-200/80 text-xs text-left mb-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Clinic:</span>
                <span className="font-semibold text-slate-800">Dr. Misha’s Crystal Skin, Yerawada</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Preferred Slot:</span>
                <span className="font-semibold text-teal-700">{formData.date || 'Earliest available'} ({formData.timeSlot})</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <div className="p-2 rounded-xl bg-teal-50 border border-teal-100 text-teal-700">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  Clinical Consultation
                </span>
                <h3 className="text-xl font-bold text-blue-950">
                  Book an Appointment
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Yerawada, Pune • Ganga Complex, Opp. Poona Business Bay
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Patil"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm outline-none bg-white/70 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm outline-none bg-white/70 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Treatment / Concern
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm outline-none bg-white/70 focus:bg-white text-slate-800"
                >
                  <option value="General Consultation">General Skin / Hair Consultation</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-xs outline-none bg-white/70 focus:bg-white text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-xs outline-none bg-white/70 focus:bg-white text-slate-800"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any particular concerns..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-xs outline-none bg-white/70 focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/20 transition-all cursor-pointer hover:scale-[1.01]"
                >
                  Confirm Appointment Request
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs border border-emerald-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Book via WhatsApp Instead</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
