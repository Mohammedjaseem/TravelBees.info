import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to start your journey? Contact us today for a free consultation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+916282060608" className="text-blue-600 hover:text-blue-800 transition-colors text-lg">
                  +91 6282060608
                </a>
                <p className="text-gray-600 text-sm mt-1">Available 24/7 for consultations</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <a href="https://wa.me/916282060608" className="text-green-600 hover:text-green-800 transition-colors text-lg">
                  +91 6282060608
                </a>
                <p className="text-gray-600 text-sm mt-1">Quick chat support</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@travelsbees.com" className="text-purple-600 hover:text-purple-800 transition-colors text-lg">
                  info@travelsbees.com
                </a>
                <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a service</option>
                  <option>Job Recruitment Solutions</option>
                  <option>Tours & Travels</option>
                  <option>Abroad Placement Assistance</option>
                  <option>Airline Ticketing</option>
                  <option>Personality Development Programs</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;