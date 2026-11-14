"use client";

import React, { useState } from "react";
import Link from "next/link";
import { JOBS_DATA, JobOpening } from "@/lib/data";
import { GraduationCap, Plus, Edit3, Trash2, Eye } from "lucide-react";

export default function AdminCareersPage() {
  const [jobs, setJobs] = useState<JobOpening[]>(JOBS_DATA);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Job Openings Management ({jobs.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Publish, edit, and close technical recruitment requisitions.
          </p>
        </div>

        <button
          onClick={() => {
            const title = prompt("Enter job title:");
            if (title) {
              const newJob: JobOpening = {
                id: `job-${Date.now()}`,
                slug: title.toLowerCase().replace(/\s+/g, "-"),
                title,
                department: "Core Engineering",
                location: "Bengaluru, India / Hybrid",
                employmentType: "Full-time",
                experienceLevel: "Senior",
                overview: "Role description...",
                responsibilities: ["Develop resilient code"],
                requirements: ["5+ years experience"],
                benefits: ["Competitive compensation"],
              };
              setJobs([...jobs, newJob]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Opening</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Position Title</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Level</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {jobs.map((j) => (
                <tr key={j.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">
                    <div>{j.title}</div>
                    <div className="text-[10px] text-slate-500 font-mono">/{j.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-survetra-orange-light">{j.department}</td>
                  <td className="px-6 py-4 text-slate-400">{j.location}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                      {j.experienceLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{j.employmentType}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/careers/${j.slug}`}
                      target="_blank"
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                      title="View public job application page"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        const newTitle = prompt("Update title:", j.title);
                        if (newTitle) {
                          setJobs((prev) =>
                            prev.map((item) => (item.id === j.id ? { ...item, title: newTitle } : item))
                          );
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Remove position ${j.title}?`)) {
                          setJobs(jobs.filter((item) => item.id !== j.id));
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

