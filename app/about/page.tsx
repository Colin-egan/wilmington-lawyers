import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBar from "@/components/ContactBar";

export const metadata: Metadata = {
  title: "About Bradley Coxe",
  description:
    "Bradley Coxe — Wilmington trial lawyer with 30+ years of experience. UNC Law graduate, Top 100 NC Trial Lawyer, 10.0 Avvo rating.",
};

const admissions = [
  "North Carolina, 1995",
  "South Carolina, 1997",
  "U.S. Court of Appeals, Fourth Circuit, 1997",
  "U.S. District Court, Eastern District of North Carolina, 1997",
  "U.S. District Court, Middle District of North Carolina, 1999",
  "U.S. Supreme Court, 2001",
];

const honors = [
  "Martindale-Hubbell Distinguished",
  "Top 100 Litigation Lawyer in NC — American Society of Legal Advocates",
  "The National Trial Lawyers Top 100",
  "10.0 Avvo Rating",
];

const barAssociations = [
  "North Carolina State Bar",
  "New Hanover County Bar Association",
  "North Carolina Bar Association",
  "South Carolina State Bar",
  "North Carolina Advocates for Justice",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        heading="Bradley Coxe"
        subheading="Wilmington Trial Attorney"
      />

      <section className="py-16 bg-white" aria-labelledby="bio-heading">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Photo + contact */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-6 aspect-[3/4] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.wilmingtonlawyers.com/static/2025/04/AttorneyProfile.jpg"
                alt="Bradley Coxe, Attorney"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-navy text-white rounded-xl p-6 space-y-3">
              <h3 className="font-sans font-bold text-gold text-lg">Contact Bradley</h3>
              <p className="text-sm text-gray-300">3907 Wrightsville Ave #200<br />Wilmington, NC 28403</p>
              <a href="tel:+19108348400" className="block text-gold font-bold hover:text-gold-light transition-colors">
                910-834-8400
              </a>
              <a href="mailto:bradley@wilmingtonlawyers.com" className="block text-sm text-gray-300 hover:text-gold transition-colors">
                bradley@wilmingtonlawyers.com
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2">
            <h2 id="bio-heading" className="section-heading">About Bradley Coxe</h2>
            <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
              <p>
                In 1991, after graduating from the University of North Carolina at Chapel Hill
                with a degree in political science, Bradley attended the UNC School of Law.
                Three years and one national championship later, he graduated and began working
                as a trial lawyer for Anderson, Cox and Ennis.
              </p>
              <p>
                In 2005, Bradley started Hodges &amp; Coxe P.C. with friend and fellow UNC
                graduate Wes Hodges. Over his career, Bradley has represented both plaintiffs
                and defendants across all types of civil litigation — personal injury, medical
                malpractice, construction disputes, employment and business disputes, and other
                contract matters.
              </p>
              <p>
                Bradley is married to Julie Hays Coxe and they have two children together.
                He serves on the board of The Thalian Association, North Carolina's Official
                Community Theater, and is a former chairman of the Cape Fear Chapter of the
                American Red Cross.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Admissions */}
              <div>
                <h3 className="font-sans font-bold text-navy text-lg mb-3 border-b border-gold pb-2">
                  Jurisdictions Admitted
                </h3>
                <ul className="space-y-1.5">
                  {admissions.map((a) => (
                    <li key={a} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-gold mt-0.5">✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Honors */}
              <div>
                <h3 className="font-sans font-bold text-navy text-lg mb-3 border-b border-gold pb-2">
                  Honors &amp; Recognition
                </h3>
                <ul className="space-y-1.5">
                  {honors.map((h) => (
                    <li key={h} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-gold mt-0.5">★</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <h3 className="font-sans font-bold text-navy text-lg mb-3 border-b border-gold pb-2 mt-6">
                  Bar Associations
                </h3>
                <ul className="space-y-1.5">
                  {barAssociations.map((b) => (
                    <li key={b} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-gold mt-0.5">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBar />
    </>
  );
}
