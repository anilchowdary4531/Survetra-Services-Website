import React from "react";
import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  UtensilsCrossed, 
  Share2, 
  Building2, 
  Landmark, 
  Compass, 
  Globe, 
  ChevronRight,
  TrendingUp,
  Award,
  Terminal,
  Clock
} from "lucide-react";
import { 
  getProducts, 
  getServices, 
  getIndustries, 
  getCaseStudies, 
  getArticles 
} from "@/lib/api";

export default async function HomePage() {
  const [products, services, industries, caseStudies, articles] = await Promise.all([
    getProducts(),
    getServices(),
    getIndustries(),
    getCaseStudies(),
    getArticles(),
  ]);

  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 6);
  const featuredIndustries = industries.slice(0, 4);
  const featuredCaseStudies = caseStudies.slice(0, 2);
  const latestArticles = articles.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-hero-glow pointer-events-none" />

      {/* ========================================================================= */}
      {/* SECTION B: HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-survetra-orange animate-pulse" />
                <span className="font-medium">Enterprise Technology & Product Studio</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-extrabold tracking-tight text-white leading-[1.08]">
                Engineering the Future. <br className="hidden sm:inline" />
                <span className="gradient-text-accent">Building What Matters.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Survetra Services builds intelligent digital products, scalable software platforms and technology solutions that help businesses move forward.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-survetra-orange via-[#F59E0B] to-survetra-orange hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-orange-500/25"
                >
                  Explore Our Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:text-white transition-all"
                >
                  Discover Our Products
                  <ArrowUpRight className="w-4 h-4 text-survetra-orange" />
                </Link>
              </div>

              {/* Trust Indicators / Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.08] max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    Full-Stack
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Engineering Rigor</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    Cloud-Native
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Modern Architecture</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    Security-First
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Enterprise Standards</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION C: COMPANY INTRODUCTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0C0E17]/60 border-y border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold tracking-widest uppercase text-survetra-orange">
                About Survetra Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                We develop, own, operate and deliver mission-critical software.
              </h2>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-survetra-orange hover:text-survetra-orange-light transition-colors group"
                >
                  Read our company story & mission
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#161926]/70 border border-white/[0.08] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-survetra-orange">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">What We Do</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We engineer high-throughput technology platforms, autonomous AI systems, and cloud infrastructure for global enterprises, while creating and scaling our own digital products.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161926]/70 border border-white/[0.08] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-survetra-violet">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Our Engineering Approach</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We combine architectural rigor with rapid release velocity. Every service we build is designed for zero single points of failure, deterministic execution, and seamless expansion.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION E: FEATURED PRODUCTS */}
      {/* ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-survetra-orange">
                Product Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Proprietary Platforms Built & Operated by Survetra
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                We conceptualize, engineer, and scale world-class software products that address massive market opportunities.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-survetra-orange hover:text-survetra-orange-light transition-colors whitespace-nowrap"
            >
              Explore Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tiffzy Card */}
            <div className="group relative rounded-3xl bg-[#161926] border border-white/[0.08] hover:border-orange-500/40 p-8 lg:p-10 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/15 transition-all" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-survetra-orange">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Product
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-survetra-orange transition-colors">
                    Tiffzy
                  </h3>
                  <p className="text-sm font-medium text-survetra-orange-light mt-1">
                    End-to-End Restaurant Management & Hospitality Ecosystem
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    A unified digital operational fabric for multi-location restaurants, cloud kitchens, and food brands—integrating QR ordering, kitchen display routing, inventory replenishment, and customer digital wallets.
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-orange" />
                    Kitchen Display Routing (KDS)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-orange" />
                    Automated Supply Chain
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-orange" />
                    Digital Wallet & Cashback
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-orange" />
                    Fleet Delivery Logistics
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>Spring Boot</span>
                  <span>•</span>
                  <span>PostgreSQL</span>
                  <span>•</span>
                  <span>Kafka</span>
                </div>
                <Link
                  href="/products/tiffzy"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:text-survetra-orange transition-colors"
                >
                  View Product
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* SocialSea Card */}
            <div className="group relative rounded-3xl bg-[#161926] border border-white/[0.08] hover:border-violet-500/40 p-8 lg:p-10 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/15 transition-all" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-survetra-violet">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Beta Platform
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-survetra-violet transition-colors">
                    SocialSea
                  </h3>
                  <p className="text-sm font-medium text-survetra-violet-light mt-1">
                    High-Engagement Community Platform & Next-Gen Social Network
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    A real-time, low-latency social platform built on a distributed graph engine. Featuring personalized content feeds, short-form video streaming, ephemeral stories, and encrypted group messaging.
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-violet" />
                    Adaptive Algorithmic Feed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-violet" />
                    Adaptive Short Videos
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-violet" />
                    Encrypted Messaging
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-survetra-violet" />
                    Creator Monetization
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>Go</span>
                  <span>•</span>
                  <span>Cassandra</span>
                  <span>•</span>
                  <span>WebRTC</span>
                </div>
                <Link
                  href="/products/socialsea"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:text-survetra-violet transition-colors"
                >
                  View Product
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Future initiatives banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#161926] via-[#1D2132] to-[#161926] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">
                  Future Software Initiatives & R&D
                </h4>
                <p className="text-sm text-slate-400 mt-0.5">
                  Survetra Nexus — our autonomous enterprise agent mesh and RAG knowledge fabric is in active technical incubation.
                </p>
              </div>
            </div>
            <Link
              href="/products/survetra-nexus"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 transition-colors whitespace-nowrap"
            >
              Explore Nexus R&D
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION D: CAPABILITIES & SERVICES */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0C0E17]/80 border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-survetra-orange">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Enterprise Engineering Studios
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                World-class engineering talent delivering transformative digital architectures across the full technology lifecycle.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-survetra-orange hover:text-survetra-orange-light transition-colors whitespace-nowrap"
            >
              View All 11 Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group p-8 rounded-2xl bg-[#161926] border border-white/[0.08] hover:border-survetra-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-survetra-muted">
                      {service.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-survetra-orange transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-survetra-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="text-survetra-orange group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Explore Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-500 font-mono">
                    {service.techStack[0]}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION F: INDUSTRY SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-survetra-orange">
              Industry Verticals
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Domain Expertise Tailored to Industry Demands
            </h2>
            <p className="text-slate-400 text-base">
              Deep operational knowledge combined with state-of-the-art software systems engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredIndustries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries#${industry.slug}`}
                className="group p-6 rounded-2xl bg-[#161926]/70 border border-white/[0.08] hover:border-survetra-violet/40 hover:bg-[#1D2132] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-survetra-violet mb-4 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-survetra-violet transition-colors">
                  {industry.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-survetra-violet flex items-center gap-1 font-medium">
                  View Solutions
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION G: FEATURED CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0C0E17]/80 border-y border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-survetra-orange">
                Proven Track Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Case Studies in Engineering Rigor
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                Real customer journeys, measurable business outcomes, and architectural breakthroughs.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-survetra-orange hover:text-survetra-orange-light transition-colors whitespace-nowrap"
            >
              All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="p-8 sm:p-10 rounded-3xl bg-[#161926] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-survetra-orange">
                      {study.industry}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {study.clientName}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.challenge}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.06]">
                    {study.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xl sm:text-2xl font-bold font-display text-white">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono max-w-sm line-clamp-1">
                    {study.technologiesUsed.slice(0, 3).join(" • ")}
                  </span>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-survetra-orange hover:text-survetra-orange-light transition-colors whitespace-nowrap"
                  >
                    Explore Architecture
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION H: INNOVATION & TECHNOLOGY LAB */}
      {/* ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E2235] via-[#161926] to-[#10121C] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-survetra-violet/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Survetra Applied R&D Labs</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Pioneering Next-Generation Software Engineering Paradigms
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Our internal innovation lab explores generative foundation models, deterministic multi-agent systems, sub-millisecond in-memory data structures, and edge computing architectures to ensure our products and clients remain ahead of the curve.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/innovation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-survetra-violet hover:bg-survetra-violet-hover transition-colors shadow-lg shadow-violet-500/20"
                >
                  Explore Innovation Lab
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white transition-colors"
                >
                  Learn About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION I: COMPANY INSIGHTS */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0C0E17]/60 border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-survetra-orange">
                Technical Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Perspectives on Architecture, AI & Scale
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                Engineering deep-dives and strategic analysis from Survetra's architects and technical leadership.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-survetra-orange hover:text-survetra-orange-light transition-colors whitespace-nowrap"
            >
              Browse All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-[#161926] border border-white/[0.08] hover:border-survetra-orange/40 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-survetra-orange uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-survetra-orange transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <span>{article.authorName}</span>
                  <span className="text-survetra-orange group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION J: CONTACT & BUSINESS ENQUIRY CTA */}
      {/* ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-survetra-orange/15 via-[#161926] to-survetra-violet/15 border border-white/10 p-10 sm:p-14 lg:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                Ready to engineer your next technological leap?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Whether you want to explore partnering on our product ecosystem (Tiffzy & SocialSea) or engage our engineering studios for bespoke enterprise software, our team is ready.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-survetra-orange to-[#F59E0B] hover:brightness-110 shadow-lg shadow-orange-500/25 transition-all"
              >
                Schedule an Architecture Discussion
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:text-white transition-all"
              >
                Join Our Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

