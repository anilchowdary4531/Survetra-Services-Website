import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  Lock, 
  Zap, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  GitBranch 
} from "lucide-react";

export const metadata = {
  title: "Innovation & Applied R&D | Survetra Services",
  description: "Explore Survetra Labs: our internal research initiatives in autonomous AI agents, deterministic RAG, low-latency stream processing, and enterprise architectures.",
};

export default function InnovationPage() {
  const initiatives = [
    {
      title: "Survetra Nexus — Multi-Agent Orchestration Mesh",
      category: "Autonomous Systems",
      status: "Active Incubation",
      badgeColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
      description: "An internal research fabric connecting corporate relational databases with autonomous AI agents. Unlike traditional LLM wrappers, Nexus uses deterministic JSON-schema validation and cryptographic audit ledgers to guarantee zero-hallucination tool execution.",
      pillars: [
        "Cryptographically signed audit logs for all agent tool executions",
        "Deterministic fallbacks for ambiguous reasoning steps",
        "Air-gapped private model deployment compatibility",
      ],
      techStack: ["Java 17", "Python", "LangGraph", "pgvector", "Docker"],
    },
    {
      title: "Sub-Millisecond In-Memory State Serialization",
      category: "Distributed Systems",
      status: "Field Testing",
      badgeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
      description: "Custom zero-copy binary serialization protocols engineered for real-time order routing in Tiffzy and social graph timeline generation in SocialSea, optimizing deserialization CPU efficiency.",
      pillars: [
        "Zero-allocation memory serialization buffers",
        "Predictable garbage collection profiling on modern JVMs",
        "High-density cache packing for multi-tenant deployments",
      ],
      techStack: ["Java 17/21", "Go", "Cap'n Proto", "FlatBuffers", "Redis"],
    },
    {
      title: "Zero-Knowledge Ledger for Omnichannel Wallets",
      category: "FinTech & Cryptography",
      status: "Proof of Concept",
      badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      description: "Exploring cryptographic verification of closed-loop customer wallet balances across distributed restaurant franchise chains without exposing cross-franchisee financial transaction histories.",
      pillars: [
        "Provable ledger balance verification without revealing raw logs",
        "Instant settlement proofs for inter-franchise reconciliations",
        "Built-in compliance with data privacy mandates",
      ],
      techStack: ["Rust", "Spring Boot", "PostgreSQL", "ZK-SNARKs"],
    },
  ];

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-survetra-violet uppercase tracking-wider">
            Survetra Applied R&D Labs
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Pioneering the frontiers of autonomous software.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            We reinvest a significant portion of our engineering bandwidth into fundamental applied research—ensuring that our products and client platforms remain years ahead of commodity market trends.
          </p>
        </div>
      </section>

      {/* Initiatives Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {initiatives.map((item, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-12 rounded-3xl bg-[#161926] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-survetra-orange">
                    {item.category}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span
                    className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${item.badgeColor}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {item.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Core Architectural Focus:
                  </span>
                  <div className="space-y-1.5">
                    {item.pillars.map((pillar, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-survetra-violet flex-shrink-0 mt-0.5" />
                        <span>{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tech & Prototype Info */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#1D2132] border border-white/[0.08] space-y-4">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Targeted Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href="/contact?category=PARTNERSHIP"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-violet hover:bg-survetra-violet-hover transition-colors"
                  >
                    Inquire About Research Partnerships
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Innovation Philosophy */}
      <section className="bg-[#0C0E17]/80 py-20 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-3xl font-display font-bold text-white">
              Why We Invest in Applied Research
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Software commoditization happens quickly. Solutions that were cutting edge three years ago are standard today. By running an active internal research lab, Survetra continuously develops proprietary intellectual property, protects customer platforms against obsolescence, and trains our engineering teams on tomorrow's paradigms today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

