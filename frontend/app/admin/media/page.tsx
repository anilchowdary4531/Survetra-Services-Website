"use client";

import React, { useState } from "react";
import { Image, UploadCloud, Copy, Trash2, CheckCircle2, FileText } from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  uploadedAt: string;
}

export default function AdminMediaPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [assets, setAssets] = useState<MediaItem[]>([
    {
      id: "med-1",
      name: "tiffzy-dashboard-hero.png",
      type: "image/png",
      size: "420 KB",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      uploadedAt: "Nov 12, 2026",
    },
    {
      id: "med-2",
      name: "socialsea-feed-preview.png",
      type: "image/png",
      size: "380 KB",
      url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
      uploadedAt: "Nov 10, 2026",
    },
    {
      id: "med-3",
      name: "survetra-brand-mark.svg",
      type: "image/svg+xml",
      size: "14 KB",
      url: "/logo.png",
      uploadedAt: "Nov 01, 2026",
    },
  ]);

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Media Asset Library ({assets.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage CDN assets, product screenshots, diagrams, and corporate documents.
          </p>
        </div>

        <button
          onClick={() => {
            const name = prompt("Enter asset file name (e.g. diagram.png):");
            if (name) {
              const newAsset: MediaItem = {
                id: `med-${Date.now()}`,
                name,
                type: "image/png",
                size: "250 KB",
                url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
                uploadedAt: "Just now",
              };
              setAssets([newAsset, ...assets]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <UploadCloud className="w-4 h-4" />
          <span>Upload Media Asset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="p-4 rounded-2xl bg-[#161926] border border-white/[0.08] space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-full h-40 rounded-xl overflow-hidden bg-slate-900 border border-white/5 relative group">
                <img
                  src={asset.url}
                  alt={asset.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white truncate" title={asset.name}>
                  {asset.name}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span>{asset.size}</span>
                  <span className="font-mono">{asset.uploadedAt}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
              <button
                onClick={() => copyUrl(asset.id, asset.url)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs text-slate-300 hover:text-white transition-colors"
              >
                {copiedId === asset.id ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  if (confirm(`Delete ${asset.name}?`)) {
                    setAssets(assets.filter((a) => a.id !== asset.id));
                  }
                }}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                title="Delete asset"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

