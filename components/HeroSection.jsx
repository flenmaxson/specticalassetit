"use client";
import { Rocket, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

function HeroSection() {
  const [supportType, setSupportType] = useState('');
  const [service, setService] = useState('');
  const [schedule, setSchedule] = useState('asap');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

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

  const certifications = [
    { name: 'IBM', subtitle: 'Certified', color: 'blue' },
    { name: 'MS 365', subtitle: 'Expert', color: 'blue' },
    { name: 'CompTIA', subtitle: 'Network+', color: 'red' },
    { name: 'Microsoft', subtitle: 'Certified', color: 'blue' }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden pt-20 pb-10">
      {/* Decorative elements */}
      <BookingModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="w-full md:w-[90%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6 w-full lg:w-[65%]">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-orange-100">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-red-600" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">24/7 Expert Support Available</span>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                  Local IT Support,
                </span>
                <br className="hidden sm:block" />
                <span className="text-gray-900"> On-Demand</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Connect with verified IT professionals instantly. Get remote support 24/7 or schedule on-site visits at your convenience.
              </p>
            </div>

            {/* Features */}
            {/* <div className="space-y-2 sm:space-y-3">
              {['Instant remote assistance', 'Certified professionals', 'Flexible scheduling'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div> */}

            {/* Certifications */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-2 sm:pt-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group relative">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-xl border border-gray-100">
                    <div className="text-center">
                      <div className={`font-bold text-[10px] sm:text-xs ${cert.color === 'blue' ? 'text-blue-600' : 'text-red-600'}`}>
                        {cert.name}
                      </div>
                      <div className="text-[9px] sm:text-xs text-gray-500 mt-0.5">{cert.subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
            onClick={() => setIsModalOpen(true)}
            className="group cursor-pointer relative inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Book A Tech Expert</span>
              <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-24 self-start">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-orange-100">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                    How Can We <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">Help?</span>
                  </h2>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Support Type
                  </label>
                  <select 
                    value={supportType} 
                    onChange={(e) => setSupportType(e.target.value)} 
                    className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-full shadow-md border border-gray-200 focus:border-red-600 focus:outline-none transition-colors bg-white text-gray-700"
                  >
                    <option value="">Select support type</option>
                    <option value="remote">Remote Support</option>
                    <option value="onsite">On-Site Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select 
                    value={service} 
                    onChange={(e) => setService(e.target.value)} 
                    className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-full shadow-md border border-gray-200 focus:border-red-600 focus:outline-none transition-colors bg-white text-gray-700"
                  >
                    <option value="">Select service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Schedule
                  </label>
                  <select 
                    value={schedule} 
                    onChange={(e) => setSchedule(e.target.value)} 
                    className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-full shadow-md border border-gray-200 focus:border-red-600 focus:outline-none transition-colors bg-white text-gray-700 mb-2"
                  >
                    <option value="asap">As Soon as Possible</option>
                    <option value="later">Schedule a Convenient Time</option>
                  </select>

                  {schedule === 'later' && (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 animate-in slide-in-from-top">
                      <input 
                        type="date" 
                        value={selectedDate} 
                        onChange={(e) => setSelectedDate(e.target.value)} 
                        className="p-2.5 sm:p-3 text-sm sm:text-base rounded-full shadow-md border border-gray-200 focus:border-red-600 focus:outline-none transition-colors bg-white text-gray-700" 
                      />
                      <select 
                        value={selectedTime} 
                        onChange={(e) => setSelectedTime(e.target.value)} 
                        className="p-2.5 sm:p-3 text-sm sm:text-base rounded-full shadow-md border border-gray-200 focus:border-red-600 focus:outline-none transition-colors bg-white text-gray-700"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea 
                    className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded-2xl shadow-md border border-gray-200 focus:border-red-500 focus:outline-none transition-colors resize-none bg-white text-gray-700" 
                    rows="2" 
                    placeholder="E.g. I am unable to send emails from Outlook."
                  ></textarea>
                </div>

                <button className="w-full cursor-pointer bg-gradient-to-r from-red-500 to-orange-600 text-white py-2.5 sm:py-3 rounded-full shadow-md font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  Book a Free Consultation
                </button>

                <p className="text-center text-xs sm:text-sm text-gray-500">
                  No credit card required • Response within 5 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;