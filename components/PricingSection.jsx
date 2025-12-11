"use client";
import { Check, Info } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pricingPlans = [
    {
      name: "Essential Tech Care",
      price: "$299.00",
      popular: false,
      gradient: "from-cyan-500 to-blue-600",
      features: [
        { text: "Primary Issue", info: true },
        { text: "1 Year Technical Support Services", info: true },
        { text: "Software & Drivers Installation", info: true },
        { text: "Antivirus", info: true },
        { text: "Clean Up & Tune Up", info: true },
        { text: "Ad-Blocker", info: true },
        { text: "Browser Security", info: true }
      ]
    },
    {
      name: "Essential Tech Care",
      price: "$399.00",
      popular: true,
      gradient: "from-cyan-500 to-blue-600",
      features: [
        { text: "Primary Issue Fixcation", info: true },
        { text: "2 Years Technical Support Services", info: true },
        { text: "Software & Drivers Installation", info: true },
        { text: "Antivirus", info: true },
        { text: "Clean Up & Tune Up", info: true },
        { text: "Ad-Blocker", info: true },
        { text: "Browser Security", info: true }
      ]
    },
    {
      name: "Ultimate Tech Care",
      price: "$499.00",
      popular: false,
      gradient: "from-cyan-500 to-blue-600",
      features: [
        { text: "Primary Issue Fixcation", info: true },
        { text: "3 Years Free Technical Support Services", info: true },
        { text: "Software & Drivers Installation", info: true },
        { text: "Antivirus", info: true },
        { text: "Clean Up & Tune Up", info: true },
        { text: "Ad-Blocker", info: true },
        { text: "Browser Security", info: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <BookingModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-red-600 font-semibold text-lg mb-3">
            Spectical Asset IT Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find a plan that suits your
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular ? 'ring-4 ring-orange-400 ring-opacity-50' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  ✦ Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r from-red-500 to-orange-600 p-8 text-white`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  {plan.name}
                  {plan.popular && <span className="text-orange-400 text-sm">+</span>}
                </h3>
                
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
                <div className="inline-block border-b-4 border-white w-20 rounded-full"></div>
              </div>

              {/* Features */}
              <div className="bg-white p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm flex-1">{feature.text}</span>
                      {feature.info && (
                        <Info className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </li>
                  ))}
                </ul>

                <button 
                onClick={() => setIsModalOpen(true)}
                className={`w-full cursor-pointer py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-red-700' 
                    : 'bg-red-500 hover:bg-red-600'
                }`}>
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Not sure which plan is right for you? <a href="#contact" className="text-red-600 font-semibold hover:underline">Contact us</a> for a personalized recommendation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;