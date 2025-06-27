import React from "react";
import { ArrowRight, Globe, Users, Briefcase } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative text-white pb-36 lg:pb-48 pt-24 lg:pt-36 overflow-hidden">
    {/* ── Background Video ── */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-[-2] brightness-[0.5]"
    >
      <source
        src="https://videos.pexels.com/video-files/2867877/2867877-uhd_2560_1440_24fps.mp4"
        type="video/mp4"
      />
    </video>

    {/* ── Overlay ── */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-[-1]" />

    {/* ── Content ── */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        Discover <span className="text-yellow-400">Global Careers</span> with
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          TravelBees
        </span>
      </h1>

      <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
        Premium services for international placements, study abroad guidance, and curated travel packages
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
        <a
          href="#services"
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-4 rounded-full shadow-xl transition hover:scale-105 flex items-center"
        >
          Explore Services
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        <a
          href="#contact"
          className="border-2 border-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-full transition hover:scale-105"
        >
          Get Consultation
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 sm:px-0">
        {[
          {
            icon: <Users className="w-7 h-7 text-blue-900" />,
            heading: "100+ Placements",
            text: "Professionals placed in top global roles",
          },
          {
            icon: <Globe className="w-7 h-7 text-blue-900" />,
            heading: "5+ Countries",
            text: "Worldwide reach for jobs & education",
          },
          {
            icon: <Briefcase className="w-7 h-7 text-blue-900" />,
            heading: "5+ Years",
            text: "Expertise in international consulting",
          },
        ].map(({ icon, heading, text }) => (
          <div
            key={heading}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-8 text-center shadow-2xl hover:scale-105 transition"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center shadow-md">
              {icon}
            </div>
            <h4 className="text-xl font-semibold mb-2">{heading}</h4>
            <p className="text-blue-100">{text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Wavy SVG Divider */}
    <div className="absolute bottom-0 w-full z-0">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-[100px] md:h-[160px] lg:h-[200px]"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="heroWaveToSlate" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="100%" stopColor="#f8fafc" /> {/* Tailwind's slate-50 */}
      </linearGradient>
    </defs>
    <path
      fill="url(#heroWaveToSlate)"
      d="M0,224L40,197.3C80,171,160,117,240,112C320,107,400,149,480,181.3C560,213,640,235,720,208C800,181,880,107,960,85.3C1040,64,1120,96,1200,101.3C1280,107,1360,85,1400,74.7L1440,64V320H0Z"
    />
  </svg>
</div>
  </section>
);

export default Hero;
