"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS_DATA, Product } from "@/lib/data";
import { 
  Package, 
  Plus, 
  ExternalLink, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  Eye
} from "lucide-react";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const toggleStatus = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const nextStatus = p.status === "Production" ? "Beta" : p.status === "Beta" ? "In Development" : "Production";
          return { ...p, status: nextStatus };
        }
        return p;
      })
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Product Portfolio Management
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure, manage features, and control publication status for Tiffzy, SocialSea, and future initiatives.
          </p>
        </div>

        <button
          onClick={() => {
            const newProd: Product = {
              id: `prod-${Date.now()}`,
              slug: `new-product-${Date.now()}`,
              name: "New Software Platform",
              tagline: "High-performance enterprise software solution",
              category: "Enterprise Cloud",
              shortDescription: "Enter product summary here...",
              fullDescription: "Detailed engineering and architecture description...",
              status: "In Development",
              badge: "Draft",
              features: [
                { title: "Core Engine", description: "High-concurrency processing fabric" }
              ],
              techStack: ["Java 17", "Spring Boot", "PostgreSQL", "Next.js"]
            };
            setProducts([newProd, ...products]);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Products Table */}
      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Tech Stack</th>
                <th className="px-6 py-4">Features</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-survetra-orange font-bold">
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <div>{p.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">/{p.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{p.category}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(p.id)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                        p.status === "Production"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : p.status === "Beta"
                          ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}
                      title="Click to cycle status"
                    >
                      {p.status}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {p.techStack.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[10px] text-slate-400 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-mono">
                    {p.features.length} Modules
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/products/${p.slug}`}
                      target="_blank"
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
                      title="View live product page"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        const newName = prompt("Enter updated product name:", p.name);
                        if (newName && newName.trim()) {
                          setProducts((prev) =>
                            prev.map((item) => (item.id === p.id ? { ...item, name: newName } : item))
                          );
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
                      title="Quick edit product"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to remove ${p.name}?`)) {
                          setProducts(products.filter((item) => item.id !== p.id));
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                      title="Delete product"
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

