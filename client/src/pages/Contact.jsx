import React from 'react';
const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${key}&q=Sector+44+Gurugram+Haryana`;

const Contact = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">Contact Us</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p><strong>Email:</strong> info@houseofhumanity.in</p>
          <p><strong>Phone:</strong> +91 95129 51300</p>
          <p><strong>Address:</strong><br />
            Bunglow No 6. Ashapuri society,<br />
           Near Jain temple Akota ,<br />
            Vadodara, Gujarat - 390007
          </p>
          <p><strong>Website:</strong> www.Sitaare.org</p>
        </div>

        <div>
          <iframe
            title="Location Map"
            className="w-full h-64 border rounded"
            src={mapSrc}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
