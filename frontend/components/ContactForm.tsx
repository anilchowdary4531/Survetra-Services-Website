"use client";

import React, { useState } from "react";
import { submitContactEnquiry } from "@/lib/api";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    phone: "",
    company: "",
    category: "GENERAL",
    subject: "",
    message: "",
    consentGiven: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!formData.businessEmail.includes("@")) {
      setError("Please provide a valid business email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setError("Please provide a brief subject.");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please include your message or inquiry details.");
      return;
    }
    if (!formData.consentGiven) {
      setError("Please accept the privacy consent before submitting.");
      return;
    }

    setLoading(true);
    try {
      const res = await submitContactEnquiry({
        fullName: formData.fullName,
        businessEmail: formData.businessEmail,
        phone: formData.phone,
        company: formData.company,
        category: formData.category,
        subject: formData.subject,
        message: formData.message,
      });

      if (res && res.success) {
        setSuccess(true);
      } else {
        setError("Unable to transmit message. Please try again or email us directly at contact@survetra.com.");
      }
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">
          Message Received
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Survetra Services. Your inquiry has been routed to our practice team, and a representative will follow up with you within one business day.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                fullName: "",
                businessEmail: "",
                phone: "",
                company: "",
                category: "GENERAL",
                subject: "",
                message: "",
                consentGiven: false,
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Vikramaditya Sharma"
            className="w-full px-4 py-3 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Business Email *
          </label>
          <input
            type="email"
            required
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="e.g. v.sharma@enterprise.com"
            className="w-full px-4 py-3 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Phone / Contact Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 (80) 0000-0000"
            className="w-full px-4 py-3 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Global Tech Partners Ltd"
            className="w-full px-4 py-3 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Inquiry Category *
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#10121C] border border-white/10 text-white text-sm focus:outline-none focus:border-survetra-orange transition-colors"
          >
            <option value="GENERAL">General Enterprise Inquiry</option>
            <option value="SALES">Software Engineering & Studios</option>
            <option value="PRODUCT_INQUIRY">Tiffzy / SocialSea Product Licensing</option>
            <option value="PARTNERSHIP">Strategic Partnership / Alliance</option>
            <option value="CAREERS">Careers & Recruitment</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Inquiring about Tiffzy Enterprise Rollout"
            className="w-full px-4 py-3 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
          Project Details & Message *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your requirements, timeline, and architectural objectives..."
          className="w-full px-4 py-3 rounded-xl bg-[#10121C] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-survetra-orange transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="contact-consent"
          checked={formData.consentGiven}
          onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
          className="mt-1 rounded bg-[#10121C] border-white/20 text-survetra-orange focus:ring-0"
        />
        <label htmlFor="contact-consent" className="text-xs text-slate-400 leading-tight">
          I consent to Survetra Services collecting and processing my contact details to respond to this business inquiry according to the Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-survetra-orange to-[#F59E0B] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Business Inquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

