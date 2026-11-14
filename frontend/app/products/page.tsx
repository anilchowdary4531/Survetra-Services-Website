import React from "react";
import Link from "next/link";
import { getProducts } from "@/lib/api";
import { 
  ArrowRight, 
  ArrowUpRight, 
  UtensilsCrossed, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Activity 
} from "lucide-react";

export const metadata = {
  title: "Product Ecosystem | Survetra Services",
  description: "Explore Survetra Services' proprietary software products: Tiffzy (Restaurant & Food Service Ecosystem), SocialSea (Social Networking Engine), and Nexus AI.",
};

const iconMap: Record<string, any> = {
  tiffzy: UtensilsCrossed,
  socialsea: Share2,
  "survetra-nexus": Sparkles,
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Proprietary Platforms & Ecosystems
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Software products engineered, owned and operated by Survetra.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            In addition to enterprise solutions, Survetra builds and scales proprietary consumer and business platforms designed for massive concurrency, transactional integrity, and joyful user experiences.
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {products.map((product, idx) => {
          const Icon = iconMap[product.slug] || Cpu;
          const isTiffzy = product.slug === "tiffzy";
          const isSocialSea = product.slug === "socialsea";

          return (
            <div
              key={product.id}
              className={`p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#161926] border transition-all duration-300 ${
                isTiffzy
                  ? "border-orange-500/30 shadow-lg shadow-orange-500/5"
                  : isSocialSea
                  ? "border-violet-500/30 shadow-lg shadow-violet-500/5"
                  : "border-white/[0.08]"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Product Info & Core Features */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          isTiffzy
                            ? "bg-orange-500/15 border border-orange-500/30 text-survetra-orange"
                            : isSocialSea
                            ? "bg-violet-500/15 border border-violet-500/30 text-survetra-violet"
                            : "bg-blue-500/15 border border-blue-500/30 text-blue-400"
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-extrabold text-white">
                          {product.name}
                        </h2>
                        <span className="text-xs text-slate-400 font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        product.status === "Production"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : product.status === "Beta"
                          ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <p className="text-lg font-medium text-slate-200 leading-snug">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Feature Breakdown */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Core Functional Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feat, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1"
                        >
                          <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                isTiffzy
                                  ? "text-survetra-orange"
                                  : isSocialSea
                                  ? "text-survetra-violet"
                                  : "text-blue-400"
                              }`}
                            />
                            {feat.title}
                          </div>
                          <p className="text-[11px] text-slate-400 leading-tight">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all shadow-md ${
                        isTiffzy
                          ? "bg-survetra-orange hover:bg-survetra-orange-hover shadow-orange-500/20"
                          : isSocialSea
                          ? "bg-survetra-violet hover:bg-survetra-violet-hover shadow-violet-500/20"
                          : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
                      }`}
                    >
                      Explore Deep Architecture & Features
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {product.relatedCaseStudySlug && (
                      <Link
                        href={`/case-studies/${product.relatedCaseStudySlug}`}
                        className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                      >
                        Read Deployment Case Study
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Column: Verified Metrics & Architecture Stack */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Real Metrics Box */}
                  {product.metrics && product.metrics.length > 0 && (
                    <div className="p-6 rounded-2xl bg-[#1D2132] border border-white/[0.08] space-y-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
                        <Activity className="w-4 h-4 text-emerald-400" />
                        Verified Operational Benchmarks
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {product.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white/[0.03]">
                            <div className="text-xl font-display font-extrabold text-white">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture & Tech Stack */}
                  <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-4">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Engineered With
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Partnership & Licensing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-survetra-orange/15 via-[#161926] to-survetra-violet/15 border border-white/10 p-10 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Interested in deploying or licensing our product platforms?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            We partner with restaurant chains, multi-brand hospitality groups, digital media syndicates, and enterprise customers globally.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?category=PRODUCT_INQUIRY"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-lg shadow-orange-500/25 transition-all"
            >
              Contact Product Partnerships
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

