"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CASE_STUDIES_DATA, CaseStudy } from "@/lib/data";
import { FileText, Plus, Edit3, Trash2, Eye } from "lucide-react";

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(CASE_STUDIES_DATA);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Client Case Studies & Proofs of Scale ({caseStudies.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage verifiable customer impact analyses, metrics, and executive quotes.
          </p>
        </div>

        <button
          onClick={() => {
            const title = prompt("Enter case study title:");
            if (title) {
              const newCS: CaseStudy = {
                id: `cs-${Date.now()}`,
                slug: title.toLowerCase().replace(/\s+/g, "-"),
                title,
                clientName: "Enterprise Client",
                industry: "Enterprise Solutions",
                challenge: "Summary of operational constraints...",
                solution: "Architectural deployment details...",
                results: ["Improved efficiency by 40%"],
                metrics: [{ label: "Uptime", value: "99.99%" }],
                technologiesUsed: ["Spring Boot", "Next.js"],
                coverGradient: "from-blue-600/20 via-indigo-900/10 to-transparent"
              };
              setCaseStudies([newCS, ...caseStudies]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Case Study</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Industry</th>
                <th className="px-6 py-4">Key Metric</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {caseStudies.map((cs) => (
                <tr key={cs.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white max-w-sm truncate">
                    <div>{cs.title}</div>
                    <div className="text-[10px] text-slate-500 font-mono">/{cs.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{cs.clientName}</td>
                  <td className="px-6 py-4 text-slate-400">{cs.industry}</td>
                  <td className="px-6 py-4 text-emerald-400 font-mono font-bold">
                    {cs.metrics[0]?.value} ({cs.metrics[0]?.label})
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      target="_blank"
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        const newTitle = prompt("Update title:", cs.title);
                        if (newTitle) {
                          setCaseStudies((prev) =>
                            prev.map((item) => (item.id === cs.id ? { ...item, title: newTitle } : item))
                          );
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete case study ${cs.title}?`)) {
                          setCaseStudies(caseStudies.filter((item) => item.id !== cs.id));
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

