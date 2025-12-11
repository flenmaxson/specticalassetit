"use client";
import { X, Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.supportType || !formData.service) {
      alert('Please fill in all required fields');
      return;
    }

    // If schedule is 'later', validate date and time
    if (formData.schedule === 'later' && (!formData.selectedDate || !formData.selectedTime)) {
      alert('Please select date and time for your appointment');
      return;
    }

    console.log('Form submitted:', formData);
    
    // Add your form submission logic here (API call, etc.)
    // For example: await submitBooking(formData);
    
    // Show success message
    alert('Booking submitted successfully! We will contact you shortly.');
    
    // Close modal after successful submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-500 to-orange-600 text-white p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Book a Tech Expert</h2>
              <p className="text-white/90 text-xs">Fill in the details below</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 cursor-pointer bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-4">
          <div className="space-y-4">
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                Personal Information
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    className="w-full p-2.5 text-sm rounded-lg border-2 text-gray-700 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className="w-full p-2.5 text-sm rounded-lg text-gray-700 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full p-2.5 text-sm rounded-lg text-gray-700 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-orange-600" />
                Service Details
              </h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Support Type *
                  </label>
                  <select
                    value={formData.supportType}
                    onChange={(e) => handleChange('supportType', e.target.value)}
                    className="w-full p-2.5 text-sm rounded-lg text-gray-700 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select support type</option>
                    <option value="remote">Remote Support</option>
                    <option value="onsite">On-Site Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className="w-full p-2.5 text-sm rounded-lg text-gray-700 border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Scheduling */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-600" />
                Schedule
              </h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    When do you need help? *
                  </label>
                  <select
                    value={formData.schedule}
                    onChange={(e) => handleChange('schedule', e.target.value)}
                    className="w-full p-2.5 text-sm rounded-lg text-gray-700 border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="asap">As Soon as Possible</option>
                    <option value="later">Schedule a Convenient Time</option>
                  </select>
                </div>

                {formData.schedule === 'later' && (
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Date *
                      </label>
                      <input
                        type="date"
                        value={formData.selectedDate}
                        onChange={(e) => handleChange('selectedDate', e.target.value)}
                        className="w-full p-2.5 text-sm rounded-lg text-gray-700 border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Time *
                      </label>
                      <select
                        value={formData.selectedTime}
                        onChange={(e) => handleChange('selectedTime', e.target.value)}
                        className="w-full p-2.5 text-sm rounded-lg text-gray-700 border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors bg-white"
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
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.query}
                    onChange={(e) => handleChange('query', e.target.value)}
                    rows="2"
                    placeholder="E.g. I am unable to send emails..."
                    className="w-full p-2.5 text-sm rounded-lg border-2 text-gray-700 border-gray-200 focus:border-green-500 focus:outline-none transition-colors resize-none bg-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={onClose}
                className="flex-1 px-4 cursor-pointer py-2.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 cursor-pointer px-4 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Now
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 pt-1">
              🔒 Secure • No credit card required
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

export default BookingModal;