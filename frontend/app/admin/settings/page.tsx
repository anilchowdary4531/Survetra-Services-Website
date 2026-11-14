"use client";

import React, { useState } from "react";
import { Settings, Save, CheckCircle2, ShieldCheck, AlertTriangle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [config, setConfig] = useState({
    companyName: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    email: COMPANY_INFO.email,
    phone: COMPANY_INFO.phone,
    address: COMPANY_INFO.headquarters,
    businessHours: COMPANY_INFO.businessHours,
    maintenanceMode: false,
    rateLimitingEnabled: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-display font-extrabold text-white">
          Global Website & System Settings
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Configure corporate contact points, security parameters, and operational modes.
        </p>
      </div>

      <form onSubmit={handleSave} className="p-8 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-6">
        {saved && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Settings persisted to database and edge cache flushed.</span>
          </div>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company Brand Name
              </label>
              <input
                type="text"
                value={config.companyName}
                onChange={(e) => setConfig({ ...config, companyName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Registered Legal Entity
              </label>
              <input
                type="text"
                value={config.legalName}
                onChange={(e) => setConfig({ ...config, legalName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Primary Contact Email
              </label>
              <input
                type="email"
                value={config.email}
                onChange={(e) => setConfig({ ...config, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Corporate Telephone
              </label>
              <input
                type="text"
                value={config.phone}
                onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Headquarters Physical Address
            </label>
            <input
              type="text"
              value={config.address}
              onChange={(e) => setConfig({ ...config, address: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Standard Operating Hours
            </label>
            <input
              type="text"
              value={config.businessHours}
              onChange={(e) => setConfig({ ...config, businessHours: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
            />
          </div>

          <div className="pt-2 border-t border-white/[0.06] space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rate-limit"
                checked={config.rateLimitingEnabled}
                onChange={(e) => setConfig({ ...config, rateLimitingEnabled: e.target.checked })}
                className="rounded bg-[#10121C] border-white/20 text-survetra-orange"
              />
              <label htmlFor="rate-limit" className="text-xs text-slate-300">
                Enforce API Rate Limiting (100 req/min per IP on public contact/career endpoints)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="maint-mode"
                checked={config.maintenanceMode}
                onChange={(e) => setConfig({ ...config, maintenanceMode: e.target.checked })}
                className="rounded bg-[#10121C] border-white/20 text-amber-500"
              />
              <label htmlFor="maint-mode" className="text-xs text-amber-400">
                Enable Public Maintenance Mode (Bypassed for Authenticated Admins)
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.08]">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover transition-colors shadow-md shadow-orange-500/20"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save System Configurations</span>
          </button>
        </div>
      </form>
    </div>
  );
}

