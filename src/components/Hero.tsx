import React from 'react';
import { ArrowRight, Globe, Users, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Gateway to
            <span className="text-yellow-400 block lg:inline lg:ml-4">Global Opportunities</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Expert consulting services for career advancement, international placements, and unforgettable travel experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#services"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Get Consultation
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1000+ Placements</h3>
              <p className="text-blue-200">Successfully placed candidates globally</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ Countries</h3>
              <p className="text-blue-200">Worldwide travel and placement network</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Years</h3>
              <p className="text-blue-200">Experience in consulting services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;