"use client";

import React, { useState } from "react";
import { Plus, Edit3, Trash2, Eye, CheckCircle2 } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  status: "Completed" | "In Delivery" | "Archived";
  completionDate: string;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      id: "proj-1",
      title: "Omnichannel POS & Kitchen Display Engine",
      client: "Apex Culinary Group",
      category: "Restaurant Tech",
      status: "Completed",
      completionDate: "Sept 2026",
    },
    {
      id: "proj-2",
      title: "Real-Time Graph Streaming Mesh",
      client: "SocialSea Network",
      category: "Social Platforms",
      status: "In Delivery",
      completionDate: "Nov 2026",
    },
    {
      id: "proj-3",
      title: "Core Banking Strangler Migration",
      client: "Horizon Capital",
      category: "FinTech",
      status: "Completed",
      completionDate: "June 2026",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Client Projects Portfolio
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage delivered client solutions, active delivery engagements, and project archives.
          </p>
        </div>

        <button
          onClick={() => {
            const title = prompt("Enter project title:");
            if (title) {
              const newProj: ProjectItem = {
                id: `proj-${Date.now()}`,
                title,
                client: "Enterprise Client",
                category: "Custom Engineering",
                status: "In Delivery",
                completionDate: "Q1 2027",
              };
              setProjects([newProj, ...projects]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Project Title</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Delivery Status</th>
                <th className="px-6 py-4">Timeline</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {projects.map((proj) => (
                <tr key={proj.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">{proj.title}</td>
                  <td className="px-6 py-4 text-slate-400">{proj.client}</td>
                  <td className="px-6 py-4 text-slate-400">{proj.category}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                        proj.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}
                    >
                      {proj.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-mono">{proj.completionDate}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => {
                        const newTitle = prompt("Update project title:", proj.title);
                        if (newTitle) {
                          setProjects((prev) =>
                            prev.map((item) => (item.id === proj.id ? { ...item, title: newTitle } : item))
                          );
                        }
                      }}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete project ${proj.title}?`)) {
                          setProjects(projects.filter((p) => p.id !== proj.id));
                        }
                      }}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-400"
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

