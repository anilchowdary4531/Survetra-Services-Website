import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Users, 
  ArrowRight, 
  Compass, 
  Award,
  CheckCircle2
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "About Us | Survetra Services",
  description: "Learn about Survetra Services: our origin, engineering philosophy, and how we build intelligent software products and enterprise solutions.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Architectural Rigor",
      description: "We do not accept fragile shortcuts. Every system we architect is built with high concurrency, zero data loss, and resilient failover topologies.",
      icon: Cpu,
    },
    {
      title: "Product Ownership",
      description: "We treat client platforms with the same level of obsessive dedication as our own proprietary ecosystems like Tiffzy and SocialSea.",
      icon: Target,
    },
    {
      title: "Deterministic Intelligence",
      description: "In the era of AI, we prioritize explainable, verifiable, and secure agentic systems that eliminate probabilistic hallucinations in enterprise workflows.",
      icon: ShieldCheck,
    },
    {
      title: "Relentless Velocity",
      description: "Through automated testing, continuous integration, and modular component libraries, we turn complex technical roadmaps into production reality quickly.",
      icon: Zap,
    },
  ];

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Our Identity & Purpose
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Engineering software that powers modern enterprise scale.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Survetra Services was founded with a singular conviction: that modern digital products require deep architectural discipline, authentic user empathy, and relentless technological execution.
          </p>
        </div>
      </section>

      {/* Core Narrative / Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              A dual-engine technology company
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                Unlike traditional IT consultancies that merely provide staff augmentation, Survetra operates as a hybrid product development company and high-end digital solutions studio.
              </p>
              <p>
                On one hand, we build, own, and operate high-growth consumer and enterprise products—such as <strong>Tiffzy</strong>, our end-to-end restaurant technology ecosystem, and <strong>SocialSea</strong>, our low-latency social networking engine.
              </p>
              <p>
                On the other hand, we partner with discerning global enterprises, financial institutions, and ambitious scale-ups to design, modernize, and scale their most critical software infrastructure.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/leadership"
                className="inline-flex items-center gap-2 text-sm font-semibold text-survetra-orange hover:text-survetra-orange-light transition-colors"
              >
                Meet our leadership team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-2">
              <div className="text-3xl font-display font-extrabold text-survetra-orange">
                2024
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Founded in Bengaluru
              </div>
              <p className="text-xs text-slate-400">
                Operating at the epicenter of India’s premier software engineering and innovation hub.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-2">
              <div className="text-3xl font-display font-extrabold text-survetra-violet">
                100%
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Architecture Ownership
              </div>
              <p className="text-xs text-slate-400">
                We design and build from fundamental principles without reliance on brittle templates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-2">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
                Cloud-Native
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Modular Architecture
              </div>
              <p className="text-xs text-slate-400">
                Modern microservices built on Spring Boot, Next.js, and container orchestration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-2">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400">
                Security-First
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Enterprise Standards
              </div>
              <p className="text-xs text-slate-400">
                Strict data isolation, role-based access control, and defensible security engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0C0E17]/80 py-20 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-survetra-orange">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Our Mission
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                To build high-performance software systems and intelligent platforms that eliminate operational bottlenecks, empower human creativity, and create enduring economic value for our users and enterprise partners.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-survetra-violet">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Our Vision
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                To become a globally respected technology institution recognized for engineering elegance, ethical AI deployment, and products that seamlessly orchestrate everyday business and human connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-semibold tracking-widest uppercase text-survetra-orange">
            Engineering Culture
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Principles that guide every line of code
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-survetra-orange">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#161926] to-[#1D2132] border border-white/10 p-10 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Discover what we can engineer together.
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Whether you want to explore partnering on Tiffzy, licensing SocialSea tech, or engaging our engineering team.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/careers"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-white/[0.05] border border-white/10 hover:text-white transition-colors"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

