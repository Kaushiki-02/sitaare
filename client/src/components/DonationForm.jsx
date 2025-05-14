// DonationForm.jsx
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_yourStripePublicKey');

const DonationForm = () => {
  const [amount, setAmount] = useState(0);

  const handleDonate = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/donate/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
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
      <button onClick={handleDonate} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Donate Now
      </button>
    </div>
  );
};

export default DonationForm;
