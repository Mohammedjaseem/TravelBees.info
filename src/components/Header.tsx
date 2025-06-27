import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-800">
              Travel<span className="text-yellow-500">Bees</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+916282060608" className="flex items-center text-blue-800 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 6282060608
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="tel:+916282060608" className="flex items-center text-blue-800 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +91 6282060608
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;