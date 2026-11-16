import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/api";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Cpu 
} from "lucide-react";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const study = await getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Survetra Services Case Study`,
    description: study.challenge,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const study = await getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Back Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-survetra-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
              {study.industry}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-400 font-mono">
              {study.clientName}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            An in-depth analysis of architectural constraints, distributed engineering strategies, and validated business outcomes.
          </p>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#161926] border border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          {study.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {m.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                The Operational & Technical Challenge
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                Architectural Solution & Deployment Strategy
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {study.solution}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                Technical Deliverables & Architectural Outcomes
              </h2>
              <div className="space-y-3">
                {study.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#161926] border border-white/[0.08] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-4">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Technology Stack Used
              </span>
              <div className="flex flex-wrap gap-2">
                {study.technologiesUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {study.testimonialQuote && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E2235] to-[#161926] border border-white/[0.08] space-y-4">
                <span className="text-xs font-semibold text-survetra-orange uppercase tracking-wider">
                  Client Endorsement
                </span>
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  "{study.testimonialQuote}"
                </p>
                <div className="text-xs font-semibold text-white">
                  — {study.testimonialAuthor}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-3">
              <h4 className="text-sm font-bold text-white">
                Interested in Similar Outcomes?
              </h4>
              <p className="text-xs text-slate-300">
                Let's discuss how our engineering patterns apply to your infrastructure.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors shadow-md"
              >
                Schedule Technical Review
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

