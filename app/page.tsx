import type { Metadata } from "next";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import ContactBar from "@/components/ContactBar";

export const metadata: Metadata = {
  title: "Wilmington Accident Lawyer | Law Office of Bradley Coxe",
  description:
    "Law Office of Bradley Coxe — over 30 years of experience in Accidents, Personal Injury, HOA, Real Estate and Business Law in Wilmington, NC. Call 910-834-8400.",
};

const practiceAreas = [
  {
    label: "Accidents & Personal Injury",
    icon: "⚖️",
    body: "Car, truck, motorcycle, and 18-wheeler accidents. Slip and fall and workplace injuries. We fight to secure the compensation you deserve.",
    href: "/accidents",
  },
  {
    label: "Real Estate & HOA",
    icon: "🏠",
    body: "Homeowner rights, HOA disputes, boundary conflicts, and easements. Experienced representation to safeguard your property.",
    href: "/real-estate",
  },
  {
    label: "Business Law",
    icon: "📋",
    body: "Consumer law, breach of contract, fraud, and Chapter 75 deceptive trade practice cases. We clarify regulations and pursue fair resolutions.",
    href: "/business",
  },
  {
    label: "Medical Malpractice",
    icon: "🏥",
    body: "When medical professionals fall short of the standard of care, we hold them accountable and pursue the compensation you're owed.",
    href: "/accidents",
  },
];

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "100s", label: "Cases Handled" },
  { value: "Top 100", label: "NC Trial Lawyer" },
  { value: "10.0", label: "Avvo Rating" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-navy min-h-[70vh] flex items-center"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy opacity-95" />
        <div className="container-xl relative z-10 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-4">
              Your Wilmington Lawyer
            </p>
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-sans font-bold text-white leading-tight mb-6"
            >
              Accidents, Injury, HOA &amp; Business Law
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With over 30 years and hundreds of cases, the Law Office of Bradley Coxe is
              ready to protect your rights and fight for the outcome you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+19108348400" className="btn-primary text-center">
                Call 910-834-8400
              </a>
              <Link href="/contact" className="btn-outline text-center">
                Free Consultation
              </Link>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 rounded-xl p-6 text-center border border-white/20"
              >
                <div className="text-4xl font-bold text-gold mb-1">{s.value}</div>
                <div className="text-gray-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white" aria-labelledby="intro-heading">
        <div className="container-xl text-center max-w-3xl mx-auto">
          <h2 id="intro-heading" className="section-heading">
            Your Go-To Legal Resource in Wilmington
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            From real estate litigation to personal injury and traffic citations, we are ready
            to partner with you and protect your rights. No stone will be left unturned and
            every possible avenue will be considered for your specific situation.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-gray-50" aria-labelledby="practice-areas-heading">
        <div className="container-xl">
          <h2 id="practice-areas-heading" className="section-heading text-center mb-10">
            Knowledge &amp; Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.href + area.label}
                href={area.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border-t-4 border-gold flex flex-col"
              >
                <span className="text-3xl mb-3" aria-hidden="true">{area.icon}</span>
                <h3 className="font-sans font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">
                  {area.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{area.body}</p>
                <span className="text-gold text-sm font-semibold mt-4 group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactBar />
    </>
  );
}
