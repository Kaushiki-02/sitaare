import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const DonationSuccess = () => {
  const navigate = useNavigate();
  const [donationDetails, setDonationDetails] = useState(null);

  useEffect(() => {
    // Retrieve donation details from localStorage
    const storedDetails = JSON.parse(localStorage.getItem('donationDetails'));
    if (storedDetails) {
      setDonationDetails(storedDetails);
      // Clear localStorage to prevent stale data
      localStorage.removeItem('donationDetails');
    }
  }, []);

  if (!donationDetails) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing...</h2>
        <p className="text-gray-600 text-lg">Loading your donation details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h2>
        <p className="text-gray-600 text-lg mb-6">
          Your generous donation of ₹{donationDetails.amount.toLocaleString()} to {donationDetails.purpose} has been successfully processed.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Donation Details</h3>
          <p className="text-gray-600"><strong>Donor Name:</strong> {donationDetails.donorName}</p>
          <p className="text-gray-600"><strong>Email:</strong> {donationDetails.donorEmail}</p>
          <p className="text-gray-600"><strong>Purpose:</strong> {donationDetails.purpose}</p>
          <p className="text-gray-600"><strong>Payment ID:</strong> {donationDetails.paymentId}</p>
          <p className="text-gray-600"><strong>Order ID:</strong> {donationDetails.orderId}</p>
          <p className="text-gray-600"><strong>Date:</strong> {new Date(donationDetails.createdAt).toLocaleString()}</p>
        </div>
        <p className="text-gray-500 mb-8">
          A confirmation email has been sent to {donationDetails.donorEmail}. Thank you for supporting Project Sitaare!
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DonationSuccess;