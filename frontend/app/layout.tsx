import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://survetra.com"),
  title: {
    default: "Survetra Services — Engineering the Future. Building What Matters.",
    template: "%s | Survetra Services",
  },
  description:
    "Survetra Services builds intelligent digital products, scalable software platforms, and technology solutions. Creators of Tiffzy and SocialSea.",
  keywords: [
    "Survetra Services",
    "Tiffzy",
    "SocialSea",
    "Enterprise Software",
    "Artificial Intelligence",
    "Generative AI",
    "Cloud Architecture",
    "Software Development India",
    "Restaurant Management Platform",
    "Microservices",
  ],
  authors: [{ name: "Survetra Services" }],
  creator: "Survetra Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://survetra.com",
    siteName: "Survetra Services",
    title: "Survetra Services — Engineering the Future. Building What Matters.",
    description:
      "Survetra Services builds intelligent digital products, scalable software platforms, and enterprise technology solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Survetra Services — Global Technology Corporate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Survetra Services",
    description: "Engineering the Future. Building What Matters.",
    creator: "@SurvetraHQ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: "https://survetra.com",
    logo: "https://survetra.com/logo.png",
    description: COMPANY_INFO.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "customer service",
      email: COMPANY_INFO.email,
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#10121C] text-white antialiased font-sans selection:bg-survetra-orange selection:text-white">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
