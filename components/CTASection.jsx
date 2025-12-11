"use client";
/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

function CTASection(){
    const [isModalOpen, setIsModalOpen] = useState(false);
  return(
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <BookingModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/20 rounded-2xl rotate-12 animate-float"></div>
      <div className="absolute bottom-20 right-32 w-16 h-16 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-white/20 rounded-lg -rotate-12 animate-float animation-delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Spectical Asset IT</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Book a free<br />
              <span className="relative inline-block">
                consultation
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 250 5 298 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              with our team
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
              Get expert IT support tailored to your needs. Our team is ready to help you solve any technical challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
              onClick={() => setIsModalOpen(true)}
              className="group cursor-pointer bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 cursor-pointer rounded-xl font-semibold bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center gap-2">
                <span>Explore Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Calendar visual */}
              <div className="bg-white rounded-2xl p-6 shadow-xl mb-4">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Schedule Now</div>
                    <div className="text-sm text-gray-600">Pick your preferred time</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
                    📅
                  </div>
                </div>

                {/* Time slots */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'].map((time, idx) => (
                    <div 
                      key={idx}
                      className={`text-center py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                        idx === 1 
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">✓</div>
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">✓</div>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">✓</div>
                    <span>Instant confirmation</span>
                  </div>
                </div>
              </div>

              {/* Rating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">4.9/5.0</div>
                    <div className="text-xs text-gray-600">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl max-w-xs animate-float animation-delay-500">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 mb-1">"Amazing service!"</div>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default CTASection;