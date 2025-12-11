"use client";
import { Check, Shield, Star, Users } from "lucide-react";
import BookingModal from "./BookingModal";
import { useState } from "react";

function SupportSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      text: "8-step onboarding process which includes soft skills, security and privacy training.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      text: "Spectical Asset IT are organised using a rating algorithm to best match support requests.",
      icon: <Star className="w-5 h-5" />
    },
    {
      text: "Direct 24/7 access to a wide range of IT skills",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return(
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <BookingModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 animate-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/50 via-transparent to-orange-600/50"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with floating cards */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main card */}
              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/30">
                <div className="aspect-square bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner">
                  <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Background circle --> */}
  <ellipse cx="400" cy="550" rx="350" ry="40" fill="#ef4444" opacity="0.3"/>
  
  {/* <!-- Light background blob --> */}
  <ellipse cx="400" cy="300" rx="380" ry="320" fill="#fee2e2" opacity="0.5"/>
  
  {/* <!-- Phone/Device --> */}
  <rect x="280" y="120" width="240" height="400" rx="30" fill="#ea580c"/>
  <rect x="295" y="140" width="210" height="360" rx="15" fill="#f3f4f6"/>
  
  {/* <!-- Review Cards -->
  <!-- Card 1 --> */}
  <g>
    <rect x="310" y="160" width="170" height="80" rx="12" fill="#3b82f6"/>
    <rect x="320" y="170" width="100" height="8" rx="4" fill="white" opacity="0.8"/>
    <g transform="translate(320, 190)">
      <circle cx="8" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="22" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="36" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="50" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="64" cy="8" r="6" fill="#fbbf24"/>
    </g>
    <rect x="320" y="210" width="140" height="4" rx="2" fill="white" opacity="0.6"/>
    <rect x="320" y="220" width="120" height="4" rx="2" fill="white" opacity="0.6"/>
  </g>
  
  {/* <!-- Card 2 --> */}
  <g>
    <rect x="310" y="260" width="170" height="80" rx="12" fill="#3b82f6"/>
    <rect x="320" y="270" width="110" height="8" rx="4" fill="white" opacity="0.8"/>
    <g transform="translate(320, 290)">
      <circle cx="8" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="22" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="36" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="50" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="64" cy="8" r="6" fill="#d1d5db"/>
    </g>
    <rect x="320" y="310" width="140" height="4" rx="2" fill="white" opacity="0.6"/>
    <rect x="320" y="320" width="130" height="4" rx="2" fill="white" opacity="0.6"/>
  </g>
  
  {/* <!-- Card 3 --> */}
  <g>
    <rect x="310" y="360" width="170" height="80" rx="12" fill="#3b82f6"/>
    <rect x="320" y="370" width="90" height="8" rx="4" fill="white" opacity="0.8"/>
    <g transform="translate(320, 390)">
      <circle cx="8" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="22" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="36" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="50" cy="8" r="6" fill="#fbbf24"/>
      <circle cx="64" cy="8" r="6" fill="#fbbf24"/>
    </g>
    <rect x="320" y="410" width="140" height="4" rx="2" fill="white" opacity="0.6"/>
    <rect x="320" y="420" width="110" height="4" rx="2" fill="white" opacity="0.6"/>
  </g>
  
  {/* <!-- User Avatar 1 (Top Left) --> */}
  <g transform="translate(140, 120)">
    <circle cx="40" cy="40" r="38" fill="white" stroke="#ea580c" stroke-width="3"/>
    <circle cx="40" cy="35" r="12" fill="#ea580c"/>
    <path d="M 20 60 Q 40 50 60 60" fill="#ea580c"/>
  </g>
  
  {/* <!-- User Avatar 2 (Top Right) --> */}
  <g transform="translate(600, 200)">
    <circle cx="40" cy="40" r="38" fill="white" stroke="#ea580c" stroke-width="3"/>
    <circle cx="40" cy="35" r="12" fill="#ea580c"/>
    <path d="M 20 60 Q 40 50 60 60" fill="#ea580c"/>
  </g>
  
  {/* <!-- User Avatar 3 (Bottom Left) --> */}
  <g transform="translate(140, 420)">
    <circle cx="40" cy="40" r="38" fill="white" stroke="#ea580c" stroke-width="3"/>
    <circle cx="40" cy="35" r="12" fill="#ea580c"/>
    <path d="M 20 60 Q 40 50 60 60" fill="#ea580c"/>
  </g>
  
  {/* <!-- Heart/Like Icon 1 --> */}
  <g transform="translate(140, 270)">
    <rect width="60" height="60" rx="12" fill="#fb923c"/>
    <path d="M 30 42 L 24 36 Q 20 32 20 26 Q 20 20 26 20 Q 30 20 30 24 Q 30 20 34 20 Q 40 20 40 26 Q 40 32 36 36 Z" fill="white"/>
  </g>
  
  {/* <!-- Heart/Like Icon 2 --> */}
  <g transform="translate(600, 340)">
    <rect width="60" height="60" rx="12" fill="#fb923c"/>
    <path d="M 30 42 L 24 36 Q 20 32 20 26 Q 20 20 26 20 Q 30 20 30 24 Q 30 20 34 20 Q 40 20 40 26 Q 40 32 36 36 Z" fill="white"/>
  </g>
  
  {/* <!-- Info Card (Top Left) --> */}
  <g transform="translate(120, 70)">
    <rect width="80" height="50" rx="8" fill="white" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="20" cy="15" r="8" fill="#3b82f6"/>
    <rect x="32" y="10" width="38" height="3" rx="1.5" fill="#3b82f6"/>
    <rect x="32" y="17" width="30" height="3" rx="1.5" fill="#3b82f6"/>
    <rect x="10" y="28" width="60" height="2" rx="1" fill="#d1d5db"/>
    <rect x="10" y="35" width="50" height="2" rx="1" fill="#d1d5db"/>
  </g>
  
  {/* <!-- Info Card (Bottom Right) --> */}
  <g transform="translate(590, 480)">
    <rect width="80" height="50" rx="8" fill="white" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="20" cy="15" r="8" fill="#3b82f6"/>
    <rect x="32" y="10" width="38" height="3" rx="1.5" fill="#3b82f6"/>
    <rect x="32" y="17" width="30" height="3" rx="1.5" fill="#3b82f6"/>
    <rect x="10" y="28" width="60" height="2" rx="1" fill="#d1d5db"/>
    <rect x="10" y="35" width="50" height="2" rx="1" fill="#d1d5db"/>
  </g>
  
  {/* <!-- Chat Bubble (Top Right) --> */}
  <g transform="translate(700, 100)">
    <rect width="50" height="40" rx="8" fill="white" opacity="0.8"/>
    <rect x="10" y="12" width="30" height="4" rx="2" fill="#d1d5db"/>
    <rect x="10" y="20" width="25" height="4" rx="2" fill="#d1d5db"/>
  </g>
  
  {/* <!-- Decorative dots --> */}
  <circle cx="50" cy="100" r="8" fill="#fca5a5" opacity="0.6"/>
  <circle cx="680" cy="90" r="6" fill="#fca5a5" opacity="0.6"/>
  <circle cx="80" cy="350" r="10" fill="#fca5a5" opacity="0.6"/>
  <circle cx="720" cy="450" r="8" fill="#fca5a5" opacity="0.6"/>
  
  {/* <!-- Connection lines --> */}
  <path d="M 180 160 Q 250 140 280 200" stroke="#ea580c" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M 600 240 Q 540 240 500 220" stroke="#ea580c" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M 180 460 Q 250 420 310 440" stroke="#ea580c" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M 590 520 Q 540 500 500 480" stroke="#ea580c" stroke-width="3" fill="none" opacity="0.6"/>
</svg>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    ✓
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Verified</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    24/7
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Always</div>
                    <div className="text-xs text-gray-600">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Personal Assistant</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Verified, Approved <br />
              <span className="bg-white/20 px-4 py-1 rounded-lg inline-block mt-2">
                Spectical Asset IT
              </span>
            </h2>

            {/* Feature cards */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-lg group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white leading-relaxed">{feature.text}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Check className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
              onClick={() => setIsModalOpen(true)}
              className="group cursor-pointer bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>Explore Now</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
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
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default SupportSection;