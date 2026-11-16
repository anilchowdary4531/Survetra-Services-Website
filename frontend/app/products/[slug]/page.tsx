import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducts, getProductBySlug, getCaseStudyBySlug } from "@/lib/api";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  UtensilsCrossed, 
  Share2, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Layers, 
  ExternalLink 
} from "lucide-react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — ${product.tagline} | Survetra Services`,
    description: product.shortDescription,
  };
}

const iconMap: Record<string, any> = {
  tiffzy: UtensilsCrossed,
  socialsea: Share2,
  "survetra-nexus": Sparkles,
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedCaseStudy = product.relatedCaseStudySlug
    ? await getCaseStudyBySlug(product.relatedCaseStudySlug)
    : undefined;

  const Icon = iconMap[product.slug] || Cpu;
  const isTiffzy = product.slug === "tiffzy";
  const isSocialSea = product.slug === "socialsea";

  return (
    <div className="py-16 md:py-24 space-y-20">
      {/* Back Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-survetra-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Product Ecosystem
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
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
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  {product.category}
                </span>
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                    {product.name}
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      product.status === "Active" || product.status === "Production"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : product.status === "Beta"
                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-snug">
              {product.tagline}
            </p>

            <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
              {product.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href={`/contact?subject=${encodeURIComponent(`Product Partnership: ${product.name}`)}`}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all shadow-md ${
                  isTiffzy
                    ? "bg-survetra-orange hover:bg-survetra-orange-hover shadow-orange-500/20"
                    : isSocialSea
                    ? "bg-survetra-violet hover:bg-survetra-violet-hover shadow-violet-500/20"
                    : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
                }`}
              >
                Request Product Demo / Pilot
                <ArrowRight className="w-4 h-4" />
              </Link>

              {relatedCaseStudy && (
                <Link
                  href={`/case-studies/${relatedCaseStudy.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-white/[0.05] border border-white/10 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  Explore Architecture
                  <ArrowUpRight className="w-4 h-4 text-survetra-orange" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Operational Stats */}
          {product.metrics && product.metrics.length > 0 && (
            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
                <Activity className="w-4 h-4 text-emerald-400" />
                Technical Specifications
              </div>

              <div className="space-y-4">
                {product.metrics.map((m, idx) => (
                  <div key={idx} className="border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                    <div className="text-3xl font-display font-extrabold text-white">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Detailed Feature Breakdown & Core Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-survetra-orange">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural Stack */}
      <section className="bg-[#0C0E17]/80 py-16 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-survetra-orange uppercase tracking-wider">
              Engineering Architecture
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              Underlying Technology Infrastructure
            </h3>
            <p className="text-xs text-slate-400">
              Built on scalable open standards, containerized microservices, and distributed data pipelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {product.techStack.map((tech, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-xl bg-[#161926] border border-white/10 text-sm font-mono text-slate-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      {relatedCaseStudy && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Architecture Blueprint & Implementation
          </span>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#161926] to-[#1D2132] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Solution Pattern: {relatedCaseStudy.industry}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {relatedCaseStudy.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {relatedCaseStudy.challenge}
              </p>
            </div>
            <Link
              href={`/case-studies/${relatedCaseStudy.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover whitespace-nowrap transition-colors"
            >
              Explore Technical Solution
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

