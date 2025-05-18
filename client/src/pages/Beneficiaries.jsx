import React, { useEffect, useState } from 'react';
import girl1 from '../assets/girl1.jpg';
import girl2 from '../assets/girl2.jpg';
import girl3 from '../assets/girl3.jpg';

const imageMap = {
  Anaya: girl1,
  Ishita: girl2,
  Mehak: girl3,
};

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/beneficiaries`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setBeneficiaries(data))
      .catch((err) => {
        console.error('Error fetching beneficiaries:', err);
        setBeneficiaries([]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-softBg py-12 px-4 sm:px-6 lg:px-8 text-darkText">
      <h1 className="text-4xl font-extrabold text-center text-primary mb-12">
        Meet Our Sitaare
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {beneficiaries.length > 0 ? (
          beneficiaries.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={imageMap[b.name]}
                alt={b.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-primaryDark mb-1">{b.name}</h2>
                <p className="text-grayText text-sm">Age: {b.age}</p>
                <p className="text-grayText text-sm mb-3">Dream: {b.goal}</p>
                <button className="mt-2 inline-block bg-primary text-white font-semibold px-4 py-2 rounded hover:bg-primaryLight transition">
                  Virtually Adopt ₹11,551/month
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No beneficiaries to display.</p>
        )}
      </div>
    </div>
  );
};

export default Beneficiaries;
