"use client";
import { X, Rocket } from "lucide-react";
import { useState } from "react";

function ShortBookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    supportType: '',
    service: '',
    schedule: 'asap',
    selectedDate: '',
    selectedTime: '',
    query: ''
  });

  const services = [
    'Computer Support',
    'WiFi & Internet',
    'Printers',
    'Anti-Virus and Security',
    'Email Issues',
    'TV and other Gadgets',
    'Mobile Devices',
    'Server Configuration (Like AWS)',
    'Hosting and SSL',
    'IT Projects',
    'Tech Lessons',
    'Software Installation',
    'Other Support'
  ];

  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.supportType || !formData.service) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.schedule === 'later' && (!formData.selectedDate || !formData.selectedTime)) {
      alert('Please select date and time for your appointment');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Booking submitted successfully! We will contact you shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden animate-slideUp flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-4 overflow-y-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                How Can We <span className="text-red-500">Help?</span>
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Support Type
              </label>
              <select
                value={formData.supportType}
                onChange={(e) => handleChange('supportType', e.target.value)}
                className="w-full p-3 text-sm text-gray-700 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors bg-white shadow-sm"
              >
                <option value="">Select support type</option>
                <option value="remote">Remote Support</option>
                <option value="onsite">On-Site Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">
                Service Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className="w-full p-3 text-sm text-gray-700 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors bg-white shadow-sm"
              >
                <option value="">Select service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700">
                Schedule
              </label>
              <select
                value={formData.schedule}
                onChange={(e) => handleChange('schedule', e.target.value)}
                className="w-full p-3 text-sm text-gray-700 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors bg-white shadow-sm"
              >
                <option value="asap">As Soon as Possible</option>
                <option value="later">Schedule a Convenient Time</option>
              </select>
            </div>

            {formData.schedule === 'later' && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.selectedDate}
                    onChange={(e) => handleChange('selectedDate', e.target.value)}
                    className="w-full p-3 text-sm text-gray-700 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors bg-white shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700">
                    Time
                  </label>
                  <select
                    value={formData.selectedTime}
                    onChange={(e) => handleChange('selectedTime', e.target.value)}
                    className="w-full p-3 text-sm text-gray-700 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors bg-white shadow-sm"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                value={formData.query}
                onChange={(e) => handleChange('query', e.target.value)}
                rows="2"
                placeholder="E.g. I am unable to send emails from Outlook."
                className="w-full p-3 text-sm text-gray-700 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors resize-none bg-white shadow-sm"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full cursor-pointer px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Free Consultation
            </button>

            <p className="text-center text-xs text-gray-500">
              No credit card required • Response within 5 minutes
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ShortBookingModal;