import React from "react";
import { Star, Quote } from "lucide-react";

/* ——— Testimonials data ——— */
const testimonials = [
  {
    name: "Suhad K T",
    role: "Software Engineer",
    location: "Bangalore → Canada",
    content:
      "Travel Bees handled my relocation end-to-end—from job offer to PR. Seamless and transparent!",
    rating: 5,
  },
  {
    name: "Jassem T P",
    role: "Software Engineer",
    location: "Kochi → Dubai",
    content:
      "Interview prep + visa checklist = dream role in eight weeks. Couldn’t have done it alone!",
    rating: 5,
  },
  {
    name: "Christy Jhon",
    role: "Buisness Development Manager",
    location: "Malappuram → Germany",
    content:
      "They matched me with a German startup, arranged housing, and even helped with local paperwork.",
    rating: 5,
  },
  {
    name: "Haseeb R.",
    role: "Digital Marketer",
    location: "Calicut, India",
    content:
      "The personality-development bootcamp boosted my confidence on stage and with clients.",
    rating: 4,
  },
  {
    name: "Irshad A.",
    role: "Business Analyst",
    location: "Thrissur → UK",
    content:
      "Smooth student-visa filing and university admission guidance. Highly recommend Travel Bees!",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    role: "Travel Enthusiast",
    location: "Kerala, India",
    content:
      "Booked a family Euro-trip—flawless itineraries, hidden-gem stays, 24×7 assistance.",
    rating: 5,
  },
];

/* ——— Component ——— */
const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600">
          Genuine stories from professionals and travellers who chose Travel Bees
        </p>
      </div>

      {/* Card grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            className="group relative rounded-2xl bg-white/70 backdrop-blur shadow-lg
                       ring-1 ring-gray-200 p-8 transition-transform duration-300
                       hover:-translate-y-2 hover:shadow-2xl hover:ring-yellow-400/40"
          >
            {/* Decorative quote */}
            <Quote className="absolute right-4 top-4 h-8 w-8 text-yellow-400/60" />

            {/* Rating */}
            <div className="mb-4 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < t.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="mb-8 italic leading-relaxed text-gray-800">“{t.content}”</p>

            {/* Footer */}
            <div className="flex items-center gap-4">
              {/* Initial-avatar */}
              <div className="grid h-12 w-12 shrink-0 place-content-center rounded-full
                              bg-gradient-to-br from-blue-600 to-yellow-400 text-white
                              font-semibold shadow-md">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="text-sm text-blue-600">{t.location}</p>
              </div>
            </div>

            {/* Glow on hover */}
            <span
              className="pointer-events-none absolute inset-0 rounded-2xl
                         bg-gradient-to-br from-transparent via-yellow-400/10 to-transparent
                         opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials
