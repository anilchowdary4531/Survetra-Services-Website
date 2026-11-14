import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobOpenings, getJobOpeningBySlug } from "@/lib/api";
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Laptop, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import CareerApplicationForm from "@/components/CareerApplicationForm";

interface JobPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const jobs = await getJobOpenings();
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: JobPageProps) {
  const job = await getJobOpeningBySlug(params.slug);
  if (!job) return { title: "Position Not Found" };

  return {
    title: `${job.title} (${job.department}) | Survetra Careers`,
    description: job.overview,
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const job = await getJobOpeningBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24 space-y-16">
      {/* Back Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-survetra-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Open Roles
        </Link>
      </div>

      {/* Role Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-survetra-orange uppercase tracking-wider">
            {job.department}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
            {job.experienceLevel}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          {job.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 pt-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-survetra-orange" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-survetra-orange" />
            <span>{job.employmentType}</span>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light pt-2">
          {job.overview}
        </p>
      </section>

      {/* Content & Application Form Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Responsibilities, Requirements & Benefits */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-white tracking-tight">
                Key Responsibilities
              </h2>
              <div className="space-y-2.5">
                {job.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-survetra-orange flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-white tracking-tight">
                Qualifications & Background
              </h2>
              <div className="space-y-2.5">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-survetra-violet flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-white tracking-tight">
                What We Offer
              </h2>
              <div className="space-y-2.5">
                {job.benefits.map((ben, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-[#161926] border border-white/[0.08] shadow-2xl">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Apply for this Position
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Submit your credentials directly to our engineering recruiting team.
              </p>
              <CareerApplicationForm
                jobId={job.id}
                positionTitle={job.title}
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

