import React from "react";
import Link from "next/link";
import { getCaseStudies } from "@/lib/api";
import { ArrowRight, ArrowUpRight, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Case Studies & Client Impact | Survetra Services",
  description: "Read real-world case studies detailing how Survetra Services architectures deliver quantifiable performance, uptime, and efficiency improvements.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Architecture Blueprints & Patterns
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Proof of engineering rigor in complex environments.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Explore our engineering blueprints, event-driven topologies, distributed database patterns, and cloud modernization strategies.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="p-8 sm:p-12 rounded-3xl bg-[#161926] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-survetra-orange">
                    {study.industry}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-400 font-mono">
                    {study.clientName}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                  {study.title}
                </h2>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-white">The Challenge: </strong>
                    {study.challenge}
                  </div>
                  <div>
                    <strong className="text-white">The Solution: </strong>
                    {study.solution}
                  </div>
                </div>

                {/* Key Results */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Technical Deliverables & Outcomes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-survetra-orange flex-shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors shadow-md"
                  >
                    Read Full Technical Breakdown
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Metrics & Testimonial */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-2xl bg-[#1D2132] border border-white/[0.08] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Architectural Specifications
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03]">
                        <div className="text-xl font-display font-bold text-white">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {study.testimonialQuote && (
                  <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{study.testimonialQuote}"
                    </p>
                    <div className="text-[11px] font-semibold text-survetra-orange">
                      — {study.testimonialAuthor}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Ready to achieve similar operational breakthroughs?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Contact our Principal Architects to explore how our engineering models can be applied to your organization.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

