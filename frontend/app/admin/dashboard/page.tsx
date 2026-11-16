"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Package, 
  MessageSquare, 
  GraduationCap, 
  Briefcase, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Plus, 
  ShieldAlert, 
  TrendingUp, 
  Activity,
  Layers,
  Sparkles
} from "lucide-react";
import { PRODUCTS_DATA, JOBS_DATA, ARTICLES_DATA } from "@/lib/data";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalEnquiries: 24,
    newEnquiries: 7,
    publishedProducts: PRODUCTS_DATA.length,
    publishedProjects: 6,
    activeJobs: JOBS_DATA.length,
    publishedArticles: ARTICLES_DATA.length,
  });

  const recentActivities = [
    {
      action: "New Contact Enquiry Received",
      entity: "Apex Hospitality Group (Tiffzy Enterprise inquiry)",
      user: "System Hook",
      time: "12 mins ago",
      type: "enquiry",
    },
    {
      action: "Product Status Updated",
      entity: "SocialSea v0.9 Beta Stream Pipeline",
      user: "Suresh Babu",
      time: "1 hour ago",
      type: "product",
    },
    {
      action: "New Job Application Submitted",
      entity: "Senior Backend Engineer (Applicant: Rahul V.)",
      user: "Recruitment Portal",
      time: "3 hours ago",
      type: "job",
    },
    {
      action: "Technical Insight Published",
      entity: "Engineering Sub-Second Kitchen Ticket Routing",
      user: "Editorial Team",
      time: "Yesterday at 4:15 PM",
      type: "article",
    },
    {
      action: "Security Audit Check Executed",
      entity: "TLS 1.3 & JWT Revocation Cache Verification",
      user: "Automated SecOps",
      time: "Yesterday at 11:00 AM",
      type: "security",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1E2235] via-[#161926] to-[#10121C] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Survetra Core Production Cluster Active</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Executive Command Center
          </h1>
          <p className="text-xs text-slate-400">
            Monitor real-time product deployments, incoming business leads, recruitment pipelines, and security logs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            Manage Products
          </Link>
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-white/[0.05] border border-white/10 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            Review Enquiries ({stats.newEnquiries} New)
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">Total Enquiries</span>
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-survetra-orange">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-display font-extrabold text-white">
            {stats.totalEnquiries}
          </div>
          <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
            <span>+{stats.newEnquiries} new inquiries pending review</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">Published Products</span>
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-survetra-violet">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-display font-extrabold text-white">
            {stats.publishedProducts}
          </div>
          <div className="text-[11px] text-slate-400">
            Tiffzy, SocialSea, Nexus R&D
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">Active Job Openings</span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-display font-extrabold text-white">
            {stats.activeJobs}
          </div>
          <div className="text-[11px] text-slate-400">
            Across AI, Backend & Frontend
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">System Availability</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-display font-extrabold text-white">
            Operational
          </div>
          <div className="text-[11px] text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            All edge nodes healthy
          </div>
        </div>
      </div>

      {/* Main Grid: Activity Log & Module Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recent Activity Feed */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-survetra-orange" />
              <h3 className="text-base font-bold text-white">
                Recent Administrative Activity
              </h3>
            </div>
            <Link
              href="/admin/audit-logs"
              className="text-xs text-survetra-orange hover:text-survetra-orange-light transition-colors font-medium flex items-center gap-1"
            >
              View Full Audit Trail
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {recentActivities.map((act, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-white">
                    {act.action}
                  </div>
                  <div className="text-xs text-slate-400">
                    {act.entity}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    By: <span className="text-slate-300">{act.user}</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 whitespace-nowrap font-mono">
                  {act.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Module Navigation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Management Modules
            </h3>
            <div className="space-y-2">
              <Link
                href="/admin/products"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Products Portfolio (Tiffzy & SocialSea)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
              <Link
                href="/admin/services"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Engineering Services (11 Studios)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
              <Link
                href="/admin/enquiries"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Contact Submissions & Leads</span>
                <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-survetra-orange text-[10px] font-bold">
                  {stats.newEnquiries} New
                </span>
              </Link>
              <Link
                href="/admin/applications"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Job Applications & Resumes</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
              <Link
                href="/admin/media"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Media Asset Library</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Global Website Settings</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

