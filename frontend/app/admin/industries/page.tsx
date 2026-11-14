"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES_DATA, Industry } from "@/lib/data";
import { Building2, Plus, Edit3, Trash2, Eye } from "lucide-react";

export default function AdminIndustriesPage() {
  const [industries, setIndustries] = useState<Industry[]>(INDUSTRIES_DATA);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Industry Solutions Verticals ({industries.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure industry solution pages, featured products, and case study linkages.
          </p>
        </div>

        <button
          onClick={() => {
            const name = prompt("Enter new industry vertical name:");
            if (name) {
              const newInd: Industry = {
                id: `ind-${Date.now()}`,
                slug: name.toLowerCase().replace(/\s+/g, "-"),
                name,
                tagline: "Specialized enterprise architecture",
                description: "Deep domain solutions...",
                iconName: "Building2",
                keySolutions: ["Solution 1", "Solution 2"],
                impactHighlights: [{ label: "Efficiency Gain", value: "30%" }]
              };
              setIndustries([...industries, newInd]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Industry Vertical</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Vertical Name</th>
                <th className="px-6 py-4">Tagline</th>
                <th className="px-6 py-4">Solutions Count</th>
                <th className="px-6 py-4">Linked Products</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {industries.map((ind) => (
                <tr key={ind.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">
                    <div>{ind.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono">/{ind.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-400 max-w-xs truncate">{ind.tagline}</td>
                  <td className="px-6 py-4 text-slate-400 font-mono">{ind.keySolutions.length}</td>
                  <td className="px-6 py-4 text-slate-400 font-mono">
                    {ind.featuredProducts ? ind.featuredProducts.join(", ") : "None"}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/industries#${ind.slug}`}
                      target="_blank"
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        const newName = prompt("Update vertical name:", ind.name);
                        if (newName) {
                          setIndustries((prev) =>
                            prev.map((item) => (item.id === ind.id ? { ...item, name: newName } : item))
                          );
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete industry ${ind.name}?`)) {
                          setIndustries(industries.filter((item) => item.id !== ind.id));
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

