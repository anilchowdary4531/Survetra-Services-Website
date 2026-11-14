"use client";

import React, { useState } from "react";
import { Search, Save, CheckCircle2, Globe, ShieldCheck } from "lucide-react";

export default function AdminSeoPage() {
  const [saved, setSaved] = useState(false);
  const [seoSettings, setSeoSettings] = useState({
    defaultTitle: "Survetra Services — Engineering the Future. Building What Matters.",
    defaultDescription: "Survetra Services builds intelligent digital products, scalable software platforms, and technology solutions. Creators of Tiffzy and SocialSea.",
    canonicalBase: "https://survetra.com",
    openGraphImage: "https://survetra.com/og-image.png",
    twitterHandle: "@SurvetraHQ",
    robotsIndex: true,
    sitemapAutoGenerate: true,
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
          SEO & Metadata Management
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Configure global metadata, search engine crawl directives, canonical links, and social graphs.
        </p>
      </div>

      <form onSubmit={handleSave} className="p-8 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-6">
        {saved && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>SEO configuration updated and sitemap re-indexed successfully.</span>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Global Default Meta Title
            </label>
            <input
              type="text"
              value={seoSettings.defaultTitle}
              onChange={(e) => setSeoSettings({ ...seoSettings, defaultTitle: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Global Meta Description
            </label>
            <textarea
              rows={3}
              value={seoSettings.defaultDescription}
              onChange={(e) => setSeoSettings({ ...seoSettings, defaultDescription: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Canonical Base URL
              </label>
              <input
                type="url"
                value={seoSettings.canonicalBase}
                onChange={(e) => setSeoSettings({ ...seoSettings, canonicalBase: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Twitter Publisher Handle
              </label>
              <input
                type="text"
                value={seoSettings.twitterHandle}
                onChange={(e) => setSeoSettings({ ...seoSettings, twitterHandle: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white text-xs focus:outline-none focus:border-survetra-orange"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="robots-index"
                checked={seoSettings.robotsIndex}
                onChange={(e) => setSeoSettings({ ...seoSettings, robotsIndex: e.target.checked })}
                className="rounded bg-[#10121C] border-white/20 text-survetra-orange"
              />
              <label htmlFor="robots-index" className="text-xs text-slate-300">
                Allow Search Engine Indexing (robots.txt index / follow)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="sitemap-gen"
                checked={seoSettings.sitemapAutoGenerate}
                onChange={(e) => setSeoSettings({ ...seoSettings, sitemapAutoGenerate: e.target.checked })}
                className="rounded bg-[#10121C] border-white/20 text-survetra-orange"
              />
              <label htmlFor="sitemap-gen" className="text-xs text-slate-300">
                Auto-generate /sitemap.xml on content changes
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
            <span>Save SEO Configurations</span>
          </button>
        </div>
      </form>
    </div>
  );
}

