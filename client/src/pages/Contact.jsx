import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import qr from '../assets/qr.jpg';

const Contact = () => {
  return (
    <div className=" bg-gradient-to-br from-[#FFF7FA] to-[#FBE6F3] py-20 px-6 text-[#4B4B4B] font-sans">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primaryDark">Contact Us</h1>
        <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
          We'd love to hear from you. Whether it's a question, suggestion, or a desire to collaborate — reach out!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow border border-[#F2D0EA]">
        {/* Contact Info */}
        <div className="space-y-6 text-left">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Email:</span><br />
              <a href="mailto:info@houseofhumanity.in" className="hover:underline text-primaryDark">info@houseofhumanity.in</a>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Phone:</span><br />
              <a href="tel:+919512951300" className="hover:underline text-primaryDark">+91 95129 51300</a>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Address:</span><br />
              Bungalow No. 6, Ashapuri Society,<br />
              Near Jain Temple, Akota,<br />
              Vadodara, Gujarat – 390007
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Website:</span><br />
              <a href="https://www.sitaare.org" target="_blank" rel="noreferrer" className="hover:underline text-primaryDark">www.sitaare.org</a>
            </p>
          </div>
        </div>

        {/* QR Code Block */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={qr}
            alt="Scan to visit Instagram"
            className="w-64 h-64 object-cover rounded-xl border-4 border-[#EACAE3] shadow-lg"
          />
          <p className="mt-4 text-primaryDark font-medium">Scan to follow us on Instagram!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
