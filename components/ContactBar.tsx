import Link from "next/link";

export default function ContactBar() {
  return (
    <section className="bg-navy py-12" aria-labelledby="cta-heading">
      <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 id="cta-heading" className="text-2xl font-sans font-bold text-white mb-1">
            Ready to Protect Your Rights?
          </h2>
          <p className="text-gray-300 text-sm">
            Call us or schedule a consultation — we're ready to help.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+19108348400" className="btn-primary text-center">
            Call 910-834-8400
          </a>
          <Link href="/contact" className="btn-outline text-center">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
