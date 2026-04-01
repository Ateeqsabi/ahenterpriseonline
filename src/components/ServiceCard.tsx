import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          {IconComponent && <IconComponent className="text-blue-600" size={32} />}
        </div>
        <h3 className="text-xl font-semibold ml-4">{service.name}</h3>
      </div>

      <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>

      <Link
        to={`/apply/${service.id}`}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
      >
        Apply Now
      </Link>
    </div>
  );
}
