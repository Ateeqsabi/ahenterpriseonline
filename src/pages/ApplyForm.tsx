import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import { submitApplication } from '../lib/supabase';
import { CONTACT_INFO } from '../lib/constants';

export default function ApplyForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setError('Phone number must be 10 digits');
      return false;
    }
    if (!formData.pincode.trim()) {
      setError('Pincode is required');
      return false;
    }
    if (!/^\d{6}$/.test(formData.pincode.replace(/\D/g, ''))) {
      setError('Pincode must be 6 digits');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await submitApplication({
        name: formData.name,
        phone: formData.phone,
        service_id: service.id,
        pincode: formData.pincode,
      });

      navigate(`/confirmation?service=${service.id}&phone=${formData.phone}&name=${encodeURIComponent(formData.name)}&pincode=${formData.pincode}`, {
        replace: true,
      });
    } catch (err) {
      setError('Failed to submit application. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              {IconComponent && <IconComponent className="text-blue-600" size={32} />}
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
              <p className="text-gray-600 mt-1">{service.shortDescription}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                disabled={isLoading}
              />
              <p className="text-sm text-gray-500 mt-1">
                We'll contact you on this number and WhatsApp
              </p>
            </div>

            <div>
              <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter 6-digit pincode"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                disabled={isLoading}
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter your area pincode for faster processing
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isLoading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            By submitting, you agree to be contacted by our team via WhatsApp and phone.
          </p>
          <p className="text-sm text-gray-500 text-center mt-4">
            Our service center: {CONTACT_INFO.address}
          </p>
        </div>
      </div>
    </div>
  );
}
