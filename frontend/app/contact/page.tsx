import React from "react";
import ContactForm from "@/components/ContactForm";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Building2 
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Contact & Business Inquiries | Survetra Services",
  description: "Connect with Survetra Services for enterprise software inquiries, product licensing for Tiffzy & SocialSea, or strategic partnerships.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Connect With Our Team
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Let’s discuss your next engineering milestone.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Whether you need a full-scale digital product development partner, an architectural modernization team, or want to deploy Tiffzy or SocialSea, we are here.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#161926] border border-white/[0.08] shadow-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-2">
                Send a Business Inquiry
              </h2>
              <p className="text-xs text-slate-400 mb-8">
                All inquiries are treated with strict enterprise confidentiality.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Direct Corporate Contacts & Office Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-6">
              <h3 className="text-xl font-display font-bold text-white">
                Global Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-survetra-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Headquarters</strong>
                    <span>Survetra Services Private Limited</span><br />
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Mail className="w-5 h-5 text-survetra-orange flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Email Inquiries</strong>
                    <a href="mailto:sureshbabu@survetra.com" className="text-slate-300 hover:text-white transition-colors">
                      sureshbabu@survetra.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-5 h-5 text-survetra-orange flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Direct Telephone</strong>
                    <a href="tel:+91777764632" className="text-slate-300 hover:text-white transition-colors">
                      +91 77776 4632
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Clock className="w-5 h-5 text-survetra-orange flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Business Operations Hours</strong>
                    <span>Monday - Friday: 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Security Commitment */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E2235] to-[#161926] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Data Protection & Privacy
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We sign mutual Non-Disclosure Agreements (NDAs) prior to detailed architecture reviews. Your intellectual property and technical requirements remain strictly protected.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

