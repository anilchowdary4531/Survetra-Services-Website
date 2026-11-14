import React from "react";
import Link from "next/link";
import { getJobOpenings } from "@/lib/api";
import { 
  ArrowRight, 
  MapPin, 
  Briefcase, 
  Clock, 
  Award, 
  Zap, 
  HeartHandshake, 
  Coffee, 
  Laptop, 
  GraduationCap 
} from "lucide-react";

export const metadata = {
  title: "Careers & Engineering Culture | Survetra Services",
  description: "Join the Survetra engineering team. We are hiring Staff AI Systems Engineers, Senior Java Backend Engineers, and Frontend Architects.",
};

export default async function CareersPage() {
  const jobs = await getJobOpenings();

  const perks = [
    {
      title: "Deep Technical Autonomy",
      description: "We don't micromanage. You own system architecture, service reliability, and design decisions from ideation to production.",
      icon: Laptop,
    },
    {
      title: "Top-Tier Compensation & Equity",
      description: "Competitive salary bands benchmarks against leading global product companies, with meaningful equity grants.",
      icon: Award,
    },
    {
      title: "Continuous Learning Budget",
      description: "Generous individual annual stipend for technical books, certifications, specialized LLM/cloud compute, and global conferences.",
      icon: GraduationCap,
    },
    {
      title: "Comprehensive Healthcare",
      description: "Premium health, dental, and wellness insurance coverage for you and your immediate family members with zero deductible hassles.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Join Survetra Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Build products that handle millions of real-world transactions.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            We are looking for engineers, architects, and designers who care deeply about craft, high performance, and architectural elegance.
          </p>
        </div>
      </section>

      {/* Perks / Engineering Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Why Survetra
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            An environment built for serious craftspeople
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-survetra-orange">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {perk.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Roles Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-white/10 pb-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Active Job Openings ({jobs.length})
          </h2>
          <span className="text-xs text-slate-400">
            Bengaluru / Hyderabad / Remote Friendly
          </span>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.slug}`}
              className="group p-6 sm:p-8 rounded-2xl bg-[#161926] border border-white/[0.08] hover:border-survetra-orange/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-500/10 text-survetra-orange border border-orange-500/20">
                    {job.department}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/5">
                    {job.experienceLevel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-survetra-orange transition-colors">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-survetra-orange" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-survetra-orange" />
                    <span>{job.employmentType}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-white/[0.05] group-hover:bg-survetra-orange group-hover:text-white transition-all">
                  View Role & Apply
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

