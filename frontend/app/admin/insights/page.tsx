"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ARTICLES_DATA, Article } from "@/lib/data";
import { FileText, Plus, Edit3, Trash2, Eye } from "lucide-react";

export default function AdminInsightsPage() {
  const [articles, setArticles] = useState<Article[]>(ARTICLES_DATA);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Technical Insights & Editorial Content ({articles.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Publish engineering articles, thought leadership, and architectural deep-dives.
          </p>
        </div>

        <button
          onClick={() => {
            const title = prompt("Enter article headline:");
            if (title) {
              const newArt: Article = {
                id: `art-${Date.now()}`,
                slug: title.toLowerCase().replace(/\s+/g, "-"),
                title,
                excerpt: "New technical publication summary...",
                category: "Engineering",
                readTime: "5 min read",
                publishedDate: "November 2026",
                authorName: "Survetra Architecture Group",
                authorRole: "Systems Engineering",
                tags: ["Architecture", "Engineering"],
                content: "Detailed technical article content...",
              };
              setArticles([newArt, ...articles]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Write Insight</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Article Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {articles.map((art) => (
                <tr key={art.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white max-w-sm truncate">
                    <div>{art.title}</div>
                    <div className="text-[10px] text-slate-500 font-mono">/{art.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-survetra-orange-light">{art.category}</td>
                  <td className="px-6 py-4 text-slate-300">{art.authorName}</td>
                  <td className="px-6 py-4 text-slate-400 font-mono">{art.publishedDate}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/insights/${art.slug}`}
                      target="_blank"
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        const newTitle = prompt("Update title:", art.title);
                        if (newTitle) {
                          setArticles((prev) =>
                            prev.map((item) => (item.id === art.id ? { ...item, title: newTitle } : item))
                          );
                        }
                      }}
                      className="inline-flex p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete article ${art.title}?`)) {
                          setArticles(articles.filter((item) => item.id !== art.id));
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

