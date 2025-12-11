import { Clock, Shield, Users, Zap, Monitor, Headphones } from "lucide-react";

function ServicesSection() {
  const features = [
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: '24/7 Remote And On-Site IT Support',
      bgColor: 'bg-purple-100',
      iconBg: 'bg-white'
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: 'Connect With Verified Spectical Asset IT In Minutes',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-white'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: 'We Interview And Verify Every Nerd To Ensure High Quality',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-white'
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: 'True On-Demand Services',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-white'
    },
    { 
      icon: <Monitor className="w-8 h-8" />, 
      title: 'Remote Monitoring / NOC / SOC',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-white'
    },
    { 
      icon: <Headphones className="w-8 h-8" />, 
      title: 'Outsourcing Dedicated IT Specialist Resources',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-white'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <div className="text-red-600 font-semibold text-lg mb-3">
            Our Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Amazing Features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} rounded-3xl p-8 flex flex-col justify-between items-center transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden`}
            >
              {/* Icon circle at top */}
              <div className={`${feature.iconBg} w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform -translate-y-2`}>
                <div className="text-gray-800">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 leading-tight text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;