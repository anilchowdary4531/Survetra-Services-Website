import React from "react";
import Link from "next/link";
import { getServices } from "@/lib/api";
import { 
  ArrowRight, 
  ArrowUpRight, 
  BrainCircuit, 
  Sparkles, 
  Bot, 
  Globe, 
  Smartphone, 
  Server, 
  Cloud, 
  Layers, 
  CreditCard, 
  Compass, 
  Code2,
  CheckCircle2,
  Cpu
} from "lucide-react";

export const metadata = {
  title: "Engineering Services & Capabilities | Survetra Services",
  description: "Explore Survetra Services' 11 specialized engineering studios: Artificial Intelligence, Generative AI, RAG, Backend Microservices, Cloud & DevOps, and Custom Software.",
};

const iconMap: Record<string, any> = {
  BrainCircuit,
  Sparkles,
  Bot,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Layers,
  CreditCard,
  Compass,
  Code2,
};

export default async function ServicesPage() {
  const services = await getServices();

  const categories = [
    "AI & Intelligence",
    "Core Engineering",
    "Cloud & Infrastructure",
    "Enterprise & Business",
  ] as const;

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Capabilities & Studios
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Comprehensive digital engineering for the modern enterprise.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            From foundational cloud infrastructure and high-concurrency microservices to generative AI and autonomous agent workflows, we build software that lasts.
          </p>
        </div>
      </section>

      {/* Services Grouped by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {categories.map((category) => {
          const categoryServices = services.filter((s) => s.category === category);
          if (categoryServices.length === 0) return null;

          return (
            <div key={category} className="space-y-8">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-survetra-orange" />
                  {category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => {
                  const Icon = iconMap[service.iconName] || Cpu;

                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group p-8 rounded-2xl bg-[#161926] border border-white/[0.08] hover:border-survetra-orange/40 hover:bg-[#1A1E2E] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-survetra-orange group-hover:scale-105 transition-transform">
                            <Icon className="w-6 h-6" />
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-survetra-orange transition-colors" />
                        </div>

                        <div>
                          <h3 className="text-xl font-display font-bold text-white group-hover:text-survetra-orange transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            Key Capabilities
                          </span>
                          <ul className="space-y-1.5">
                            {service.capabilities.slice(0, 3).map((cap, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-survetra-orange flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                        <div className="flex flex-wrap gap-1.5">
                          {service.techStack.slice(0, 2).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 font-mono text-[10px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="text-survetra-orange font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Details
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#161926] via-[#1D2132] to-[#161926] border border-white/10 p-10 sm:p-14 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Need a custom architectural assessment?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Our Principal Architects provide comprehensive technology audits, scalability reviews, and modernization roadmaps.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-lg shadow-orange-500/25 transition-all"
            >
              Request Architecture Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
