import React from 'react';

const Donate = () => {
  const handleDonate = async (amount) => {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/donate/create-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });

  const data = await res.json();
  if (!data.success) return alert("Failed to create order");

  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID,
    amount: data.order.amount,
    currency: "INR",
    name: "Project Sitaare",
    description: "Donation",
    order_id: data.order.id,
    handler: function (response) {
      alert(`Payment Successful! Razorpay Payment ID: ${response.razorpay_payment_id}`);
    },
    prefill: {
      name: "",
      email: "",
    },
    theme: {
      color: "#F59E0B",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">
        Support a Sitaare
      </h1>

      {/* Info Block */}
      <div className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-700 mb-10">
        <p className="mb-4">
          Every contribution helps us nurture, educate, and empower girls at Project Sitaare.
        </p>
        <p className="mb-4 font-semibold text-yellow-700">
          Every ₹11,551 provides a full month of care for one girl.
        </p>
        <p>
          Choose how you'd like to support our mission:
        </p>
      </div>

      {/* Donation Types */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        {/* One-time */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">One-Time Donation</h2>
          <p className="mb-4 text-gray-600">
            Support a child’s need like school supplies or healthcare.
          </p>
          <button onClick={() => handleDonate(2000)}
          className="bg-primary hover:bg-primaryLight text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
          Donate Once
          </button>
        </div>

        {/* Monthly */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow border-2 border-yellow-600">
          <h2 className="text-xl font-bold mb-2">Monthly Sponsorship</h2>
          <p className="mb-4 text-gray-600">
            Virtually adopt a girl for ₹11,551/month and support her fully.
          </p>
          <button onClick={() => handleDonate(11551)}className="bg-primary hover:bg-primaryLight text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
          Sponsor Monthly
          </button>
        </div>

        {/* In-kind */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">In-Kind Support</h2>
          <p className="mb-4 text-gray-600">
            Contribute books, clothes, meals, or digital classes.
          </p>
          <button className="bg-primary hover:bg-primaryLight text-white font-semibold px-6 py-2 rounded-md shadow-md transition">
            Offer In-Kind
          </button>
        </div>
      </div>

      {/* Note or Legal */}
      <p className="text-sm text-gray-500 text-center mt-12">
        All donations are eligible for 80G tax exemption.
      </p>
    </div>
  );
};

export default Donate;
