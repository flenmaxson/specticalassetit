import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

function Footer(){
  return(
    <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <div>
                <h4 className="text-lg font-bold">SPECTICAL {" "} ASSET IT</h4>
              <div className={`text-xs transition-colors text-gray-300`}>
                INNOVATIVE IT SOLUTIONS
              </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Professional IT support services available 24/7
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <span>support@specticalassetit.com</span>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-sm mb-4">COMMUNITY</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition">Jobs For Spectical Asset IT</Link></li>
              <li><Link href="#" className="hover:text-white transition">Help Centre</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Referrals</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition">Software Installation</Link></li>
              <li><Link href="#" className="hover:text-white transition">Tech Lessons</Link></li>
              <li><Link href="#" className="hover:text-white transition">IT Projects</Link></li>
              <li><Link href="#" className="hover:text-white transition">Hosting and SSL</Link></li>
              <li><Link href="#" className="hover:text-white transition">Mobile Devices</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/pages/terms-condition" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/pages/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/pages/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
              <li><Link href="/pages/cookie-policy" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright 2025 SPECTICAL ASSET IT. All Rights Reserved.
          </p>
          
          {/* Social Media */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
              { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
              { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;