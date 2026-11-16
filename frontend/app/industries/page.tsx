import React from "react";
import Link from "next/link";
import { getIndustries } from "@/lib/api";
import { 
  Building2, 
  UtensilsCrossed, 
  Landmark, 
  Share2, 
  Truck, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp 
} from "lucide-react";

export const metadata = {
  title: "Industries & Vertical Solutions | Survetra Services",
  description: "Specialized domain software solutions across Food & Restaurant, FinTech, Enterprise, Social Media, Logistics, and Healthcare.",
};

const iconMap: Record<string, any> = {
  UtensilsCrossed,
  Landmark,
  Building2,
  Share2,
  Truck,
  Activity,
};

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-survetra-violet uppercase tracking-wider">
            Industry Verticals & Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Tailored software architecture for complex vertical domains.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Every industry presents distinct regulatory, architectural, and operational constraints. We combine proven vertical domain experience with enterprise software engineering.
          </p>
        </div>
      </section>

      {/* Industries Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {industries.map((ind, idx) => {
          const Icon = iconMap[ind.iconName] || Building2;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={ind.id}
              id={ind.slug}
              className="p-8 sm:p-12 rounded-3xl bg-[#161926] border border-white/[0.08] scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className={`space-y-6 ${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-survetra-orange">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                        {ind.name}
                      </h2>
                      <span className="text-xs text-survetra-orange-light font-medium">
                        {ind.tagline}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Key Software Architectures Deployed:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ind.keySolutions.map((sol, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-survetra-orange flex-shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {ind.featuredProducts && ind.featuredProducts.length > 0 && (
                    <div className="pt-2 flex items-center gap-3">
                      <span className="text-xs text-slate-400">Featured Proprietary Product:</span>
                      {ind.featuredProducts.map((p, i) => (
                        <Link
                          key={i}
                          href={`/products/${p.toLowerCase().replace(/\s+/g, "-")}`}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-survetra-orange/15 text-survetra-orange border border-survetra-orange/30 hover:bg-survetra-orange/25 transition-colors"
                        >
                          {p} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right/Side Card: Impact Metrics */}
                <div className={`p-6 sm:p-8 rounded-2xl bg-[#1D2132] border border-white/[0.08] space-y-6 ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}>
                  <div className="flex items-center gap-2 text-survetra-orange text-xs font-semibold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    Architectural Capabilities & Focus
                  </div>

                  <div className="space-y-4">
                    {ind.impactHighlights.map((m, i) => (
                      <div key={i} className="border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                        <div className="text-2xl font-display font-extrabold text-white">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?industry=${ind.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    Consult Industry Specialist
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Don’t see your exact industry listed?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Our core architectural patterns apply across all data-intensive, security-sensitive, and high-concurrency domains.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors"
          >
            Schedule a Custom Scoping Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

