import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import ContactBar from "@/components/ContactBar";

export const metadata: Metadata = {
  title: "Wilmington Real Estate Lawyer",
  description:
    "Protecting your rights in HOA disputes, boundary conflicts, and property litigation in Wilmington, NC. Call 910-834-8400.",
};

const services = [
  {
    name: "Homeowner's Rights & HOA Litigation",
    body: "Representing homeowners in disputes with HOAs to protect property rights and community standards. We understand the power imbalance and fight to level the playing field.",
  },
  {
    name: "Property Boundary Disputes",
    body: "Helping you resolve boundary conflicts fairly and protect your property lines through surveys, legal analysis, and litigation when needed.",
  },
  {
    name: "Easements",
    body: "Guiding you through easement disputes — whether access, utility, or drainage — to ensure fair usage rights are established and protected.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <PageHero
        heading="Real Estate & Property Law"
        subheading="Protecting Your Rights in Property and Consumer Litigation"
        cta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      <section className="py-16 bg-white">
        <div className="container-xl max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            From defending homeowner rights to resolving boundary disputes, the Law Office of
            Bradley Coxe offers experienced representation to safeguard your property and consumer
            rights throughout North Carolina.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50" aria-labelledby="re-services-heading">
        <div className="container-xl">
          <h2 id="re-services-heading" className="section-heading text-center mb-10">
            Real Estate Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-gold">
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
