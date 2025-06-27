import React from 'react';
import { Users, MapPin, Plane, CreditCard, User, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Job Recruitment Solutions',
    description: 'Comprehensive recruitment services connecting talented individuals with leading companies worldwide.',
    features: ['Executive Search', 'Bulk Recruitment', 'Skill Assessment', 'Interview Coordination'],
    color: 'bg-blue-500'
  },
  {
    icon: MapPin,
    title: 'Tours & Travels',
    description: 'Curated travel experiences and customized tour packages for leisure and business travelers.',
    features: ['Holiday Packages', 'Corporate Travel', 'Adventure Tours', 'Cultural Experiences'],
    color: 'bg-emerald-500'
  },
  {
    icon: Plane,
    title: 'Abroad Placement Assistance',
    description: 'End-to-end support for international job placements and career migration services.',
    features: ['Visa Processing', 'Document Verification', 'Job Matching', 'Pre-departure Support'],
    color: 'bg-purple-500'
  },
  {
    icon: CreditCard,
    title: 'Airline Ticketing',
    description: 'Competitive airline booking services with flexible options and 24/7 customer support.',
    features: ['Domestic Flights', 'International Flights', 'Group Bookings', 'Travel Insurance'],
    color: 'bg-orange-500'
  },
  {
    icon: User,
    title: 'Personality Development Programs',
    description: 'Professional development courses to enhance skills and boost career prospects.',
    features: ['Communication Skills', 'Leadership Training', 'Interview Preparation', 'Soft Skills'],
    color: 'bg-pink-500'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for your career growth, travel needs, and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 group"
            >
              <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-yellow-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg transition-colors duration-300 font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;