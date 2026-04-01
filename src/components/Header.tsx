import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}`, '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">AH Enterprise</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-lg font-medium transition-colors ${
                isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Services
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone size={20} />
              <span className="hidden lg:inline font-medium">{CONTACT_INFO.phone}</span>
            </a>
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <MessageCircle size={20} />
              <span className="hidden lg:inline">WhatsApp</span>
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className={`block py-2 text-lg font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block py-2 text-lg font-medium ${
                isActive('/services') ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="block py-2 text-lg font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Call: {CONTACT_INFO.phone}
            </a>
            <button
              onClick={() => {
                handleWhatsApp();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-start space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium mt-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
