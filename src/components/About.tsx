import React from 'react';
import { Award, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Travels Bees</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the consulting industry, Travels Bees has established itself as a trusted partner for individuals and organizations seeking comprehensive solutions for career advancement, international opportunities, and travel experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert consultants brings together deep industry knowledge, extensive global networks, and a commitment to excellence that ensures our clients achieve their goals efficiently and effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-semibold">Trusted Partner</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <Target className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-blue-100">Empowering individuals to achieve their career and travel aspirations through expert guidance and comprehensive support.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-xl">
              <Heart className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold mb-2">Our Values</h3>
              <p className="text-sm text-yellow-100">Integrity, excellence, and client-centric approach form the foundation of everything we do.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-xl col-span-2">
              <Award className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold mb-2">Why Choose Us</h3>
              <p className="text-sm text-emerald-100">Proven track record, personalized service, global network, and end-to-end support for all your consulting needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;