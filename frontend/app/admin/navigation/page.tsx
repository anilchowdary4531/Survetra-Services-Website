"use client";

import React, { useState } from "react";
import { Compass, Plus, ArrowUpDown, Trash2, Edit3, CheckCircle2 } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  url: string;
  order: number;
  location: "Header" | "Footer" | "Both";
  visible: boolean;
}

export default function AdminNavigationPage() {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { id: "nav-1", label: "About", url: "/about", order: 1, location: "Both", visible: true },
    { id: "nav-2", label: "Services", url: "/services", order: 2, location: "Both", visible: true },
    { id: "nav-3", label: "Industries", url: "/industries", order: 3, location: "Both", visible: true },
    { id: "nav-4", label: "Products", url: "/products", order: 4, location: "Both", visible: true },
    { id: "nav-5", label: "Case Studies", url: "/case-studies", order: 5, location: "Both", visible: true },
    { id: "nav-6", label: "Insights", url: "/insights", order: 6, location: "Both", visible: true },
    { id: "nav-7", label: "Careers", url: "/careers", order: 7, location: "Both", visible: true },
  ]);

  const toggleVisibility = (id: string) => {
    setNavItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, visible: !item.visible } : item))
    );
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Navigation Menu Management
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure header and footer links, display hierarchy, and external targets.
          </p>
        </div>

        <button
          onClick={() => {
            const label = prompt("Enter menu label (e.g. Partners):");
            const url = prompt("Enter menu target URL (e.g. /partners):");
            if (label && url) {
              const newItem: NavItem = {
                id: `nav-${Date.now()}`,
                label,
                url,
                order: navItems.length + 1,
                location: "Header",
                visible: true,
              };
              setNavItems([...navItems, newItem]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Menu Item</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
            <tr>
              <th className="px-6 py-4">Sort</th>
              <th className="px-6 py-4">Menu Label</th>
              <th className="px-6 py-4">Target Route</th>
              <th className="px-6 py-4">Menu Placement</th>
              <th className="px-6 py-4">Visibility</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06] text-slate-300">
            {navItems.map((item) => (
              <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-mono text-slate-500">#{item.order}</td>
                <td className="px-6 py-4 font-semibold text-white">{item.label}</td>
                <td className="px-6 py-4 font-mono text-slate-400">{item.url}</td>
                <td className="px-6 py-4 text-slate-400">{item.location}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleVisibility(item.id)}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                      item.visible
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {item.visible ? "Visible" : "Hidden"}
                  </button>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => {
                      if (confirm(`Remove navigation item ${item.label}?`)) {
                        setNavItems(navItems.filter((i) => i.id !== item.id));
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
  );
}

