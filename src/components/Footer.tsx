import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We are committed to providing the best tech education to students,
            helping them build essential skills for the future.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-[#1BC8D3]">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:text-[#1BC8D3]">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-[#1BC8D3]">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-[#1BC8D3]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1BC8D3]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1BC8D3]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1BC8D3]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1BC8D3]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Algorise Tech Explorers. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
