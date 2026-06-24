"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Accidents", href: "/accidents" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Business", href: "/business" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-navy-dark py-2">
        <div className="container-xl flex justify-end items-center gap-4 text-sm">
          <span className="text-gray-300">Contact Us Now:</span>
          <a
            href="tel:+19108348400"
            className="font-bold text-gold hover:text-gold-light transition-colors"
            aria-label="Call 910-834-8400"
          >
            910-834-8400
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-xl py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Law Office of Bradley Coxe — Home">
          {/* Text logo fallback for improved accessibility */}
          <div className="flex flex-col leading-tight">
            <span className="font-sans font-bold text-xl text-white">Law Office of</span>
            <span className="font-sans font-bold text-2xl text-gold">Bradley Coxe</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-200 hover:text-gold transition-colors uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-navy-dark border-t border-navy-light"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-semibold text-gray-200 hover:text-gold hover:bg-navy transition-colors border-b border-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
