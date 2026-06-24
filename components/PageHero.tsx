import Link from "next/link";

interface PageHeroProps {
  heading: string;
  subheading?: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ heading, subheading, cta }: PageHeroProps) {
  return (
    <section
      className="bg-navy py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="page-hero-heading"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-light opacity-80" />
      <div className="container-xl relative z-10 text-center md:text-left">
        <h1
          id="page-hero-heading"
          className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight mb-4"
        >
          {heading}
        </h1>
        {subheading && (
          <p className="text-lg md:text-xl text-gold font-semibold mb-6">{subheading}</p>
        )}
        {cta && (
          <Link href={cta.href} className="btn-primary">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
