import React from 'react';
import DonationForm from '../components/DonationForm';
import DonationStats from '../components/DonationStats';

const TestDonation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Test Razorpay Integration
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This page is for testing the Razorpay payment integration. 
            Use the test cards below to verify the payment flow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Donation Form
            </h2>
            <DonationForm />
          </div>

          {/* Test Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Test Information
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Test Cards
              </h3>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Visa Test Card</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Card Number:</strong> 4111 1111 1111 1111</p>
                    <p><strong>Expiry:</strong> 12/25</p>
                    <p><strong>CVV:</strong> 123</p>
                    <p><strong>Name:</strong> Any Name</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Mastercard Test Card</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Card Number:</strong> 5555 5555 5555 4444</p>
                    <p><strong>Expiry:</strong> 12/25</p>
                    <p><strong>CVV:</strong> 123</p>
                    <p><strong>Name:</strong> Any Name</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Testing Steps</h4>
                <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                  <li>Fill out the donation form</li>
                  <li>Click "Donate Now"</li>
                  <li>Use one of the test cards above</li>
                  <li>Complete the payment</li>
                  <li>Verify success message appears</li>
                </ol>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Important Notes</h4>
                <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                  <li>These are test cards - no real money will be charged</li>
                  <li>Use test credentials in development</li>
                  <li>Switch to live credentials for production</li>
                  <li>Check server logs for detailed error information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Statistics */}
        <div className="mt-12">
          <DonationStats />
        </div>
      </div>
    </div>
  );
};

export default TestDonation; 