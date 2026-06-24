import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import ContactBar from "@/components/ContactBar";

export const metadata: Metadata = {
  title: "Wilmington Business Lawyer",
  description:
    "Consumer law, breach of contract, fraud, and Chapter 75 deceptive trade practices in Wilmington, NC. Call 910-834-8400.",
};

const services = [
  {
    name: "Consumer Law",
    body: "We clarify your rights, ensure compliance, and help resolve disputes involving unfair or deceptive consumer practices.",
  },
  {
    name: "Breach of Contract",
    body: "We interpret agreements, identify violations, and work toward fair remedies or settlements for broken contractual obligations.",
  },
  {
    name: "Fraud",
    body: "We expose deceptive conduct, hold parties accountable, and seek proper compensation for fraud victims.",
  },
  {
    name: "Chapter 75 — Deceptive & Unfair Trade Practices",
    body: "We address dishonest business practices and pursue just outcomes under North Carolina's Unfair and Deceptive Trade Practices Act.",
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        heading="Business Law"
        subheading="Experienced Business Law Guidance in Wilmington, NC"
        cta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      <section className="py-16 bg-white">
        <div className="container-xl max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            We handle Consumer Law, Breach of Contract, Fraud, and Chapter 75 Deceptive and
            Unfair Trade Practice cases — clarifying regulations and pursuing fair resolutions
            for businesses and individuals throughout North Carolina.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50" aria-labelledby="biz-services-heading">
        <div className="container-xl">
          <h2 id="biz-services-heading" className="section-heading text-center mb-10">
            Business Law Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-gold">
                <h3 className="font-sans font-bold text-navy text-xl mb-3">{s.name}</h3>
                <p className="text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactBar />
    </>
  );
}
