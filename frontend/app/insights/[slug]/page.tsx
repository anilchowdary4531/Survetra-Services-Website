import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles, getArticleBySlug } from "@/lib/api";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  CheckCircle2 
} from "lucide-react";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Survetra Insights`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 space-y-16">
      {/* Back Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-survetra-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Insights
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-400">
            {article.publishedDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
          {article.excerpt}
        </p>

        {/* Author Card */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-survetra-orange font-bold text-sm">
              {article.authorName.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {article.authorName}
              </div>
              <div className="text-xs text-slate-400">
                {article.authorRole}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161926] border border-white/[0.08] space-y-6 text-slate-300 leading-relaxed">
          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base">
            {article.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-xl sm:text-2xl font-display font-bold text-white pt-4 pb-1 border-b border-white/5"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n- ");
                return (
                  <ul key={idx} className="space-y-2 pl-4 list-disc marker:text-survetra-orange">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {item.replace(/^- /, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\.\s/)) {
                const items = paragraph.split(/\n\d+\.\s/);
                return (
                  <ol key={idx} className="space-y-2 pl-4 list-decimal marker:text-survetra-violet">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {item.replace(/^\d+\.\s/, "")}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              Filed under:
            </span>
            {article.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-slate-300 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

