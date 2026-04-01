import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { services } from '../data/services';
import { CONTACT_INFO } from '../lib/constants';

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const phone = searchParams.get('phone');
  const name = searchParams.get('name');
  const pincode = searchParams.get('pincode');

  const service = services.find((s) => s.id === serviceId);

  const handleWhatsApp = () => {
    const message = `Hi, I want to apply for ${service?.name || 'your service'}. My name is ${name}. My pincode is ${pincode}.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="text-green-600" size={64} />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">Application Submitted!</h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Thank you for applying for <span className="font-semibold text-blue-600">{service?.name}</span>
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Phone:</span> {phone}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Application ID:</span> #{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <p className="text-lg text-gray-800">
              Thank you! Our team will contact you shortly on WhatsApp to complete your application.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              <MessageCircle size={24} className="mr-3" />
              Contact Us on WhatsApp
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              <Phone size={24} className="mr-3" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">What Happens Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold">
                  1
                </div>
                <p className="ml-4 text-gray-700">We'll contact you within 24 hours via WhatsApp or phone</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold">
                  2
                </div>
                <p className="ml-4 text-gray-700">We'll guide you through the document requirements</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold">
                  3
                </div>
                <p className="ml-4 text-gray-700">Our expert will assist you with the complete process</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold">
                  4
                </div>
                <p className="ml-4 text-gray-700">You'll receive updates on your application status</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/services"
              className="block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              Explore More Services
            </Link>

            <Link
              to="/"
              className="block text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
