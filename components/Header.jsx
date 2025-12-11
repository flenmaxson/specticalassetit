"use client";
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countryCode, setCountryCode] = useState('US');

  const countryFlags = {
    'US': 'https://flagcdn.com/w40/us.png',
    'GB': 'https://flagcdn.com/w40/gb.png',
    'AU': 'https://flagcdn.com/w40/au.png',
    'IN': 'https://flagcdn.com/w40/in.png'
  };

  const countryNames = {
    'US': 'USA',
    'GB': 'UK',
    'AU': 'Australia',
    'IN': 'India'
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Detect user's country based on IP geolocation
    const detectCountry = async () => {
      try {
        // Try using a free IP geolocation API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const detectedCountry = data.country_code;
        
        // Only set if it's one of our supported countries
        if (countryFlags[detectedCountry]) {
          setCountryCode(detectedCountry);
        }
      } catch (error) {
        // Fallback to timezone-based detection
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        if (timezone.includes('America/New_York') || timezone.includes('America/Chicago') || 
            timezone.includes('America/Los_Angeles') || timezone.includes('America/Denver')) {
          setCountryCode('US');
        } else if (timezone.includes('Europe/London')) {
          setCountryCode('GB');
        } else if (timezone.includes('Australia')) {
          setCountryCode('AU');
        } else if (timezone.includes('Asia/Kolkata') || timezone.includes('Asia/Calcutta')) {
          setCountryCode('IN');
        }
        // Default is already USA
      }
    };

    detectCountry();
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-[90%] mx-auto lg:px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <div>
              <div className="text-xl font-bold text-red-600 transition-colors">
                SPECTICAL ASSET IT
              </div>
              <div className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-700'
              }`}>
                INNOVATIVE IT SOLUTIONS
              </div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="font-semibold border-b-2 pb-1 transition-colors text-red-600 border-red-600 hover:text-red-700"
            >
              Home
            </Link>
            <Link 
              href="#business" 
              className="transition-colors text-gray-700 hover:text-red-600"
            >
              Business
            </Link>
            <Link 
              href="#services" 
              className="transition-colors text-gray-700 hover:text-red-600"
            >
              Service Provider
            </Link>
            <Link 
              href="#pricing" 
              className="transition-colors text-gray-700 hover:text-red-600"
            >
              Pricing
            </Link>
            <Link 
              href="#contact" 
              className="transition-colors text-gray-700 hover:text-red-600"
            >
              Contact
            </Link>
            
            {/* Country Flag Display */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 transition-colors ${
              isScrolled ? 'shadow-sm' : ''
            }`}>
              <img 
                src={countryFlags[countryCode]} 
                alt={countryNames[countryCode]}
                className="w-7 h-5 object-cover rounded shadow-sm"
              />
              <span className="font-semibold text-sm text-gray-700">{countryCode}</span>
            </div>
          </nav>

          <button 
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-gray-900'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden border-t transition-colors ${
          isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/90 backdrop-blur-sm'
        }`}>
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-red-600 font-semibold">Home</Link>
            <Link href="#business" className="block text-gray-700 hover:text-red-600">Business</Link>
            <Link href="#services" className="block text-gray-700 hover:text-red-600">Service Provider</Link>
            <Link href="#pricing" className="block text-gray-700 hover:text-red-600">Pricing</Link>
            <Link href="#contact" className="block text-gray-700 hover:text-red-600">Contact</Link>
            
            {/* Mobile Country Flag Display */}
            <div className="pt-3 border-t border-gray-200 flex items-center gap-3">
              <img 
                src={countryFlags[countryCode]} 
                alt={countryNames[countryCode]}
                className="w-8 h-6 object-cover rounded shadow-sm"
              />
              <span className="font-semibold text-gray-700">{countryNames[countryCode]}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;