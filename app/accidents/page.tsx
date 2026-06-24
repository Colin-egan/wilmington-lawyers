import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import ContactBar from "@/components/ContactBar";

export const metadata: Metadata = {
  title: "Accidents & Personal Injury",
  description:
    "Experienced legal support for car, truck, motorcycle, and 18-wheeler accidents in Wilmington, NC. Call 910-834-8400.",
};

const services = [
  {
    name: "Car Accidents",
    body: "Experienced car accident attorneys dedicated to protecting your rights and maximizing your recovery — from minor fender-benders to catastrophic collisions.",
  },
  {
    name: "Trucking & 18-Wheeler Accidents",
    body: "Trusted attorneys for 18-wheeler accidents, focused on guiding you through the complex legal process and pursuing maximum recovery against trucking companies.",
  },
  {
    name: "Motorcycle Accidents",
    body: "Motorcycle accident specialists who understand the unique risks riders face and work relentlessly to get you the justice and compensation you deserve.",
  },
  {
    name: "Slip & Fall / Premises Liability",
    body: "Whether from a wet floor, uneven sidewalk, or negligent property maintenance, we hold property owners accountable for the injuries they cause.",
  },
  {
    name: "Medical Malpractice",
    body: "When medical professionals fail to meet the standard of care, we pursue the full compensation owed to you and your family.",
  },
];

const steps = [
  {
    step: "1",
    title: "Learn About Your Case",
    body: "We listen carefully to the details of your accident and explain your legal rights and options.",
  },
  {
    step: "2",
    title: "Develop a Strategy",
    body: "We investigate the facts, gather evidence, and build the strongest possible case on your behalf.",
  },
  {
    step: "3",
    title: "Fight for Your Rights",
    body: "We negotiate aggressively with insurers and, when necessary, take your case to court.",
  },
];

export default function AccidentsPage() {
  return (
    <>
      <PageHero
        heading="Accidents & Personal Injury"
        subheading="Your Advocate for Justice and Compensation"
        cta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-xl max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Law Office of Bradley Coxe provides experienced legal support for all types of
            accident and personal injury claims. We work tirelessly to ensure victims and their
            families receive full compensation for their injuries, medical bills, lost wages,
            and pain and suffering.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50" aria-labelledby="services-heading">
        <div className="container-xl">
          <h2 id="services-heading" className="section-heading text-center mb-10">
            How We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold"
              >
                <h3 className="font-sans font-bold text-navy text-lg mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-navy" aria-labelledby="process-heading">
        <div className="container-xl">
          <h2 id="process-heading" className="text-3xl font-sans font-bold text-white text-center mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-sans font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{s.body}</p>
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
