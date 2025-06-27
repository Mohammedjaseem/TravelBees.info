import React from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Top Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + Description */}
        <div>
          <h3 className="text-2xl font-bold">
            Travel<span className="text-yellow-400">Bees</span>
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Your trusted partner for career growth, global education, and
            unforgettable travel experiences.
          </p>

          <a
            href="https://www.instagram.com/travelbees49/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-pink-600 transition hover:bg-pink-700"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Services</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Job Recruitment",
              "Tours & Travels",
              "Abroad Placement",
              "Airline Ticketing",
              "Personality Development",
            ].map((svc) => (
              <li key={svc} className="cursor-default hover:text-white">
                {svc}
              </li>
            ))}
          </ul>
        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Travel Bees Location"
            src="https://www.google.com/maps?q=10.8097744,76.0330511&hl=en&z=15&output=embed"
            loading="lazy"
            width="100%"
            height="200"
            style={{ border: "0" }}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center">
              <Phone className="mr-3 h-5 w-5 text-yellow-400" />
              <a href="tel:+916282060608" className="hover:text-white">
                +91 62820 60608
              </a>
            </div>

            <div className="flex items-center">
              <Mail className="mr-3 h-5 w-5 text-yellow-400" />
              <a
                href="mailto:travelbeescknr@gmail.com"
                className="hover:text-white"
              >
                travelbeescknr@gmail.com
              </a>
            </div>

            <div className="flex items-start">
              <MapPin className="mr-3 mt-1 h-5 w-5 text-yellow-400" />
              <span>
                Chekanoor, Edappal,
                <br />
                Malappuram, Kerala 679576
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        © 2024 Travels Bees. All rights reserved.
        <br className="hidden sm:block" />
        Developed by&nbsp;
        <a
          href="https://www.jassy.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Jaseem
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://suhad.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Suhad
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
