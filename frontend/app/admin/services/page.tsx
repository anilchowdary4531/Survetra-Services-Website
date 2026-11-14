"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA, Service } from "@/lib/data";
import { Server, Plus, Edit3, Trash2, Eye, CheckCircle2 } from "lucide-react";

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>(SERVICES_DATA);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Engineering Services & Studios ({services.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage your 11 engineering practice categories, deliverables, capabilities, and SEO tags.
          </p>
        </div>

        <button
          onClick={() => {
            const title = prompt("Enter new service title:");
            if (title) {
              const newServ: Service = {
                id: `serv-${Date.now()}`,
                slug: title.toLowerCase().replace(/\s+/g, "-"),
                title,
                category: "Core Engineering",
                shortDescription: "Custom engineering practice description...",
                fullDescription: "Detailed engineering practice scope...",
                iconName: "Server",
                capabilities: ["Architectural Design", "Implementation"],
                deliverables: ["Production Codebase"],
                techStack: ["Java 17", "Next.js"],
                businessImpact: ["Accelerate delivery"],
              };
              setServices([newServ, ...services]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Practice Area</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Service Practice</th>
                <th className="px-6 py-4">Studio Category</th>
                <th className="px-6 py-4">Capabilities Count</th>
                <th className="px-6 py-4">Primary Tech</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {services.map((s) => (
                <tr key={s.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">
                    <div>{s.title}</div>
                    <div className="text-[10px] text-slate-500 font-mono">/{s.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[11px]">
                      {s.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-mono">
                    {s.capabilities.length} Capabilities
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-mono">
                    {s.techStack.slice(0, 3).join(", ")}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/services/${s.slug}`}
                      target="_blank"
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                      title="View public page"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        const newTitle = prompt("Update service title:", s.title);
                        if (newTitle) {
                          setServices((prev) =>
                            prev.map((item) => (item.id === s.id ? { ...item, title: newTitle } : item))
                          );
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete service ${s.title}?`)) {
                          setServices(services.filter((item) => item.id !== s.id));
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

