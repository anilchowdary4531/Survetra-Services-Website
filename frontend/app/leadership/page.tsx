import React from "react";
import Link from "next/link";
import { getTeamMembers } from "@/lib/api";
import { Linkedin, Twitter, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Leadership & Team | Survetra Services",
  description: "Meet the executive leadership and technical architects driving Survetra Services and our product portfolio.",
};

export default async function LeadershipPage() {
  const team = await getTeamMembers();

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-survetra-violet uppercase tracking-wider">
            Executive Leadership & Architects
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Visionary technologists with a proven record of scale.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Our leadership combines deep distributed systems engineering, large-scale consumer product experience, and enterprise digital strategy.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group p-6 rounded-2xl bg-[#161926] border border-white/[0.08] hover:border-survetra-orange/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-800 border border-white/10">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10121C] via-transparent to-transparent opacity-60" />
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-survetra-orange transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-medium text-survetra-orange-light mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider mt-1">
                    {member.category}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center gap-3">
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.twitterUrl && (
                  <a
                    href={member.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-[#0C0E17]/80 py-20 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
              <ShieldCheck className="w-8 h-8 text-survetra-orange" />
              <h4 className="text-lg font-bold text-white">Hands-On Technical Leadership</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our leaders write code, review pull requests, and participate in architecture design reviews. We lead by technical authority and engineering depth.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
              <ShieldCheck className="w-8 h-8 text-survetra-violet" />
              <h4 className="text-lg font-bold text-white">Radical Transparency</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We believe in candid technical communication, honest estimation, and immediate escalation of risks. No sugarcoating or buzzword-heavy deflection.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <h4 className="text-lg font-bold text-white">Long-Term Compounding</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We build platforms designed to compound over 5-10 year horizons. Sustainable architectures win over ephemeral shortcuts every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
          Want to collaborate with our leadership team?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          We welcome conversations with strategic enterprise partners, institutional investors, and prospective technology leaders.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors"
          >
            Connect With Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

