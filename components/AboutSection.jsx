"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Award, Clock, Users, Zap } from "lucide-react";
import BookingModal from "./BookingModal";

function AboutSection() {
  const stats = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "24/7",
      label: "Support Available",
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "05+",
      label: "Years Experience",
    },
    { 
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, 
      value: "99%", 
      label: "Success Rate" 
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-red-50 via-white to-indigo-50 relative overflow-hidden" id="business">
      {/* Decorative elements */}
      <BookingModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="text-red-600 font-semibold text-base sm:text-lg mb-2 sm:mb-3">
            About Spectical Asset IT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            We Are Fully Dedicated <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              To Support
            </span>
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Left: Image Card */}
          <div className="relative group min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl sm:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 transform group-hover:-translate-y-2 transition-all duration-500 flex flex-col">
              <div className="flex-1 w-full bg-[#f4f7fa] rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-4 animate-bounce-slow">
                  <img 
                    src="/aboutimg.png" 
                    alt="About Spectical Asset IT" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-red-500 to-orange-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg font-bold text-xs sm:text-base">
                ⭐ Trusted Service
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Spectical Asset IT is a professional IT services company that offers technical support for various IT related issues like computer, printers, Antivirus e.t.c. The fact that we provide both instant remote support and on-site support gives clients flexibility in addressing their IT issues. The 24/7 availability of your experts ensures that customers can receive assistance whenever they need it, which is a valuable feature in the IT support industry.
                Highlighting the expertise and skills of our tech experts, along with a commitment to resolving issues promptly, adds credibility to our services. The 100% fixation guarantee is a strong assurance for clients, emphasizing the confidence in our team's ability to address and resolve IT-related issues effectively.
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer relative bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Connect Now</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default AboutSection;