// DonationForm.jsx
import { useState, useEffect } from 'react';
import config from '../config/config';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    donorName: '',
    donorEmail: '',
    donorPhone: '',
    description: '',
    anonymous: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDonate = async () => {
    if (!formData.amount || formData.amount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (!formData.anonymous && !formData.donorName) {
      setError('Please enter your name or check anonymous donation');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Step 1: Create order on backend
      const orderResponse = await fetch(`${config.API_BASE_URL}${config.API_ENDPOINTS.CREATE_ORDER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(formData.amount),
          donorName: formData.anonymous ? 'Anonymous' : formData.donorName,
          donorEmail: formData.donorEmail,
          donorPhone: formData.donorPhone,
          description: formData.description,
          anonymous: formData.anonymous
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // Step 2: Initialize Razorpay payment
      const options = {
        key: orderData.key_id,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: config.RAZORPAY.NAME,
        description: formData.description || config.RAZORPAY.DESCRIPTION,
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            // Step 3: Verify payment on backend
            const verifyResponse = await fetch(`${config.API_BASE_URL}${config.API_ENDPOINTS.VERIFY_PAYMENT}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donationId: orderData.donationId
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              setSuccess('Thank you for your donation! Payment successful.');
              setFormData({
                amount: '',
                donorName: '',
                donorEmail: '',
                donorPhone: '',
                description: '',
                anonymous: false
              });
            } else {
              setError('Payment verification failed. Please contact support.');
            }
          } catch (verifyError) {
            console.error('Payment verification error:', verifyError);
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: formData.anonymous ? '' : formData.donorName,
          email: formData.donorEmail,
          contact: formData.donorPhone,
        },
        theme: {
          color: config.RAZORPAY.THEME_COLOR,
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Donation error:', error);
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Donate to Project Sitaare</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Donation Amount (INR) *
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter amount"
            min={config.VALIDATION.MIN_AMOUNT}
            max={config.VALIDATION.MAX_AMOUNT}
            step="1"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            id="anonymous"
            name="anonymous"
            type="checkbox"
            checked={formData.anonymous}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
            Make this donation anonymous
          </label>
        </div>

        {!formData.anonymous && (
          <div>
            <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              id="donorName"
              name="donorName"
              type="text"
              value={formData.donorName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
        )}

        <div>
          <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="donorEmail"
            name="donorEmail"
            type="email"
            value={formData.donorEmail}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="donorPhone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            id="donorPhone"
            name="donorPhone"
            type="tel"
            value={formData.donorPhone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Any message you'd like to share..."
          />
        </div>
      </div>

      <button 
        onClick={handleDonate} 
        disabled={loading}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-200 ease-in-out"
      >
        {loading ? 'Processing...' : 'Donate Now'}
      </button>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Your payment is secured by Razorpay
      </div>
    </div>
  );
};

export default DonationForm;
