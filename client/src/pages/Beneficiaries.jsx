import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/beneficiaries`)
      .then(res => res.json())
      .then(data => setBeneficiaries(data))
      .catch(err => console.error("Failed to load beneficiaries:", err));
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-yellow-800 mb-10">
        Meet the Sitaare
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {beneficiaries.length > 0 ? (
          beneficiaries.map((girl, index) => (
            <ProfileCard key={index} {...girl} />
          ))
        ) : (
          <p className="text-center w-full text-gray-600">Loading profiles...</p>
        )}
      </div>
    </div>
  );
};

export default Beneficiaries;
