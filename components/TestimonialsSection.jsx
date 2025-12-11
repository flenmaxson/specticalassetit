"use client";
import { Star } from "lucide-react";
import { useState } from "react";

function TestnimonialsSection(){
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const testimonials = [
    { name: 'Austin', text: 'Multiple business emails that would not connect to the Outlook app were a problem for me. Spectical Asset IT was used by me, and they took care of it in under an hour for a fraction of the price. Highly advised.', rating: 5 },
    { name: 'Sharon Miller', text: 'The best assistance I have ever received, by far. They do really call homes and businesses. Even though they only have five stars, I would give my experience a ten if I could.', rating: 5 },
    { name: 'John Peter', text: 'We appreciate having the Spectical Asset IT available because they made the process of installing our new computer software at our Kindy very simple and provided excellent service.', rating: 5 },
    { name: 'Deepak Gupta', text: 'My appreciation for Spectical Asset IT service is overwhelming. My iPhone needed assistance, and the tech expert was able to fix it in a matter of minutes! Swiftly, affordably, and trustworthily.', rating: 5 },
    { name: 'Leila Domniuc', text: 'Gosh! What a useful service to have—it is so simple to use, and Spectical Asset IT swiftly resolved my technical issue, which was crucial to my business as I operate from home.', rating: 5 }
  ];
    return(
        <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-red-600 font-semibold text-lg mb-3">
            User Review
          </div>
            <h2 className="text-4xl font-bold text-gray-900">what our clients say</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-12 shadow-lg">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed italic">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setActiveTestimonial(index)} className={`w-3 h-3 rounded-full transition ${index === activeTestimonial ? 'bg-red-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default TestnimonialsSection;