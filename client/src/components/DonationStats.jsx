import { useState, useEffect } from 'react';
import config from '../config/config';

const DonationStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${config.API_BASE_URL}${config.API_ENDPOINTS.GET_STATS}`);
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
      } else {
        setError('Failed to load statistics');
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError('Failed to load statistics');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Impact
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {stats?.totalDonations || 0}
          </div>
          <div className="text-gray-600">Total Donations</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            ₹{stats?.totalAmount?.toLocaleString() || 0}
          </div>
          <div className="text-gray-600">Total Amount Raised</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            {stats?.totalDonations > 0 ? Math.round(stats.totalAmount / stats.totalDonations) : 0}
          </div>
          <div className="text-gray-600">Average Donation</div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Every donation makes a difference. Thank you for your support!
        </p>
      </div>
    </div>
  );
};

export default DonationStats; 