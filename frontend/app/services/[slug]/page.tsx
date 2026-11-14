import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "@/lib/api";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  HelpCircle 
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Survetra Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Top Breadcrumb / Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-survetra-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            {service.category}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light">
            {service.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-lg shadow-orange-500/20 transition-all"
            >
              Engage This Studio
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-white/[0.05] border border-white/10 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              View Related Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Deep Narrative & Deliverables */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                Architectural Approach & Philosophy
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-white tracking-tight">
                Technical Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#161926] border border-white/[0.08] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-survetra-orange flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concrete Deliverables */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-white tracking-tight">
                Tangible Engineering Deliverables
              </h3>
              <div className="space-y-3">
                {service.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#161926]/60 border border-white/[0.06] flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-survetra-violet text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm text-slate-300">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack, Business Impact & Sidebar Widget */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech Stack Widget */}
            <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Production Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantifiable Business Impact */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E2235] to-[#161926] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-survetra-orange text-xs font-semibold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                Business Value
              </div>
              <h4 className="text-lg font-bold text-white">
                Expected Outcomes
              </h4>
              <ul className="space-y-3">
                {service.businessImpact.map((impact, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-survetra-orange flex-shrink-0 mt-1.5" />
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Quick Contact */}
            <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-4">
              <h4 className="text-base font-bold text-white">
                Discuss Your Requirements
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our practice leads for a confidential technical scoping discussion.
              </p>
              <Link
                href={`/contact?subject=${encodeURIComponent(`Inquiry: ${service.title}`)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors shadow-md"
              >
                Schedule Technical Scoping
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

