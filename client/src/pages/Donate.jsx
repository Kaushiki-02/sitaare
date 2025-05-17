import React from 'react';

const Donate = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">
        Support a Sitaare 🌠
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
          <h2 className="text-xl font-bold mb-2">💸 One-Time Donation</h2>
          <p className="mb-4 text-gray-600">
            Support a child’s need like school supplies or healthcare.
          </p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
            Donate Once
          </button>
        </div>

        {/* Monthly */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow border-2 border-yellow-600">
          <h2 className="text-xl font-bold mb-2">📅 Monthly Sponsorship</h2>
          <p className="mb-4 text-gray-600">
            Virtually adopt a girl for ₹11,551/month and support her fully.
          </p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
            Sponsor Monthly
          </button>
        </div>

        {/* In-kind */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">🎁 In-Kind Support</h2>
          <p className="mb-4 text-gray-600">
            Contribute books, clothes, meals, or digital classes.
          </p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
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
