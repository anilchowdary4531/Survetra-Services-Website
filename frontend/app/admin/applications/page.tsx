"use client";

import React, { useState } from "react";
import { Inbox, FileText, CheckCircle2, Clock, XCircle, Download, ExternalLink } from "lucide-react";

interface ApplicationItem {
  id: string;
  applicantName: string;
  email: string;
  phone: string;
  positionApplied: string;
  submittedAt: string;
  status: "SUBMITTED" | "REVIEWING" | "SHORTLISTED" | "REJECTED" | "HIRED";
  resumeUrl: string;
  coverLetter?: string;
}

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<ApplicationItem[]>([
    {
      id: "app-1",
      applicantName: "Rahul Verma",
      email: "rahul.verma@example.com",
      phone: "+91 98765 12345",
      positionApplied: "Senior Backend Engineer (Java / Spring Boot)",
      submittedAt: "Nov 14, 2026",
      status: "REVIEWING",
      resumeUrl: "https://survetra.com/resumes/rahul_verma_cv.pdf",
      coverLetter: "Excited about Tiffzy's high-throughput architecture. I have 6 years of Java and Kafka experience.",
    },
    {
      id: "app-2",
      applicantName: "Ananya Iyer",
      email: "ananya.iyer@example.com",
      phone: "+91 98200 54321",
      positionApplied: "Staff AI Systems Engineer",
      submittedAt: "Nov 13, 2026",
      status: "SHORTLISTED",
      resumeUrl: "https://survetra.com/resumes/ananya_iyer_cv.pdf",
      coverLetter: "Deep focus on multi-agent frameworks, LangGraph, and hybrid vector search algorithms.",
    },
    {
      id: "app-3",
      applicantName: "Siddharth Rao",
      email: "siddharth.r@example.com",
      phone: "+91 99001 98765",
      positionApplied: "Senior Frontend Engineer (React & Next.js)",
      submittedAt: "Nov 12, 2026",
      status: "SUBMITTED",
      resumeUrl: "https://survetra.com/resumes/siddharth_rao_cv.pdf",
      coverLetter: "Obsessed with 60fps web apps and Next.js App Router performance tuning.",
    },
  ]);

  const updateStatus = (id: string, newStatus: ApplicationItem["status"]) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-extrabold text-white">
          Recruitment Applications ({applications.length})
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Review candidates, download credentials, and manage recruitment pipeline stages.
        </p>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Applicant</th>
                <th className="px-6 py-4">Position Applied</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Resume & Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">
                    <div>{app.applicantName}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{app.id}</div>
                  </td>
                  <td className="px-6 py-4 text-survetra-orange-light">{app.positionApplied}</td>
                  <td className="px-6 py-4 text-slate-400">
                    <div>{app.email}</div>
                    <div className="text-[10px] text-slate-500">{app.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-mono">{app.submittedAt}</td>
                  <td className="px-6 py-4">
                    <select
                      value={app.status}
                      onChange={(e) => updateStatus(app.id, e.target.value as any)}
                      className="px-2.5 py-1 rounded-lg bg-[#10121C] border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-survetra-orange"
                    >
                      <option value="SUBMITTED">SUBMITTED</option>
                      <option value="REVIEWING">REVIEWING</option>
                      <option value="SHORTLISTED">SHORTLISTED</option>
                      <option value="REJECTED">REJECTED</option>
                      <option value="HIRED">HIRED</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => alert(`Cover Letter from ${app.applicantName}:\n\n${app.coverLetter || "No cover letter provided."}`)}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                      title="View Cover Letter"
                    >
                      <FileText className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={app.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-survetra-orange hover:text-white"
                      title="Open Candidate Resume"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
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

