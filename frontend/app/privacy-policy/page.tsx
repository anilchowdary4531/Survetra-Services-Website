import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy | Survetra Services",
  description: "Learn how Survetra Services collects, handles, stores, and protects personal information across our website and product ecosystem.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-survetra-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400">
          {COMPANY_INFO.legalName} ("Survetra", "we", "us", or "our") is committed to respecting and protecting the privacy of visitors, partners, and users of our digital platforms.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-8 text-sm text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              We collect information that you directly provide when submitting contact forms, requesting product demonstrations for Tiffzy or SocialSea, subscribing to technical insights, or applying for engineering positions. This may include your full name, business email address, phone number, company name, resume/CV files, and any message details you provide.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. How We Use Collected Data</h2>
            <p>
              Survetra uses collected information strictly for legitimate commercial and operational purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Responding to your technical inquiries and scoping software projects.</li>
              <li>Evaluating qualifications for advertised employment opportunities.</li>
              <li>Providing access to product demonstrations and API documentation.</li>
              <li>Ensuring platform integrity, preventing spam, and auditing security events.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Information Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or lease your personal information to third parties. We may share data with vetted infrastructure providers (such as cloud hosting and email delivery services) operating under strict data protection agreements, or when required by applicable statutory laws.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Data Security & Storage</h2>
            <p>
              We implement industry-standard technical and organizational security controls, including TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access restrictions, and immutable audit logging.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Your Rights & Contact Information</h2>
            <p>
              You have the right to access, rectify, or request deletion of your personal data held by Survetra Services. For any privacy requests or questions, please contact our Data Protection Officer at:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] text-xs font-mono text-slate-300">
              Survetra Services Private Limited<br />
              Attn: Data Privacy Officer<br />
              Email: privacy@survetra.com<br />
              Bengaluru, Karnataka, India
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

