// DonationForm.jsx
import { useState } from 'react';


const DonationForm = () => {
  const [amount, setAmount] = useState(0);

  const handleDonate = async () => {
    console.log("Heelo");

  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Donate to Project Sitaare</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-full mb-3"
        placeholder="Enter Amount (INR)"
      />
      <button onClick={handleDonate} className="bg-primary hover:bg-primaryLight text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
        Donate Now
      </button>
    </div>
  );
};

export default DonationForm;
