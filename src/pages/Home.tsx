import { Phone, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { CONTACT_INFO, BUSINESS_INFO, WHY_CHOOSE_US } from '../lib/constants';

export default function Home() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Get Expert Help with Your Applications
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Fast • Simple • Hassle-Free Assistance for{' '}
            <span className="text-white font-semibold whitespace-nowrap">
              PAN, Aadhaar, Passport & More
            </span>
          </p>

          <a
            href="/services"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Apply Now
          </a>

          {/* HOW IT WORKS */}
          <div className="mt-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">How it works</h3>

            <div className="hidden md:flex items-center justify-between gap-3 text-sm">
              <div className="bg-green-500 text-white font-semibold px-4 py-3 rounded-lg">
                🖱️ Click Apply Now
              </div>

              <span className="text-white text-xl">→</span>

              <div className="bg-white bg-opacity-10 px-4 py-3 rounded-lg">
                📄 Submit Your Details
              </div>

              <span className="text-white text-xl">→</span>

              <div className="bg-white bg-opacity-10 px-4 py-3 rounded-lg">
                📞 We Contact You
              </div>

              <span className="text-white text-xl">→</span>

              <div className="bg-white bg-opacity-10 px-4 py-3 rounded-lg">
                🖥️ We Assist with Application
              </div>

              <span className="text-white text-xl">→</span>

              <div className="bg-white bg-opacity-10 px-4 py-3 rounded-lg">
                ✅ You Receive Updates
              </div>
            </div>

            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-center">
              <div className="bg-green-500 text-white font-semibold p-3 rounded-lg">
                🖱️ Click Apply Now
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                📄 Submit Your Details
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                📞 We Contact You
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                🖥️ We Assist with Application
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                ✅ You Receive Updates
              </div>
            </div>

            <p className="mt-4 text-sm text-blue-100">
              We assist you in applying through official government portals and guide you at every step.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of professional services designed to make your life easier
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">
              Have questions? We're here to help you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CALL */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-blue-100 hover:text-white transition-colors text-lg font-semibold">
                {CONTACT_INFO.phone}
              </a>
            </div>

            {/* VISIT */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>

              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>

              <p className="text-blue-100 mb-3">
                {CONTACT_INFO.address}
              </p>

              <a
                href="https://maps.google.com/?q=12+15th+Cross+Davis+Road+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                📍 Get Directions
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors mt-2"
              >
                Chat Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Why Choose AH Enterprise?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((point, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Important Disclaimer</h3>
              <p className="text-amber-800">
                {BUSINESS_INFO.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
