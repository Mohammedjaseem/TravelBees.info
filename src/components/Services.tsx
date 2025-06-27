import React, { useEffect } from "react";
import {
  Users,
  MapPin,
  Plane,
  CreditCard,
  User,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";

const useAOS = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 120 });
  }, []);
};

const services = [
  {
    icon: Users,
    title: "Job Recruitment Solutions",
    desc: "Connecting top talent with leading employers across the globe.",
    features: ["Executive Search", "Bulk Hiring", "Skill Tests", "Interview Coaching"],
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: GraduationCap,
    title: "Education Consultancy",
    desc: "End-to-end university admission and scholarship guidance.",
    features: ["Course Selection", "Admission Paperwork", "Scholarship Advice", "Student Visa"],
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: MapPin,
    title: "Tours & Travels",
    desc: "Tailor-made study tours and corporate retreats that inspire.",
    features: ["Study Tours", "Adventure Camps", "Corporate Retreats", "Cultural Immersions"],
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Plane,
    title: "Abroad Placement Assistance",
    desc: "Visa, relocation, and onboarding—handled from A to Z.",
    features: ["Visa Filing", "Credential Eval", "Job Matching", "Pre-departure Briefing"],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: CreditCard,
    title: "Airline Ticketing",
    desc: "Best fares, group discounts, and 24×7 travel desk.",
    features: ["Domestic & Intl.", "Multi-city Routes", "Group Deals", "Travel Insurance"],
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: User,
    title: "Personality Development",
    desc: "Workshops to boost confidence and leadership presence.",
    features: ["Public Speaking", "Leadership Labs", "Mock HR Rounds", "EQ Training"],
    color: "from-pink-500 to-pink-700",
  },
];

const Services: React.FC = () => {
  useAOS();

  return (
    <section id="services" className="relative bg-slate-50 pb-24 pt-32">
      {/* Top wave divider */}
      <Wave className="absolute -top-[1px] rotate-180 text-slate-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2
            data-aos="fade-up"
            className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Our <span className="text-blue-600">Core Services</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto max-w-3xl text-lg text-gray-600"
          >
            Integrated solutions that merge <strong>education</strong>, <strong>career</strong>,
            and <strong>travel</strong>—empowering you to learn, explore, and succeed worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, i) => (
            <article
              key={srv.title}
              className="group relative flex flex-col rounded-[2rem] bg-white/60 p-8 shadow-xl ring-1 ring-white/40
                         backdrop-blur-xl transition-transform duration-300
                         hover:-translate-y-4 hover:shadow-2xl hover:brightness-105
                         hover:rotate-[1deg]"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              {/* Icon badge */}
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl
                            bg-gradient-to-br ${srv.color} shadow-lg transition-transform
                            group-hover:scale-105 animate-pulse`}
              >
                <srv.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">{srv.title}</h3>
              <p className="mb-6 text-gray-600">{srv.desc}</p>

              <ul className="mb-8 space-y-2">
                {srv.features.map((f) => (
                  <li key={f} className="flex text-sm text-slate-700">
                    <ArrowRight className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                aria-label={`Learn more about ${srv.title}`}
                className="mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600
                           px-6 py-3 font-semibold text-white shadow-md transition hover:from-blue-500 hover:to-violet-500"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom wave divider */}
      <Wave className="absolute bottom-0 text-white" />
    </section>
  );
};

export default Services;

/* ---------- Mini components ---------- */
const Wave: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 1440 320"
    className={`pointer-events-none w-full h-[80px] sm:h-[120px] ${className}`}
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,133.3C560,107,640,85,720,69.3C800,53,880,43,960,69.3C1040,96,1120,160,1200,186.7C1280,213,1360,203,1400,197.3L1440,192V320H1400C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320H0Z"
    />
  </svg>
);
