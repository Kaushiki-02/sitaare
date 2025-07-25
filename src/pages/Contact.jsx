import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import qr from '../assets/qr.jpg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Contact = () => {
  useEffect(() => { AOS.init({ once: true, duration: 800 }); }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 text-[#4B4B4B] font-sans py-20 px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="bg-gradient-to-br from-pink-200 to-purple-200 p-4 rounded-full shadow-lg"
          >
            <Mail className="text-4xl text-[#BC1782]" />
          </motion.div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-primaryDark">Contact Us</h1>
        <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
          We'd love to hear from you. Whether it's a question, suggestion, or a desire to collaborate — reach out!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow border border-[#F2D0EA]" data-aos="fade-up">
        {/* Contact Info */}
        <div className="space-y-6 text-left">
          <div className="flex items-start gap-3" data-aos="fade-right">
            <Mail className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Email:</span><br />
              <a href="mailto:info@houseofhumanity.in" className="hover:underline text-primaryDark transition-colors duration-200" data-aos="zoom-in" tabIndex={0}>
                info@houseofhumanity.in
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3" data-aos="fade-right" data-aos-delay="100">
            <Phone className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Phone:</span><br />
              <a href="tel:+919512951300" className="hover:underline text-primaryDark transition-colors duration-200" data-aos="zoom-in" tabIndex={0}>
                +91 95129 51300
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3" data-aos="fade-right" data-aos-delay="200">
            <MapPin className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Address:</span><br />
              Bungalow No. 6, Ashapuri Society,<br />
              Near Jain Temple, Akota,<br />
              Vadodara, Gujarat – 390007
            </p>
          </div>

          <div className="flex items-start gap-3" data-aos="fade-right" data-aos-delay="300">
            <Globe className="mt-1 text-[#BC1782]" />
            <p>
              <span className="font-semibold">Website:</span><br />
              <a href="https://sitaare.in" target="_blank" rel="noreferrer" className="hover:underline text-primaryDark transition-colors duration-200" data-aos="zoom-in" tabIndex={0}>
                www.sitaare.org
              </a>
            </p>
          </div>
        </div>

        {/* QR Code Block */}
        <div className="flex flex-col items-center justify-center text-center" data-aos="zoom-in">
          <motion.img
            src={qr}
            alt="Scan to visit Instagram"
            className="w-64 h-64 object-cover rounded-xl border-4 border-[#EACAE3] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.97, rotate: -2 }}
          />
          <p className="mt-4 text-primaryDark font-medium">Scan to follow us on Instagram!</p>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
