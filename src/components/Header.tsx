import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["home", "services", "about", "contact"];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <BeeIcon />
            <span className="text-2xl font-bold text-blue-900">
              Travel<span className="text-yellow-500">Bees</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-gray-700 hover:text-blue-800 font-medium capitalize transition-colors duration-200 hover:underline underline-offset-4"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+916282060608"
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:from-yellow-500 hover:to-yellow-400 transition"
            >
              <Phone className="h-4 w-4" />
              +91 62820 60608
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-700"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-lg shadow-lg px-4 py-6 space-y-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 font-medium capitalize hover:text-blue-800 transition"
              >
                {link}
              </a>
            ))}
            <a
              href="tel:+916282060608"
              className="flex items-center gap-2 text-blue-900 font-semibold bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-full transition"
            >
              <Phone className="h-4 w-4" />
              +91 62820 60608
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

const BeeIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    className="text-yellow-500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2L9.17 4.17L6.34 4.58L8.54 6.7L8 9.5L10.5 8.33L13 9.5L12.46 6.7L14.66 4.58L11.83 4.17L11 2H10Z"
      fill="currentColor"
    />
    <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default Header;
