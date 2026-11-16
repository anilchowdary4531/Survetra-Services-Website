"use client";

import React, { useState } from "react";
import { MessageSquare, Mail, Phone, Building2, CheckCircle2, Trash2, Eye } from "lucide-react";

interface EnquiryItem {
  id: string;
  fullName: string;
  businessEmail: string;
  phone?: string;
  company?: string;
  category: string;
  subject: string;
  message: string;
  status: "NEW" | "CONTACTED" | "RESOLVED" | "SPAM";
  receivedAt: string;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([
    {
      id: "enq-101",
      fullName: "Inbound Inquiry",
      businessEmail: "inquiry@hospitality-group.com",
      phone: "+91 98450 11223",
      company: "Hospitality Enterprises",
      category: "PRODUCT_INQUIRY",
      subject: "Tiffzy Architecture Inquiry",
      message: "Inquiring about multi-tenant kitchen display routing with automated inventory depletion.",
      status: "NEW",
      receivedAt: "Today at 2:30 PM",
    },
    {
      id: "enq-102",
      fullName: "Sophia Martinez",
      businessEmail: "smartinez@horizonglobal.com",
      phone: "+1 (415) 555-8921",
      company: "Horizon Global",
      category: "SALES",
      subject: "Core Ledger Architecture Consultation",
      message: "Seeking an engineering partner to architect an idempotent double-entry ledger service with high-frequency reconciliation.",
      status: "CONTACTED",
      receivedAt: "Yesterday at 10:15 AM",
    },
    {
      id: "enq-103",
      fullName: "Arun Nair",
      businessEmail: "arun.nair@digitalventures.in",
      phone: "+91 99880 77665",
      company: "Digital Ventures",
      category: "PARTNERSHIP",
      subject: "SocialSea White-Label & API Integration",
      message: "Interested in licensing SocialSea's real-time messaging and feed recommendation mesh for our community application.",
      status: "RESOLVED",
      receivedAt: "Nov 11, 2026",
    },
  ]);

  const updateStatus = (id: string, newStatus: EnquiryItem["status"]) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-extrabold text-white">
          Business Enquiries & Inbound Leads ({enquiries.length})
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Process enterprise contact inquiries, assign statuses, and follow up with prospective clients.
        </p>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Sender</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Received</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {enquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">
                    <div>{enq.fullName}</div>
                    <div className="text-[10px] text-slate-500">{enq.businessEmail}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{enq.company || "N/A"}</td>
                  <td className="px-6 py-4 text-survetra-orange-light">{enq.category}</td>
                  <td className="px-6 py-4 text-slate-300 max-w-xs truncate">{enq.subject}</td>
                  <td className="px-6 py-4">
                    <select
                      value={enq.status}
                      onChange={(e) => updateStatus(enq.id, e.target.value as any)}
                      className={`px-2.5 py-1 rounded-lg bg-[#10121C] border text-xs font-semibold focus:outline-none ${
                        enq.status === "NEW"
                          ? "text-survetra-orange border-orange-500/40"
                          : enq.status === "RESOLVED"
                          ? "text-emerald-400 border-emerald-500/40"
                          : "text-blue-400 border-blue-500/40"
                      }`}
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="RESOLVED">RESOLVED</option>
                      <option value="SPAM">SPAM</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-mono">{enq.receivedAt}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => alert(`Full Message from ${enq.fullName} (${enq.company}):\n\nSubject: ${enq.subject}\n\n${enq.message}\n\nPhone: ${enq.phone || "Not specified"}`)}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                      title="Read Full Inquiry"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete enquiry from ${enq.fullName}?`)) {
                          setEnquiries(enquiries.filter((e) => e.id !== enq.id));
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

