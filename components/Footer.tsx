import Link from "next/link";

const practiceAreas = [
  { label: "Accidents", href: "/accidents" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Business Law", href: "/business" },
  { label: "About Bradley Coxe", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="container-xl py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex flex-col leading-tight mb-4">
            <span className="font-sans font-bold text-lg text-white">Law Office of</span>
            <span className="font-sans font-bold text-2xl text-gold">Bradley Coxe</span>
          </div>
          <p className="text-sm leading-relaxed">
            Accidents, Injury, HOA and Business Law Trial Attorney serving Wilmington and
            all of New Hanover County, NC.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
            Practice Areas
          </h3>
          <ul className="space-y-2">
            {practiceAreas.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
            Contact
          </h3>
          <address className="not-italic space-y-2 text-sm">
            <p>3907 Wrightsville Ave #200</p>
            <p>Wilmington, NC 28403</p>
            <p className="mt-3">
              <a
                href="tel:+19108348400"
                className="text-gold hover:text-gold-light font-semibold transition-colors"
              >
                910-834-8400
              </a>
            </p>
            <p>
              <a
                href="mailto:bradley@wilmingtonlawyers.com"
                className="hover:text-gold transition-colors"
              >
                bradley@wilmingtonlawyers.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Service area */}
      <div className="border-t border-navy-light py-4">
        <div className="container-xl">
          <p className="text-xs text-gray-400 leading-relaxed">
            We serve clients throughout North Carolina, including New Hanover County: Cape Fear,
            Federal Point, Harnett, Kings Grant, Kirkland, Masonboro, Murraysville, Myrtle Grove,
            Northchase, Ogden, Porters Neck, Silver Lake, Wilmington, and Wrightsboro.
          </p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-navy-light py-4">
        <div className="container-xl flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
          <p className="text-xs text-gray-500 flex-1">
            © {new Date().getFullYear()} Law Office of Bradley Coxe. The information on this
            website is for general information purposes only and does not constitute legal advice.
            No attorney-client relationship is created by visiting this site.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
