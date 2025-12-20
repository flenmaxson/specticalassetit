"use client";
/* eslint-disable react/no-unescaped-entities */
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqs = [
    { 
      question: 'How do I schedule an appointment?', 
      answer: 'When booking an IT expert you have the option to schedule an appointment for a time that suits you. Simply select the time and date that suits you on the booking form. Please allow for extra time after the job just in case the job takes longer than expected.',
      category: 'Booking'
    },
    { 
      question: 'Is Spectical Asset IT available in my area?', 
      answer: 'When booking an expert for on-site support, if there are no available experts in your area, you will be asked if you would like to expand the search area. We are onboarding experts in all areas, keep checking to see coverage in your area.',
      category: 'Coverage'
    },
    { 
      question: 'How do I identify the expert when they get to my location?', 
      answer: 'When you book an IT expert you will be able to see their profile picture. Please verify that when the expert arrives that they match their profile picture. You can ask them to confirm the job number to ensure they are the correct person.',
      category: 'Safety'
    },
    { 
      question: 'How do I rate an expert?', 
      answer: 'Once the job has been completed and you have signed off confirmation, you will be able to rate the expert. If you rate the expert at 5 stars, they will automatically be added to your Favourites list.',
      category: 'Reviews'
    },
    { 
      question: 'How do I get more jobs?', 
      answer: 'You can get access to more jobs by acquiring certifications in various fields. By getting more experience you can expand your skills and select more options in the IT Expert Info skills category. You can also expand your service radius.',
      category: 'For Experts'
    }
  ];

  return(
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <BookingModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="w-full md:w-[90%] mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full mb-4 border border-red-100">
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Can't find the answer you're looking for? Our support team is here to help you 24/7.
              </p>
              
              <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white cursor-pointer text-red-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Contact Support
              </button>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Email us</div>
                    <div className="text-sm font-semibold">support@specticalassetit.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Call us</div>
                    {/* <div className="text-sm font-semibold">1-800-NHIT-HELP</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  activeFaq === index 
                    ? 'border-red-500 shadow-red-100' 
                    : 'border-transparent hover:border-red-200'
                }`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)} 
                  className="w-full p-6 text-left flex justify-between items-start hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-2">
                      {faq.category}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeFaq === index 
                      ? 'bg-red-500 text-white' 
                      : 'bg-red-50 text-red-600 group-hover:bg-red-100'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      activeFaq === index ? 'transform rotate-180' : ''
                    }`} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-4 border-l-4 border-red-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
  )
}

export default FaqSection;