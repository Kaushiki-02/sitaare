import React, { useState } from 'react';
import { Heart, CheckCircle } from 'lucide-react';

const DonationForm = ({ onDonate, donateOptions }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const predefinedAmounts = donateOptions
    .filter((option) => !option.custom)
    .map((option) => option.amount);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setError('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
      setError('');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (!amount || amount < 100) {
      setError('Please select or enter a valid donation amount (minimum ₹100).');
      setLoading(false);
      return;
    }

    if (!formData.firstName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.zipCode) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      const selectedOption = donateOptions.find(
        (option) => option.amount === amount || (option.custom && customAmount)
      );
      const purpose = selectedOption?.title || 'Custom Donation';
      const result = await onDonate({
        amount,
        donorName: `${formData.firstName} ${formData.lastName}`,
        donorEmail: formData.email,
        donorPhone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.zipCode}`,
        purpose,
      });

      if (result.success) {
        setIsSubmitted(true);
        setError('');
      } else {
        setError(result.error || 'Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Donation processing error:', error);
      setError('Error processing donation.');
    }
    setLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg mb-6">
            Your generous donation of ₹{customAmount || selectedAmount} has been processed successfully.
          </p>
          <p className="text-gray-500 mb-8">
            You'll receive a confirmation email shortly with your donation receipt.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
              });
              setSelectedAmount(null);
              setCustomAmount('');
              setError('');
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Make a Donation</h1>
        <p className="text-gray-600 text-lg">Your support makes a real difference for underprivileged children</p>
      </div>

      {error && <div className="text-red-600 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Amount</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {predefinedAmounts.map((amount) => {
              const option = donateOptions.find((opt) => opt.amount === amount);
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  className={`py-4 px-6 rounded-lg border-2 transition-all font-semibold flex flex-col items-center text-center ${
                    selectedAmount === amount
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                  disabled={loading}
                >
                  <span className="mb-2">{option && <option.icon className="text-2xl" style={{ color: selectedAmount === amount ? '#fff' : option.color }} />}</span>
                  <span className="text-lg font-bold">₹{amount.toLocaleString()}</span>
                  <span className="text-sm font-semibold">{option?.title}</span>
                  <span className="text-xs text-gray-600 mt-1">{option?.description}</span>
                </button>
              );
            })}
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-lg">₹</span>
            </div>
            <input
              type="text"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              disabled={loading}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  required
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                required
                disabled={loading}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  required
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Donation Summary</h4>
            <div className="space-y-2 text-blue-800">
              <div className="flex justify-between">
                <span>Donation Amount:</span>
                <span className="font-semibold">₹{customAmount || selectedAmount || '0'}</span>
              </div>
              <div className="border-t border-blue-200 pt-2 mt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>₹{customAmount || selectedAmount || '0'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading || (!selectedAmount && !customAmount)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? 'Processing...' : 'Complete Donation'}
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Your donation is secure and encrypted. You'll receive a confirmation email shortly.
          </p>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;