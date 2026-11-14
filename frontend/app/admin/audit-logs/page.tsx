"use client";

import React, { useState } from "react";
import { ShieldAlert, RefreshCw, Filter, Download } from "lucide-react";

interface AuditLogRecord {
  id: string;
  action: string;
  userEmail: string;
  entityType: string;
  entityId: string;
  ipAddress: string;
  details: string;
  timestamp: string;
}

export default function AdminAuditLogsPage() {
  const [logs] = useState<AuditLogRecord[]>([
    {
      id: "log-1",
      action: "USER_AUTHENTICATED",
      userEmail: "admin@survetra.com",
      entityType: "AUTHENTICATION",
      entityId: "usr-superadmin-01",
      ipAddress: "192.168.1.14",
      details: "Successful master admin JWT issuance (HMAC-SHA256)",
      timestamp: "Today at 5:10:22 PM",
    },
    {
      id: "log-2",
      action: "ENQUIRY_RECEIVED",
      userEmail: "system.webhook@survetra.com",
      entityType: "ENQUIRY",
      entityId: "enq-101",
      ipAddress: "103.21.244.0",
      details: "Inbound business inquiry from Apex Hospitality Group",
      timestamp: "Today at 2:30:15 PM",
    },
    {
      id: "log-3",
      action: "PRODUCT_UPDATED",
      userEmail: "admin@survetra.com",
      entityType: "PRODUCT",
      entityId: "prod-socialsea",
      ipAddress: "192.168.1.14",
      details: "Updated status to Beta; modified video pipeline parameters",
      timestamp: "Today at 1:12:05 PM",
    },
    {
      id: "log-4",
      action: "ARTICLE_PUBLISHED",
      userEmail: "sarah.j@survetra.com",
      entityType: "ARTICLE",
      entityId: "art-1",
      ipAddress: "103.22.200.5",
      details: "Published engineering deep dive: Sub-Second Kitchen Routing",
      timestamp: "Yesterday at 4:15:30 PM",
    },
    {
      id: "log-5",
      action: "JOB_APPLICATION_RECEIVED",
      userEmail: "careers.portal@survetra.com",
      entityType: "JOB_APPLICATION",
      entityId: "app-1",
      ipAddress: "49.207.198.11",
      details: "Application submitted for Senior Backend Engineer",
      timestamp: "Yesterday at 2:05:11 PM",
    },
    {
      id: "log-6",
      action: "SETTING_CHANGED",
      userEmail: "admin@survetra.com",
      entityType: "SITE_SETTINGS",
      entityId: "rate_limit_cfg",
      ipAddress: "192.168.1.14",
      details: "Enabled strict IP rate-limiting (100 req/min)",
      timestamp: "Nov 12, 2026 at 9:00:00 AM",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-survetra-orange" />
            <span>Cryptographic Security & Audit Logs ({logs.length})</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Immutable administrative activity ledger. All administrative changes are tracked with IP origins and timestamps.
          </p>
        </div>

        <button
          onClick={() => alert("Audit log export generated in JSON Lines (audit_export.jsonl)")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 hover:text-white hover:bg-white/[0.08] transition-colors self-start"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Audit Log</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Actor</th>
                <th className="px-6 py-4">Entity</th>
                <th className="px-6 py-4">IP Address</th>
                <th className="px-6 py-4">Execution Details</th>
                <th className="px-6 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-mono font-semibold text-survetra-orange">
                    {log.action}
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-300">{log.userEmail}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-400">
                      {log.entityType}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-400">{log.ipAddress}</td>
                  <td className="px-6 py-4 text-slate-300 max-w-sm truncate" title={log.details}>
                    {log.details}
                  </td>
                  <td className="px-6 py-4 text-right text-slate-400 font-mono whitespace-nowrap">
                    {log.timestamp}
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

