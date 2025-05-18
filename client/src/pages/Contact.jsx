import React from 'react';
import qr from '../assets/qr.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-bgLight py-16 px-6 text-bodyText font-sans">
      <h1 className="text-4xl font-bold text-center text-heading mb-10">
        Contact Us
      </h1>

      <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p><strong>Email:</strong> info@houseofhumanity.in</p>
          <p><strong>Phone:</strong> +91 95129 51300</p>
          <p>
            <strong>Address:</strong><br />
            Bunglow No 6. Ashapuri society,<br />
            Near Jain temple Akota ,<br />
            Vadodara, Gujarat - 390007
          </p>
          <p><strong>Website:</strong> www.Sitaare.org</p>
        </div>

        <div>
          <img
            src={qr}
            alt="Instagram Page"
            className="w-64 h-64 object-cover rounded border border-borderCard"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
