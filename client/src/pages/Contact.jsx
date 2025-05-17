import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">Contact Us 📞</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p><strong>📧 Email:</strong> connect@project-sitaare.org</p>
          <p><strong>📱 Phone:</strong> +91 98765 43210</p>
          <p><strong>📍 Address:</strong><br />
            House of Humanity HQ,<br />
            Sector 44, Gurugram, Haryana,<br />
            India - 122003
          </p>
        </div>

        <div>
          <iframe
            title="Location Map"
            className="w-full h-64 border rounded"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Sector+44+Gurugram+Haryana"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
