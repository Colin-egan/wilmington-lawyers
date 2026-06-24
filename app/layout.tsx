import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Law Office of Bradley Coxe",
    default: "Wilmington Accident Lawyer | Law Office of Bradley Coxe",
  },
  description:
    "Law Office of Bradley Coxe — Accidents, Personal Injury, HOA, Real Estate and Business Law in Wilmington, NC. Call 910-834-8400.",
  keywords: [
    "Wilmington lawyer",
    "accident attorney",
    "personal injury",
    "HOA dispute",
    "North Carolina",
    "Bradley Coxe",
  ],
  openGraph: {
    siteName: "Law Office of Bradley Coxe",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
