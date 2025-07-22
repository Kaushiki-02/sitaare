import { Link } from "react-router-dom";
import {
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaStar,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import hohLogo from "../assets/hoh_logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-[#FFF0F6] to-[#F8E8F1] text-[#BC1782] mt-auto relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#BC1782]/5 to-transparent rounded-full -ml-16 -mt-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#D61A91]/5 to-transparent rounded-full -mr-12 -mb-12"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <a
                  href="https://houseofhumanity.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={hohLogo}
                    alt="House of Humanity"
                    className="h-14 transition duration-200"
                  />
                </a>
                <div className="h-8 border-l-2 border-gray-300 mx-2"></div>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo}
                    alt="Sitaare"
                    className="h-14 transition duration-200"
                  />
                </a>
              </div>
              <p className="text-[#BC1782]/80 leading-relaxed mb-4">
                𝐀 𝐬𝐚𝐟𝐞-𝐬𝐩𝐚𝐜𝐞, 𝐰𝐡𝐞𝐫𝐞 𝐋𝐨𝐬𝐭 𝐂𝐡𝐢𝐥𝐝𝐡𝐨𝐨𝐝𝐬 𝐟𝐢𝐧𝐝 𝐋𝐨𝐯𝐞 𝐀𝐠𝐚𝐢𝐧. 𝐂𝐫𝐞𝐚𝐭𝐢𝐧𝐠
                𝐇𝐄𝐑𝐬𝐭𝐨𝐫𝐲 𝐨𝐯𝐞𝐫 𝐇𝐈𝐒𝐭𝐨𝐫𝐲.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/houseofhumanityfoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#BC1782]/10 hover:bg-[#BC1782] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <FaFacebook className="text-[#BC1782] group-hover:text-white text-sm" />
                </a>

                <a
                  href="https://www.instagram.com/sitaare_vadodara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#BC1782]/10 hover:bg-[#BC1782] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <FaInstagram className="text-[#BC1782] group-hover:text-white text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/company/house-of-humanity-charitable-trust/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#BC1782]/10 hover:bg-[#BC1782] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <FaLinkedin className="text-[#BC1782] group-hover:text-white text-sm" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1 lg:ml-40">
              <h4 className="text-lg font-semibold text-[#BC1782] mb-4 flex items-center gap-2">
                <FaStar className="text-[#D61A91]" />
                Quick Links
              </h4>
              <div className="space-y-3">
                <Link
                  to="/who-we-are"
                  className="block text-[#BC1782]/80 hover:text-[#D61A91] transition-all duration-200 hover:translate-x-1 font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/our-aspirations"
                  className="block text-[#BC1782]/80 hover:text-[#D61A91] transition-all duration-200 hover:translate-x-1 font-medium"
                >
                  Our Aspirations
                </Link>
                <Link
                  to="/donate"
                  className="block text-[#BC1782]/80 hover:text-[#D61A91] transition-all duration-200 hover:translate-x-1 font-medium"
                >
                  Donate
                </Link>
                <Link
                  to="/contact-us"
                  className="block text-[#BC1782]/80 hover:text-[#D61A91] transition-all duration-200 hover:translate-x-1 font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="#"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1rW_QyMvKZ69JZcAZGFPjJjrPJk_YlseU/view",
                      "_blank"
                    )
                  }
                  className="block text-[#BC1782]/80 hover:text-[#D61A91] transition-all duration-200 hover:translate-x-1 font-medium"
                >
                  Sitaare Brochure
                </Link>
                <Link
                  to="#"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1fPKMWz_djR9-BdWST2FGE8P920WjFOJQ/view",
                      "_blank"
                    )
                  }
                  className="block text-[#BC1782]/80 hover:text-[#D61A91] transition-all duration-200 hover:translate-x-1 font-medium"
                >
                  Sitaare Proposal
                </Link>

              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 lg:ml-40">
              <h4 className="text-lg font-semibold text-[#BC1782] mb-4 flex items-center gap-2">
                <FaHeart className="text-[#D61A91]" />
                Get in Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#BC1782]/80">
                  <FaMapMarkerAlt className="text-[#D61A91] flex-shrink-0" />
                  <span className="text-sm">
                    6, Ashapuri Society, Near Akota Tea Post, Vadodara, Gujarat,
                    India 390007
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#BC1782]/80">
                  <FaPhone className="text-[#D61A91] flex-shrink-0" />
                  <span className="text-sm">+91 95129 51300</span>
                </div>
                <div className="flex items-center gap-3 text-[#BC1782]/80">
                  <FaEnvelope className="text-[#D61A91] flex-shrink-0" />
                  <span className="text-sm">info@houseofhumanity.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#BC1782]/20 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-[#BC1782]/80 font-medium">
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-semibold text-[#D61A91]">
                  Project Sitaare
                </span>{" "}
                • All rights reserved
              </p>
              <p className="text-xs text-[#BC1782]/60 mt-1">
                Made with{" "}
                <FaHeart className="inline text-[#D61A91] text-xs mx-1" /> for a
                better tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
