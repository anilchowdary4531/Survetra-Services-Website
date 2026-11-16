import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  ShieldCheck, 
  HeartHandshake 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C0E17] border-t border-white/[0.08] relative overflow-hidden text-slate-300">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-t from-survetra-violet/10 via-survetra-orange/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo showTagline={true} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Survetra Services designs, engineers, and operates high-performance software platforms and intelligent digital ecosystems that power modern business operations.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-survetra-orange flex-shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-survetra-orange flex-shrink-0" />
                <a href="mailto:sureshbabu@survetra.com" className="hover:text-white transition-colors">
                  sureshbabu@survetra.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-survetra-orange flex-shrink-0" />
                <a href="tel:+91777764632" className="hover:text-white transition-colors">
                  +91 77776 4632
                </a>
              </div>
            </div>

            {/* System Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Col 2: Product Ecosystem */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              Product Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/tiffzy" className="text-slate-400 hover:text-survetra-orange transition-colors flex items-center justify-between group">
                  <span>Tiffzy (Restaurant Tech)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/products/socialsea" className="text-slate-400 hover:text-survetra-orange transition-colors flex items-center justify-between group">
                  <span>SocialSea (Social Network)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/products/survetra-nexus" className="text-slate-400 hover:text-survetra-orange transition-colors flex items-center justify-between group">
                  <span>Survetra Nexus (AI Agents)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-survetra-orange hover:text-survetra-orange-light transition-colors font-medium">
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/ai-and-machine-learning" className="text-slate-400 hover:text-white transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/generative-ai-and-llm" className="text-slate-400 hover:text-white transition-colors">
                  Generative AI & LLMs
                </Link>
              </li>
              <li>
                <Link href="/services/rag-and-ai-agents" className="text-slate-400 hover:text-white transition-colors">
                  RAG & Autonomous Agents
                </Link>
              </li>
              <li>
                <Link href="/services/backend-engineering" className="text-slate-400 hover:text-white transition-colors">
                  Backend Microservices
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-and-devops" className="text-slate-400 hover:text-white transition-colors">
                  Cloud & Kubernetes
                </Link>
              </li>
              <li>
                <Link href="/services/web-application-development" className="text-slate-400 hover:text-white transition-colors">
                  Modern Web Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Governance */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-slate-400 hover:text-white transition-colors">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies & Architecture
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="text-slate-400 hover:text-white transition-colors">
                  Innovation & Labs
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-white transition-colors">
                  Insights & Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-survetra-orange/20 text-survetra-orange font-semibold">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer: Legal, Compliance, & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} Survetra Services Pvt. Ltd. All rights reserved.</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Enterprise-Grade Security Standards
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/admin/login" className="hover:text-slate-300 transition-colors">
              Staff Sign In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

