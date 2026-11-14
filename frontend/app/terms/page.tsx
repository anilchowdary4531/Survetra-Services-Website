import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Terms and Conditions | Survetra Services",
  description: "Terms and conditions governing the access, use, and intellectual property rights associated with Survetra Services and our website.",
};

export default function TermsPage() {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange">
          <FileText className="w-3.5 h-3.5" />
          <span>Effective: November 2026</span>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-white tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-sm text-slate-400">
          Please read these terms carefully before accessing or using the corporate web platform and digital properties of {COMPANY_INFO.legalName}.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-8 text-sm text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, services, product portals, or technical documentation, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from accessing our services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Proprietary Rights & Intellectual Property</h2>
            <p>
              All materials displayed on this website—including but not limited to the Survetra brand, logo, design system, source code, software architecture diagrams, case studies, product trademarks (including Tiffzy, SocialSea, and Survetra Nexus)—are the exclusive intellectual property of Survetra Services Private Limited. No content may be reproduced, modified, distributed, or licensed without prior written authorization.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Permitted Use</h2>
            <p>
              You agree to use our digital assets solely for lawful informational and business inquiry purposes. You agree not to attempt to probe, scan, or test the vulnerability of any Survetra system or network, or breach any security or authentication measures.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Disclaimers & Limitation of Liability</h2>
            <p>
              While Survetra makes every effort to ensure the accuracy and availability of information presented on this site, all materials are provided "as is" without warranties of any kind, whether express or implied.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute or proceeding arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

