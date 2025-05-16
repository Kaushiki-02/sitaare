import React, { useEffect, useState } from 'react';

const Donate = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/donate/ping`)
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Donate</h1>
      <p className="text-blue-600">{message || 'Loading...'}</p>
    </div>
  );
};

export default Donate;
