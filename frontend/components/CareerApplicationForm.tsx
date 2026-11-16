"use client";

import React, { useState } from "react";
import { submitJobApplication } from "@/lib/api";
import { CheckCircle2, AlertCircle, Loader2, UploadCloud } from "lucide-react";

interface CareerApplicationFormProps {
  jobId: string;
  positionTitle: string;
}

export default function CareerApplicationForm({
  jobId,
  positionTitle,
}: CareerApplicationFormProps) {
  const [formData, setFormData] = useState({
    applicantName: "",
    email: "",
    phone: "",
    positionApplied: positionTitle,
    resumeUrl: "",
    coverLetter: "",
    consentGiven: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.applicantName.trim()) {
      setError("Please provide your full legal name.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please provide a contact phone number.");
      return;
    }
    if (!formData.consentGiven) {
      setError("Please accept the privacy consent to submit your application.");
      return;
    }

    setLoading(true);
    try {
      const res = await submitJobApplication({
        jobOpeningId: jobId,
        applicantName: formData.applicantName,
        email: formData.email,
        phone: formData.phone,
        positionApplied: positionTitle,
        resumeUrl: formData.resumeUrl || "https://survetra.com/resumes/applicant_cv.pdf",
        coverLetter: formData.coverLetter,
      });

      if (res && res.success) {
        setSuccess(true);
      } else {
        setError("Unable to submit at this time. Please try again or email us directly at sureshbabu@survetra.com.");
      }
    } catch {
      setError("An unexpected network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-bold text-white">Application Received</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Thank you for applying to Survetra Services for the <strong>{positionTitle}</strong> role. Our engineering talent team will review your qualifications and contact you within 3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={formData.applicantName}
          onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
          placeholder="e.g. Aditi Sharma"
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. aditi.sharma@example.com"
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+91 98765 43210"
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Resume / CV Link or File *
        </label>
        <div className="relative">
          <input
            type="text"
            value={formData.resumeUrl}
            onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
            placeholder="Google Drive, Dropbox, or LinkedIn PDF URL"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">
          Cover Letter / Introduction (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.coverLetter}
          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
          placeholder="Briefly tell us why this role fits your career trajectory..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="career-consent"
          checked={formData.consentGiven}
          onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
          className="mt-1 rounded bg-[#10121C] border-white/20 text-survetra-orange focus:ring-0"
        />
        <label htmlFor="career-consent" className="text-[11px] text-slate-400 leading-tight">
          I consent to Survetra Services storing and processing my personal application information for recruitment purposes in accordance with the Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl font-bold text-sm text-white bg-survetra-orange hover:bg-survetra-orange-hover active:scale-[0.99] disabled:opacity-50 transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <span>Submit Application</span>
        )}
      </button>
    </form>
  );
}

