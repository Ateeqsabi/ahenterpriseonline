import { useEffect, useState } from 'react';
import { getApplications, Application } from '../lib/supabase';
import { services } from '../data/services';
import { format } from 'date-fns';

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const password = prompt("Enter admin password");
  if (password !== "admin123") {
    return <p style={{ padding: "20px" }}>Access Denied</p>;
  }

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        const data = await getApplications();
        setApplications(data);
      } catch (err) {
        setError('Failed to load applications');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const getServiceName = (serviceId: string) => {
    return services.find((s) => s.id === serviceId)?.name || serviceId || '-';
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd MMM yyyy, HH:mm');
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-blue-100 mt-2">View all customer applications</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">Loading applications...</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">No applications yet</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-4 text-left font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-4 text-left font-semibold text-gray-700">Phone</th>
                    <th className="px-4 py-4 text-left font-semibold text-gray-700">Pincode</th>
                    <th className="px-4 py-4 text-left font-semibold text-gray-700">Service</th>
                    <th className="px-4 py-4 text-left font-semibold text-gray-700">Details</th> {/* ✅ NEW */}
                    <th className="px-4 py-4 text-left font-semibold text-gray-700">Date/Time</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b hover:bg-gray-50 transition-colors">
                      
                      <td className="px-4 py-4 text-gray-800 font-medium">
                        {app.full_name}
                      </td>

                      <td className="px-4 py-4 text-gray-700">
                        <a
                          href={`tel:${app.phone}`}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {app.phone}
                        </a>
                      </td>

                      <td className="px-4 py-4 text-gray-700 font-medium">
                        {app.pincode || '-'}
                      </td>

                      <td className="px-4 py-4 text-gray-700">
                        {getServiceName(app.service_id)}
                      </td>

                      {/* ✅ DESCRIPTION COLUMN */}
                      <td className="px-4 py-4 text-gray-600 text-sm max-w-xs">
                        {app.description ? (
                          <div className="bg-gray-50 p-2 rounded break-words">
                            {app.description}
                          </div>
                        ) : (
                          '-'
                        )}
                      </td>

                      <td className="px-4 py-4 text-gray-600 text-sm">
                        {formatDate(app.created_at)}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 py-4 bg-gray-50 border-t">
              <p className="text-sm text-gray-600">
                Total applications:{" "}
                <span className="font-semibold">{applications.length}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
