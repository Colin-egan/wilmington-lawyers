import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a consultation with Bradley Coxe. Call 910-834-8400 or send a message. Located at 3907 Wrightsville Ave, Wilmington, NC.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        heading="Contact Us"
        subheading="Schedule a Free Consultation"
      />

      <section className="py-16 bg-white" aria-labelledby="contact-heading">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 id="contact-heading" className="section-heading mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Please do not include confidential or sensitive information in this form.
              Submitting this form does not create an attorney-client relationship.
            </p>
            <form className="space-y-5" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                  placeholder="(910) 555-1234"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold resize-none"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full text-center"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-navy text-white rounded-xl p-8">
              <h3 className="font-sans font-bold text-gold text-xl mb-6">Office Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-xs mb-1">Address</p>
                  <p className="text-white">3907 Wrightsville Ave #200</p>
                  <p className="text-white">Wilmington, NC 28403</p>
                </div>
                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-xs mb-1">Phone</p>
                  <a href="tel:+19108348400" className="text-gold font-bold text-lg hover:text-gold-light transition-colors">
                    910-834-8400
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-xs mb-1">Email</p>
                  <a href="mailto:bradley@wilmingtonlawyers.com" className="text-gray-200 hover:text-gold transition-colors">
                    bradley@wilmingtonlawyers.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-sans font-bold text-navy text-lg mb-3">Serving All of New Hanover County</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cape Fear, Federal Point, Harnett, Kings Grant, Kirkland, Masonboro,
                Murraysville, Myrtle Grove, Northchase, Ogden, Porters Neck, Silver Lake,
                Wilmington, and Wrightsboro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
