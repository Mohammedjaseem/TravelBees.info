import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              Travel<span className="text-yellow-500">Bees</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for career growth, international opportunities, and unforgettable travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Job Recruitment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tours & Travels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Abroad Placement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Airline Ticketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personality Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-500" />
                <a href="tel:+916282060608" className="hover:text-white transition-colors">
                  +91 6282060608
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-500" />
                <a href="mailto:info@travelsbees.com" className="hover:text-white transition-colors">
                  info@travelsbees.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-yellow-500 mt-1" />
                <span>Your Business Address<br />City, State, PIN Code</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Travels Bees. All rights reserved. | Designed with care for your success.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;