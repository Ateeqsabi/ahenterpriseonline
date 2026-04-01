import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}`, '_blank');
  };

  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AH Enterprise</h3>
            <p className="text-gray-300">
              Your one-stop solution for all government and business services.
              We make your life easier with our professional assistance.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-blue-400 transition-colors font-semibold">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
            </ul>
            <button
              onClick={handleWhatsApp}
              className="mt-6 flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AH Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
