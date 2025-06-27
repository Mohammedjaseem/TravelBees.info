import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    location: 'Now in Canada',
    content: 'Travels Bees made my dream of working abroad a reality. Their team guided me through every step of the process, from job placement to visa assistance.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Manager',
    location: 'Dubai, UAE',
    content: 'Exceptional service and professional approach. The personality development program really helped me ace my interviews and land my dream job.',
    rating: 5
  },
  {
    name: 'Mohamed Ali',
    role: 'Travel Enthusiast',
    location: 'Kerala, India',
    content: 'Amazing travel packages! The team organized our family vacation perfectly. Every detail was taken care of, and we had an unforgettable experience.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real experiences from satisfied clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-500 opacity-50" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-blue-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;