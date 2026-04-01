import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Phone, MessageCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import { CONTACT_INFO, OFFICE_HOURS } from '../lib/constants';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${service.name} service. Please provide more information.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              {IconComponent && <IconComponent size={48} />}
            </div>
            <div className="ml-6">
              <h1 className="text-4xl sm:text-5xl font-bold">{service.name}</h1>
              <p className="text-xl text-blue-100 mt-2">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Service</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{service.fullDescription}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="mr-3 text-green-600" size={28} />
                Features & Benefits
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="mr-3 text-blue-600" size={28} />
                Required Documents
              </h2>
              <ul className="space-y-3">
                {service.documents.map((document, index) => (
                  <li key={index} className="flex items-start">
                    <FileText className="mr-3 text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{document}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Started</h3>
              <p className="text-gray-600 mb-6">
                Ready to apply for this service? Contact us now and our team will assist you with the entire process.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                >
                  <Phone size={20} className="mr-2" />
                  {CONTACT_INFO.phone}
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp Us
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Office Hours</h4>
                <p className="text-gray-600 text-sm">{OFFICE_HOURS.weekendStart}</p>
                <p className="text-gray-600 text-sm">{OFFICE_HOURS.weekdays}</p>
                <p className="text-gray-600 text-sm mt-2">{OFFICE_HOURS.weekend}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Location</h4>
                <p className="text-gray-600 text-sm">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
