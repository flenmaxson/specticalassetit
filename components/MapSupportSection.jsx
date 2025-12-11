"use client";
import { Check } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

function MapSupportSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    "8-step onboarding process which includes soft skills, security and privacy training.",
    "Spectical Asset IT are organised using a rating algorithm to best match support requests.",
    "Direct 24/7 access to a wide range of IT skills"
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative circles */}
      <BookingModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <div className="absolute top-10 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-40 right-40 w-24 h-24 bg-red-300 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="w-full md:w-[90%] mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <span className="text-orange-500 font-bold text-sm tracking-wide uppercase">
                Personal Assistant
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Verified, Approved<br />
              <span className="text-gray-800">Spectical Asset IT</span>
            </h2>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed pt-1.5">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r cursor-pointer from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Explore Now
            </button>
          </div>

          {/* Right Map Section */}
          <div className="relative">
            {/* Map Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0506281772!2d-74.30917063299817!3d40.6971933466018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1765427716906!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSupportSection;