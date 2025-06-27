import React, { useState, FormEvent } from "react";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  MapPin,
  Map,
} from "lucide-react";

/* ────────────────── Types ────────────────── */
interface ContactItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string | null;
  note?: string;
  bg: string;
}

interface FieldProps {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

/* ────────────────── Static data ────────────────── */
const contactInfo: ContactItem[] = [
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: "Phone",
    value: "+91 62820 60608",
    href: "tel:+916282060608",
    note: "24×7 consultations",
    bg: "bg-blue-100",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-green-600" />,
    title: "WhatsApp",
    value: "+91 62820 60608",
    href: "https://wa.me/916282060608",
    note: "Quick chat support",
    bg: "bg-green-100",
  },
  {
    icon: <Mail className="h-6 w-6 text-purple-600" />,
    title: "Email",
    value: "travelbeescknr@gmail.com",
    href: "mailto:travelbeescknr@gmail.com",
    note: "Replies within 24 hours",
    bg: "bg-purple-100",
  },
  {
    icon: <Clock className="h-6 w-6 text-orange-600" />,
    title: "Business Hours",
    value: "Mon–Sat  9 am – 7 pm  •  Sun 10 am – 4 pm",
    href: null,
    bg: "bg-orange-100",
  },
  {
    icon: <MapPin className="h-6 w-6 text-red-600" />,
    title: "Address",
    value: "Chekanoor, Edappal,\nMalappuram, Kerala 679576",
    href: null,
    bg: "bg-red-100",
  },
];

/* ────────────────── Main component ────────────────── */
const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  /* FormSubmit only needs native submit, we still mark the UI */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-extrabold text-blue-800">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-600">
            Start your journey with Travel Bees — we’re just a message away.
          </p>
        </header>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: contact info */}
          <div className="space-y-10">
            {contactInfo.map(
              ({ icon, title, value, href, note, bg }: ContactItem) => (
                <div key={title} className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${bg}`}>{icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {title}
                    </h3>

                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="whitespace-pre-line font-medium text-gray-800">
                        {value}
                      </p>
                    )}

                    {note && <p className="text-sm text-gray-500">{note}</p>}

                    {title === "Address" && (
                      <a
                        href="https://maps.app.goo.gl/z28aNypbZ3c27q3n7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                      >
                        <Map className="h-4 w-4" />
                        View on Google Maps
                      </a>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right: form */}
          <div className="relative rounded-2xl bg-white/70 p-8 shadow-2xl backdrop-blur-md">
            {sent ? (
              <div className="space-y-2 text-center animate-fadeIn">
                <h3 className="text-2xl font-bold text-green-600">
                  ✅ Message sent!
                </h3>
                <p className="text-gray-700">We’ll reply shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Drop us a message
                </h3>

                <form
                  action="https://formsubmit.co/travelbeescknr@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Anti-spam / configs */}
                  <input type="hidden" name="_subject" value="Website enquiry" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" className="hidden" />

                  {/* Name row */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="First Name" name="firstName" />
                    <Field label="Last Name" name="lastName" />
                  </div>

                  {/* Email */}
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />

                  {/* Service select */}
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Interested Service
                    </label>
                    <select
                      name="serviceInterest"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Choose one</option>
                      <option>Job Recruitment Solutions</option>
                      <option>Tours & Travels</option>
                      <option>Abroad Placement Assistance</option>
                      <option>Airline Ticketing</option>
                      <option>Personality Development</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Share your needs or questions..."
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 px-6 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-blue-600"
                  >
                    ✉️ Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* ───── Reusable Field ───── */
const Field: React.FC<FieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
}) => (
  <div>
    <label htmlFor={name} className="mb-1 block text-sm font-medium">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required
      placeholder={placeholder ?? label}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
