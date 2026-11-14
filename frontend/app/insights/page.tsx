import React from "react";
import Link from "next/link";
import { getArticles } from "@/lib/api";
import { ArrowRight, Clock, Calendar, User, Tag } from "lucide-react";

export const metadata = {
  title: "Insights & Technical Perspectives | Survetra Services",
  description: "Read engineering deep-dives, architectural analyses, and product strategy articles authored by Survetra's architects and technical leadership.",
};

export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <div className="py-16 md:py-24 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            Technical Perspectives & Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Perspectives on software architecture, scale, and AI.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Written by the engineers, architects, and product leads who build and operate Survetra's production systems.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-[#161926] border border-white/[0.08] hover:border-survetra-orange/40 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-survetra-orange uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-display font-bold text-white group-hover:text-survetra-orange transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] text-slate-400 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <div>
                  <span className="font-medium text-white">{article.authorName}</span>
                  <div className="text-[10px] text-slate-500">{article.authorRole}</div>
                </div>
                <span className="text-survetra-orange group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

