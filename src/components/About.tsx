import React, { useEffect, useRef } from "react";
import {
  CheckCircle,
  Phone,
  MapPin,
  Award,
  Users2,
  LucideIcon,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ── Static data ───────────────────────────── */
const stats = [
  { label: "Posts", value: 54 },
  { label: "Followers", value: 269 },
  { label: "Following", value: 517 },
] as const;

const bullets = [
  "Job recruitment solutions",
  "Tours & Travels",
  "Abroad placement assistance",
  "Airline Ticketing",
  "Personality development programs",
] as const;

/* ── Types ─────────────────────────────────── */
interface CounterProps {
  value: number;
  label: string;
}

interface BadgeProps {
  icon: LucideIcon;
  label: string;
}

/* ── Helpers ───────────────────────────────── */
const useAOS = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 120 });
  }, []);
};

const useCountUp = (target: number, duration = 1000) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps

    const tick = () => {
      start += increment;
      if (start < target) {
        el.textContent = Math.ceil(start).toString();
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toString();
      }
    };

    /* Trigger when scrolled into view */
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tick();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return ref;
};

/* ── Components ────────────────────────────── */
const Counter: React.FC<CounterProps> = ({ value, label }) => {
  const ref = useCountUp(value, 1200);
  return (
    <div className="space-y-1">
      <p ref={ref} className="text-3xl font-extrabold text-blue-900" />
      <p className="text-sm tracking-wide text-gray-600">{label}</p>
    </div>
  );
};

const Badge: React.FC<BadgeProps> = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow hover:shadow-md transition">
    <Icon className="h-4 w-4 text-blue-600" />
    {label}
  </span>
);

/* ── Main About Section ────────────────────── */
const About: React.FC = () => {
  useAOS();

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Hero banner */}
      <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] w-full">
        <img
          src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
          alt="Traveler overlooking mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h2
            data-aos="fade-down"
            className="mb-3 text-3xl font-extrabold tracking-wide sm:text-4xl lg:text-5xl"
          >
            Meet <span className="text-yellow-400">Travel Bees</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-xl text-sm text-blue-100 sm:text-lg"
          >
            Career &amp; holiday specialists guiding dreams beyond borders for
            15&nbsp;years.
          </p>
        </div>
      </div>

      {/* Main card */}
      <div className="-mt-24 lg:-mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-aos="zoom-in"
          className="grid gap-12 rounded-3xl bg-white/70 p-8 ring-1 ring-gray-200 backdrop-blur-lg shadow-2xl md:p-12 lg:grid-cols-2"
        >
          {/* Left column */}
          <div className="flex flex-col justify-between space-y-10">
            {/* Counters */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex justify-around text-center"
            >
              {stats.map((s) => (
                <Counter key={s.label} {...s} />
              ))}
            </div>

            {/* Contact box */}
            <div
              data-aos="fade-right"
              data-aos-delay="350"
              className="rounded-xl bg-blue-600/10 p-6 shadow-sm"
            >
              <a
                href="tel:+916282060608"
                className="mb-2 inline-flex items-center gap-2 font-semibold text-blue-800 transition hover:text-blue-700"
              >
                <Phone className="h-5 w-5" /> +91 62820 60608
              </a>
              <p className="inline-flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-red-600" />
                Chekanoor • Edappal • Malappuram
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-900">
              What We Do
            </h3>

            <p className="leading-relaxed text-gray-700">
              From <strong>global education counselling</strong> and{" "}
              <strong>career placement</strong> to
              <strong> bespoke travel planning</strong>, Travel Bees is the
              one-stop partner that simplifies every overseas ambition.
            </p>

            {/* Bullet grid */}
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {bullets.map((line) => (
                <li key={line} className="flex items-start text-gray-800">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-yellow-500" />
                  {line}
                </li>
              ))}
            </ul>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Badge icon={Award} label="ISO-Certified" />
              <Badge icon={Users2} label="1000+ Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
